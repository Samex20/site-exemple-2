import Link from "next/link";
import Reveal from "../../components/Reveal";

const resources = [
  {
    title: "CV étudiant: structure gagnante",
    category: "CV",
    desc: "Template simple + exemples QC.",
    cta: "Voir le guide",
    href: "/ressources/cv-etudiant-structure"
  },
  {
    title: "Top 12 questions d'entrevue",
    category: "Entrevue",
    desc: "Prépare tes réponses en 30 minutes.",
    cta: "Lire l'article",
    href: "/ressources/questions-entrevue"
  },
  {
    title: "LinkedIn étudiant: quoi écrire",
    category: "LinkedIn",
    desc: "Headline, résumé, projets.",
    cta: "Voir le guide",
    href: "/ressources/linkedin-etudiant"
  },
  {
    title: "Checklist job étudiant",
    category: "Job étudiant",
    desc: "Avant d'accepter une offre.",
    cta: "Voir la checklist",
    href: "/ressources/checklist-job-etudiant"
  }
];

export default function ResourcesPage() {
  return (
    <div className="bg-frost">
      <section className="section-spacing">
        <div className="mx-auto w-full max-w-6xl px-5">
          <Reveal>
            <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
              <div>
                <span className="tag">Ressources gratuites</span>
                <h1 className="mt-3 font-display text-3xl font-semibold">
                  Articles, templates et guides pour aller plus vite.
                </h1>
              </div>
              <Link href="/coaching" className="rounded-full bg-ink px-5 py-2 text-sm text-white">
                Voir les packs coaching
              </Link>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {resources.map((item, index) => (
              <Reveal key={item.title} delay={index * 90}>
                <div className="card-base p-6">
                  <span className="tag">{item.category}</span>
                  <h3 className="mt-3 font-display text-xl font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm text-neutralink">{item.desc}</p>
                  <Link
                    href={item.href}
                    className="mt-4 inline-flex rounded-full border border-black/10 px-4 py-2 text-sm"
                  >
                    {item.cta}
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-12 card-base flex flex-col items-start gap-4 p-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-neutralink">Lead magnet</p>
              <p className="mt-2 font-display text-xl font-semibold">Obtiens nos templates pro.</p>
              <p className="text-sm text-neutralink">
                Inscris-toi pour recevoir les modèles CV et lettre gratuitement.
              </p>
            </div>
            <div className="flex w-full flex-col gap-3 md:w-auto md:flex-row">
              <input
                className="w-full rounded-full border border-black/10 px-4 py-2 text-sm"
                placeholder="Ton courriel"
              />
              <button className="rounded-full bg-ink px-5 py-2 text-sm text-white">
                Télécharger
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
