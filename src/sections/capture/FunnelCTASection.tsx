export function FunnelCTASection() {
  return (
    <section className="section" style={{ paddingTop: 0 }}>
      <div className="container-main">
        <div className="cap-funnel">
          <span className="eyebrow">
            <span className="dot"></span>
            Déjà décidé&nbsp;?
          </span>
          <h3 className="h-section">Je suis prêt à créer mes e-mails maintenant</h3>
          <p>
            Pas besoin d&apos;attendre d&apos;être recontacté. Lancez la création de vos adresses
            professionnelles directement.
          </p>
          <a
            href="https://wa.me/221770000000"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-lg"
          >
            Créer mes e-mails maintenant
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
