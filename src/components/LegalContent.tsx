"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

export function LegalContent({ variant }: { variant: "privacy" | "terms" }) {
  const { t } = useLanguage();
  const title = variant === "privacy" ? t.legal.privacyTitle : t.legal.termsTitle;
  const body = variant === "privacy" ? t.legal.privacyBody : t.legal.termsBody;

  return (
    <div className="mx-auto max-w-2xl px-5 py-20 sm:px-8">
      <Link href="/" className="text-sm text-accent-blue hover:underline">
        ← {t.nav.home}
      </Link>
      <h1 className="mt-6 font-heading text-3xl font-semibold text-ink">{title}</h1>
      <p className="mt-4 rounded-lg border border-border bg-accent-blue-soft/60 px-4 py-3 text-sm text-ink-muted">
        {t.legal.reviewNotice}
      </p>
      <div className="mt-8 flex flex-col gap-4">
        {body.map((paragraph, i) => (
          <p key={i} className="text-sm leading-relaxed text-ink-muted">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
}
