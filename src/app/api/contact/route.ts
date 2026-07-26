import { NextResponse } from "next/server";
import { siteConfig } from "@/lib/site-config";

const REQUIRED_FIELDS = ["name", "email", "subject", "preferredLanguage", "modePreference", "privacyConsent"];

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  let data: Record<string, unknown>;
  try {
    data = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  // Honeypot: a hidden field real users never fill in. Bots that auto-fill every field trip it.
  if (typeof data.companyWebsite === "string" && data.companyWebsite.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  for (const field of REQUIRED_FIELDS) {
    const value = data[field];
    if (value === undefined || value === null || value === "" || value === false) {
      return NextResponse.json({ error: `Missing field: ${field}` }, { status: 400 });
    }
  }

  const email = String(data.email);
  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL || siteConfig.email;
  const fromEmail = process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev";

  if (!resendApiKey) {
    console.error(
      "[contact form] RESEND_API_KEY is not set — the message below was not emailed anywhere. " +
        "See README.md for activation instructions.",
      data,
    );
    return NextResponse.json(
      { error: "Contact form is not yet configured to send emails." },
      { status: 503 },
    );
  }

  const lines = Object.entries(data)
    .filter(([key]) => key !== "companyWebsite")
    .map(([key, value]) => `${key}: ${value}`)
    .join("\n");

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: `Utrecht Bijles website <${fromEmail}>`,
        to: [toEmail],
        reply_to: email,
        subject: `Nieuwe bijlesaanvraag van ${data.name}`,
        text: lines,
      }),
    });

    if (!res.ok) {
      const errText = await res.text();
      console.error("[contact form] Resend API error:", errText);
      return NextResponse.json({ error: "Failed to send message" }, { status: 502 });
    }
  } catch (err) {
    console.error("[contact form] Failed to reach Resend:", err);
    return NextResponse.json({ error: "Failed to send message" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
