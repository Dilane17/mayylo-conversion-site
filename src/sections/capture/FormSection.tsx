"use client";

import { useState } from "react";
import { Lock, Clock, Headphones } from "lucide-react";

const WA_HREF = "https://wa.me/221770000000";

const COUNTRIES = [
  { name: "Sénégal", dial: "+221", flag: "🇸🇳" },
  { name: "Côte d'Ivoire", dial: "+225", flag: "🇨🇮" },
  { name: "Cameroun", dial: "+237", flag: "🇨🇲" },
  { name: "Bénin", dial: "+229", flag: "🇧🇯" },
  { name: "Mali", dial: "+223", flag: "🇲🇱" },
  { name: "Burkina Faso", dial: "+226", flag: "🇧🇫" },
  { name: "Togo", dial: "+228", flag: "🇹🇬" },
  { name: "Guinée", dial: "+224", flag: "🇬🇳" },
  { name: "Autre pays", dial: "+", flag: "🌍" },
];

const BESOINS = [
  "Créer les e-mails de mon équipe",
  "Migrer mes anciens e-mails",
  "Tarif pour une grande équipe",
  "Juste me renseigner",
];

type FormData = {
  entreprise: string;
  responsable: string;
  pays: string;
  whatsapp: string;
  taille: string;
  besoin: string;
};

type Lead = FormData & { whatsappFull: string };

export function FormSection() {
  const [form, setForm] = useState<FormData>({
    entreprise: "",
    responsable: "",
    pays: "Sénégal",
    whatsapp: "",
    taille: "",
    besoin: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>(
    {},
  );
  const [submitted, setSubmitted] = useState<Lead | null>(null);

  const country = COUNTRIES.find((c) => c.name === form.pays) ?? COUNTRIES[0];

  const set = (k: keyof FormData, v: string) => {
    setForm((f) => ({ ...f, [k]: v }));
    setErrors((e) => {
      const n = { ...e };
      delete n[k];
      return n;
    });
  };

  const validate = () => {
    const e: Partial<Record<keyof FormData, string>> = {};
    if (!form.entreprise.trim())
      e.entreprise = "Indiquez le nom de votre entreprise.";
    if (!form.responsable.trim()) e.responsable = "Indiquez votre nom.";
    if (form.whatsapp.replace(/\D/g, "").length < 6)
      e.whatsapp = "Entrez un numéro WhatsApp valide.";
    return e;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length) return;
    setSubmitted({
      ...form,
      whatsappFull: country.dial + " " + form.whatsapp.trim(),
    });
  };

  if (submitted) {
    const firstName = submitted.responsable.split(" ")[0];
    return (
      <section id="formulaire" className="section cap-form-section">
        <div className="container-main">
          <div className="cap-form-shell">
            <div className="cap-form-aside">
              <span className="eyebrow" style={{ marginBottom: 16 }}>
                <span className="dot"></span>Formulaire
              </span>
              <h2 className="h-section gradient-text">
                Parlez-nous de votre entreprise
              </h2>
            </div>
            <div className="cap-form-card">
              <div className="cap-sent">
                <div className="big">
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12l4 4 10-10" />
                  </svg>
                </div>
                <h3>C&apos;est noté, {firstName}&nbsp;!</h3>
                <p>
                  Notre équipe vous recontacte très vite sur WhatsApp pour créer
                  les e-mails de{" "}
                  <strong style={{ color: "var(--ink)" }}>
                    {submitted.entreprise}
                  </strong>
                  .
                </p>
                <div className="recap">
                  <div className="r">
                    <span className="k">Entreprise</span>
                    <span className="v">{submitted.entreprise}</span>
                  </div>
                  <div className="r">
                    <span className="k">WhatsApp</span>
                    <span className="v">{submitted.whatsappFull}</span>
                  </div>
                  <div className="r">
                    <span className="k">Pays</span>
                    <span className="v">{submitted.pays}</span>
                  </div>
                </div>
                <div className="acts">
                  <a
                    href={WA_HREF}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-green btn-lg"
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
                    Discuter maintenant
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="formulaire" className="section cap-form-section">
      <div className="container-main">
        <div className="cap-form-shell">
          {/* Left column */}
          <div className="cap-form-aside">
            <span className="eyebrow" style={{ marginBottom: 16 }}>
              <span className="dot"></span>Formulaire
            </span>
            <h2 className="h-section gradient-text">
              Parlez-nous de votre entreprise
            </h2>
            <p className="lead">
              Laissez-nous vos coordonnées. Notre équipe vous aide à créer vos
              e-mails professionnels rapidement — et vous recontacte sur
              WhatsApp.
            </p>
            <ul className="cap-aside-list">
              <li>
                <span className="mk">
                  <Clock className="w-3.5 h-3.5" />
                </span>
                <div>
                  <div className="tt">Réponse rapide</div>
                  <div className="ss">
                    On vous recontacte sur WhatsApp, en français.
                  </div>
                </div>
              </li>
              <li>
                <span className="mk">
                  <Lock className="w-3.5 h-3.5" />
                </span>
                <div>
                  <div className="tt">Vos données protégées</div>
                  <div className="ss">
                    Jamais revendues. Utilisées uniquement pour vous aider.
                  </div>
                </div>
              </li>
              <li>
                <span className="mk">
                  <Headphones className="w-3.5 h-3.5" />
                </span>
                <div>
                  <div className="tt">Accompagnement humain</div>
                  <div className="ss">
                    Une vraie personne suit votre dossier de A à Z.
                  </div>
                </div>
              </li>
            </ul>
          </div>

          {/* Right column — Form */}
          <div className="cap-form-card">
            <div className="head">
              <h3>Recevez vos e-mails pro</h3>
              <p>Moins d&apos;une minute. Aucune carte bancaire.</p>
            </div>

            <form onSubmit={handleSubmit} noValidate>
              <div className={`field ${errors.entreprise ? "err" : ""}`}>
                <label>
                  Nom de l&apos;entreprise <span className="req">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Kër Consulting"
                  value={form.entreprise}
                  onChange={(e) => set("entreprise", e.target.value)}
                />
                {errors.entreprise && (
                  <div className="err-msg">{errors.entreprise}</div>
                )}
              </div>

              <div className={`field ${errors.responsable ? "err" : ""}`}>
                <label>
                  Nom du responsable <span className="req">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Aminata Sow"
                  value={form.responsable}
                  onChange={(e) => set("responsable", e.target.value)}
                />
                {errors.responsable && (
                  <div className="err-msg">{errors.responsable}</div>
                )}
              </div>

              <div className="cap-field-row">
                <div className="field">
                  <label>
                    Pays <span className="req">*</span>
                  </label>
                  <select
                    value={form.pays}
                    onChange={(e) => set("pays", e.target.value)}
                  >
                    {COUNTRIES.map((c) => (
                      <option key={c.name} value={c.name}>
                        {c.flag} {c.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="field">
                  <label>Taille de l&apos;équipe</label>
                  <select
                    value={form.taille}
                    onChange={(e) => set("taille", e.target.value)}
                  >
                    <option value="">Choisir…</option>
                    <option>1 à 4 personnes</option>
                    <option>5 à 19 personnes</option>
                    <option>20 personnes ou plus</option>
                  </select>
                </div>
              </div>

              <div
                className={`field cap-field ${errors.whatsapp ? "err" : ""}`}
              >
                <label>
                  Numéro WhatsApp <span className="req">*</span>
                </label>
                <div className="cap-tel">
                  <span className="dial">
                    <span className="flag">{country.flag}</span>
                    {country.dial}
                  </span>
                  <input
                    type="tel"
                    placeholder="77 123 45 67"
                    inputMode="tel"
                    value={form.whatsapp}
                    onChange={(e) => set("whatsapp", e.target.value)}
                  />
                </div>
                {errors.whatsapp && (
                  <div className="err-msg">{errors.whatsapp}</div>
                )}
              </div>

              <div className="field">
                <label>Votre besoin principal</label>
                <div className="cap-chips">
                  {BESOINS.map((b) => (
                    <button
                      key={b}
                      type="button"
                      className={`cap-chip ${form.besoin === b ? "on" : ""}`}
                      onClick={() => set("besoin", b)}
                    >
                      <span className="rad"></span>
                      {b}
                    </button>
                  ))}
                </div>
              </div>

              {/* Scarcity + Promise */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  padding: "12px 16px",
                  borderRadius: 12,
                  background: "rgba(2,245,161,0.08)",
                  border: "1px solid rgba(2,245,161,0.25)",
                  marginBottom: 16,
                }}
              >
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 32,
                    height: 32,
                    borderRadius: "50%",
                    background: "#02F5A1",
                    color: "#07191E",
                    fontSize: 14,
                    fontWeight: 700,
                  }}
                >
                  🎁
                </span>
                <div style={{ fontSize: 12, lineHeight: 1.5 }}>
                  <strong style={{ color: "#00C97F" }}>
                    Offre de lancement :
                  </strong>{" "}
                  <span style={{ color: "var(--ink)" }}>
                    50% de réduction à vie pour les 100 premiers inscrits
                  </span>
                </div>
              </div>

              <button
                type="submit"
                className="btn btn-primary btn-lg cap-submit"
              >
                Réserver mon accès prioritaire
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

              <p className="cap-form-note">
                <span className="ic">
                  <Lock className="w-3.5 h-3.5" />
                </span>
                En envoyant ce formulaire, vous acceptez d&apos;être recontacté
                par l&apos;équipe Mayylo. Vos coordonnées ne sont jamais
                partagées.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
