import Link from "next/link";
import Reveal from "../../../components/Reveal";

const sections = [
  {
    title: "Structure simple qui passe partout",
    points: [
      "En-tête clair: nom, ville, téléphone, courriel, LinkedIn.",
      "Profil en 2-3 lignes: niveau d'étude + objectif job.",
      "Expériences: actions concrètes + résultats.",
      "Compétences: techniques + humaines, 8-12 max.",
      "Éducation: programme, année, projets clés."
    ]
  },
  {
    title: "Exemples concrets (QC)",
    points: [
      "Avant: \"Service client\" → Après: \"Gestion de 120+ clients/soir avec satisfaction 4.7/5\".",
      "Avant: \"Entrepôt\" → Après: \"Préparation de 150 commandes/jour avec zéro erreur\".",
      "Avant: \"Tutorat\" → Après: \"12 élèves, progression moyenne +18% en 6 semaines\"."
    ]
  }
];

export default function CvEtudiantStructurePage() {
  return (
    <div className="bg-frost">
      <section className="section-spacing">
        <div className="mx-auto w-full max-w-4xl px-5">
          <Reveal>
            <div>
              <span className="tag">Ressource CV</span>
              <h1 className="mt-3 font-display text-3xl font-semibold">
                CV étudiant: structure gagnante
              </h1>
              <p className="mt-3 text-sm text-neutralink">
                Un modèle simple, clair et adapté aux recruteurs québécois. Copie la structure
                ci-dessous et ajuste selon ton domaine.
              </p>
            </div>
          </Reveal>

          <div className="mt-10 space-y-6">
            {sections.map((section) => (
              <div key={section.title} className="card-base p-6">
                <h2 className="font-display text-xl font-semibold">{section.title}</h2>
                <ul className="mt-4 space-y-2 text-sm text-neutralink">
                  {section.points.map((point) => (
                    <li key={point}>• {point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-10 card-base p-6">
            <h3 className="font-display text-xl font-semibold">Template rapide</h3>
            <div className="mt-4 space-y-2 text-sm text-neutralink">
              <p>Prénom Nom — Montréal</p>
              <p>Courriel · Téléphone · LinkedIn</p>
              <p>Profil: Étudiant en ___, cherche un poste ___ pour ___.</p>
              <p>Expériences: 2-3 actions + résultats mesurables.</p>
              <p>Compétences: 8-12 mots-clés maximum.</p>
            </div>
            <Link
              href="/coaching"
              className="mt-6 inline-flex rounded-full bg-ink px-5 py-2 text-sm text-white"
            >
              Faire réviser mon CV
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
