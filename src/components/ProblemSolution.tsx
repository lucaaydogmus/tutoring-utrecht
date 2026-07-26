"use client";

import { useLanguage } from "@/lib/i18n/LanguageProvider";

export function ProblemSolution() {
  const { t } = useLanguage();

  return (
    <section className="bg-accent-blue-soft/40">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <div className="fade-in-section max-w-2xl">
          <h2 className="font-heading text-3xl font-semibold text-ink sm:text-4xl">
            {t.problemSolution.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-muted">{t.problemSolution.text}</p>
          <p className="mt-3 text-base leading-relaxed text-ink-muted">{t.problemSolution.text2}</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {t.problemSolution.cards.map((card) => (
            <div key={card.title} className="fade-in-section rounded-2xl border border-border bg-surface p-7">
              <h3 className="font-heading text-lg font-semibold text-ink">{card.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
