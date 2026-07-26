"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { CloseIcon, MenuIcon } from "./icons";

const sections = [
  { href: "#home", key: "home" },
  { href: "#voor-wie", key: "forWhom" },
  { href: "#vakken", key: "subjects" },
  { href: "#werkwijze", key: "howItWorks" },
  { href: "#tarieven", key: "pricing" },
  { href: "#over-luca", key: "about" },
  { href: "#faq", key: "faq" },
  { href: "#contact", key: "contact" },
] as const;

export function Header() {
  const { t, locale, setLocale } = useLanguage();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#home" className="flex-none font-heading text-lg font-semibold text-ink">
          Utrecht Bijles
        </a>

        <nav className="hidden items-center gap-4 xl:flex">
          {sections.map((s) => (
            <a
              key={s.key}
              href={s.href}
              className="whitespace-nowrap text-sm text-ink-muted transition-colors hover:text-ink"
            >
              {t.nav[s.key]}
            </a>
          ))}
        </nav>

        <div className="hidden flex-none items-center gap-4 xl:flex">
          <LanguageSwitch locale={locale} setLocale={setLocale} label={t.languageSwitcherLabel} />
          <a
            href="#contact"
            className="whitespace-nowrap rounded-full bg-accent-blue px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#3a5975]"
          >
            {t.nav.cta}
          </a>
        </div>

        <div className="flex items-center gap-3 xl:hidden">
          <LanguageSwitch locale={locale} setLocale={setLocale} label={t.languageSwitcherLabel} />
          <button
            type="button"
            aria-label={open ? t.mobileMenuClose : t.mobileMenuOpen}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="rounded-md p-2 text-ink hover:bg-accent-blue-soft"
          >
            {open ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background xl:hidden">
          <nav className="flex flex-col gap-1 px-5 py-4">
            {sections.map((s) => (
              <a
                key={s.key}
                href={s.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-3 text-base text-ink hover:bg-accent-blue-soft"
              >
                {t.nav[s.key]}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-accent-blue px-5 py-3 text-center text-sm font-medium text-white"
            >
              {t.nav.cta}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

function LanguageSwitch({
  locale,
  setLocale,
  label,
}: {
  locale: "nl" | "en";
  setLocale: (l: "nl" | "en") => void;
  label: string;
}) {
  return (
    <div
      role="group"
      aria-label={label}
      className="flex items-center rounded-full border border-border bg-surface p-0.5 text-xs font-medium"
    >
      <button
        type="button"
        onClick={() => setLocale("nl")}
        aria-pressed={locale === "nl"}
        className={`rounded-full px-2.5 py-1.5 transition-colors ${
          locale === "nl" ? "bg-accent-blue text-white" : "text-ink-muted hover:text-ink"
        }`}
      >
        NL
      </button>
      <button
        type="button"
        onClick={() => setLocale("en")}
        aria-pressed={locale === "en"}
        className={`rounded-full px-2.5 py-1.5 transition-colors ${
          locale === "en" ? "bg-accent-blue text-white" : "text-ink-muted hover:text-ink"
        }`}
      >
        EN
      </button>
    </div>
  );
}
