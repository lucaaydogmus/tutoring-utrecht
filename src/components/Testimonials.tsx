"use client";

import { useLanguage } from "@/lib/i18n/LanguageProvider";

export function Testimonials() {
  const { t } = useLanguage();

  return (
    <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <h2 className="fade-in-section font-heading text-3xl font-semibold text-ink sm:text-4xl">
        {t.testimonials.title}
      </h2>

      <div className="mt-10 grid gap-6 sm:grid-cols-3">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="fade-in-section flex h-32 items-center justify-center rounded-2xl border border-dashed border-border bg-surface p-6 text-center"
          >
            <p className="text-sm text-ink-muted">{t.testimonials.comingSoon}</p>
          </div>
        ))}
      </div>

      <p className="mt-6 text-xs text-ink-muted">{t.testimonials.consentNote}</p>
    </section>
  );
}
