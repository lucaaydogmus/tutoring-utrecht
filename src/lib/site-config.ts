// Central place to edit business details, contact info, and pricing.

export const siteConfig = {
  businessName: "Utrecht Bijles",
  tutorName: "Luca Aydogmus",
  area: "Utrecht en omgeving",
  phoneDisplay: "06 27 38 77 91",
  phoneE164: "+31627387791",
  email: "lucaaydogmus@gmail.com",
  whatsappNumber: "31627387791",
  whatsappPrefillNL:
    "Hallo Luca, ik ben op zoek naar bijles voor mijn kind. Het gaat om [vak, niveau en leerjaar].",
  whatsappPrefillEN:
    "Hello Luca, I'm looking for tutoring for my child. It concerns [subject, level and school year].",
  siteUrl: "https://utrechtbijles.com",
  linkedinUrl: "https://www.linkedin.com/in/lucaaydogmus/",
} as const;

export function whatsappLink(prefill: string) {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(prefill)}`;
}

export const pricing = {
  online: { priceEur: 25 },
  utrecht: { priceEur: 30 },
} as const;
