"use client";

import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { ChatIcon, CheckMessageIcon, ShieldIcon, SlidersIcon } from "./icons";

const icons = [ChatIcon, ShieldIcon, SlidersIcon, CheckMessageIcon];

export function TrustBar() {
  const { t } = useLanguage();

  return (
    <section className="border-y border-border bg-surface">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-5 py-10 sm:px-8 lg:grid-cols-4">
        {t.trustBar.items.map((item, i) => {
          const Icon = icons[i];
          return (
            <div key={item.title} className="flex items-center gap-3">
              <Icon className="h-6 w-6 flex-none text-accent-blue" />
              <span className="text-sm font-medium text-ink">{item.title}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
