const WA_HREF = "https://wa.me/221770000000";

export function WhatsAppSection() {
  return (
    <section className="section" style={{ paddingTop: 0 }} id="wa">
      <div className="container-main">
        <div className="cap-wa-band">
          <div className="copy">
            <div className="badge">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 21l1.7-5.1A8 8 0 1 1 9 19.4L3 21z" />
                <path d="M8 11.5c.4 1.4 1.5 2.6 3 3.1l1-1 2 1c0 .8-.6 1.4-1.5 1.4-3 0-5.5-2.5-5.5-5.5C7 9.6 7.6 9 8.4 9l1 2-1 .5z" />
              </svg>
              Réponse immédiate
            </div>
            <h2>Besoin d&apos;une réponse tout de suite&nbsp;?</h2>
            <p>
              Discutez directement avec notre équipe sur WhatsApp. Une vraie personne,
              en français, prête à vous aider à démarrer.
            </p>
          </div>
          <div className="num">
            <a href={WA_HREF} target="_blank" rel="noopener noreferrer" className="btn btn-green btn-lg">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 21l1.7-5.1A8 8 0 1 1 9 19.4L3 21z" />
                <path d="M8 11.5c.4 1.4 1.5 2.6 3 3.1l1-1 2 1c0 .8-.6 1.4-1.5 1.4-3 0-5.5-2.5-5.5-5.5C7 9.6 7.6 9 8.4 9l1 2-1 .5z" />
              </svg>
              Écrire sur WhatsApp
            </a>
            <div className="small">+221 77 000 00 00</div>
          </div>
        </div>
      </div>
    </section>
  );
}
