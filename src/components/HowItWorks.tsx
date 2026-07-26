"use client";

import { useLanguage } from "@/lib/i18n/LanguageProvider";

export function HowItWorks() {
  const { t } = useLanguage();

  return (
    <section id="werkwijze" className="bg-accent-blue-soft/40">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <h2 className="fade-in-section font-heading text-3xl font-semibold text-ink sm:text-4xl">
          {t.howItWorks.title}
        </h2>

        <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {t.howItWorks.steps.map((step, i) => (
            <li key={step.title} className="fade-in-section">
              <span className="font-heading text-sm font-semibold text-accent-blue">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 font-heading text-lg font-semibold text-ink">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">{step.text}</p>
            </li>
          ))}
        </ol>

        <p className="mt-10 max-w-2xl text-sm leading-relaxed text-ink-muted">{t.howItWorks.parentNote}</p>

        <div className="fade-in-section mt-14 rounded-2xl border border-border bg-surface p-8 text-center">
          <h3 className="font-heading text-xl font-semibold text-ink">{t.howItWorks.ctaTitle}</h3>
          <a
            href="#contact"
            className="mt-5 inline-block rounded-full bg-accent-blue px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#3a5975]"
          >
            {t.howItWorks.ctaButton}
          </a>
          <p className="mt-3 text-xs text-ink-muted">{t.howItWorks.ctaNote}</p>
        </div>
      </div>
    </section>
  );
}
