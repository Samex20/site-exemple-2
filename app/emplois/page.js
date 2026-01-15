"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import JobCard from "../../components/JobCard";

const allJobs = [
  {
    title: "Commis d'épicerie",
    company: "Marché Verdun",
    city: "Montréal",
    type: "Temps partiel",
    summary: "Mise en tablette, service client, équipe dynamique.",
    tags: ["Service", "Soir", "Flex"],
    pay: "17 $/h",
    time: "12-20 h/sem",
    href: "/emplois/commis-epicerie",
    domain: "Commerce"
  },
  {
    title: "Tuteur en maths",
    company: "Tutorat Nord",
    city: "Laval",
    type: "Soir/Weekend",
    summary: "Aide aux devoirs pour secondaires. Horaire sur mesure.",
    tags: ["Éducation", "Remote", "Étudiants"],
    pay: "23 $/h",
    time: "6-12 h/sem",
    href: "/emplois/tuteur-maths",
    domain: "Éducation"
  },
  {
    title: "Préposé entrepôt",
    company: "LogiGo",
    city: "Brossard",
    type: "Temps partiel",
    summary: "Préparation des commandes, quart du soir.",
    tags: ["Entrepôt", "Soir", "Prime"],
    pay: "19 $/h",
    time: "15 h/sem",
    href: "/emplois/prepose-entrepot",
    domain: "Logistique"
  },
  {
    title: "Assistant admin",
    company: "Studio Rivière",
    city: "Québec",
    type: "Stage",
    summary: "Soutien administratif et coordination des projets.",
    tags: ["Bureau", "Stage", "Équipe"],
    pay: "18 $/h",
    time: "20 h/sem",
    href: "/emplois/assistant-admin",
    domain: "Administration"
  },
  {
    title: "Support TI",
    company: "Sphère Tech",
    city: "Montréal",
    type: "Hybride",
    summary: "Support interne et documentation technique.",
    tags: ["Tech", "Hybride", "Flex"],
    pay: "22 $/h",
    time: "12 h/sem",
    href: "/emplois/support-ti",
    domain: "Tech"
  }
];

const filters = [
  { label: "Montréal", value: "Montréal" },
  { label: "Québec", value: "Québec" },
  { label: "Laval", value: "Laval" },
  { label: "Brossard", value: "Brossard" },
  { label: "Remote", value: "Remote" }
];

export default function JobsPage() {
  const [loading, setLoading] = useState(true);
  const [grid, setGrid] = useState(true);
  const [sort, setSort] = useState("recent");
  const [advancedOpen, setAdvancedOpen] = useState(false);
  const [filtersState, setFiltersState] = useState({
    city: "Toutes",
    distance: "",
    salary: "",
    schedule: [],
    remote: "",
    domain: [],
    type: []
  });

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(timer);
  }, []);

  const jobs = useMemo(() => {
    let result = allJobs;
    if (filtersState.city !== "Toutes") {
      result = result.filter(
        (job) => job.city === filtersState.city || job.tags.includes(filtersState.city)
      );
    }
    if (filtersState.remote === "Oui") {
      result = result.filter((job) => job.tags.includes("Remote"));
    }
    if (filtersState.domain.length > 0) {
      result = result.filter((job) => filtersState.domain.includes(job.domain));
    }
    return result;
  }, [filtersState]);

  const toggleMulti = (key, value) => {
    setFiltersState((prev) => {
      const current = prev[key];
      if (!Array.isArray(current)) return prev;
      const exists = current.includes(value);
      return {
        ...prev,
        [key]: exists ? current.filter((item) => item !== value) : [...current, value]
      };
    });
  };

  return (
    <div className="bg-frost">
      <section className="section-spacing">
        <div className="mx-auto w-full max-w-6xl px-5">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="tag">Emplois étudiants</span>
              <h1 className="mt-3 font-display text-3xl font-semibold">Toutes les offres disponibles.</h1>
              <p className="mt-2 text-sm text-neutralink">
                Filtre par ville, distance, salaire ou domaine. Ajoute un coaching pour te démarquer.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setGrid(true)}
                className={`rounded-full px-4 py-2 text-xs ${
                  grid ? "bg-ink text-white" : "border border-black/10"
                }`}
              >
                Grille
              </button>
              <button
                onClick={() => setGrid(false)}
                className={`rounded-full px-4 py-2 text-xs ${
                  !grid ? "bg-ink text-white" : "border border-black/10"
                }`}
              >
                Liste
              </button>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-black/5 bg-white/90 p-4 shadow-soft">
            <div className="flex flex-col gap-4 md:flex-row md:items-center">
              <div className="flex-1">
                <label className="text-xs uppercase tracking-[0.24em] text-neutralink">
                  Poste ou mot-clé
                </label>
                <input
                  className="mt-2 w-full rounded-xl border border-black/10 px-4 py-3 text-sm"
                  placeholder="Commis, tuteur, support TI..."
                />
              </div>
              <div className="flex-1">
                <label className="text-xs uppercase tracking-[0.24em] text-neutralink">Ville</label>
                <input
                  className="mt-2 w-full rounded-xl border border-black/10 px-4 py-3 text-sm"
                  placeholder="Montréal, Québec, Sherbrooke"
                />
              </div>
              <div className="flex-1">
                <label className="text-xs uppercase tracking-[0.24em] text-neutralink">
                  Trier par
                </label>
                <select
                  className="mt-2 w-full rounded-xl border border-black/10 px-4 py-3 text-sm"
                  value={sort}
                  onChange={(event) => setSort(event.target.value)}
                >
                  <option value="recent">Plus récent</option>
                  <option value="salary">Salaire élevé</option>
                  <option value="distance">Distance</option>
                  <option value="match">Match J.A.S</option>
                </select>
              </div>
              <button className="rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white">
                Rechercher
              </button>
            </div>
            <div className="mt-4 flex flex-wrap items-center gap-3 text-xs">
              <button
                onClick={() =>
                  setFiltersState((prev) => ({ ...prev, city: "Toutes" }))
                }
                className={`rounded-full px-3 py-1 ${
                  filtersState.city === "Toutes" ? "bg-ink text-white" : "border border-black/10"
                }`}
              >
                Toutes
              </button>
              {filters.map((filter) => (
                <button
                  key={filter.value}
                  onClick={() =>
                    setFiltersState((prev) => ({ ...prev, city: filter.value }))
                  }
                  className={`rounded-full px-3 py-1 ${
                    filtersState.city === filter.value
                      ? "bg-ink text-white"
                      : "border border-black/10"
                  }`}
                >
                  {filter.label}
                </button>
              ))}
              <button
                onClick={() => setAdvancedOpen(true)}
                className="rounded-full border border-black/10 px-3 py-1"
              >
                Filtres avancés
              </button>
              <button
                onClick={() =>
                  setFiltersState({
                    city: "Toutes",
                    distance: "",
                    salary: "",
                    schedule: [],
                    remote: "",
                    domain: [],
                    type: []
                  })
                }
                className="rounded-full border border-black/10 px-3 py-1 text-neutralink"
              >
                Réinitialiser
              </button>
            </div>
          </div>

          <div className="mt-12 grid gap-8">
              {loading && (
                <div className="grid gap-6 md:grid-cols-3">
                  {Array.from({ length: 6 }).map((_, index) => (
                    <div key={index} className="card-base h-48 animate-pulse bg-white" />
                  ))}
                </div>
              )}

              {!loading && jobs.length === 0 && (
                <div className="card-base flex flex-col items-center gap-3 p-10 text-center">
                  <p className="font-display text-xl font-semibold">Aucune offre pour ce filtre.</p>
                  <p className="text-sm text-neutralink">
                    Ajuste tes critères ou ajoute une alerte pour être le premier informé.
                  </p>
                  <button className="rounded-full bg-ink px-5 py-2 text-sm text-white">
                    Créer une alerte
                  </button>
                </div>
              )}

              {!loading && jobs.length > 0 && (
                <div className={grid ? "grid gap-8 md:grid-cols-2 xl:grid-cols-3" : "grid gap-6"}>
                  {jobs.map((job) => (
                    <JobCard key={job.title} job={job} />
                  ))}
                </div>
              )}
          </div>

          <div className="mt-10 flex items-center justify-between text-sm">
            <p className="text-neutralink">Page 1 sur 6</p>
            <div className="flex items-center gap-2">
              <button className="rounded-full border border-black/10 px-4 py-2">Précédent</button>
              <button className="rounded-full bg-ink px-4 py-2 text-white">Suivant</button>
            </div>
          </div>

          <div className="mt-12 card-base flex flex-col items-start gap-4 p-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-neutralink">Moment d'upsell</p>
              <p className="mt-2 font-display text-xl font-semibold">
                Besoin d'un CV pour cette session?
              </p>
              <p className="text-sm text-neutralink">
                On optimise ton profil pour chaque annonce.
              </p>
            </div>
            <Link href="/coaching" className="rounded-full bg-ink px-5 py-2 text-sm text-white">
              Améliorer mon CV
            </Link>
          </div>
        </div>
      </section>
      {advancedOpen && (
        <div className="fixed inset-0 z-50">
          <button
            onClick={() => setAdvancedOpen(false)}
            className="absolute inset-0 bg-black/30"
            aria-label="Fermer les filtres"
          />
          <div className="absolute bottom-0 left-0 right-0 rounded-t-3xl bg-white p-6 shadow-soft md:bottom-auto md:left-1/2 md:top-1/2 md:max-w-2xl md:-translate-x-1/2 md:-translate-y-1/2 md:rounded-3xl">
            <div className="flex items-center justify-between">
              <h2 className="font-display text-xl font-semibold">Filtres avancés</h2>
              <button
                onClick={() => setAdvancedOpen(false)}
                className="rounded-full border border-black/10 px-3 py-1 text-xs"
              >
                Fermer
              </button>
            </div>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div>
                <p className="font-semibold text-ink">Distance</p>
                <div className="mt-2 flex flex-wrap gap-2 text-xs">
                  {["2 km", "8 km", "15 km"].map((value) => (
                    <button
                      key={value}
                      onClick={() =>
                        setFiltersState((prev) => ({
                          ...prev,
                          distance: prev.distance === value ? "" : value
                        }))
                      }
                      className={`rounded-full px-3 py-1 ${
                        filtersState.distance === value
                          ? "bg-ink text-white"
                          : "border border-black/10"
                      }`}
                    >
                      {value}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <p className="font-semibold text-ink">Salaire</p>
                <div className="mt-2 flex flex-wrap gap-2 text-xs">
                  {["16 $/h+", "18 $/h+", "20 $/h+"].map((value) => (
                    <button
                      key={value}
                      onClick={() =>
                        setFiltersState((prev) => ({
                          ...prev,
                          salary: prev.salary === value ? "" : value
                        }))
                      }
                      className={`rounded-full px-3 py-1 ${
                        filtersState.salary === value
                          ? "bg-ink text-white"
                          : "border border-black/10"
                      }`}
                    >
                      {value}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <p className="font-semibold text-ink">Horaires</p>
                <div className="mt-2 flex flex-wrap gap-2 text-xs">
                  {["Jour", "Soir", "Weekend"].map((value) => (
                    <button
                      key={value}
                      onClick={() => toggleMulti("schedule", value)}
                      className={`rounded-full px-3 py-1 ${
                        filtersState.schedule.includes(value)
                          ? "bg-ink text-white"
                          : "border border-black/10"
                      }`}
                    >
                      {value}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <p className="font-semibold text-ink">Remote</p>
                <div className="mt-2 flex flex-wrap gap-2 text-xs">
                  {["Oui", "Non"].map((value) => (
                    <button
                      key={value}
                      onClick={() =>
                        setFiltersState((prev) => ({
                          ...prev,
                          remote: prev.remote === value ? "" : value
                        }))
                      }
                      className={`rounded-full px-3 py-1 ${
                        filtersState.remote === value
                          ? "bg-ink text-white"
                          : "border border-black/10"
                      }`}
                    >
                      {value}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <p className="font-semibold text-ink">Domaine</p>
                <div className="mt-2 flex flex-wrap gap-2 text-xs">
                  {["Commerce", "Éducation", "Tech", "Logistique", "Administration"].map(
                    (value) => (
                      <button
                        key={value}
                        onClick={() => toggleMulti("domain", value)}
                        className={`rounded-full px-3 py-1 ${
                          filtersState.domain.includes(value)
                            ? "bg-ink text-white"
                            : "border border-black/10"
                        }`}
                      >
                        {value}
                      </button>
                    )
                  )}
                </div>
              </div>
              <div>
                <p className="font-semibold text-ink">Type</p>
                <div className="mt-2 flex flex-wrap gap-2 text-xs">
                  {["Temps partiel", "Stage"].map((value) => (
                    <button
                      key={value}
                      onClick={() => toggleMulti("type", value)}
                      className={`rounded-full px-3 py-1 ${
                        filtersState.type.includes(value)
                          ? "bg-ink text-white"
                          : "border border-black/10"
                      }`}
                    >
                      {value}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <button
                onClick={() => setAdvancedOpen(false)}
                className="rounded-full bg-ink px-5 py-2 text-sm text-white"
              >
                Appliquer
              </button>
              <button
                onClick={() =>
                  setFiltersState({
                    city: "Toutes",
                    distance: "",
                    salary: "",
                    schedule: [],
                    remote: "",
                    domain: [],
                    type: []
                  })
                }
                className="rounded-full border border-black/10 px-5 py-2 text-sm"
              >
                Réinitialiser
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
