import Link from "next/link";
import Reveal from "../../../components/Reveal";

const questions = [
  "Parle-moi de toi en 60 secondes.",
  "Pourquoi ce poste?",
  "Qu'est-ce que tu connais de notre entreprise?",
  "Parle-moi d'une fois où tu as réglé un problème.",
  "Comment tu gères la pression?",
  "Quelle est ta plus grande force?",
  "Quelle compétence veux-tu améliorer?",
  "Décris une situation d'équipe difficile.",
  "Comment tu t'organises avec tes études?",
  "Quelles sont tes disponibilités?",
  "Pourquoi on devrait te choisir?",
  "As-tu des questions pour nous?"
];

export default function QuestionsEntrevuePage() {
  return (
    <div className="bg-frost">
      <section className="section-spacing">
        <div className="mx-auto w-full max-w-4xl px-5">
          <Reveal>
            <div>
              <span className="tag">Ressource entrevue</span>
              <h1 className="mt-3 font-display text-3xl font-semibold">
                Top 12 questions d'entrevue
              </h1>
              <p className="mt-3 text-sm text-neutralink">
                Prépare tes réponses en 30 minutes: structure, exemples concrets et ton naturel.
              </p>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {questions.map((question) => (
              <div key={question} className="card-base p-5">
                <p className="text-sm font-semibold">{question}</p>
                <p className="mt-2 text-xs text-neutralink">
                  Astuce: réponds avec un exemple réel + résultat.
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 card-base p-6">
            <h3 className="font-display text-xl font-semibold">Structure rapide (STAR)</h3>
            <p className="mt-3 text-sm text-neutralink">
              Situation, Tâche, Action, Résultat. Garde tes réponses à 60-90 secondes.
            </p>
            <Link
              href="/coaching"
              className="mt-6 inline-flex rounded-full bg-ink px-5 py-2 text-sm text-white"
            >
              Réserver une préparation d'entrevue
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
