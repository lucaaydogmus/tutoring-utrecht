"use client";

import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { siteConfig, whatsappLink } from "@/lib/site-config";
import { PortraitFrame } from "./PortraitFrame";

export function Hero() {
  const { t, locale } = useLanguage();
  const whatsapp = whatsappLink(
    locale === "nl" ? siteConfig.whatsappPrefillNL : siteConfig.whatsappPrefillEN,
  );

  return (
    <section id="home" className="mx-auto max-w-6xl px-5 pb-20 pt-14 sm:px-8 sm:pt-20">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="fade-in-section">
          <p className="text-sm font-medium tracking-wide text-accent-blue">{t.hero.label}</p>
          <h1 className="mt-4 font-heading text-4xl font-semibold leading-tight text-ink sm:text-5xl">
            {t.hero.title}
          </h1>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-ink-muted sm:text-lg">
            {t.hero.subtitle}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="rounded-full bg-accent-blue px-6 py-3 text-center text-sm font-medium text-white transition-colors hover:bg-[#3a5975]"
            >
              {t.hero.primaryCta}
            </a>
            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-border bg-surface px-6 py-3 text-center text-sm font-medium text-ink transition-colors hover:bg-accent-blue-soft"
            >
              {t.hero.secondaryCta}
            </a>
          </div>

          <ul className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-x-8 sm:gap-y-3">
            {t.hero.trustPoints.map((point) => (
              <li key={point} className="flex items-start gap-2 text-sm text-ink-muted">
                <span aria-hidden="true" className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-accent-sage" />
                {point}
              </li>
            ))}
          </ul>
        </div>

        <div className="fade-in-section mx-auto w-full max-w-sm lg:max-w-none">
          <PortraitFrame alt={t.hero.photoAlt} priority />
        </div>
      </div>
    </section>
  );
}
