"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Reveal from "../../components/Reveal";

const ADMIN_KEY = "jas_admin_session";
const STORAGE_KEY = "jas_admin_data";

const defaultData = {
  jobs: [
    {
      id: "job-1",
      title: "Commis d'épicerie",
      status: "Publié",
      city: "Montréal",
      date: "Aujourd'hui",
      employerId: "emp-1"
    },
    {
      id: "job-2",
      title: "Tuteur en maths",
      status: "Brouillon",
      city: "Laval",
      date: "Hier",
      employerId: "emp-2"
    }
  ],
  employers: [
    { id: "emp-1", name: "Marché Verdun", contact: "rh@marcheverdun.ca" },
    { id: "emp-2", name: "Tutorat Nord", contact: "info@tutoratnord.ca" }
  ],
  requests: [
    {
      id: "req-1",
      title: "Préposé entrepôt",
      employer: "LogiGo",
      status: "En attente",
      city: "Brossard",
      date: "Aujourd'hui"
    }
  ],
  resources: [
    { id: "res-1", title: "CV étudiant: structure gagnante", type: "Guide", status: "Publié" },
    { id: "res-2", title: "Top 12 questions d'entrevue", type: "Article", status: "Publié" }
  ]
};

const newId = (prefix) => `${prefix}-${Date.now()}`;

export default function AdminPage() {
  const router = useRouter();
  const [tab, setTab] = useState("jobs");
  const [data, setData] = useState(defaultData);
  const [jobForm, setJobForm] = useState({ title: "", city: "", status: "Publié", employerId: "" });
  const [employerForm, setEmployerForm] = useState({ name: "", contact: "" });
  const [resourceForm, setResourceForm] = useState({ title: "", type: "Guide", status: "Brouillon" });

  useEffect(() => {
    const session = localStorage.getItem(ADMIN_KEY);
    if (session !== "active") {
      router.replace("/admin/login");
      return;
    }
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      setData(JSON.parse(stored));
    }
  }, [router]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }, [data]);

  const addJob = () => {
    if (!jobForm.title || !jobForm.city) return;
    const job = {
      id: newId("job"),
      title: jobForm.title,
      city: jobForm.city,
      status: jobForm.status,
      date: "Aujourd'hui",
      employerId: jobForm.employerId
    };
    setData((prev) => ({ ...prev, jobs: [job, ...prev.jobs] }));
    setJobForm({ title: "", city: "", status: "Publié", employerId: "" });
  };

  const updateJobStatus = (id, status) => {
    setData((prev) => ({
      ...prev,
      jobs: prev.jobs.map((job) => (job.id === id ? { ...job, status } : job))
    }));
  };

  const deleteJob = (id) => {
    setData((prev) => ({ ...prev, jobs: prev.jobs.filter((job) => job.id !== id) }));
  };

  const addEmployer = () => {
    if (!employerForm.name) return;
    const employer = {
      id: newId("emp"),
      name: employerForm.name,
      contact: employerForm.contact || "contact@entreprise.ca"
    };
    setData((prev) => ({ ...prev, employers: [employer, ...prev.employers] }));
    setEmployerForm({ name: "", contact: "" });
  };

  const deleteEmployer = (id) => {
    setData((prev) => ({
      ...prev,
      employers: prev.employers.filter((emp) => emp.id !== id),
      jobs: prev.jobs.filter((job) => job.employerId !== id)
    }));
  };

  const addResource = () => {
    if (!resourceForm.title) return;
    const resource = {
      id: newId("res"),
      title: resourceForm.title,
      type: resourceForm.type,
      status: resourceForm.status
    };
    setData((prev) => ({ ...prev, resources: [resource, ...prev.resources] }));
    setResourceForm({ title: "", type: "Guide", status: "Brouillon" });
  };

  const updateRequestStatus = (id, status) => {
    setData((prev) => ({
      ...prev,
      requests: prev.requests.map((req) => (req.id === id ? { ...req, status } : req))
    }));
  };

  return (
    <div className="bg-frost">
      <section className="section-spacing">
        <div className="mx-auto w-full max-w-6xl px-5">
          <Reveal>
            <div className="flex flex-col gap-6 md:flex-row md:items-start">
              <aside className="card-base w-full p-6 md:w-64">
                <p className="text-xs uppercase tracking-[0.24em] text-neutralink">Administration</p>
                <div className="mt-4 flex flex-col gap-2 text-sm">
                  {["jobs", "requests", "employers", "newsletter", "resources", "pages", "settings"].map(
                    (id) => (
                      <button
                        key={id}
                        onClick={() => setTab(id)}
                        className={`rounded-2xl px-4 py-3 text-left ${
                          tab === id ? "bg-ink text-white" : "border border-black/10"
                        }`}
                      >
                        {
                          {
                            jobs: "Emplois",
                            requests: "Demandes",
                            employers: "Employeurs",
                            newsletter: "Infolettre",
                            resources: "Ressources",
                            pages: "Pages & contenu",
                            settings: "Réglages"
                          }[id]
                        }
                      </button>
                    )
                  )}
                </div>
                <button
                  onClick={() => {
                    localStorage.removeItem(ADMIN_KEY);
                    router.push("/admin/login");
                  }}
                  className="mt-6 w-full rounded-full border border-black/10 px-4 py-2 text-xs"
                >
                  Déconnexion
                </button>
              </aside>

              <div className="flex-1 space-y-6">
                {tab === "jobs" && (
                  <div className="card-base p-6">
                    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                      <div>
                        <h1 className="font-display text-2xl font-semibold">Gestion des emplois</h1>
                        <p className="text-sm text-neutralink">
                          Publie, modère et booste les offres en un clic.
                        </p>
                      </div>
                    </div>
                    <div className="mt-6 grid gap-4 md:grid-cols-2">
                      <input
                        className="w-full rounded-2xl border border-black/10 px-4 py-3 text-sm"
                        placeholder="Titre du poste"
                        value={jobForm.title}
                        onChange={(event) =>
                          setJobForm((prev) => ({ ...prev, title: event.target.value }))
                        }
                      />
                      <input
                        className="w-full rounded-2xl border border-black/10 px-4 py-3 text-sm"
                        placeholder="Ville"
                        value={jobForm.city}
                        onChange={(event) =>
                          setJobForm((prev) => ({ ...prev, city: event.target.value }))
                        }
                      />
                      <select
                        className="w-full rounded-2xl border border-black/10 px-4 py-3 text-sm"
                        value={jobForm.status}
                        onChange={(event) =>
                          setJobForm((prev) => ({ ...prev, status: event.target.value }))
                        }
                      >
                        <option>Publié</option>
                        <option>Brouillon</option>
                        <option>En revue</option>
                      </select>
                      <select
                        className="w-full rounded-2xl border border-black/10 px-4 py-3 text-sm"
                        value={jobForm.employerId}
                        onChange={(event) =>
                          setJobForm((prev) => ({ ...prev, employerId: event.target.value }))
                        }
                      >
                        <option value="">Sélectionner un employeur</option>
                        {data.employers.map((emp) => (
                          <option key={emp.id} value={emp.id}>
                            {emp.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <button
                      onClick={addJob}
                      className="mt-5 rounded-full bg-ink px-5 py-2 text-sm text-white"
                    >
                      Ajouter une offre
                    </button>

                    <div className="mt-6 space-y-3 text-sm">
                      {data.jobs.map((job) => (
                        <div
                          key={job.id}
                          className="flex flex-col gap-3 rounded-2xl border border-black/5 bg-mist px-4 py-3 md:flex-row md:items-center md:justify-between"
                        >
                          <div>
                            <p className="font-semibold">{job.title}</p>
                            <p className="text-xs text-neutralink">
                              {job.city} · {job.date}
                            </p>
                          </div>
                          <div className="flex items-center gap-2 text-xs">
                            <select
                              className="rounded-full border border-black/10 px-3 py-1"
                              value={job.status}
                              onChange={(event) => updateJobStatus(job.id, event.target.value)}
                            >
                              <option>Publié</option>
                              <option>Brouillon</option>
                              <option>En revue</option>
                            </select>
                            <button
                              onClick={() => deleteJob(job.id)}
                              className="rounded-full border border-black/10 px-3 py-1"
                            >
                              Supprimer
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {tab === "requests" && (
                  <div className="card-base p-6">
                    <h1 className="font-display text-2xl font-semibold">Demandes d'employeurs</h1>
                    <p className="mt-2 text-sm text-neutralink">
                      Valide les nouveaux emplois soumis par les employeurs.
                    </p>
                    <div className="mt-6 space-y-3 text-sm">
                      {data.requests.map((req) => (
                        <div
                          key={req.id}
                          className="flex flex-col gap-3 rounded-2xl border border-black/5 bg-mist px-4 py-3 md:flex-row md:items-center md:justify-between"
                        >
                          <div>
                            <p className="font-semibold">{req.title}</p>
                            <p className="text-xs text-neutralink">
                              {req.employer} · {req.city} · {req.date}
                            </p>
                          </div>
                          <div className="flex items-center gap-2 text-xs">
                            <span className="rounded-full border border-black/10 px-3 py-1">
                              {req.status}
                            </span>
                            <button
                              onClick={() => updateRequestStatus(req.id, "Approuvé")}
                              className="rounded-full border border-black/10 px-3 py-1"
                            >
                              Approuver
                            </button>
                            <button
                              onClick={() => updateRequestStatus(req.id, "Refusé")}
                              className="rounded-full border border-black/10 px-3 py-1"
                            >
                              Refuser
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {tab === "employers" && (
                  <div className="card-base p-6">
                    <h1 className="font-display text-2xl font-semibold">Gestion des employeurs</h1>
                    <p className="mt-2 text-sm text-neutralink">
                      Ajoute, modifie et active les employeurs.
                    </p>
                    <div className="mt-6 grid gap-4 md:grid-cols-2">
                      <input
                        className="w-full rounded-2xl border border-black/10 px-4 py-3 text-sm"
                        placeholder="Nom de l'employeur"
                        value={employerForm.name}
                        onChange={(event) =>
                          setEmployerForm((prev) => ({ ...prev, name: event.target.value }))
                        }
                      />
                      <input
                        className="w-full rounded-2xl border border-black/10 px-4 py-3 text-sm"
                        placeholder="Contact email"
                        value={employerForm.contact}
                        onChange={(event) =>
                          setEmployerForm((prev) => ({ ...prev, contact: event.target.value }))
                        }
                      />
                    </div>
                    <button
                      onClick={addEmployer}
                      className="mt-5 rounded-full bg-ink px-5 py-2 text-sm text-white"
                    >
                      Ajouter un employeur
                    </button>
                    <div className="mt-6 space-y-3 text-sm">
                      {data.employers.map((emp) => (
                        <div
                          key={emp.id}
                          className="flex flex-col gap-3 rounded-2xl border border-black/5 bg-mist px-4 py-3 md:flex-row md:items-center md:justify-between"
                        >
                          <div>
                            <p className="font-semibold">{emp.name}</p>
                            <p className="text-xs text-neutralink">{emp.contact}</p>
                          </div>
                          <div className="flex items-center gap-2 text-xs">
                            <button
                              onClick={() => deleteEmployer(emp.id)}
                              className="rounded-full border border-black/10 px-3 py-1"
                            >
                              Supprimer
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {tab === "newsletter" && (
                  <div className="card-base p-6">
                    <h1 className="font-display text-2xl font-semibold">Infolettre & emails</h1>
                    <p className="mt-2 text-sm text-neutralink">
                      Segmente les étudiants et envoie des campagnes ciblées.
                    </p>
                    <div className="mt-6 grid gap-4 md:grid-cols-2">
                      <div className="rounded-2xl border border-black/5 bg-mist p-4">
                        <p className="text-xs uppercase tracking-[0.24em] text-neutralink">
                          Abonnés
                        </p>
                        <p className="mt-2 font-display text-3xl font-semibold">8 420</p>
                      </div>
                      <div className="rounded-2xl border border-black/5 bg-mist p-4">
                        <p className="text-xs uppercase tracking-[0.24em] text-neutralink">
                          Ouverture moyenne
                        </p>
                        <p className="mt-2 font-display text-3xl font-semibold">42%</p>
                      </div>
                    </div>
                    <div className="mt-6 grid gap-4 md:grid-cols-2">
                      <input
                        className="w-full rounded-2xl border border-black/10 px-4 py-3 text-sm"
                        placeholder="Objet de l'infolettre"
                      />
                      <input
                        className="w-full rounded-2xl border border-black/10 px-4 py-3 text-sm"
                        placeholder="Segment (ex: Tech, Montréal)"
                      />
                      <textarea
                        className="md:col-span-2 w-full rounded-2xl border border-black/10 px-4 py-3 text-sm"
                        rows={4}
                        placeholder="Message principal"
                      />
                    </div>
                    <button className="mt-5 rounded-full bg-ink px-5 py-2 text-sm text-white">
                      Envoyer la campagne
                    </button>
                  </div>
                )}

                {tab === "resources" && (
                  <div className="card-base p-6">
                    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                      <div>
                        <h1 className="font-display text-2xl font-semibold">
                          Ressources & templates
                        </h1>
                        <p className="text-sm text-neutralink">
                          Ajoute des guides, modèles et lead magnets.
                        </p>
                      </div>
                    </div>
                    <div className="mt-6 grid gap-4 md:grid-cols-2">
                      <input
                        className="w-full rounded-2xl border border-black/10 px-4 py-3 text-sm"
                        placeholder="Titre"
                        value={resourceForm.title}
                        onChange={(event) =>
                          setResourceForm((prev) => ({ ...prev, title: event.target.value }))
                        }
                      />
                      <select
                        className="w-full rounded-2xl border border-black/10 px-4 py-3 text-sm"
                        value={resourceForm.type}
                        onChange={(event) =>
                          setResourceForm((prev) => ({ ...prev, type: event.target.value }))
                        }
                      >
                        <option>Guide</option>
                        <option>Article</option>
                        <option>Checklist</option>
                        <option>Template</option>
                      </select>
                      <select
                        className="w-full rounded-2xl border border-black/10 px-4 py-3 text-sm"
                        value={resourceForm.status}
                        onChange={(event) =>
                          setResourceForm((prev) => ({ ...prev, status: event.target.value }))
                        }
                      >
                        <option>Publié</option>
                        <option>Brouillon</option>
                      </select>
                    </div>
                    <button
                      onClick={addResource}
                      className="mt-5 rounded-full bg-ink px-5 py-2 text-sm text-white"
                    >
                      Ajouter une ressource
                    </button>
                    <div className="mt-6 space-y-3 text-sm">
                      {data.resources.map((item) => (
                        <div
                          key={item.id}
                          className="flex flex-col gap-3 rounded-2xl border border-black/5 bg-mist px-4 py-3 md:flex-row md:items-center md:justify-between"
                        >
                          <div>
                            <p className="font-semibold">{item.title}</p>
                            <p className="text-xs text-neutralink">{item.type}</p>
                          </div>
                          <div className="flex items-center gap-2 text-xs">
                            <span className="rounded-full border border-black/10 px-3 py-1">
                              {item.status}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {tab === "pages" && (
                  <div className="card-base p-6">
                    <h1 className="font-display text-2xl font-semibold">Pages & contenu</h1>
                    <p className="mt-2 text-sm text-neutralink">
                      Modifie les sections clés du site rapidement.
                    </p>
                    <div className="mt-6 grid gap-4 md:grid-cols-2">
                      {[
                        "Accueil",
                        "Emplois",
                        "Coaching",
                        "Employeurs",
                        "À propos",
                        "Ressources"
                      ].map((page) => (
                        <div key={page} className="rounded-2xl border border-black/5 bg-mist p-4">
                          <p className="font-semibold">{page}</p>
                          <p className="mt-2 text-xs text-neutralink">Dernière modif: aujourd'hui</p>
                          <button className="mt-3 rounded-full border border-black/10 px-3 py-1 text-xs">
                            Éditer le contenu
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {tab === "settings" && (
                  <div className="card-base p-6">
                    <h1 className="font-display text-2xl font-semibold">Réglages</h1>
                    <p className="mt-2 text-sm text-neutralink">
                      Gère les accès, les admins et les préférences de la plateforme.
                    </p>
                    <div className="mt-6 space-y-4 text-sm">
                      <div className="rounded-2xl border border-black/5 bg-mist p-4">
                        <p className="font-semibold">Accès admin</p>
                        <p className="mt-2 text-xs text-neutralink">
                          2 admins actifs · dernier login il y a 3h
                        </p>
                      </div>
                      <div className="rounded-2xl border border-black/5 bg-mist p-4">
                        <p className="font-semibold">Préférences email</p>
                        <p className="mt-2 text-xs text-neutralink">
                          Notifications activées pour nouveaux emplois.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
