import type { Metadata } from "next";
import LeadMagnetPage, {
  leadMagnetMetadata,
} from "@/components/lead/LeadMagnetPage";
import { leadMagnets } from "@/lib/leadMagnets";

const magnet = leadMagnets["free-seo-audit"];

export const metadata: Metadata = leadMagnetMetadata(magnet);

export default function FreeSeoAuditPage() {
  return <LeadMagnetPage magnet={magnet} />;
}
