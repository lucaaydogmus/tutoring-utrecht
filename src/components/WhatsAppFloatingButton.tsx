"use client";

import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { siteConfig, whatsappLink } from "@/lib/site-config";
import { WhatsAppIcon } from "./icons";

export function WhatsAppFloatingButton() {
  const { t, locale } = useLanguage();
  const whatsapp = whatsappLink(
    locale === "nl" ? siteConfig.whatsappPrefillNL : siteConfig.whatsappPrefillEN,
  );

  return (
    <a
      href={whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t.contact.whatsappButton}
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-accent-sage text-white shadow-[0_10px_25px_-8px_rgba(23,35,60,0.5)] transition-transform hover:scale-105 lg:hidden"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}
