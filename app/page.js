import Link from "next/link";
import Reveal from "../components/Reveal";
import JobCard from "../components/JobCard";

const featuredJobs = [
  {
    title: "Assistant admin — Clinique Mile-End",
    company: "Clinique Mile-End",
    city: "Montréal",
    type: "Temps partiel",
    summary: "Accueil, gestion des dossiers et suivi téléphonique. Horaire flexible pour étudiant.",
    tags: ["Montréal", "Flex", "Étudiants"],
    pay: "18 $/h",
    time: "12-18 h/sem",
    href: "/emplois/assistant-admin"
  },
  {
    title: "Barista — Café du Quartier",
    company: "Café du Quartier",
    city: "Québec",
    type: "Soir/Weekend",
    summary: "Service client, préparation café, équipe jeune. Formation payée.",
    tags: ["Service", "Soir", "Formation"],
    pay: "16 $/h + tips",
    time: "10-20 h/sem",
    href: "/emplois/barista"
  },
  {
    title: "Support TI — Startup Laval",
    company: "Nordic Apps",
    city: "Laval",
    type: "Stage",
    summary: "Support interne, tickets, matériel. Opportunité d'embauche.",
    tags: ["Tech", "Stage", "Hybride"],
    pay: "20 $/h",
    time: "15 h/sem",
    href: "/emplois/support-ti"
  }
];

const coachingPacks = [
  {
    name: "Express CV",
    price: "79 $",
    desc: "Relecture rapide + corrections impact immédiat.",
    items: ["Diagnostic express", "Corrections ciblées", "Mise en page pro"]
  },
  {
    name: "CV + Lettre",
    price: "149 $",
    desc: "Ton duo gagnant pour postuler partout.",
    items: ["CV optimisé", "Lettre personnalisable", "Conseils pour ATS"]
  },
  {
    name: "Premium",
    price: "299 $",
    desc: "Bundle complet pour décrocher vite.",
    items: ["CV + Lettre", "LinkedIn", "Entrevue", "Suivi 30 jours"]
  }
];

const testimonials = [
  {
    name: "Anabelle, UQAM",
    quote: "J'ai eu 3 entrevues en 10 jours. Le coaching a tout changé.",
    role: "Étudiante en communication"
  },
  {
    name: "Yanis, ULaval",
    quote: "Le Match J.A.S m'a aidé à cibler les bons jobs, zéro perte de temps.",
    role: "Étudiant en génie"
  }
];

export default function HomePage() {
  return (
    <div className="bg-frost">
      <section className="gradient-hero noise-bg relative overflow-hidden">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-5 pb-16 pt-24 md:grid-cols-[1.2fr_0.8fr]">
          <Reveal>
            <div className="space-y-6">
              <span className="tag">Plateforme 100% étudiante — Québec</span>
              <h1 className="font-display text-4xl font-semibold leading-tight md:text-5xl">
                Trouve un job étudiant au Québec. On t'aide à être embauché.
              </h1>
              <p className="text-base text-neutralink md:text-lg">
                J.A.S connecte les étudiants aux employeurs locaux et ajoute un coaching carrière
                rapide pour te démarquer sans stress.
              </p>
              <div className="flex flex-col gap-4 rounded-2xl border border-black/5 bg-white/90 p-4 shadow-soft md:flex-row">
                <div className="flex-1">
                  <label className="text-xs uppercase tracking-[0.24em] text-neutralink">
                    Poste
                  </label>
                  <input
                    className="mt-2 w-full border-none bg-transparent text-sm outline-none"
                    placeholder="Commis, tuteur, stage..."
                  />
                </div>
                <div className="flex-1 border-t border-black/5 pt-4 md:border-l md:border-t-0 md:pl-4 md:pt-0">
                  <label className="text-xs uppercase tracking-[0.24em] text-neutralink">
                    Ville
                  </label>
                  <input
                    className="mt-2 w-full border-none bg-transparent text-sm outline-none"
                    placeholder="Montréal, Québec, Sherbrooke"
                  />
                </div>
                <button className="rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white">
                  Trouver un job
                </button>
              </div>
              <div className="flex flex-wrap gap-3 text-xs text-neutralink">
                <span>Filtres rapides:</span>
                <button className="rounded-full border border-black/10 px-3 py-1">
                  Soir/Weekend
                </button>
                <button className="rounded-full border border-black/10 px-3 py-1">Remote</button>
                <button className="rounded-full border border-black/10 px-3 py-1">
                  18 $/h+
                </button>
                <span className="hidden sm:inline">Tu choisis, on fait le match.</span>
              </div>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="relative rounded-3xl border border-black/10 bg-white p-6 shadow-soft">
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop"
                alt="Étudiants qui collaborent dans un café de Montréal"
                className="h-64 w-full rounded-2xl object-cover"
                loading="lazy"
              />
              <div className="mt-6 grid gap-4">
                <div className="flex items-center justify-between rounded-2xl border border-black/5 bg-mist px-4 py-3 text-sm">
                  <span>Offres actives</span>
                  <strong>1 240</strong>
                </div>
                <div className="flex items-center justify-between rounded-2xl border border-black/5 bg-mist px-4 py-3 text-sm">
                  <span>Temps moyen avant embauche</span>
                  <strong>9 jours</strong>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-spacing">
        <div className="mx-auto w-full max-w-6xl px-5">
          <Reveal>
            <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
              <div className="space-y-4">
                <span className="tag">Comment ça marche</span>
                <h2 className="font-display text-3xl font-semibold">Simple, rapide, étudiant.</h2>
              </div>
              <Link
                href="/emplois"
                className="rounded-full border border-black/10 px-5 py-2 text-sm"
              >
                Voir les offres
              </Link>
            </div>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Cherche",
                text: "Utilise nos filtres intelligents pour trouver un job compatible avec ton horaire."
              },
              {
                title: "Postule",
                text: "Envoie ta candidature en un clic, CV optimisé avec nos packs coaching."
              },
              {
                title: "Réussis",
                text: "Prépare ton entrevue et décroche ton premier vrai contrat étudiant."
              }
            ].map((item, index) => (
              <Reveal key={item.title} delay={index * 100}>
                <div className="card-base h-full p-6">
                  <h3 className="font-display text-xl font-semibold">{item.title}</h3>
                  <p className="mt-3 text-sm text-neutralink">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing bg-white">
        <div className="mx-auto w-full max-w-6xl px-5">
          <Reveal>
            <div className="flex items-center justify-between">
              <div>
                <span className="tag">Offres vedettes</span>
                <h2 className="mt-3 font-display text-3xl font-semibold">Les jobs qui matchent.</h2>
              </div>
              <Link href="/emplois" className="text-sm text-accent">
                Voir toutes les offres
              </Link>
            </div>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {featuredJobs.map((job, index) => (
              <Reveal key={job.title} delay={index * 120}>
                <JobCard job={job} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing">
        <div className="mx-auto w-full max-w-6xl px-5">
          <Reveal>
            <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
              <div>
                <span className="tag">Coaching carrière</span>
                <h2 className="mt-3 font-display text-3xl font-semibold">Des packs concrets, pas de bla-bla.</h2>
              </div>
              <Link
                href="/coaching"
                className="rounded-full bg-ink px-5 py-2 text-sm text-white"
              >
                Améliorer mon CV
              </Link>
            </div>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {coachingPacks.map((pack, index) => (
              <Reveal key={pack.name} delay={index * 80}>
                <div className="card-base h-full p-6">
                  <div className="flex items-start justify-between">
                    <h3 className="font-display text-xl font-semibold">{pack.name}</h3>
                    <span className="rounded-full bg-ink px-3 py-1 text-xs text-white">
                      {pack.price}
                    </span>
                  </div>
                  <p className="mt-3 text-sm text-neutralink">{pack.desc}</p>
                  <ul className="mt-4 space-y-2 text-sm text-neutralink">
                    {pack.items.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                  <button className="mt-6 w-full rounded-full border border-black/10 px-4 py-2 text-sm">
                    Réserver une séance
                  </button>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {testimonials.map((item, index) => (
              <Reveal key={item.name} delay={index * 120}>
                <div className="card-base p-6">
                  <p className="text-sm text-neutralink">“{item.quote}”</p>
                  <p className="mt-4 font-semibold">{item.name}</p>
                  <p className="text-xs text-neutralink">{item.role}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing bg-white">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-5 md:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <div>
              <span className="tag">Employeurs</span>
              <h2 className="mt-3 font-display text-3xl font-semibold">Publiez en 2 minutes.</h2>
              <p className="mt-4 text-sm text-neutralink">
                Touchez des étudiants motivés et disponibles. Choisissez le forfait qui convient et
                boostez votre annonce au besoin.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <button className="rounded-full bg-ink px-5 py-2 text-sm text-white">
                  Publier une offre
                </button>
                <button className="rounded-full border border-black/10 px-5 py-2 text-sm">
                  Voir les tarifs
                </button>
              </div>
              <div className="mt-6 flex flex-wrap gap-4 text-xs text-neutralink">
                <span>• Validation en 24h</span>
                <span>• +48% de candidatures</span>
                <span>• Modération locale</span>
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="card-base p-6">
              <div className="space-y-4">
                {[
                  { label: "Annonce simple", price: "59 $" },
                  { label: "Pack crédits (5)", price: "249 $" },
                  { label: "Boost visibilité", price: "+39 $" }
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between rounded-2xl border border-black/5 bg-mist px-4 py-3 text-sm"
                  >
                    <span>{item.label}</span>
                    <strong>{item.price}</strong>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-spacing">
        <div className="mx-auto w-full max-w-6xl px-5">
          <Reveal>
            <div className="card-base grid gap-6 p-8 md:grid-cols-[1.2fr_0.8fr]">
              <div>
                <h2 className="font-display text-3xl font-semibold">
                  Prêt à décrocher un job étudiant qui fit avec ta vie?
                </h2>
                <p className="mt-4 text-sm text-neutralink">
                  Cherche dès maintenant ou prends un coaching pour maximiser chaque candidature.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link href="/emplois" className="rounded-full bg-ink px-5 py-2 text-sm text-white">
                    Trouver un job
                  </Link>
                  <Link
                    href="/coaching"
                    className="rounded-full border border-black/10 px-5 py-2 text-sm"
                  >
                    Booster mon CV
                  </Link>
                </div>
              </div>
              <div className="rounded-2xl border border-black/5 bg-mist p-5 text-sm">
                <p className="text-xs uppercase tracking-[0.24em] text-neutralink">
                  Tagline options
                </p>
                <ul className="mt-3 space-y-2">
                  <li>“Ton futur, simplement.”</li>
                  <li>“Un job étudiant. Un vrai plan.”</li>
                  <li>“Trouver. Postuler. Réussir.”</li>
                  <li>“Le stage qui fit avec ta session.”</li>
                  <li>“Ton premier job pro, sans stress.”</li>
                  <li>“Étudier, travailler, avancer.”</li>
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
