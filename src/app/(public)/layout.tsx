import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";
import { AIAssistantLauncher } from "@/components/ai/AIAssistantLauncher";
import { RevealObserver } from "@/components/motion/RevealObserver";
import { isAiEnabled } from "@/lib/ai/config";

/**
 * Shell for every public route.
 *
 * `isAiEnabled()` is evaluated here on the server, so the presence or absence of
 * the provider key is decided before anything reaches the browser — the key
 * itself never crosses the boundary, and with no key the launcher is simply not
 * rendered.
 */
export default function PublicLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <SiteHeader />
      <main id="main-content" className="relative">
        {children}
      </main>
      <SiteFooter />
      {/* Single observer driving every [data-reveal] on the page. */}
      <RevealObserver />
      <WhatsAppFloat />
      <AIAssistantLauncher enabled={isAiEnabled()} />
    </>
  );
}
