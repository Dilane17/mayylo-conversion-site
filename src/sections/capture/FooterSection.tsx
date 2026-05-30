import Image from "next/image";

const WA_HREF = "https://wa.me/2290190913589";

export function FooterSection() {
  const year = new Date().getFullYear();
  return (
    <footer className="cap-footer">
      <div className="container-main">
        <div className="row">
          <a href="#top" className="brand">
            <Image
              src="/logo/logo%20officiel%20Maylo.png"
              alt="Mayylo"
              width={76}
              height={50}
              className="h-12 w-auto"
            />
          </a>
          <div className="links">
            <a href={WA_HREF} target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>
            <a href="mailto:contact@mayylo.com">contact@mayylo.com</a>
            <a href="#formulaire">Rejoindre la liste d&apos;attente</a>
            <a href="#">Confidentialité</a>
          </div>
        </div>
        <div className="copy">
          <span>
            © {year} Mayylo — E-mail professionnel pour les PME africaines.
          </span>
          <span>Cotonou, Bénin — Afrique francophone</span>
        </div>
      </div>
    </footer>
  );
}
