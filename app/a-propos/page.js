import Reveal from "../../components/Reveal";

const values = [
  {
    title: "Clarté",
    text: "On simplifie chaque étape: recherche, candidature, coaching, suivi."
  },
  {
    title: "Équité",
    text: "Chaque étudiant mérite les mêmes chances, peu importe son réseau."
  },
  {
    title: "Action",
    text: "Des outils concrets et rapides pour décrocher plus vite."
  }
];

const impact = [
  { label: "Étudiants accompagnés", value: "14 000+" },
  { label: "Entrevues générées", value: "38 000+" },
  { label: "Taux de placement", value: "71%" }
];

export default function AboutPage() {
  return (
    <div className="bg-frost">
      <section className="section-spacing">
        <div className="mx-auto w-full max-w-6xl px-5">
          <Reveal>
            <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr]">
              <div>
                <span className="tag">À propos</span>
                <h1 className="mt-3 font-display text-3xl font-semibold">
                  On simplifie l'avenir des étudiants québécois.
                </h1>
                <p className="mt-4 text-sm text-neutralink">
                  J.A.S est né pour rendre la recherche d'emploi étudiante claire, rapide et motivante.
                  On connecte les jeunes avec des employeurs locaux et on ajoute un coaching humain
                  pour bâtir un vrai plan de carrière.
                </p>
                <p className="mt-4 text-sm text-neutralink">
                  Notre approche combine une plateforme simple (style Indeed) et des conseils concrets
                  pour que chaque étudiant puisse avancer sans stress ni perte de temps.
                </p>
              </div>
              <div className="card-base p-6">
                <p className="text-xs uppercase tracking-[0.24em] text-neutralink">Mission</p>
                <p className="mt-3 text-sm text-neutralink">
                  Donner aux étudiants les outils pour décrocher un job qui respecte leurs études,
                  tout en développant leurs compétences pour la suite.
                </p>
                <div className="mt-6 rounded-2xl border border-black/5 bg-mist p-4 text-sm text-neutralink">
                  Notre promesse: moins de friction, plus d'actions qui mènent à un vrai job.
                </div>
              </div>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {values.map((value, index) => (
              <Reveal key={value.title} delay={index * 80}>
                <div className="card-base p-6">
                  <p className="font-display text-xl font-semibold">{value.title}</p>
                  <p className="mt-3 text-sm text-neutralink">{value.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
            <div className="card-base p-6">
              <h2 className="font-display text-xl font-semibold">Pourquoi J.A.S?</h2>
              <ul className="mt-4 space-y-2 text-sm text-neutralink">
                <li>• Un moteur d'emplois pensé 100% étudiants.</li>
                <li>• Des filtres adaptés aux horaires de session.</li>
                <li>• Du coaching humain, rapide et sans jargon.</li>
                <li>• Une communauté locale, proche des employeurs.</li>
              </ul>
            </div>
            <div className="card-base p-6">
              <h2 className="font-display text-xl font-semibold">Impact</h2>
              <div className="mt-4 space-y-3 text-sm">
                {impact.map((item) => (
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

          <div className="mt-12 card-base flex flex-col items-start gap-4 p-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-neutralink">Rejoins-nous</p>
              <p className="mt-2 font-display text-xl font-semibold">
                Tu veux un job qui respecte ta réalité étudiante?
              </p>
              <p className="text-sm text-neutralink">
                On t'aide à trouver, postuler et réussir plus vite.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href="/emplois" className="rounded-full bg-ink px-5 py-2 text-sm text-white">
                Trouver un job
              </a>
              <a href="/coaching" className="rounded-full border border-black/10 px-5 py-2 text-sm">
                Parler à un coach
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
