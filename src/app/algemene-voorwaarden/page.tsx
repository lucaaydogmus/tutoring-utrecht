import type { Metadata } from "next";
import { LegalContent } from "@/components/LegalContent";

export const metadata: Metadata = {
  title: "Algemene voorwaarden | Utrecht Bijles",
};

export default function TermsPage() {
  return <LegalContent variant="terms" />;
}
