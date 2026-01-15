"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const links = [
  { href: "/emplois", label: "Emplois" },
  { href: "/coaching", label: "Coaching" },
  { href: "/ressources", label: "Ressources" },
  { href: "/employeurs", label: "Employeurs" },
  { href: "/a-propos", label: "À propos" }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 nav-blur border-b border-black/5">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-4">
        <Link href="/" className="flex items-center gap-3 font-display text-lg font-semibold">
       
          <span className="hidden sm:inline">Jeunesse Avenir Simple</span>
        </Link>
        <div className="hidden items-center gap-8 text-sm font-medium md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-accent">
              {link.label}
            </Link>
          ))}
          <Link
            href="/emplois"
            className="rounded-full bg-ink px-5 py-2 text-white transition hover:bg-graphite"
          >
            Trouver un job
          </Link>
        </div>
        <button
          onClick={() => setOpen(true)}
          className="md:hidden rounded-full border border-black/10 px-4 py-2 text-sm"
          aria-label="Ouvrir le menu"
          aria-expanded={open}
        >
          Menu
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute inset-0 bg-black/20"
              aria-label="Fermer le menu"
            />
            <motion.div
              className="absolute top-0 left-0 right-0 rounded-b-3xl bg-white p-6 shadow-soft"
              initial={{ y: -40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -40, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="font-display text-base">Navigation</span>
                <button
                  onClick={() => setOpen(false)}
                  className="rounded-full border border-black/10 px-3 py-1 text-xs"
                >
                  Fermer
                </button>
              </div>
              <div className="flex flex-col gap-3 text-sm font-medium">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="rounded-2xl border border-black/5 bg-mist px-4 py-3"
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="/emplois"
                  className="rounded-full bg-ink px-4 py-2 text-center text-white"
                  onClick={() => setOpen(false)}
                >
                  Voir les offres
                </Link>
                <Link
                  href="/employeurs"
                  className="rounded-full border border-black/10 px-4 py-2 text-center"
                  onClick={() => setOpen(false)}
                >
                  Publier une offre
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
