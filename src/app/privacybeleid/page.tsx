import type { Metadata } from "next";
import { LegalContent } from "@/components/LegalContent";

export const metadata: Metadata = {
  title: "Privacyverklaring | Bijles met Luca",
};

export default function PrivacyPage() {
  return <LegalContent variant="privacy" />;
}
