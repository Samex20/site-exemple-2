import Reveal from "../../components/Reveal";

const pricing = [
  {
    name: "Pay-per-post",
    price: "59 $",
    desc: "1 annonce, 30 jours",
    items: ["Modération 24h", "Reach local", "Support inclus"]
  },
  {
    name: "Pack crédits",
    price: "249 $",
    desc: "5 annonces, 60 jours",
    items: ["Économie 16%", "Gestion multi-sites", "Statistiques avancées"]
  },
  {
    name: "Boost",
    price: "+39 $",
    desc: "Boost visibilité 7 jours",
    items: ["Top résultats", "Badge vedette", "Push étudiants"]
  }
];

const stats = [
  { label: "Candidats qualifiés", value: "+48%" },
  { label: "Temps moyen avant contact", value: "36 h" },
  { label: "Étudiants actifs", value: "52k" }
];

export default function EmployersPage() {
  return (
    <div className="bg-frost">
      <section className="section-spacing">
        <div className="mx-auto w-full max-w-6xl px-5">
          <Reveal>
            <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr]">
              <div>
                <span className="tag">Employeurs</span>
                <h1 className="mt-3 font-display text-3xl font-semibold">
                  Publiez votre offre et recrutez des étudiants motivés.
                </h1>
                <p className="mt-4 text-sm text-neutralink">
                  J.A.S vous donne accès à une communauté locale qualifiée, avec des filtres par
                  horaire, disponibilité et domaine.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <button className="rounded-full bg-ink px-5 py-2 text-sm text-white">
                    Publier une offre
                  </button>
                  <button className="rounded-full border border-black/10 px-5 py-2 text-sm">
                    Demander une démo
                  </button>
                </div>
              </div>
              <div className="card-base p-6">
                <p className="text-xs uppercase tracking-[0.24em] text-neutralink">Preuves</p>
                <div className="mt-4 space-y-3 text-sm">
                  {stats.map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center justify-between rounded-2xl border border-black/5 bg-mist px-4 py-3"
                    >
                      <span>{item.label}</span>
                      <strong>{item.value}</strong>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {pricing.map((plan, index) => (
              <Reveal key={plan.name} delay={index * 80}>
                <div className="card-base h-full p-6">
                  <div className="flex items-start justify-between">
                    <h3 className="font-display text-xl font-semibold">{plan.name}</h3>
                    <span className="rounded-full bg-ink px-3 py-1 text-xs text-white">
                      {plan.price}
                    </span>
                  </div>
                  <p className="mt-3 text-sm text-neutralink">{plan.desc}</p>
                  <ul className="mt-4 space-y-2 text-sm text-neutralink">
                    {plan.items.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                  <button className="mt-6 w-full rounded-full border border-black/10 px-4 py-2 text-sm">
                    Choisir ce plan
                  </button>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-12 card-base p-6">
            <h2 className="font-display text-xl font-semibold">Publier une offre</h2>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              {[
                "Titre du poste",
                "Lieu",
                "Salaire",
                "Type de contrat",
                "Description rapide",
                "Lien de candidature"
              ].map((label) => (
                <input
                  key={label}
                  className="w-full rounded-2xl border border-black/10 px-4 py-3 text-sm"
                  placeholder={label}
                />
              ))}
            </div>
            <button className="mt-6 rounded-full bg-ink px-5 py-2 text-sm text-white">
              Publier maintenant
            </button>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="card-base p-6">
              <h3 className="font-display text-xl font-semibold">Qualité & modération</h3>
              <p className="mt-2 text-sm text-neutralink">
                Chaque annonce est vérifiée par notre équipe locale pour assurer un fit étudiant.
              </p>
            </div>
            <div className="card-base p-6">
              <h3 className="font-display text-xl font-semibold">FAQ</h3>
              <p className="mt-2 text-sm text-neutralink">
                Questions rapides? Écrivez-nous et on répond en moins de 24h.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
