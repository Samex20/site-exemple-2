import Link from "next/link";
import Reveal from "../../../components/Reveal";

const checklist = [
  "Photo claire, fond simple, sourire naturel.",
  "Headline: domaine + force + dispo (ex: \"Étudiant en TI | Support & réseautique | Dispo soirs\").",
  "Résumé: 3-4 lignes, ce que tu cherches + ce que tu apportes.",
  "Expériences: 2-3 résultats concrets.",
  "Projets: cours, bénévolat, side project."
];

export default function LinkedinEtudiantPage() {
  return (
    <div className="bg-frost">
      <section className="section-spacing">
        <div className="mx-auto w-full max-w-4xl px-5">
          <Reveal>
            <div>
              <span className="tag">Ressource LinkedIn</span>
              <h1 className="mt-3 font-display text-3xl font-semibold">
                LinkedIn étudiant: quoi écrire
              </h1>
              <p className="mt-3 text-sm text-neutralink">
                Un profil simple, humain, et clair pour décrocher plus d'entrevues.
              </p>
            </div>
          </Reveal>

          <div className="mt-10 card-base p-6">
            <h2 className="font-display text-xl font-semibold">Checklist rapide</h2>
            <ul className="mt-4 space-y-2 text-sm text-neutralink">
              {checklist.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="card-base p-6">
              <h3 className="font-display text-xl font-semibold">Exemple de résumé</h3>
              <p className="mt-3 text-sm text-neutralink">
                \"Étudiant en marketing à l'UQAM, je cherche un poste temps partiel pour développer
                mes compétences en communication. J'ai déjà géré des campagnes social media et
                j'aime livrer des résultats mesurables.\"
              </p>
            </div>
            <div className="card-base p-6">
              <h3 className="font-display text-xl font-semibold">Exemple de headline</h3>
              <p className="mt-3 text-sm text-neutralink">
                \"Étudiant en génie logiciel | React & Python | Dispo soirs + weekend\"\n              </p>
            </div>
          </div>

          <div className="mt-10 card-base p-6">
            <h3 className="font-display text-xl font-semibold">Besoin d'aide?</h3>
            <p className="mt-3 text-sm text-neutralink">
              On t'aide à écrire un profil clair, aligné avec les jobs que tu vises.
            </p>
            <Link
              href="/coaching"
              className="mt-6 inline-flex rounded-full bg-ink px-5 py-2 text-sm text-white"
            >
              Optimiser mon LinkedIn
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
