import type { Metadata } from "next";
import LeadMagnetPage, {
  leadMagnetMetadata,
} from "@/components/lead/LeadMagnetPage";
import { leadMagnets } from "@/lib/leadMagnets";

const magnet = leadMagnets["free-business-consultation"];

export const metadata: Metadata = leadMagnetMetadata(magnet);

export default function FreeBusinessConsultationPage() {
  return <LeadMagnetPage magnet={magnet} />;
}
