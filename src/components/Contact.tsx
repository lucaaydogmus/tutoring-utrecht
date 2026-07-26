"use client";

import { useId, useState, type FormEvent } from "react";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { siteConfig, whatsappLink } from "@/lib/site-config";
import { MailIcon, PinIcon, WhatsAppIcon } from "./icons";

type Status = "idle" | "submitting" | "success" | "error";

export function Contact() {
  const { t, locale } = useLanguage();
  const [status, setStatus] = useState<Status>("idle");
  const formId = useId();

  const whatsapp = whatsappLink(
    locale === "nl" ? siteConfig.whatsappPrefillNL : siteConfig.whatsappPrefillEN,
  );

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    setStatus("submitting");
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  const f = t.contact.form;

  return (
    <section id="contact" className="bg-accent-blue-soft/40">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <div className="fade-in-section max-w-2xl">
          <h2 className="font-heading text-3xl font-semibold text-ink sm:text-4xl">{t.contact.title}</h2>
          <p className="mt-4 text-base leading-relaxed text-ink-muted">{t.contact.text}</p>
        </div>

        <div className="mt-8 flex flex-wrap gap-6">
          <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-ink">
            <WhatsAppIcon className="h-5 w-5 text-accent-sage" />
            {t.contact.whatsappLabel}: {siteConfig.phoneDisplay}
          </a>
          <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-2 text-sm text-ink">
            <MailIcon className="h-5 w-5 text-accent-blue" />
            {t.contact.emailLabel}: {siteConfig.email}
          </a>
          <span className="flex items-center gap-2 text-sm text-ink">
            <PinIcon className="h-5 w-5 text-accent-blue" />
            {t.contact.locationLabel}: {t.contact.locationValue}
          </span>
        </div>

        <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_320px]">
          <form
            onSubmit={handleSubmit}
            noValidate={false}
            className="fade-in-section grid gap-5 rounded-2xl border border-border bg-surface p-7 sm:grid-cols-2"
          >
            <input
              type="text"
              name="companyWebsite"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="absolute -left-[9999px] h-0 w-0 opacity-0"
            />
            <Field id={`${formId}-name`} label={f.name} name="name" required autoComplete="name" />
            <Field id={`${formId}-email`} label={f.email} name="email" type="email" required autoComplete="email" />
            <Field id={`${formId}-phone`} label={f.phone} name="phone" type="tel" autoComplete="tel" />
            <Field id={`${formId}-age`} label={f.studentAge} name="studentAge" />
            <Field id={`${formId}-level`} label={f.schoolLevel} name="schoolLevel" className="sm:col-span-2" />

            <SelectField id={`${formId}-subject`} label={f.subject} name="subject" options={f.subjectOptions} required />
            <SelectField
              id={`${formId}-lang`}
              label={f.preferredLanguage}
              name="preferredLanguage"
              options={f.preferredLanguageOptions}
              required
            />
            <SelectField
              id={`${formId}-mode`}
              label={f.modePreference}
              name="modePreference"
              options={f.modePreferenceOptions}
              required
            />
            <Field id={`${formId}-availability`} label={f.availability} name="availability" />

            <label htmlFor={`${formId}-help`} className="sm:col-span-2 flex flex-col gap-1.5">
              <span className="text-sm font-medium text-ink">{f.helpNeeded}</span>
              <textarea
                id={`${formId}-help`}
                name="helpNeeded"
                rows={4}
                className="rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm text-ink outline-none focus:border-accent-blue"
              />
            </label>

            <label className="sm:col-span-2 flex items-start gap-3 text-sm text-ink-muted">
              <input
                type="checkbox"
                name="privacyConsent"
                required
                className="mt-1 h-4 w-4 flex-none accent-accent-blue"
              />
              {f.privacyConsent}
            </label>

            <div className="sm:col-span-2">
              <button
                type="submit"
                disabled={status === "submitting"}
                className="rounded-full bg-accent-blue px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#3a5975] disabled:opacity-60"
              >
                {status === "submitting" ? f.submitting : f.submit}
              </button>

              <div aria-live="polite" className="mt-4">
                {status === "success" && (
                  <p className="text-sm font-medium text-accent-sage">
                    {f.successTitle} — {f.successText}
                  </p>
                )}
                {status === "error" && <p className="text-sm font-medium text-[#b3543f]">{f.errorText}</p>}
              </div>
            </div>
          </form>

          <div className="fade-in-section flex flex-col gap-4">
            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-full bg-accent-sage px-6 py-3 text-sm font-medium text-white transition-colors hover:opacity-90"
            >
              <WhatsAppIcon className="h-5 w-5" />
              {t.contact.whatsappButton}
            </a>

            <ul className="flex flex-col gap-2">
              {t.contact.reassurance.map((r) => (
                <li key={r} className="flex items-start gap-2 text-sm text-ink-muted">
                  <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-accent-sage" />
                  {r}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  id,
  label,
  name,
  type = "text",
  required,
  autoComplete,
  className = "",
}: {
  id: string;
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
  className?: string;
}) {
  return (
    <label htmlFor={id} className={`flex flex-col gap-1.5 ${className}`}>
      <span className="text-sm font-medium text-ink">
        {label}
        {required && <span aria-hidden="true"> *</span>}
      </span>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className="rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm text-ink outline-none focus:border-accent-blue"
      />
    </label>
  );
}

function SelectField({
  id,
  label,
  name,
  options,
  required,
}: {
  id: string;
  label: string;
  name: string;
  options: string[];
  required?: boolean;
}) {
  return (
    <label htmlFor={id} className="flex flex-col gap-1.5">
      <span className="text-sm font-medium text-ink">
        {label}
        {required && <span aria-hidden="true"> *</span>}
      </span>
      <select
        id={id}
        name={name}
        required={required}
        defaultValue=""
        className="rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm text-ink outline-none focus:border-accent-blue"
      >
        <option value="" disabled>
          —
        </option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </label>
  );
}
