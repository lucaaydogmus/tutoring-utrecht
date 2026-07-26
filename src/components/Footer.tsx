"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { siteConfig } from "@/lib/site-config";

const navHrefs = [
  { href: "#home", key: "home" },
  { href: "#voor-wie", key: "forWhom" },
  { href: "#vakken", key: "subjects" },
  { href: "#werkwijze", key: "howItWorks" },
  { href: "#tarieven", key: "pricing" },
  { href: "#over-luca", key: "about" },
  { href: "#contact", key: "contact" },
] as const;

export function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-3">
        <div>
          <p className="font-heading text-lg font-semibold text-ink">{siteConfig.businessName}</p>
          <p className="mt-2 text-sm text-ink-muted">{t.footer.tagline}</p>
          <p className="mt-4 text-sm text-ink-muted">{siteConfig.phoneDisplay}</p>
          <p className="text-sm text-ink-muted">{siteConfig.email}</p>
        </div>

        <div>
          <p className="text-sm font-semibold text-ink">{t.footer.navTitle}</p>
          <ul className="mt-3 flex flex-col gap-2">
            {navHrefs.map((n) => (
              <li key={n.key}>
                <a href={n.href} className="text-sm text-ink-muted hover:text-ink">
                  {t.nav[n.key]}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-ink">{t.footer.legalTitle}</p>
          <ul className="mt-3 flex flex-col gap-2">
            <li>
              <Link href="/privacybeleid" className="text-sm text-ink-muted hover:text-ink">
                {t.footer.privacy}
              </Link>
            </li>
            <li>
              <Link href="/algemene-voorwaarden" className="text-sm text-ink-muted hover:text-ink">
                {t.footer.terms}
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border px-5 py-6 text-center text-xs text-ink-muted sm:px-8">
        {t.footer.copyright(year)}
      </div>
    </footer>
  );
}
