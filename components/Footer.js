import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-black/5 bg-white">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-12 md:grid-cols-[1.3fr_1fr_1fr_1fr]">
        <div className="space-y-4">
          <div className="flex items-center gap-3 font-display text-lg font-semibold">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-ink text-white">
              J.A.S
            </span>
            <span>Jeunesse Avenir Simple</span>
          </div>
          <p className="text-sm text-neutralink">
            Plateforme québécoise d'emplois 100% étudiants + coaching carrière. Trouve un job qui
            respecte ton horaire et bâtis un vrai plan pour la suite.
          </p>
          <div className="flex flex-wrap gap-2 text-xs text-neutralink">
            <span className="tag">Québec</span>
            <span className="tag">Étudiants</span>
            <span className="tag">Coaching</span>
          </div>
        </div>
        <div className="space-y-3 text-sm">
          <p className="font-semibold">Explorer</p>
          <div className="flex flex-col gap-2">
            <Link href="/emplois" className="block">
              Emplois
            </Link>
            <Link href="/coaching" className="block">
              Coaching
            </Link>
            <Link href="/ressources" className="block">
              Ressources
            </Link>
          </div>
        </div>
        <div className="space-y-3 text-sm">
          <p className="font-semibold">Employeurs</p>
          <div className="flex flex-col gap-2">
            <Link href="/employeurs" className="block">
              Publier une offre
            </Link>
            <Link href="/employeurs" className="block">
              Tarifs
            </Link>
            <Link href="/employeurs" className="block">
              Boost & visibilité
            </Link>
            <Link href="/contact" className="block">
              Support
            </Link>
          </div>
        </div>
        <div className="space-y-3 text-sm">
          <p className="font-semibold">À propos</p>
          <div className="flex flex-col gap-2">
            <Link href="/a-propos" className="block">
              Mission
            </Link>
            <Link href="/contact" className="block">
              Contact
            </Link>
            <Link href="/mentions-legales" className="block">
              Mentions légales
            </Link>
            <Link href="/confidentialite" className="block">
              Confidentialité
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-black/5 py-4 text-center text-xs text-neutralink">
        © 2026 J.A.S - Jeunesse Avenir Simple. Tous droits réservés.
      </div>
    </footer>
  );
}
