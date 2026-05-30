import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components/shared/Header";

// Police Nura locale pour les titres
const nura = localFont({
  src: [
    {
      path: "../../public/font/Nura/WOFF/Nura-Bold.woff",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/font/Nura/WOFF/Nura-SemiBold.woff",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/font/Nura/WOFF/Nura-Medium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/font/Nura/WOFF/Nura-Normal.woff",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-nura",
  display: "swap",
});

// Poppins pour le corps de texte
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mayylo — E-mails professionnels en quelques minutes | Mobile Money",
  description:
    "Votre entreprise mérite mieux qu'une adresse Gmail. Créez les e-mails professionnels de votre équipe en quelques minutes. Paiement Mobile Money, support WhatsApp en français. Laissez vos coordonnées, on vous recontacte.",
  openGraph: {
    title: "Mayylo — E-mails professionnels en quelques minutes",
    description:
      "Votre entreprise mérite mieux qu'une adresse Gmail. Créez les e-mails professionnels de votre équipe en quelques minutes.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${nura.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-poppins">
        <Header />
        {children}
        {/* WhatsApp FAB */}
        <a
          href="https://wa.me/221000000000"
          target="_blank"
          rel="noopener noreferrer"
          className="wa-fab"
        >
          <div className="ic">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.6 6.32A7.85 7.85 0 0 0 12 4a7.94 7.94 0 0 0-6.88 12.2L4 20l4.05-1a7.87 7.87 0 0 0 3.55.85h.01A7.94 7.94 0 0 0 20 12a7.85 7.85 0 0 0-2.4-5.68ZM12 18.5h-.01a6.53 6.53 0 0 1-3.32-.9l-.24-.14-2.47.65.66-2.4-.16-.26a6.46 6.46 0 0 1 5.58-9.77 6.46 6.46 0 0 1 6.46 6.46 6.47 6.47 0 0 1-6.5 6.56Zm3.55-4.8c-.2-.1-1.17-.58-1.35-.64-.18-.07-.32-.1-.45.1-.13.2-.5.64-.62.78-.1.12-.22.13-.42.05-.2-.1-.84-.3-1.6-.97-.6-.52-.99-1.18-1.1-1.38-.12-.2 0-.3.1-.4.1-.1.18-.22.27-.33.1-.1.13-.18.2-.3.06-.12.03-.22-.02-.3-.04-.1-.45-1.07-.61-1.46-.16-.37-.32-.32-.45-.33l-.38-.01a.73.73 0 0 0-.53.25c-.18.2-.7.68-.7 1.66 0 .97.71 1.91.81 2.04.1.13 1.4 2.14 3.4 3 .47.2.84.33 1.13.42.47.15.9.13 1.24.08.38-.06 1.17-.48 1.34-.94.16-.46.16-.85.11-.94-.04-.08-.18-.13-.38-.22Z" />
            </svg>
          </div>
          <div className="txt">
            <div className="t">Une question&nbsp;?</div>
            <div className="s">RÉPONSE RAPIDE</div>
          </div>
        </a>
      </body>
    </html>
  );
}
