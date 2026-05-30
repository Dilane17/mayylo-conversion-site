"use client";

import { Check } from "lucide-react";

function PaymentRow() {
  const pills = [
    { glyph: "W", name: "Wave", color: "#1A8BFF" },
    { glyph: "OM", name: "Orange Money", color: "#FF7900" },
    { glyph: "MM", name: "MTN MoMo", color: "#FFCC00" },
    { glyph: "F", name: "Free Money", color: "#CD0E2E" },
  ];
  return (
    <div className="pay-row">
      <span className="label">Paiement Mobile Money</span>
      {pills.map((p) => (
        <span key={p.name} className="pay-pill">
          <span className="glyph" style={{ background: p.color }}>
            {p.glyph}
          </span>
          {p.name}
        </span>
      ))}
    </div>
  );
}

export function HeroSection() {
  const scrollToForm = () => {
    document
      .getElementById("formulaire")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="cap-hero" id="top">
      <div className="container-main">
        <div className="cap-hero-grid">
          {/* Left column */}
          <div>
            {/* Pre-launch badge */}
            <span
              className="hero-badge"
              style={{
                borderColor: "#02F5A1",
                background: "rgba(2,245,161,0.08)",
              }}
            >
              <span
                className="chip"
                style={{ background: "#02F5A1", color: "#07191E" }}
              >
                �
              </span>
              <span style={{ color: "#00C97F", fontWeight: 600 }}>
                Bientôt disponible — Inscrivez-vous dès maintenant
              </span>
            </span>

            {/* Expertise mention */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                marginBottom: 16,
                fontSize: 11,
                color: "var(--ink-soft)",
              }}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
              >
                <path d="M12 2l3 6 6 1-4 4 1 6-6-3-6 3 1-6-4-4 6-1z" />
              </svg>
              <span>
                Une initiative de HustlerLabs pour simplifier l&apos;accès aux
                e-mails professionnels pour les PME africaines.
              </span>
            </div>

            <h1 className="h-display">
              Votre entreprise mérite mieux qu&apos;une adresse <em>Gmail</em>.
            </h1>

            {/* Exclusivity note */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                marginTop: 12,
                padding: "6px 12px",
                borderRadius: 8,
                background: "var(--onyx)",
                color: "#fff",
                fontSize: 11,
                fontWeight: 500,
              }}
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
              >
                <path d="M12 15l-4-4 4-4M8 11h8" />
                <circle cx="12" cy="12" r="10" />
              </svg>
              <span>
                Mayylo est actuellement en préparation. Les entreprises
                préinscrites seront les premières informées du lancement
                officiel.
              </span>
            </div>

            <p className="h-lead" style={{ marginTop: 20 }}>
              Créez les e-mails professionnels de toute votre équipe en quelques
              minutes.{" "}
              <strong style={{ color: "var(--ink)" }}>
                Paiement Mobile Money. Aucune compétence technique.
              </strong>
            </p>

            <div className="cap-hero-cta">
              <button className="btn btn-green btn-lg" onClick={scrollToForm}>
                Rejoindre la liste d&apos;attente
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
              </button>
              <a
                href="https://wa.me/2290190913589"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost btn-lg"
              >
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
                  <path d="M3 21l1.7-5.1A8 8 0 1 1 9 19.4L3 21z" />
                  <path d="M8 11.5c.4 1.4 1.5 2.6 3 3.1l1-1 2 1c0 .8-.6 1.4-1.5 1.4-3 0-5.5-2.5-5.5-5.5C7 9.6 7.6 9 8.4 9l1 2-1 .5z" />
                </svg>
                Parler sur WhatsApp
              </a>
            </div>

            <PaymentRow />

            <div className="cap-trust">
              <span>
                <span className="ck">
                  <Check className="w-3 h-3" />
                </span>
                Sans carte bancaire
              </span>
              <span>
                <span className="ck">
                  <Check className="w-3 h-3" />
                </span>
                Support en français
              </span>
              <span>
                <span className="ck">
                  <Check className="w-3 h-3" />
                </span>
                Activation rapide
              </span>
              <span>
                <span
                  className="ck"
                  style={{ background: "#E6FEF3", color: "#00C97F" }}
                >
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </span>
                30 jours satisfait ou remboursé
              </span>
            </div>

            {/* Reassurance block for pre-registered companies */}
            <div
              style={{
                marginTop: 28,
                padding: 20,
                borderRadius: 14,
                background: "var(--bg-soft)",
                border: "1px solid var(--line)",
              }}
            >
              <h4
                style={{
                  fontSize: 13,
                  fontWeight: 600,
                  color: "var(--ink)",
                  marginBottom: 12,
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <span style={{ fontSize: 16 }}>✨</span>
                Les entreprises préinscrites bénéficieront :
              </h4>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "grid",
                  gap: 8,
                }}
              >
                <li
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    fontSize: 12,
                    color: "var(--ink-mid)",
                  }}
                >
                  <span
                    style={{
                      width: 18,
                      height: 18,
                      borderRadius: "50%",
                      background: "#E6FEF3",
                      color: "#00C97F",
                      display: "grid",
                      placeItems: "center",
                      fontSize: 10,
                      fontWeight: 700,
                    }}
                  >
                    ✓
                  </span>
                  d&apos;un accès anticipé
                </li>
                <li
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    fontSize: 12,
                    color: "var(--ink-mid)",
                  }}
                >
                  <span
                    style={{
                      width: 18,
                      height: 18,
                      borderRadius: "50%",
                      background: "#E6FEF3",
                      color: "#00C97F",
                      display: "grid",
                      placeItems: "center",
                      fontSize: 10,
                      fontWeight: 700,
                    }}
                  >
                    ✓
                  </span>
                  des tarifs de lancement
                </li>
                <li
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    fontSize: 12,
                    color: "var(--ink-mid)",
                  }}
                >
                  <span
                    style={{
                      width: 18,
                      height: 18,
                      borderRadius: "50%",
                      background: "#E6FEF3",
                      color: "#00C97F",
                      display: "grid",
                      placeItems: "center",
                      fontSize: 10,
                      fontWeight: 700,
                    }}
                  >
                    ✓
                  </span>
                  d&apos;un accompagnement prioritaire
                </li>
              </ul>
            </div>
          </div>

          {/* Right column — Mockup */}
          <div className="mock">
            <div className="mock-head">
              <div className="left">
                <div className="dot-row">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
              <div className="url">mail.votresociete.com</div>
              <div style={{ width: 32 }} />
            </div>

            <div
              className="mock-body"
              style={{ gridTemplateColumns: "1fr", minHeight: 0 }}
            >
              <div className="mock-side" style={{ marginBottom: 0 }}>
                <div className="team" style={{ marginBottom: 4 }}>
                  <div className="logo">V</div>
                  <div>
                    <div className="team-name">Votre Société</div>
                    <div className="team-sub">8 boîtes actives</div>
                  </div>
                </div>
              </div>

              <div className="mock-list">
                <div className="mock-msg unread">
                  <div
                    className="av"
                    style={{ background: "#02F5A1", color: "#07191E" }}
                  >
                    AD
                  </div>
                  <div>
                    <div className="from">Aïssa · Direction</div>
                    <div className="subj">contact@votresociete.com</div>
                  </div>
                  <div style={{ display: "grid", justifyItems: "end", gap: 4 }}>
                    <span className="badge">Pro</span>
                    <span className="time">09:42</span>
                  </div>
                </div>
                <div className="mock-msg">
                  <div className="av" style={{ background: "#1A8BFF" }}>
                    OK
                  </div>
                  <div>
                    <div className="from">Ousmane · Ventes</div>
                    <div className="subj">commercial@votresociete.com</div>
                  </div>
                  <div style={{ display: "grid", justifyItems: "end", gap: 4 }}>
                    <span className="time">09:21</span>
                  </div>
                </div>
                <div className="mock-msg">
                  <div className="av" style={{ background: "#FF7900" }}>
                    MN
                  </div>
                  <div>
                    <div className="from">Mariam · Support</div>
                    <div className="subj">support@votresociete.com</div>
                  </div>
                  <div style={{ display: "grid", justifyItems: "end", gap: 4 }}>
                    <span className="time">Hier</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mock-foot">
              <div className="live">
                <span className="pulse"></span>
                EN LIGNE
              </div>
              <div className="live" style={{ gap: 6 }}>
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z" />
                  <path d="M9 12l2 2 4-4" />
                </svg>
                SÉCURISÉ
              </div>
            </div>

            <div className="mock-card">
              <div className="ic-wrap">⚡</div>
              <div>
                <div className="t">Équipe prête</div>
                <div className="s">4 min — Mobile Money</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
