import {
  HeroSection,
  ProblemSection,
  BenefitsSection,
  FormSection,
  WhatsAppSection,
  ReassuranceSection,
  FunnelCTASection,
  FooterSection,
} from "@/sections/capture";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <ProblemSection />
      <BenefitsSection />
      <FormSection />
      <WhatsAppSection />
      <ReassuranceSection />
      <FunnelCTASection />
      <FooterSection />
    </main>
  );
}
