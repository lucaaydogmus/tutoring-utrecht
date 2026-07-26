"use client";

import { useId, useState } from "react";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { ChevronDownIcon } from "./icons";

export function FAQ() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="mx-auto max-w-4xl px-5 py-20 sm:px-8">
      <h2 className="fade-in-section font-heading text-3xl font-semibold text-ink sm:text-4xl">
        {t.faq.title}
      </h2>

      <div className="mt-10 flex flex-col divide-y divide-border rounded-2xl border border-border bg-surface">
        {t.faq.items.map((item, i) => (
          <FAQItem
            key={item.q}
            question={item.q}
            answer={item.a}
            isOpen={openIndex === i}
            onToggle={() => setOpenIndex(openIndex === i ? null : i)}
          />
        ))}
      </div>
    </section>
  );
}

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const panelId = useId();

  return (
    <div>
      <h3>
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-controls={panelId}
          className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
        >
          <span className="font-medium text-ink">{question}</span>
          <ChevronDownIcon
            className={`h-5 w-5 flex-none text-accent-blue transition-transform ${isOpen ? "rotate-180" : ""}`}
          />
        </button>
      </h3>
      {isOpen && (
        <div id={panelId} className="px-6 pb-5 text-sm leading-relaxed text-ink-muted">
          {answer}
        </div>
      )}
    </div>
  );
}
