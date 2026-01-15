import Link from "next/link";
import MatchScore from "../../../components/MatchScore";

const tags = ["Temps partiel", "Soir", "Montréal", "Étudiants", "Remote"]; 

const checklist = [
  "Disponible 12-20 h/sem",
  "Aime le service client",
  "À l'aise avec caisse ou POS",
  "Esprit d'équipe",
  "Anglais fonctionnel"
];

const similarJobs = [
  { title: "Commis boutique", company: "Maison Canopée", href: "/emplois/commis-boutique" },
  { title: "Préposé salle", company: "Resto Limoilou", href: "/emplois/prepose-salle" },
  { title: "Assistant service", company: "Hôtel Port-Royal", href: "/emplois/assistant-service" }
];

export default function JobDetailPage() {
  return (
    <div className="bg-frost">
      <section className="section-spacing">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 md:grid-cols-[1.5fr_0.9fr]">
          <div className="space-y-6">
            <div>
              <span className="tag">Offre vedette</span>
              <h1 className="mt-3 font-display text-3xl font-semibold">Barista — Café du Quartier</h1>
              <p className="mt-2 text-sm text-neutralink">Montréal · 16 $/h + tips · Soir/Weekend</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>
            <p className="text-sm text-neutralink">
              On cherche une personne dynamique pour accueillir les clients, préparer les cafés et
              aider l'équipe lors des périodes achalandées. Horaire flexible, parfait pour étudiant.
            </p>

            <div className="card-base p-6">
              <h2 className="font-display text-xl font-semibold">Ce que tu vas faire</h2>
              <ul className="mt-4 space-y-2 text-sm text-neutralink">
                <li>• Préparer cafés, thés et collations.</li>
                <li>• Conseiller les clients et encaisser.</li>
                <li>• Garder l'espace propre et accueillant.</li>
                <li>• Soutenir l'équipe pendant les rushs.</li>
              </ul>
            </div>

            <div className="card-base p-6">
              <h3 className="font-display text-xl font-semibold">Checklist compétences</h3>
              <div className="mt-4 space-y-2 text-sm">
                {checklist.map((item) => (
                  <label key={item} className="flex items-center gap-2">
                    <input type="checkbox" className="h-4 w-4 accent-ink" />
                    <span>{item}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <button className="rounded-full bg-ink px-6 py-3 text-sm text-white">Postuler</button>
              <button className="rounded-full border border-black/10 px-6 py-3 text-sm">
                Ajouter aux favoris
              </button>
            </div>

            <div className="card-base p-6">
              <p className="text-xs uppercase tracking-[0.24em] text-neutralink">Upsell contextuel</p>
              <h3 className="mt-2 font-display text-xl font-semibold">
                Optimise ton CV pour cette offre
              </h3>
              <p className="mt-2 text-sm text-neutralink">
                Notre pack Express CV est parfait pour ce poste. Résultat en 48h.
              </p>
              <Link href="/coaching" className="mt-4 inline-flex rounded-full bg-ink px-5 py-2 text-sm text-white">
                Voir le pack Express CV
              </Link>
            </div>
          </div>

          <div className="space-y-6">
            <MatchScore />
            <div className="card-base p-6">
              <h3 className="font-display text-xl font-semibold">Infos rapides</h3>
              <ul className="mt-4 space-y-2 text-sm text-neutralink">
                <li>• Quart: Soir + weekend</li>
                <li>• Début: Dès maintenant</li>
                <li>• Lieu: Plateau Mont-Royal</li>
                <li>• Formation: Fournie</li>
              </ul>
            </div>
            <div className="card-base p-6">
              <h3 className="font-display text-xl font-semibold">Offres similaires</h3>
              <div className="mt-4 space-y-3 text-sm">
                {similarJobs.map((job) => (
                  <Link key={job.title} href={job.href} className="flex items-center justify-between">
                    <span>{job.title}</span>
                    <span className="text-xs text-neutralink">{job.company}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
