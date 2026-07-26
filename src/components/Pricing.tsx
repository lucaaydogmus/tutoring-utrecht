"use client";

import { useLanguage } from "@/lib/i18n/LanguageProvider";

export function Pricing() {
  const { t } = useLanguage();

  return (
    <section id="tarieven" className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <h2 className="fade-in-section font-heading text-3xl font-semibold text-ink sm:text-4xl">
        {t.pricing.title}
      </h2>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {t.pricing.cards.map((card) => (
          <div
            key={card.title}
            className={`fade-in-section relative flex flex-col rounded-2xl border bg-surface p-7 ${
              card.label ? "border-accent-blue shadow-[0_20px_45px_-28px_rgba(23,35,60,0.4)]" : "border-border"
            }`}
          >
            {card.label && (
              <span className="absolute -top-3 left-7 rounded-full bg-accent-blue px-3 py-1 text-xs font-medium text-white">
                {card.label}
              </span>
            )}
            <h3 className="font-heading text-xl font-semibold text-ink">{card.title}</h3>
            <p className="mt-2 font-heading text-2xl font-semibold text-accent-blue">{card.price}</p>
            <ul className="mt-5 flex flex-1 flex-col gap-2">
              {card.points.map((point) => (
                <li key={point} className="flex items-start gap-2 text-sm text-ink-muted">
                  <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-accent-sage" />
                  {point}
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="mt-6 rounded-full border border-accent-blue px-5 py-2.5 text-center text-sm font-medium text-accent-blue transition-colors hover:bg-accent-blue hover:text-white"
            >
              {card.button}
            </a>
          </div>
        ))}
      </div>

      <p className="mt-8 max-w-2xl text-sm text-ink-muted">{t.pricing.footnote}</p>
    </section>
  );
}
