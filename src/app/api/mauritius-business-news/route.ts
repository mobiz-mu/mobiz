import { NextResponse } from "next/server";

export const runtime = "nodejs";

const SIX_DAYS = 60 * 60 * 24 * 6;
const FETCH_TIMEOUT_MS = 2200;

type NewsItem = {
  title: string;
  link: string;
  pubDate: string;
  source: string;
  image: string;
};

const SOURCE_PLACEHOLDERS: Record<string, string> = {
  Defimedia: "/images/mauritiusnews/defimedia.jpg",
  "Défi Info": "/images/mauritiusnews/defimedia.jpg",
  "L'Express": "/images/mauritiusnews/lexpress.jpg",
  "Top FM": "/images/mauritiusnews/topfm.png",
  "Le Mauricien": "/images/mauritiusnews/lemauricien.jpg",
};

const DEFAULT_PLACEHOLDER = "/images/mauritiusnews/defimedia.jpg";

const SOURCES = [
  {
    source: "Defimedia",
    query: "site:defimedia.info Mauritius business economy OR finance OR budget",
  },
  {
    source: "L'Express",
    query: "site:lexpress.mu Maurice economie OR business OR finance",
  },
  {
    source: "Top FM",
    query: "site:topfm.mu Maurice economie OR business OR finance",
  },
  {
    source: "Le Mauricien",
    query: "site:lemauricien.com Maurice economie OR business OR finance",
  },
];

const FALLBACK_ITEMS: NewsItem[] = [
  {
    title: "Mauritius market updates and business headlines from trusted local media",
    link: "https://defimedia.info",
    pubDate: new Date().toISOString(),
    source: "Defimedia",
    image: SOURCE_PLACEHOLDERS["Defimedia"],
  },
  {
    title: "Economic and finance stories relevant to businesses in Mauritius",
    link: "https://lexpress.mu",
    pubDate: new Date().toISOString(),
    source: "L'Express",
    image: SOURCE_PLACEHOLDERS["L'Express"],
  },
  {
    title: "Local business coverage and market developments across Mauritius",
    link: "https://topfm.mu",
    pubDate: new Date().toISOString(),
    source: "Top FM",
    image: SOURCE_PLACEHOLDERS["Top FM"],
  },
  {
    title: "Mauritius business and economic coverage from national publishers",
    link: "https://lemauricien.com",
    pubDate: new Date().toISOString(),
    source: "Le Mauricien",
    image: SOURCE_PLACEHOLDERS["Le Mauricien"],
  },
];

function buildGoogleNewsRssUrl(query: string) {
  const q = encodeURIComponent(query);
  return `https://news.google.com/rss/search?q=${q}&hl=fr&gl=MU&ceid=MU:fr`;
}

function decodeXml(value: string) {
  return value
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
}

function stripHtml(value: string) {
  return decodeXml(value).replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
}

function firstMatch(block: string, regex: RegExp) {
  const match = block.match(regex);
  return match?.[1]?.trim() ?? "";
}

function getAllMatches(block: string, regex: RegExp) {
  return Array.from(block.matchAll(regex))
    .map((m) => m[1]?.trim())
    .filter(Boolean) as string[];
}

function normalizeUrl(url: string) {
  const decoded = decodeXml(url).trim();
  if (!decoded) return "";
  try {
    return new URL(decoded).toString();
  } catch {
    return "";
  }
}

function isValidImageUrl(url: string) {
  if (!url) return false;
  if (url.startsWith("/images/")) return true;

  try {
    const parsed = new URL(url);
    if (!["http:", "https:"].includes(parsed.protocol)) return false;

    const path = parsed.pathname.toLowerCase();

    return (
      path.endsWith(".jpg") ||
      path.endsWith(".jpeg") ||
      path.endsWith(".png") ||
      path.endsWith(".webp") ||
      path.endsWith(".gif") ||
      path.endsWith(".avif") ||
      parsed.hostname.includes("googleusercontent.com") ||
      parsed.hostname.includes("gstatic.com") ||
      parsed.hostname.includes("cdn") ||
      parsed.hostname.includes("img") ||
      parsed.hostname.includes("image") ||
      parsed.hostname.includes("media")
    );
  } catch {
    return false;
  }
}

async function fetchWithTimeout(url: string, init?: RequestInit) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);

  try {
    return await fetch(url, {
      ...init,
      signal: controller.signal,
    });
  } finally {
    clearTimeout(timeout);
  }
}

function getPlaceholderForSource(source: string) {
  return SOURCE_PLACEHOLDERS[source] || DEFAULT_PLACEHOLDER;
}

function extractFastImage(block: string, source: string) {
  const description = firstMatch(block, /<description>([\s\S]*?)<\/description>/i);
  const contentEncoded = firstMatch(block, /<content:encoded>([\s\S]*?)<\/content:encoded>/i);

  const rawCandidates = [
    firstMatch(block, /<media:content[^>]+url="([^"]+)"/i),
    firstMatch(block, /<media:thumbnail[^>]+url="([^"]+)"/i),
    firstMatch(block, /<enclosure[^>]+url="([^"]+)"/i),
    ...getAllMatches(description, /<img[^>]+src="([^"]+)"/gi),
    ...getAllMatches(contentEncoded, /<img[^>]+src="([^"]+)"/gi),
  ];

  const cleaned = rawCandidates.map(normalizeUrl).filter(isValidImageUrl);
  return cleaned[0] || getPlaceholderForSource(source);
}

function parseItems(xml: string, source: string): NewsItem[] {
  const itemBlocks = xml.match(/<item\b[\s\S]*?<\/item>/gi) ?? [];

  return itemBlocks
    .map((block) => {
      const title = stripHtml(firstMatch(block, /<title>([\s\S]*?)<\/title>/i));
      const link = normalizeUrl(firstMatch(block, /<link>([\s\S]*?)<\/link>/i));
      const pubDate = firstMatch(block, /<pubDate>([\s\S]*?)<\/pubDate>/i);
      const image = extractFastImage(block, source);

      return {
        title,
        link,
        pubDate,
        source,
        image,
      };
    })
    .filter((item) => item.title && item.link);
}

async function fetchSource(source: { source: string; query: string }) {
  const url = buildGoogleNewsRssUrl(source.query);

  try {
    const res = await fetchWithTimeout(url, {
      headers: {
        "User-Agent": "MoBiz.mu News Bot/1.0",
        Accept: "application/rss+xml, application/xml, text/xml;q=0.9, */*;q=0.8",
      },
      next: { revalidate: SIX_DAYS },
    });

    if (!res.ok) return [] as NewsItem[];

    const xml = await res.text();
    return parseItems(xml, source.source);
  } catch {
    return [] as NewsItem[];
  }
}

export async function GET() {
  try {
    const settled = await Promise.allSettled(SOURCES.map(fetchSource));

    const allItems: NewsItem[] = [];
    for (const result of settled) {
      if (result.status === "fulfilled") {
        allItems.push(...result.value);
      }
    }

    const deduped = Array.from(
      new Map(
        allItems.map((item) => [`${item.title.toLowerCase()}|${item.link}`, item])
      ).values()
    )
      .sort((a, b) => {
        const aTime = new Date(a.pubDate).getTime() || 0;
        const bTime = new Date(b.pubDate).getTime() || 0;
        return bTime - aTime;
      })
      .slice(0, 12);

    const items = deduped.length > 0 ? deduped : FALLBACK_ITEMS;

    return NextResponse.json(
      {
        ok: true,
        updatedAt: new Date().toISOString(),
        items,
      },
      {
        headers: {
          "Cache-Control": `public, s-maxage=${SIX_DAYS}, stale-while-revalidate=86400`,
        },
      }
    );
  } catch {
    return NextResponse.json(
      {
        ok: true,
        updatedAt: new Date().toISOString(),
        items: FALLBACK_ITEMS,
      },
      {
        headers: {
          "Cache-Control": `public, s-maxage=${SIX_DAYS}, stale-while-revalidate=86400`,
        },
      }
    );
  }
}