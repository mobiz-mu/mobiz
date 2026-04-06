import { NextRequest } from "next/server";
import { checkDomainRdap } from "@/lib/domains/rdap";
import { isLikelyDomain, normalizeDomain } from "@/lib/domains/normalize";

export const runtime = "nodejs";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const domainParam = searchParams.get("domain") ?? "";

    const domain = normalizeDomain(domainParam);

    if (!domain || !isLikelyDomain(domain)) {
      return Response.json(
        {
          ok: false,
          message: "Please provide a valid full domain, for example: example.com",
        },
        { status: 400 }
      );
    }

    const result = await checkDomainRdap(domain);

    return Response.json({
      ok: true,
      result,
    });
  } catch (error) {
    return Response.json(
      {
        ok: false,
        message:
          error instanceof Error ? error.message : "Unexpected server error",
      },
      { status: 500 }
    );
  }
}