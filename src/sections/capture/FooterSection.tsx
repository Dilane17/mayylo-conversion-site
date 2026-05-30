import Image from "next/image";

const WA_HREF = "https://wa.me/221770000000";

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
            <a href={WA_HREF} target="_blank" rel="noopener noreferrer">WhatsApp</a>
            <a href="mailto:contact@mayylo.sn">contact@mayylo.sn</a>
            <a href="#formulaire">Être recontacté</a>
            <a href="#">Confidentialité</a>
          </div>
        </div>
        <div className="copy">
          <span>© {year} Mayylo — E-mail professionnel pour les PME africaines.</span>
          <span>Dakar, Sénégal</span>
        </div>
      </div>
    </footer>
  );
}
