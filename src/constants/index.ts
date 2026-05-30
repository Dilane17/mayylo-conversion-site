// Constants for Mayylo Capture

import { CompanySize, Benefit, TrustIndicator } from "@/types";

export const COMPANY_SIZES: CompanySize[] = [
  { value: "1-5", label: "1-5 employés" },
  { value: "6-15", label: "6-15 employés" },
  { value: "16-50", label: "16-50 employés" },
  { value: "51-200", label: "51-200 employés" },
  { value: "200+", label: "200+ employés" },
];

export const BENEFITS: Benefit[] = [
  {
    id: "1",
    title: "Configuration en minutes",
    description: "Créez vos e-mails professionnels en quelques clics. Plus besoin de passer des heures sur des interfaces complexes.",
    icon: "zap",
  },
  {
    id: "2",
    title: "Paiement Mobile Money",
    description: "Payez facilement avec Orange Money, Wave, M-Pesa ou MTN Mobile Money. Aucune carte bancaire requise.",
    icon: "smartphone",
  },
  {
    id: "3",
    title: "Support WhatsApp",
    description: "Une question ? Notre équipe vous répond directement sur WhatsApp, en français, dans les meilleurs délais.",
    icon: "message-circle",
  },
  {
    id: "4",
    title: "Sécurité garantie",
    description: "Vos données sont protégées avec un chiffrement de niveau entreprise. Confiance et tranquillité d'esprit.",
    icon: "shield",
  },
];

export const TRUST_INDICATORS: TrustIndicator[] = [
  { id: "1", value: "500+", label: "Entreprises inscrites" },
  { id: "2", value: "10k+", label: "E-mails créés" },
  { id: "3", value: "99.9%", label: "Uptime garanti" },
];

export const CONTACT = {
  whatsapp: "+225 XX XX XX XX",
  email: "hello@mayylo.io",
};
