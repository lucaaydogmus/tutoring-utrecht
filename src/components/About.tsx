"use client";

import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { siteConfig } from "@/lib/site-config";
import { LinkedInIcon } from "./icons";
import { PortraitFrame } from "./PortraitFrame";

export function About() {
  const { t } = useLanguage();

  return (
    <section id="over-luca" className="bg-accent-blue-soft/40">
      <div className="mx-auto grid max-w-6xl items-start gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[minmax(0,320px)_1fr] lg:gap-16">
        <div className="fade-in-section mx-auto w-full max-w-xs lg:mx-0">
          <PortraitFrame alt={t.about.photoAlt} decorative={false} />
        </div>

        <div className="fade-in-section">
          <h2 className="font-heading text-3xl font-semibold text-ink sm:text-4xl">{t.about.title}</h2>
          <div className="mt-5 flex flex-col gap-4">
            {t.about.paragraphs.map((p, i) => (
              <p key={i} className="text-base leading-relaxed text-ink-muted">
                {p}
              </p>
            ))}
          </div>

          <ul className="mt-8 grid gap-2 sm:grid-cols-2">
            {t.about.qualifications.map((q) => (
              <li key={q} className="flex items-start gap-2 text-sm text-ink">
                <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-accent-sage" />
                {q}
              </li>
            ))}
          </ul>

          <a
            href={siteConfig.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent-blue transition-colors hover:text-[#3a5975]"
          >
            <LinkedInIcon className="h-5 w-5" />
            {t.about.linkedinLabel}
          </a>
        </div>
      </div>
    </section>
  );
}
