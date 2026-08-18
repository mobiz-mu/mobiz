"use client";

import { useEffect, useRef } from "react";

import { COASTLINES, LAND_DOTS } from "@/components/home/globe-geometry";

import "./hero-globe.css";

/**
 * Hero globe — a real orthographic Earth.
 *
 * Geography is genuine Natural Earth 110m, precomputed by
 * scripts/generate-globe-geometry.mjs into longitude/latitude pairs. Nothing is
 * fetched at runtime and no point-in-polygon test runs in the browser, so the
 * globe cannot fail because GitHub is slow, blocked or down, and there is no
 * loading state above the fold.
 *
 * WHY THERE IS NO D3 HERE.
 *
 * An orthographic projection of a rotating sphere is a rotation and a drop of
 * the z axis. Once the points are unit vectors — computed once at mount, never
 * per frame — a frame costs about ten multiply-adds per point and no
 * trigonometry at all. d3-geo would do the same job through a general-purpose
 * projection pipeline for roughly 30KB gzipped of client JavaScript. The maths
 * below is the whole of what that pipeline would give us here, so the globe
 * ships zero bytes of d3.
 *
 * Visibility is the same test the projection implies: a point is on the near
 * hemisphere when its rotated z is positive. That value doubles as the depth
 * cue — dots fade and shrink toward the limb because z falls off there, which is
 * what makes the sphere read as a sphere rather than a disc of dots.
 *
 * The render loop is deliberately conservative: it stops when the hero scrolls
 * away and when the tab is hidden, and it never starts at all under
 * `prefers-reduced-motion`, which instead paints one static frame.
 */

/** Seconds per revolution. */
const SPIN_SECONDS = 58;
/** Fixed tilt, so the poles are not dead-on and the sphere reads three-dimensional. */
const TILT_RAD = (-16 * Math.PI) / 180;
/**
 * Starting longitude, NEGATED. The projection centres the meridian at
 * `-lon0` — rx works out to cos(lat).sin(lng + lon0), which is zero at
 * lng = -lon0 — so -18 puts 18E at the centre: Africa, Europe and the Indian
 * Ocean facing the viewer on first paint. That is the region the business sits
 * in, and it keeps recognisable land clear of the figure's silhouette.
 */
const START_LON = -18;

const DEG = Math.PI / 180;

type Vec = { x: number; y: number; z: number };

/** lng/lat in tenths of a degree -> unit vector. Runs once per page. */
function toVectors(flat: readonly number[]): Vec[] {
  const out: Vec[] = new Array(flat.length / 2);
  for (let i = 0, k = 0; i < flat.length; i += 2, k += 1) {
    const lon = ((flat[i] ?? 0) / 10) * DEG;
    const lat = ((flat[i + 1] ?? 0) / 10) * DEG;
    const c = Math.cos(lat);
    out[k] = { x: c * Math.sin(lon), y: Math.sin(lat), z: c * Math.cos(lon) };
  }
  return out;
}

export function HeroGlobe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const dots = toVectors(LAND_DOTS);
    const lines = COASTLINES.map(toVectors);

    /* Graticule: meridians every 30deg, parallels every 30deg. */
    const graticule: Vec[][] = [];
    for (let lon = -180; lon < 180; lon += 30) {
      const line: Vec[] = [];
      for (let lat = -80; lat <= 80; lat += 4) {
        const c = Math.cos(lat * DEG);
        line.push({ x: c * Math.sin(lon * DEG), y: Math.sin(lat * DEG), z: c * Math.cos(lon * DEG) });
      }
      graticule.push(line);
    }
    for (let lat = -60; lat <= 60; lat += 30) {
      const line: Vec[] = [];
      const c = Math.cos(lat * DEG);
      const y = Math.sin(lat * DEG);
      for (let lon = -180; lon <= 180; lon += 4) {
        line.push({ x: c * Math.sin(lon * DEG), y, z: c * Math.cos(lon * DEG) });
      }
      graticule.push(line);
    }

    let cx = 0;
    let cy = 0;
    let radius = 0;
    let dotSize = 1.6;
    /* Small canvases draw every other dot: same geography, half the fill calls. */
    let dotStride = 1;
    /* Below this the coastline strokes are dropped and the graticule thins out —
       decoration goes before the concept, and the dots still carry the shapes. */
    let lightweight = false;

    /*
     * Dots are bucketed into three depth tiers and drawn one tier at a time.
     * Setting globalAlpha and fillStyle per dot cost a canvas state change per
     * point — measured as the dominant term on a throttled phone. Three tiers
     * means three state changes per frame instead of ~1300.
     */
    const TIERS = 3;
    const tierBuf = [0, 1, 2].map(() => new Float32Array(dots.length * 3));
    const tierLen = new Int32Array(TIERS);

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      if (!rect.width) return false;

      // DPR capped at 2. Beyond that the pixel work multiplies with no visible
      // gain on a sphere made of soft dots.
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(rect.width * dpr);
      canvas.height = Math.round(rect.height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      cx = rect.width / 2;
      cy = rect.height / 2;
      radius = Math.min(rect.width, rect.height) / 2 - 1;
      dotSize = Math.max(1.05, radius * 0.0088);
      dotStride = rect.width < 380 ? 2 : 1;
      lightweight = rect.width < 340;
      return true;
    };

    const sinT = Math.sin(TILT_RAD);
    const cosT = Math.cos(TILT_RAD);

    const draw = (lon0: number) => {
      const rect = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);
      if (!radius) return;

      const s = Math.sin(lon0);
      const c = Math.cos(lon0);

      /* Sphere body — deep wine-black, lit slightly from the upper left. */
      const body = ctx.createRadialGradient(
        cx - radius * 0.32,
        cy - radius * 0.34,
        radius * 0.06,
        cx,
        cy,
        radius,
      );
      body.addColorStop(0, "#1c0a0e");
      body.addColorStop(0.45, "#120608");
      body.addColorStop(0.82, "#090406");
      body.addColorStop(1, "#050505");
      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, Math.PI * 2);
      ctx.fillStyle = body;
      ctx.fill();

      /** Rotate about Y, then tilt about X. Returns null on the far side. */
      const project = (v: Vec) => {
        const rx = v.x * c + v.z * s;
        const rz = -v.x * s + v.z * c;
        const ry = v.y * cosT - rz * sinT;
        const rzz = v.y * sinT + rz * cosT;
        if (rzz <= 0) return null;
        return { sx: cx + rx * radius, sy: cy - ry * radius, d: rzz };
      };

      /* Graticule — very subtle dark red. Thinned out on small canvases. */
      const gratStep = lightweight ? 2 : 1;
      ctx.lineWidth = Math.max(0.5, radius * 0.0022);
      ctx.strokeStyle = "rgba(192, 24, 34, 0.17)";
      for (let gi = 0; gi < graticule.length; gi += gratStep) {
        const line = graticule[gi];
        if (!line) continue;
        ctx.beginPath();
        let pen = false;
        for (const v of line) {
          const p = project(v);
          if (!p) {
            pen = false;
            continue;
          }
          if (pen) ctx.lineTo(p.sx, p.sy);
          else {
            ctx.moveTo(p.sx, p.sy);
            pen = true;
          }
        }
        ctx.stroke();
      }

      /* Coastlines — restrained red, never white. Dropped on small canvases. */
      ctx.lineWidth = Math.max(0.55, radius * 0.0028);
      ctx.strokeStyle = "rgba(226, 52, 64, 0.42)";
      for (const line of lightweight ? [] : lines) {
        ctx.beginPath();
        let pen = false;
        for (const v of line) {
          const p = project(v);
          if (!p) {
            pen = false;
            continue;
          }
          if (pen) ctx.lineTo(p.sx, p.sy);
          else {
            ctx.moveTo(p.sx, p.sy);
            pen = true;
          }
        }
        ctx.stroke();
      }

      /*
       * Halftone land. Depth drives both alpha and size, so the field brightens
       * toward the viewer and falls away at the limb — the same value the
       * visibility test already produced, reused rather than recomputed.
       */
      tierLen[0] = 0;
      tierLen[1] = 0;
      tierLen[2] = 0;

      for (let i = 0; i < dots.length; i += dotStride) {
        const v = dots[i];
        if (!v) continue;
        const p = project(v);
        if (!p) continue;
        const t = p.d;
        const tier = t > 0.72 ? 2 : t > 0.4 ? 1 : 0;
        const buf = tierBuf[tier]!;
        const n = tierLen[tier]!;
        const size = dotSize * (0.55 + t * 0.62);
        buf[n] = p.sx - size / 2;
        buf[n + 1] = p.sy - size / 2;
        buf[n + 2] = size;
        tierLen[tier] = n + 3;
      }

      const TIER_FILL = ["#a51520", "#e2343f", "#ff5a67"];
      const TIER_ALPHA = [0.42, 0.72, 0.95];
      for (let tier = 0; tier < TIERS; tier += 1) {
        const n = tierLen[tier]!;
        if (!n) continue;
        const buf = tierBuf[tier]!;
        ctx.globalAlpha = TIER_ALPHA[tier]!;
        ctx.fillStyle = TIER_FILL[tier]!;
        for (let k = 0; k < n; k += 3) {
          ctx.fillRect(buf[k]!, buf[k + 1]!, buf[k + 2]!, buf[k + 2]!);
        }
      }
      ctx.globalAlpha = 1;

      /* Limb shading and the thin atmospheric rim. */
      const edge = ctx.createRadialGradient(cx, cy, radius * 0.62, cx, cy, radius);
      edge.addColorStop(0, "rgba(0,0,0,0)");
      edge.addColorStop(1, "rgba(0,0,0,0.55)");
      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, Math.PI * 2);
      ctx.fillStyle = edge;
      ctx.fill();

      ctx.beginPath();
      ctx.arc(cx, cy, radius - 0.5, 0, Math.PI * 2);
      ctx.lineWidth = Math.max(1, radius * 0.005);
      ctx.strokeStyle = "rgba(255, 106, 116, 0.5)";
      ctx.stroke();
    };

    /*
     * `resize()` fails while the canvas still measures zero — which is exactly
     * what happens on first layout at mobile widths. Bailing out there left the
     * globe permanently dead: no listeners, no draw, and a canvas stuck at the
     * 300x150 default backing store. A ResizeObserver instead initialises the
     * globe on the first non-zero measurement, whenever that arrives, and keeps
     * the backing store correct across later layout changes.
     */
    let ready = resize();

    // First frame is painted synchronously: an above-the-fold hero must not
    // flash blank while waiting for rAF.
    if (ready) draw(START_LON * DEG);

    if (reduced) {
      const roStatic = new ResizeObserver(() => {
        if (resize()) draw(START_LON * DEG);
      });
      roStatic.observe(canvas);
      return () => roStatic.disconnect();
    }

    let raf = 0;
    let start = 0;
    let onScreen = true;
    let running = false;

    const tick = (now: number) => {
      if (!start) start = now;
      const turns = ((now - start) / 1000 / SPIN_SECONDS) % 1;
      draw(START_LON * DEG + turns * Math.PI * 2);
      raf = requestAnimationFrame(tick);
    };

    const play = () => {
      if (running || !ready) return;
      running = true;
      // Re-base the clock so a pause never produces a jump on resume.
      start = 0;
      raf = requestAnimationFrame(tick);
    };

    const stop = () => {
      running = false;
      if (raf) cancelAnimationFrame(raf);
      raf = 0;
    };

    const sync = () => {
      if (onScreen && document.visibilityState === "visible") play();
      else stop();
    };

    // Stops repainting once the hero is scrolled away, and in background tabs.
    const io = new IntersectionObserver(
      (entries) => {
        onScreen = entries.some((e) => e.isIntersecting);
        sync();
      },
      { threshold: 0 },
    );
    io.observe(canvas);

    document.addEventListener("visibilitychange", sync);

    const ro = new ResizeObserver(() => {
      const ok = resize();
      if (!ok) return;
      if (!ready) {
        // First real measurement: paint immediately, then start.
        ready = true;
        draw(START_LON * DEG);
        sync();
      }
    });
    ro.observe(canvas);

    sync();

    return () => {
      stop();
      ro.disconnect();
      io.disconnect();
      document.removeEventListener("visibilitychange", sync);
    };
  }, []);

  return (
    <div aria-hidden className="hero-globe">
      <span className="hero-globe__halo" />
      <canvas ref={canvasRef} className="hero-globe__canvas" />
    </div>
  );
}

export default HeroGlobe;
