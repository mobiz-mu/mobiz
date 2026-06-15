import type { Metadata } from "next";
import LeadMagnetPage, {
  leadMagnetMetadata,
} from "@/components/lead/LeadMagnetPage";
import { leadMagnets } from "@/lib/leadMagnets";

const magnet = leadMagnets["free-website-review"];

export const metadata: Metadata = leadMagnetMetadata(magnet);

export default function FreeWebsiteReviewPage() {
  return <LeadMagnetPage magnet={magnet} />;
}
