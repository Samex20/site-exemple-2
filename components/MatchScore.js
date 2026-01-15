"use client";

import { useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

const options = {
  horaire: ["Jour", "Soir", "Weekend"],
  domaine: ["Restauration", "Tech", "Service", "Éducation"],
  distance: ["2 km", "8 km", "15 km"],
  teletravail: ["Oui", "Non"]
};

export default function MatchScore() {
  const [prefs, setPrefs] = useState({
    horaire: "Soir",
    domaine: "Tech",
    distance: "8 km",
    teletravail: "Oui"
  });

  const reducedMotion = useReducedMotion();

  const score = useMemo(() => {
    let base = 62;
    if (prefs.horaire === "Weekend") base += 12;
    if (prefs.domaine === "Tech") base += 8;
    if (prefs.teletravail === "Oui") base += 10;
    if (prefs.distance === "2 km") base += 6;
    return Math.min(base, 96);
  }, [prefs]);

  return (
    <div className="card-base p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-neutralink">Match J.A.S</p>
          <h3 className="mt-2 font-display text-xl font-semibold">Ta compatibilité en un clin d'œil</h3>
        </div>
        <div className="text-right">
          <p className="text-xs text-neutralink">Score actuel</p>
          <p className="font-display text-3xl font-semibold text-accent">{score}%</p>
        </div>
      </div>

      <motion.div
        className="mt-4 h-2 w-full rounded-full bg-black/5"
        initial={false}
        animate={{ backgroundColor: "rgba(0,0,0,0.05)" }}
      >
        <motion.div
          className="h-2 rounded-full bg-accent"
          animate={{ width: `${score}%` }}
          transition={reducedMotion ? { duration: 0 } : { type: "spring", stiffness: 120 }}
        />
      </motion.div>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {Object.entries(options).map(([key, values]) => (
          <div key={key} className="space-y-2 text-sm">
            <p className="text-xs uppercase tracking-[0.2em] text-neutralink">{key}</p>
            <div className="flex flex-wrap gap-2">
              {values.map((value) => (
                <button
                  key={value}
                  onClick={() => setPrefs((prev) => ({ ...prev, [key]: value }))}
                  className={`rounded-full border px-3 py-1 text-xs transition ${
                    prefs[key] === value
                      ? "border-accent bg-accent text-white"
                      : "border-black/10 bg-white"
                  }`}
                >
                  {value}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
