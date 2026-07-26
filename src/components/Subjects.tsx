"use client";

import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { AtomIcon, BookIcon, FlaskIcon, FunctionIcon, GlobeIcon } from "./icons";

const icons = [BookIcon, FunctionIcon, AtomIcon, FlaskIcon, GlobeIcon];

export function Subjects() {
  const { t } = useLanguage();

  return (
    <section id="vakken" className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <h2 className="fade-in-section font-heading text-3xl font-semibold text-ink sm:text-4xl">
        {t.subjects.title}
      </h2>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
        {t.subjects.cards.map((card, i) => {
          const Icon = icons[i];
          return (
            <div
              key={card.title}
              className="fade-in-section rounded-2xl border border-border bg-surface p-6 transition-shadow hover:shadow-[0_16px_36px_-24px_rgba(23,35,60,0.35)]"
            >
              <Icon className="h-7 w-7 text-accent-blue" />
              <h3 className="mt-4 font-heading text-lg font-semibold text-ink">{card.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">{card.description}</p>
            </div>
          );
        })}
      </div>

      <p className="mt-10 text-center text-sm font-medium text-ink-muted">{t.subjects.footerLine}</p>
    </section>
  );
}
