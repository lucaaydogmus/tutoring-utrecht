import type { Metadata } from "next";
import { LegalContent } from "@/components/LegalContent";

export const metadata: Metadata = {
  title: "Privacyverklaring | Utrecht Bijles",
};

export default function PrivacyPage() {
  return <LegalContent variant="privacy" />;
}
