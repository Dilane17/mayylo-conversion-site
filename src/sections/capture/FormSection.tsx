"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Lock, Clock, Headphones, Loader2 } from "lucide-react";

const WA_HREF = "https://wa.me/2290190913589";

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

const SOURCES = [
  "Facebook",
  "Instagram",
  "WhatsApp",
  "LinkedIn",
  "Recommandation",
  "Prospection terrain",
  "Google",
  "Autre",
];

// Zod validation schema
const formSchema = z.object({
  entreprise: z.string().min(1, "Indiquez le nom de votre entreprise."),
  responsable: z.string().min(1, "Indiquez votre nom."),
  pays: z.string().min(1, "Sélectionnez un pays."),
  whatsapp: z.string().min(6, "Entrez un numéro WhatsApp valide."),
  email: z.string().email("Email invalide").optional().or(z.literal("")),
  taille: z.string().min(1, "Sélectionnez la taille de votre équipe."),
  besoin: z.string().min(1, "Sélectionnez votre besoin principal."),
  source: z.string().min(1, "Indiquez comment vous avez connu Mayylo."),
});

type FormData = z.infer<typeof formSchema>;

export function FormSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      pays: "Bénin",
      entreprise: "",
      responsable: "",
      whatsapp: "",
      email: "",
      taille: "",
      besoin: "",
      source: "",
    },
  });

  const selectedPays = watch("pays");
  const country =
    COUNTRIES.find((c) => c.name === selectedPays) ?? COUNTRIES[3]; // Default to Bénin

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data,
          whatsapp: country.dial + " " + data.whatsapp.trim(),
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Erreur lors de l'enregistrement");
      }

      setIsSuccess(true);
      reset();
    } catch (error) {
      setSubmitError(
        error instanceof Error
          ? error.message
          : "Une erreur est survenue. Veuillez réessayer.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
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
                <h3>Merci pour votre inscription&nbsp;!</h3>
                <p>
                  Votre entreprise a bien été préinscrite. Nous vous
                  contacterons avant le lancement officiel de Mayylo.
                </p>
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
                    Discuter sur WhatsApp
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

            {submitError && (
              <div
                style={{
                  padding: "12px 16px",
                  background: "#FEE2E2",
                  border: "1px solid #EF4444",
                  borderRadius: "8px",
                  color: "#DC2626",
                  fontSize: "13px",
                  marginBottom: "16px",
                }}
              >
                {submitError}
              </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} noValidate>
              <div className={`field ${errors.entreprise ? "err" : ""}`}>
                <label>
                  Nom de l&apos;entreprise <span className="req">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Kër Consulting"
                  {...register("entreprise")}
                />
                {errors.entreprise && (
                  <div className="err-msg">{errors.entreprise.message}</div>
                )}
              </div>

              <div className={`field ${errors.responsable ? "err" : ""}`}>
                <label>
                  Nom du responsable <span className="req">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Aminata Sow"
                  {...register("responsable")}
                />
                {errors.responsable && (
                  <div className="err-msg">{errors.responsable.message}</div>
                )}
              </div>

              <div className={`field ${errors.email ? "err" : ""}`}>
                <label>
                  Email <span className="opt">(optionnel)</span>
                </label>
                <input
                  type="email"
                  placeholder="contact@entreprise.com"
                  {...register("email")}
                />
                {errors.email && (
                  <div className="err-msg">{errors.email.message}</div>
                )}
              </div>

              <div className="cap-field-row">
                <div className={`field ${errors.pays ? "err" : ""}`}>
                  <label>
                    Pays <span className="req">*</span>
                  </label>
                  <select
                    {...register("pays")}
                    onChange={(e) => set("pays", e.target.value)}
                  >
                    {COUNTRIES.map((c) => (
                      <option key={c.name} value={c.name}>
                        {c.flag} {c.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className={`field ${errors.taille ? "err" : ""}`}>
                  <label>
                    Taille de l&apos;équipe <span className="req">*</span>
                  </label>
                  <select {...register("taille")}>
                    <option value="">Choisir…</option>
                    <option>1 à 4 personnes</option>
                    <option>5 à 19 personnes</option>
                    <option>20 personnes ou plus</option>
                  </select>
                  {errors.taille && (
                    <div className="err-msg">{errors.taille.message}</div>
                  )}
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
                    {...register("whatsapp")}
                  />
                </div>
                {errors.whatsapp && (
                  <div className="err-msg">{errors.whatsapp.message}</div>
                )}
              </div>

              <div className={`field ${errors.besoin ? "err" : ""}`}>
                <label>
                  Votre besoin principal <span className="req">*</span>
                </label>
                <div className="cap-chips">
                  {BESOINS.map((b) => (
                    <button
                      key={b}
                      type="button"
                      className={`cap-chip ${watch("besoin") === b ? "on" : ""}`}
                      onClick={() => {
                        const event = { target: { value: b, name: "besoin" } };
                        register("besoin").onChange(event as any);
                      }}
                    >
                      <span className="rad"></span>
                      {b}
                    </button>
                  ))}
                </div>
                {errors.besoin && (
                  <div className="err-msg">{errors.besoin.message}</div>
                )}
              </div>

              <div className={`field ${errors.source ? "err" : ""}`}>
                <label>
                  Comment avez-vous entendu parler de Mayylo ?{" "}
                  <span className="req">*</span>
                </label>
                <select {...register("source")}>
                  <option value="">Sélectionnez une option…</option>
                  {SOURCES.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
                {errors.source && (
                  <div className="err-msg">{errors.source.message}</div>
                )}
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
                    1 mois d'essaie gratuit pour tous les nouveaux inscrits
                  </span>
                </div>
              </div>

              <button
                type="submit"
                className="btn btn-primary btn-lg cap-submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Envoi en cours...
                  </>
                ) : (
                  <>
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
                  </>
                )}
              </button>

              <p className="cap-form-note">
                <span className="ic">
                  <Lock className="w-3.5 h-3.5" />
                </span>
                En vous inscrivant, vous rejoignez la liste d&apos;attente et
                serez informé du lancement. Vos coordonnées ne sont jamais
                partagées.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
