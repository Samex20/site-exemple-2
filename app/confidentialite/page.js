export default function PrivacyPage() {
  return (
    <div className="bg-frost">
      <section className="section-spacing">
        <div className="mx-auto w-full max-w-4xl px-5">
          <span className="tag">Confidentialité</span>
          <h1 className="mt-3 font-display text-3xl font-semibold">Protection des données</h1>
          <p className="mt-4 text-sm text-neutralink">
            Nous collectons uniquement les informations nécessaires pour offrir le service.
            Aucune vente de données. Tu peux demander la suppression de ton compte à tout moment.
          </p>
          <p className="mt-4 text-sm text-neutralink">
            Les données sont hébergées au Canada et chiffrées en transit et au repos.
          </p>
        </div>
      </section>
    </div>
  );
}
