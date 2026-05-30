const benefits = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="6" width="18" height="13" rx="2" /><path d="M3 10h18" />
      </svg>
    ),
    title: "Paiement Mobile Money",
    description: "Wave, Orange Money, MTN, Free Money. Aucune carte bancaire requise.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M6 18l2.5-2.5M15.5 8.5 18 6" />
      </svg>
    ),
    title: "Configuration automatique",
    description: "On configure tout pour vous. Vos e-mails fonctionnent sans technicien.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21l1.7-5.1A8 8 0 1 1 9 19.4L3 21z" /><path d="M8 11.5c.4 1.4 1.5 2.6 3 3.1l1-1 2 1c0 .8-.6 1.4-1.5 1.4-3 0-5.5-2.5-5.5-5.5C7 9.6 7.6 9 8.4 9l1 2-1 .5z" />
      </svg>
    ),
    title: "Support WhatsApp",
    description: "Une vraie personne, en français, qui répond rapidement à vos questions.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8z" />
      </svg>
    ),
    title: "Activation rapide",
    description: "Votre équipe reçoit ses adresses professionnelles en quelques minutes.",
  },
];

export function BenefitsSection() {
  return (
    <section className="section" style={{ paddingTop: 0 }}>
      <div className="container-main">
        <div className="section-head">
          <span className="eyebrow">
            <span className="dot"></span>
            Pourquoi Mayylo
          </span>
          <h2 className="h-section">
            Pensé pour les entreprises d&apos;Afrique francophone.
          </h2>
        </div>
        <div className="cap-benefits">
          {benefits.map((benefit, index) => (
            <div key={index} className="cap-benefit">
              <div className="ic">{benefit.icon}</div>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
