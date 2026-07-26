"use client";

import { useLanguage } from "@/lib/i18n/LanguageProvider";

export function ForWhom() {
  const { t } = useLanguage();

  return (
    <section id="voor-wie" className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <div className="fade-in-section max-w-2xl">
        <h2 className="font-heading text-3xl font-semibold text-ink sm:text-4xl">{t.forWhom.title}</h2>
        <p className="mt-4 text-base leading-relaxed text-ink-muted">{t.forWhom.intro}</p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {t.forWhom.cards.map((card) => (
          <div
            key={card.title}
            className="fade-in-section rounded-2xl border border-border bg-surface p-7 transition-shadow hover:shadow-[0_16px_36px_-24px_rgba(23,35,60,0.35)]"
          >
            <h3 className="font-heading text-xl font-semibold text-ink">{card.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-muted">{card.text}</p>
            <ul className="mt-5 flex flex-col gap-2">
              {card.points.map((point) => (
                <li key={point} className="flex items-start gap-2 text-sm text-ink">
                  <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-accent-sage" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
