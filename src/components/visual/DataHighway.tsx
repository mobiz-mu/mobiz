import { cn } from "@/lib/utils";

type Depth = "fg" | "mid" | "bg";

type Packet = {
  duration: number;
  delay: number;
  direction: 1 | -1;
  size: number;
  color: string;
};

type Track = {
  x: number;
  color: string;
  width: number;
  dashed: boolean;
  depth: Depth;
  packets: Packet[];
};

/*
 * The Data Highway — a signature Mobiz element.
 *
 * Vertical lanes of digital traffic on the right edge of a composition: red
 * highlighted lanes in front, grey/white tracks receding into depth, packets
 * travelling at different speeds, technical node labels at intersections.
 *
 * Implementation notes that matter:
 *
 *  - Pure SVG + SMIL (`animateTransform`). No JavaScript, no canvas, no
 *    per-frame React work, and it runs entirely off the main thread. This is a
 *    server component — it ships zero JS.
 *  - Blur is applied via a static SVG filter, never animated.
 *  - `density` controls lane and packet count so mobile gets a genuinely
 *    simplified composition rather than the desktop one scaled down.
 */

const RED = "#c01822";

const TRACKS: Track[] = [
  {
    x: 0.08,
    color: RED,
    width: 1.5,
    dashed: false,
    depth: "fg",
    packets: [
      { duration: 3.2, delay: 0, direction: 1, size: 10, color: RED },
      { duration: 4.8, delay: 1.4, direction: 1, size: 6, color: "#ff3344" },
      { duration: 6.1, delay: 3.2, direction: -1, size: 5, color: RED },
    ],
  },
  {
    x: 0.22,
    color: "rgba(255,255,255,0.18)",
    width: 0.5,
    dashed: true,
    depth: "mid",
    packets: [
      { duration: 5.5, delay: 0.8, direction: 1, size: 7, color: "rgba(255,255,255,0.5)" },
      { duration: 7.2, delay: 2.5, direction: 1, size: 4, color: "rgba(255,255,255,0.35)" },
    ],
  },
  {
    x: 0.36,
    color: RED,
    width: 1,
    dashed: true,
    depth: "fg",
    packets: [
      { duration: 4, delay: 1, direction: 1, size: 8, color: "#d42b2b" },
      { duration: 5.8, delay: 3.8, direction: -1, size: 5, color: RED },
    ],
  },
  {
    x: 0.5,
    color: "rgba(255,255,255,0.09)",
    width: 0.5,
    dashed: false,
    depth: "bg",
    packets: [
      { duration: 8.4, delay: 0.3, direction: 1, size: 5, color: "rgba(255,255,255,0.25)" },
      { duration: 9.1, delay: 4.2, direction: 1, size: 3, color: "rgba(255,255,255,0.2)" },
    ],
  },
  {
    x: 0.63,
    color: "rgba(255,255,255,0.12)",
    width: 0.5,
    dashed: true,
    depth: "mid",
    packets: [
      { duration: 6.3, delay: 2.1, direction: 1, size: 6, color: "rgba(255,255,255,0.4)" },
      { duration: 4.5, delay: 0.6, direction: -1, size: 4, color: "rgba(255,255,255,0.3)" },
    ],
  },
  {
    x: 0.78,
    color: RED,
    width: 0.8,
    dashed: false,
    depth: "fg",
    packets: [
      { duration: 3.8, delay: 0.5, direction: 1, size: 9, color: RED },
      { duration: 5.2, delay: 2.8, direction: 1, size: 5, color: "#ff3344" },
      { duration: 7, delay: 1.5, direction: -1, size: 4, color: RED },
    ],
  },
  {
    x: 0.91,
    color: "rgba(255,255,255,0.07)",
    width: 0.4,
    dashed: true,
    depth: "bg",
    packets: [
      { duration: 10.2, delay: 1.8, direction: 1, size: 4, color: "rgba(255,255,255,0.18)" },
    ],
  },
];

const NODES = [
  { trackIdx: 0, y: 0.12, label: "DATA" },
  { trackIdx: 2, y: 0.28, label: "SEO" },
  { trackIdx: 5, y: 0.2, label: "TX" },
  { trackIdx: 0, y: 0.48, label: "AI" },
  { trackIdx: 3, y: 0.38, label: "SYNC" },
  { trackIdx: 5, y: 0.55, label: "WEB" },
  { trackIdx: 2, y: 0.65, label: "LIVE" },
  { trackIdx: 0, y: 0.75, label: "CRM" },
  { trackIdx: 4, y: 0.72, label: "RX" },
];

const BRANCHES = [
  { fromTrack: 0, toTrack: 2, y: 0.33 },
  { fromTrack: 2, toTrack: 5, y: 0.61 },
  { fromTrack: 5, toTrack: 6, y: 0.47 },
];

const VIEW_W = 280;
const VIEW_H = 900;

type DataHighwayProps = {
  opacity?: number;
  /**
   * `full`  — every lane and packet (desktop hero)
   * `calm`  — foreground lanes only, fewer packets (section backgrounds)
   * `trace` — two lanes, no labels (footer, mobile)
   */
  density?: "full" | "calm" | "trace";
  className?: string;
};

export function DataHighway({
  opacity = 1,
  density = "full",
  className,
}: DataHighwayProps) {
  const tracks =
    density === "full"
      ? TRACKS
      : density === "calm"
        ? TRACKS.filter((t) => t.depth !== "bg")
        : TRACKS.filter((t) => t.color === RED);

  const packetLimit = density === "full" ? 3 : density === "calm" ? 2 : 1;
  const showNodes = density === "full";
  const showBranches = density !== "trace";

  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-y-0 right-0 w-[280px] overflow-hidden",
        className,
      )}
      style={{ opacity }}
      aria-hidden
    >
      <svg
        className="absolute inset-0 size-full"
        viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
        preserveAspectRatio="xMaxYMid slice"
        role="presentation"
      >
        <defs>
          <filter id="dh-red-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="dh-mid-blur" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="0.5" />
          </filter>
          <filter id="dh-bg-blur" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="1.5" />
          </filter>
          <linearGradient id="dh-fade-top" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#050505" stopOpacity="1" />
            <stop offset="12%" stopColor="#050505" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="dh-fade-bot" x1="0" y1="0" x2="0" y2="1">
            <stop offset="85%" stopColor="#050505" stopOpacity="0" />
            <stop offset="100%" stopColor="#050505" stopOpacity="1" />
          </linearGradient>
        </defs>

        {/* Lanes, painted back to front so depth reads correctly. */}
        {(["bg", "mid", "fg"] as const).map((depth) =>
          tracks
            .filter((t) => t.depth === depth)
            .map((track) => {
              const x = track.x * VIEW_W;
              const filter =
                depth === "bg"
                  ? "url(#dh-bg-blur)"
                  : depth === "mid"
                    ? "url(#dh-mid-blur)"
                    : track.color === RED
                      ? "url(#dh-red-glow)"
                      : undefined;
              return (
                <line
                  key={`${depth}-${track.x}`}
                  x1={x}
                  y1="0"
                  x2={x}
                  y2={VIEW_H}
                  stroke={track.color}
                  strokeWidth={track.width}
                  strokeDasharray={track.dashed ? "6 10" : undefined}
                  filter={filter}
                />
              );
            }),
        )}

        {showBranches
          ? BRANCHES.map((branch) => {
              const from = TRACKS[branch.fromTrack];
              const to = TRACKS[branch.toTrack];
              if (!from || !to) return null;
              return (
                <line
                  key={`branch-${branch.y}`}
                  x1={from.x * VIEW_W}
                  y1={branch.y * VIEW_H}
                  x2={to.x * VIEW_W}
                  y2={branch.y * VIEW_H}
                  stroke="rgba(192,24,34,0.25)"
                  strokeWidth="0.5"
                  strokeDasharray="3 6"
                />
              );
            })
          : null}

        {/* Travelling packets — SMIL keeps this off the main thread. */}
        {tracks.map((track) =>
          track.packets.slice(0, packetLimit).map((pkt, pi) => {
            const x = track.x * VIEW_W;
            const from = pkt.direction === 1 ? -pkt.size : VIEW_H + 20;
            const to = pkt.direction === 1 ? VIEW_H + pkt.size : -pkt.size;
            return (
              <rect
                key={`pkt-${track.x}-${pi}`}
                className="dh-packet"
                x={x - track.width / 2 - 0.5}
                y={0}
                width={track.width + 1}
                height={pkt.size}
                fill={pkt.color}
                rx="1"
                filter={track.color === RED ? "url(#dh-red-glow)" : undefined}
              >
                <animateTransform
                  attributeName="transform"
                  type="translate"
                  from={`0 ${from}`}
                  to={`0 ${to}`}
                  dur={`${pkt.duration}s`}
                  repeatCount="indefinite"
                  begin={`${pkt.delay}s`}
                />
              </rect>
            );
          }),
        )}

        {showNodes
          ? NODES.map((node) => {
              const track = TRACKS[node.trackIdx];
              if (!track) return null;
              const x = track.x * VIEW_W;
              const y = node.y * VIEW_H;
              const isRed = track.color === RED;
              return (
                <g key={`node-${node.label}-${node.y}`}>
                  <circle
                    cx={x}
                    cy={y}
                    r="3"
                    fill={isRed ? RED : "rgba(255,255,255,0.3)"}
                    filter={isRed ? "url(#dh-red-glow)" : undefined}
                  />
                  <circle
                    cx={x}
                    cy={y}
                    r="5"
                    fill="none"
                    stroke={isRed ? "rgba(192,24,34,0.4)" : "rgba(255,255,255,0.1)"}
                    strokeWidth="0.5"
                  />
                  <text
                    x={x + 8}
                    y={y + 3.5}
                    fill={isRed ? "rgba(192,24,34,0.7)" : "rgba(255,255,255,0.25)"}
                    fontSize="5.5"
                    fontFamily="var(--font-mono), monospace"
                  >
                    {node.label}
                  </text>
                </g>
              );
            })
          : null}

        {/* Fade the lanes into the page at top and bottom. */}
        <rect x="0" y="0" width={VIEW_W} height={VIEW_H} fill="url(#dh-fade-top)" />
        <rect x="0" y="0" width={VIEW_W} height={VIEW_H} fill="url(#dh-fade-bot)" />
      </svg>
    </div>
  );
}

export default DataHighway;
