import { getTld } from "./normalize";

type IanaBootstrapEntry = [string[], string[]];

type IanaBootstrapResponse = {
  services: IanaBootstrapEntry[];
};

export type DomainCheckResult = {
  domain: string;
  tld: string;
  status: "registered" | "available" | "unknown" | "unsupported";
  registrar?: string | null;
  registrationDate?: string | null;
  expirationDate?: string | null;
  rdapUrl?: string | null;
  rawStatus?: string[] | null;
  error?: string | null;
};

const IANA_RDAP_BOOTSTRAP_URL = "https://data.iana.org/rdap/dns.json";

function extractEventDate(
  events: Array<{ eventAction?: string; eventDate?: string }> | undefined,
  action: string
): string | null {
  if (!events) return null;
  const match = events.find((e) => e.eventAction === action);
  return match?.eventDate ?? null;
}

function extractRegistrarName(entities: any[] | undefined): string | null {
  if (!entities) return null;

  for (const entity of entities) {
    const roles: string[] = entity?.roles ?? [];
    if (roles.includes("registrar")) {
      const vcardArray = entity?.vcardArray;
      if (Array.isArray(vcardArray) && Array.isArray(vcardArray[1])) {
        for (const row of vcardArray[1]) {
          if (Array.isArray(row) && row[0] === "fn") {
            return row[3] ?? null;
          }
        }
      }
      return entity?.handle ?? null;
    }
  }

  return null;
}

async function getRdapBaseForTld(tld: string): Promise<string | null> {
  const res = await fetch(IANA_RDAP_BOOTSTRAP_URL, {
    headers: { accept: "application/json" },
    next: { revalidate: 86400 },
  });

  if (!res.ok) {
    throw new Error(`Failed to load IANA RDAP bootstrap: ${res.status}`);
  }

  const data = (await res.json()) as IanaBootstrapResponse;

  for (const [tlds, urls] of data.services) {
    if (tlds.includes(tld) && urls.length > 0) {
      return urls[0];
    }
  }

  return null;
}

export async function checkDomainRdap(domain: string): Promise<DomainCheckResult> {
  const tld = getTld(domain);

  if (!tld) {
    return {
      domain,
      tld: "",
      status: "unknown",
      error: "Missing TLD",
    };
  }

  const rdapBase = await getRdapBaseForTld(tld);

  if (!rdapBase) {
    return {
      domain,
      tld,
      status: "unsupported",
      rdapUrl: null,
      error: `No RDAP server found for .${tld}`,
    };
  }

  const rdapUrl = `${rdapBase.replace(/\/$/, "")}/domain/${encodeURIComponent(domain)}`;

  const res = await fetch(rdapUrl, {
    headers: { accept: "application/rdap+json, application/json" },
    cache: "no-store",
  });

  if (res.status === 404) {
    return {
      domain,
      tld,
      status: "available",
      rdapUrl,
      registrar: null,
      registrationDate: null,
      expirationDate: null,
      rawStatus: null,
      error: null,
    };
  }

  if (!res.ok) {
    return {
      domain,
      tld,
      status: "unknown",
      rdapUrl,
      error: `RDAP lookup failed: ${res.status}`,
    };
  }

  const data = await res.json();

  return {
    domain,
    tld,
    status: "registered",
    rdapUrl,
    registrar: extractRegistrarName(data.entities),
    registrationDate: extractEventDate(data.events, "registration"),
    expirationDate: extractEventDate(data.events, "expiration"),
    rawStatus: Array.isArray(data.status) ? data.status : null,
    error: null,
  };
}