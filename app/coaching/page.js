import Link from "next/link";
import Reveal from "../../components/Reveal";

const packs = [
  {
    name: "Express CV",
    price: "79 $",
    desc: "Relecture rapide + corrections ciblées.",
    items: ["Diagnostic express", "Corrections ciblées", "Livraison 48h"]
  },
  {
    name: "CV + Lettre",
    price: "149 $",
    desc: "Ton duo gagnant pour postuler partout.",
    items: ["CV optimisé", "Lettre personnalisable", "Conseils ATS"]
  },
  {
    name: "LinkedIn + Positionnement",
    price: "179 $",
    desc: "Profil clair + pitch étudiant qui stand out.",
    items: ["Headline stratégique", "Bannière pro", "Plan de visibilité"]
  },
  {
    name: "Préparation d'entrevue",
    price: "129 $",
    desc: "Simulation réelle + feedback concret.",
    items: ["Mock interview", "Questions fréquentes", "Plan d'action"]
  },
  {
    name: "Premium",
    price: "299 $",
    desc: "Bundle complet pour décrocher vite.",
    items: ["CV + Lettre", "LinkedIn", "Entrevue", "Suivi 30 jours"]
  }
];

const faqs = [
  {
    q: "Combien de temps pour recevoir mon CV?",
    a: "Express CV en 48h, les bundles complets en 4-5 jours ouvrables."
  },
  {
    q: "Est-ce que vous adaptez au domaine?",
    a: "Oui, on ajuste le vocabulaire, les compétences et le format selon le poste visé."
  },
  {
    q: "Puis-je réserver une rencontre rapide?",
    a: "Oui, 30 minutes gratuites pour valider le meilleur pack pour toi."
  }
];

export default function CoachingPage() {
  return (
    <div className="bg-frost">
      <section className="section-spacing">
        <div className="mx-auto w-full max-w-6xl px-5">
          <Reveal>
            <div className="grid gap-10 md:grid-cols-[1.3fr_0.7fr]">
              <div>
                <span className="tag">Coaching carrière</span>
                <h1 className="mt-3 font-display text-3xl font-semibold">
                  Des packs faits pour décrocher, pas juste pour remplir un CV.
                </h1>
                <p className="mt-4 text-sm text-neutralink">
                  On combine stratégie, clarté et vitesse. Tu repars avec un profil prêt à postuler.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <button className="rounded-full bg-ink px-5 py-2 text-sm text-white">
                    Réserver une séance
                  </button>
                  <button className="rounded-full border border-black/10 px-5 py-2 text-sm">
                    Uploader mon CV
                  </button>
                </div>
              </div>
              <div className="card-base p-6">
                <p className="text-xs uppercase tracking-[0.24em] text-neutralink">Bénéfices</p>
                <ul className="mt-4 space-y-3 text-sm text-neutralink">
                  <li>• +2.4x plus de réponses en moyenne.</li>
                  <li>• Positionnement clair pour ton domaine.</li>
                  <li>• Feedback humain, pas automatisé.</li>
                  <li>• Ajustements inclus pendant 14 jours.</li>
                </ul>
              </div>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {packs.map((pack, index) => (
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
                    Réserver ce pack
                  </button>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            <div className="card-base p-6">
              <h3 className="font-display text-xl font-semibold">Exemples concrets</h3>
              <p className="mt-2 text-sm text-neutralink">
                Avant: "Travail en caisse" → Après: "Gestion quotidienne de 200+ transactions avec
                satisfaction client 4.8/5".
              </p>
              <p className="mt-3 text-sm text-neutralink">
                Avant: "Aide aux devoirs" → Après: "Tutorat personnalisé pour 12 élèves, hausse
                moyenne de 18%".
              </p>
            </div>
            <div className="card-base p-6">
              <h3 className="font-display text-xl font-semibold">FAQ</h3>
              <div className="mt-4 space-y-4 text-sm text-neutralink">
                {faqs.map((item) => (
                  <div key={item.q} className="border-b border-black/5 pb-4">
                    <p className="font-semibold">{item.q}</p>
                    <p className="mt-2">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-14 card-base flex flex-col items-start gap-4 p-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-neutralink">CTA</p>
              <p className="mt-2 font-display text-xl font-semibold">Prêt à booster ton profil?</p>
            </div>
            <Link href="/contact" className="rounded-full bg-ink px-5 py-2 text-sm text-white">
              Parler à un coach
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
