export function FunnelCTASection() {
  return (
    <section className="section" style={{ paddingTop: 0 }}>
      <div className="container-main">
        <div className="cap-funnel">
          <span className="eyebrow">
            <span className="dot"></span>
            Une question&nbsp;?
          </span>
          <h3 className="h-section">Discutons de vos besoins</h3>
          <p>
            Le produit est en cours de préparation. Rejoignez la liste
            d&apos;attente ou contactez-nous directement pour en savoir plus.
          </p>
          <a
            href="https://wa.me/2290190913589"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-lg"
          >
            Nous contacter sur WhatsApp
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
