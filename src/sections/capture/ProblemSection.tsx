export function ProblemSection() {
  return (
    <section className="section" style={{ paddingTop: 0 }}>
      <div className="container-main">
        <div className="section-head">
          <span className="eyebrow">
            <span className="dot"></span>
            Le problème
          </span>
          <h2 className="h-section">
            Une adresse Gmail vous fait perdre des clients — sans que vous le sachiez.
          </h2>
        </div>

        <div className="ba-grid">
          {/* Before */}
          <div className="ba-card before">
            <span className="tag">Adresse Gmail</span>
            <h3>Image amateur</h3>
            <div className="ba-mock">
              <div className="ba-mail">
                <div className="av" style={{ background: "#8A9499" }}>?</div>
                <div>
                  <div className="from">Votre entreprise</div>
                  <div className="em">votreentreprise221@gmail.com</div>
                </div>
                <span className="flag warn">Doute</span>
              </div>
              <div className="ba-mail">
                <div className="av" style={{ background: "#8A9499" }}>?</div>
                <div>
                  <div className="from">Votre commercial</div>
                  <div className="em">commercial.boss@gmail.com</div>
                </div>
                <span className="flag warn">Spam ?</span>
              </div>
            </div>
            <ul className="ba-bullets">
              <li>
                <span className="mark">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 6l12 12M18 6L6 18" />
                  </svg>
                </span>
                Réduit la crédibilité face aux clients et fournisseurs
              </li>
              <li>
                <span className="mark">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 6l12 12M18 6L6 18" />
                  </svg>
                </span>
                Aucun contrôle quand un employé part avec la boîte
              </li>
              <li>
                <span className="mark">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 6l12 12M18 6L6 18" />
                  </svg>
                </span>
                Impossible de gérer toute l&apos;équipe au même endroit
              </li>
            </ul>
          </div>

          {/* After */}
          <div className="ba-card after">
            <span className="tag">E-mail professionnel</span>
            <h3>Image qui inspire confiance</h3>
            <div className="ba-mock">
              <div className="ba-mail">
                <div className="av" style={{ background: "#02F5A1", color: "#07191E" }}>V</div>
                <div>
                  <div className="from">Votre entreprise</div>
                  <div className="em">contact@votreentreprise.sn</div>
                </div>
                <span className="flag ok">Vérifié</span>
              </div>
              <div className="ba-mail">
                <div className="av" style={{ background: "#1A8BFF" }}>C</div>
                <div>
                  <div className="from">Votre commercial</div>
                  <div className="em">commercial@votreentreprise.sn</div>
                </div>
                <span className="flag ok">Pro</span>
              </div>
            </div>
            <ul className="ba-bullets">
              <li>
                <span className="mark">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12l4 4 10-10" />
                  </svg>
                </span>
                Une image sérieuse et professionnelle dès le premier contact
              </li>
              <li>
                <span className="mark">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12l4 4 10-10" />
                  </svg>
                </span>
                Vous gardez le contrôle total des boîtes de votre équipe
              </li>
              <li>
                <span className="mark">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12l4 4 10-10" />
                  </svg>
                </span>
                Toute l&apos;entreprise gérée depuis un seul tableau de bord
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
