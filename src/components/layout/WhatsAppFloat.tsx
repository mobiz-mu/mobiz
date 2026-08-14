"use client";

import { usePathname } from "next/navigation";
import { WhatsAppIcon } from "@/components/ui/icons";
import { whatsappUrl } from "@/lib/site";
import { serviceDivisions } from "@/lib/navigation";

/**
 * Derive a prefilled message from the current route.
 *
 * The enquiry should arrive already framed — "I'm looking at your accounting
 * page" is far more useful to answer than an anonymous "Hello".
 */
function messageForPath(pathname: string): string {
  const division = serviceDivisions.find((d) => pathname.startsWith(d.href));
  if (division) {
    return `Hello Mobiz, I would like to know more about ${division.label}.`;
  }

  if (pathname.startsWith("/monthly-packages")) {
    return "Hello Mobiz, I would like to know more about your monthly website packages.";
  }
  if (pathname.startsWith("/portfolio")) {
    return "Hello Mobiz, I saw your portfolio and would like to discuss a project.";
  }
  if (pathname.startsWith("/blog")) {
    return "Hello Mobiz, I was reading your blog and would like to discuss my business.";
  }
  if (pathname.endsWith("-mauritius")) {
    // SEO landing pages: reuse the slug so the topic carries into the chat.
    const topic = pathname
      .replace(/^\//, "")
      .replace(/-mauritius$/, "")
      .replace(/-/g, " ");
    return `Hello Mobiz, I am interested in ${topic} in Mauritius.`;
  }

  return "Hello Mobiz, I would like to discuss my business needs.";
}

/**
 * Floating WhatsApp action.
 *
 * Sits above the iOS home indicator via `env(safe-area-inset-*)` and clears the
 * monthly-packages sticky CTA by sharing the same corner stack. It is a plain
 * anchor, so it is keyboard reachable and announces its destination and number.
 */
export function WhatsAppFloat() {
  const pathname = usePathname() ?? "/";

  return (
    <a
      href={whatsappUrl(messageForPath(pathname))}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Mobiz on WhatsApp — +230 5506 8119 (opens in a new tab)"
      className="fixed z-40 flex size-14 items-center justify-center rounded-full bg-[color:var(--color-whatsapp)] shadow-[0_4px_24px_rgba(37,211,102,0.38)] transition-transform duration-200 hover:scale-110 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--color-whatsapp)]"
      style={{
        right: "max(1.25rem, env(safe-area-inset-right))",
        bottom: "max(1.25rem, env(safe-area-inset-bottom))",
      }}
    >
      <WhatsAppIcon size={26} className="text-white" />
    </a>
  );
}

export default WhatsAppFloat;
