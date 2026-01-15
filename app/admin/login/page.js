"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Reveal from "../../../components/Reveal";

const ADMIN_KEY = "jas_admin_session";

export default function AdminLoginPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  useEffect(() => {
    const session = localStorage.getItem(ADMIN_KEY);
    if (session === "active") {
      router.replace("/admin");
    }
  }, [router]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password.trim() === "jas-admin") {
      localStorage.setItem(ADMIN_KEY, "active");
      router.push("/admin");
    } else {
      setError("Mot de passe invalide.");
    }
  };

  return (
    <div className="bg-frost">
      <section className="section-spacing">
        <div className="mx-auto w-full max-w-xl px-5">
          <Reveal>
            <div className="card-base p-8">
              <p className="text-xs uppercase tracking-[0.24em] text-neutralink">Admin</p>
              <h1 className="mt-3 font-display text-3xl font-semibold">
                Connexion à l'administration
              </h1>
              <p className="mt-3 text-sm text-neutralink">
                Accès réservé à l'équipe J.A.S. Utilise ton mot de passe admin.
              </p>

              <form onSubmit={handleSubmit} className="mt-8 space-y-4">
                <div>
                  <label className="text-xs uppercase tracking-[0.24em] text-neutralink">
                    Mot de passe
                  </label>
                  <input
                    type="password"
                    className="mt-2 w-full rounded-xl border border-black/10 px-4 py-3 text-sm"
                    placeholder="Mot de passe admin"
                    value={password}
                    onChange={(event) => {
                      setPassword(event.target.value);
                      if (error) setError("");
                    }}
                  />
                </div>
                {error && <p className="text-xs text-accent-punch">{error}</p>}
                <button
                  type="submit"
                  className="w-full rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white"
                >
                  Se connecter
                </button>
                <p className="text-xs text-neutralink">
                  Accès démo: mot de passe <strong>jas-admin</strong>.
                </p>
              </form>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
