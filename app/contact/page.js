import Reveal from "../../components/Reveal";

export default function ContactPage() {
  return (
    <div className="bg-frost">
      <section className="section-spacing">
        <div className="mx-auto w-full max-w-6xl px-5">
          <Reveal>
            <div>
              <span className="tag">Contact</span>
              <h1 className="mt-3 font-display text-3xl font-semibold">On répond vite, promis.</h1>
              <p className="mt-2 text-sm text-neutralink">
                Étudiant ou employeur, on te guide vers la bonne solution.
              </p>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
            <div className="card-base p-6">
              <div className="grid gap-4 md:grid-cols-2">
                {[
                  "Nom complet",
                  "Courriel",
                  "Téléphone",
                  "Sujet"
                ].map((label) => (
                  <input
                    key={label}
                    className="w-full rounded-2xl border border-black/10 px-4 py-3 text-sm"
                    placeholder={label}
                  />
                ))}
              </div>
              <textarea
                className="mt-4 w-full rounded-2xl border border-black/10 px-4 py-3 text-sm"
                placeholder="Décris ton besoin"
                rows={5}
              />
              <button className="mt-6 rounded-full bg-ink px-5 py-2 text-sm text-white">
                Envoyer
              </button>
            </div>
            <div className="card-base p-6">
              <h2 className="font-display text-xl font-semibold">Coordonnées</h2>
              <p className="mt-3 text-sm text-neutralink">
                Montréal, QC · support@jas-avenir.ca
              </p>
              <div className="mt-6 space-y-3 text-sm text-neutralink">
                <p>Heures: Lun-Ven 9h-18h</p>
                <p>WhatsApp: +1 (514) 555-2030</p>
                <p>Partenariats: employeurs@jas-avenir.ca</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
