import Reveal from "../../components/Reveal";

const widgets = [
  {
    title: "Candidatures en cours",
    value: "4",
    desc: "Suivi en temps réel des réponses."
  },
  {
    title: "CV actif",
    value: "v3.2",
    desc: "Dernière mise à jour il y a 3 jours."
  },
  {
    title: "Conseils du coach",
    value: "7",
    desc: "Actions rapides pour cette semaine."
  }
];

const tasks = [
  "Relancer Café du Quartier",
  "Compléter la section Projets",
  "Réserver une simulation d'entrevue",
  "Ajouter 3 offres aux favoris"
];

export default function StudentSpacePage() {
  return (
    <div className="bg-frost">
      <section className="section-spacing">
        <div className="mx-auto w-full max-w-6xl px-5">
          <Reveal>
            <div>
              <span className="tag">Espace étudiant</span>
              <h1 className="mt-3 font-display text-3xl font-semibold">Ton dashboard, prêt pour l'action.</h1>
              <p className="mt-2 text-sm text-neutralink">
                Suivi des candidatures, coaching et favoris au même endroit.
              </p>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {widgets.map((item, index) => (
              <Reveal key={item.title} delay={index * 90}>
                <div className="card-base p-6">
                  <p className="text-xs uppercase tracking-[0.24em] text-neutralink">{item.title}</p>
                  <p className="mt-3 font-display text-3xl font-semibold">{item.value}</p>
                  <p className="mt-2 text-sm text-neutralink">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-[1.2fr_0.8fr]">
            <div className="card-base p-6">
              <h2 className="font-display text-xl font-semibold">Suivi candidatures</h2>
              <div className="mt-4 space-y-3 text-sm">
                {[
                  { company: "Nordic Apps", role: "Support TI", status: "En entrevue" },
                  { company: "Marché Verdun", role: "Commis", status: "Envoyée" },
                  { company: "Studio Rivière", role: "Assistant admin", status: "Relance" }
                ].map((item) => (
                  <div
                    key={item.company}
                    className="flex items-center justify-between rounded-2xl border border-black/5 bg-mist px-4 py-3"
                  >
                    <div>
                      <p className="font-semibold">{item.role}</p>
                      <p className="text-xs text-neutralink">{item.company}</p>
                    </div>
                    <span className="rounded-full border border-black/10 px-3 py-1 text-xs">
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="card-base p-6">
              <h2 className="font-display text-xl font-semibold">Prochaines actions</h2>
              <ul className="mt-4 space-y-3 text-sm text-neutralink">
                {tasks.map((task) => (
                  <li key={task}>• {task}</li>
                ))}
              </ul>
              <button className="mt-6 w-full rounded-full bg-ink px-4 py-2 text-sm text-white">
                Voir mes conseils
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
