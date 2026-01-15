import Link from "next/link";
import Reveal from "../../../components/Reveal";

const checklist = [
  "Horaire clair (jour/soir/weekend) et compatible avec tes cours.",
  "Salaire + tips indiqués dès le départ.",
  "Lieu et distance réalistes (temps de transport).",
  "Description des tâches précise.",
  "Possibilité d'évolution ou de recommandation.",
  "Ambiance d'équipe et encadrement.",
  "Date de début réaliste pour ta session."
];

export default function ChecklistJobEtudiantPage() {
  return (
    <div className="bg-frost">
      <section className="section-spacing">
        <div className="mx-auto w-full max-w-4xl px-5">
          <Reveal>
            <div>
              <span className="tag">Checklist</span>
              <h1 className="mt-3 font-display text-3xl font-semibold">
                Checklist job étudiant
              </h1>
              <p className="mt-3 text-sm text-neutralink">
                Avant d'accepter une offre, assure-toi que tout est clair et fit avec ta réalité.
              </p>
            </div>
          </Reveal>

          <div className="mt-10 card-base p-6">
            <ul className="space-y-3 text-sm text-neutralink">
              {checklist.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-ink" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-10 card-base p-6">
            <h3 className="font-display text-xl font-semibold">Tu veux un avis rapide?</h3>
            <p className="mt-3 text-sm text-neutralink">
              Envoie l'offre et on te donne un feedback clair en moins de 24h.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex rounded-full bg-ink px-5 py-2 text-sm text-white"
            >
              Parler à un coach
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
