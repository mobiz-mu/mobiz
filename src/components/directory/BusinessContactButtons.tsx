"use client";

import { MessageCircle, Phone } from "lucide-react";
import { TrackEvents, track } from "@/lib/track";

function normalizeWa(num: string): string {
  return num.replace(/[^0-9]/g, "");
}

export default function BusinessContactButtons({
  businessName,
  phone,
  whatsapp,
}: {
  businessName: string;
  phone: string | null;
  whatsapp: string | null;
}) {
  if (!phone && !whatsapp) {
    return (
      <p className="text-sm text-slate-500">
        Contact details not provided yet.
      </p>
    );
  }

  const waText = encodeURIComponent(
    `Hi ${businessName}, I found you on the MoBiz.mu directory.`
  );

  return (
    <div className="flex flex-col gap-3">
      {whatsapp ? (
        <a
          href={`https://wa.me/${normalizeWa(whatsapp)}?text=${waText}`}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() =>
            track(TrackEvents.whatsappClick, {
              context: "directory_profile",
              business: businessName,
            })
          }
          className="inline-flex items-center justify-center gap-2 rounded-full bg-[#071226] px-6 py-3 text-sm font-bold text-[#f3d77a] transition hover:-translate-y-0.5"
        >
          <MessageCircle className="h-4 w-4" />
          WhatsApp
        </a>
      ) : null}

      {phone ? (
        <a
          href={`tel:${normalizeWa(phone)}`}
          onClick={() =>
            track(TrackEvents.phoneClick, {
              context: "directory_profile",
              business: businessName,
            })
          }
          className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-bold text-[#071226] transition hover:border-[#071226]"
        >
          <Phone className="h-4 w-4" />
          Call now
        </a>
      ) : null}
    </div>
  );
}
