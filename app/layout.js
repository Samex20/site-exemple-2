import "./globals.css";
import { Manrope, Sora } from "next/font/google";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const display = Sora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display"
});

const body = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body"
});

export const metadata = {
  title: "J.A.S — Jeunesse Avenir Simple",
  description:
    "Plateforme québécoise d'emplois 100% étudiants + coaching carrière (CV, lettres, LinkedIn, entrevues)."
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr-CA" className={`${display.variable} ${body.variable}`}>
      <body className="min-h-screen">
        <a
          href="#contenu"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-white"
        >
          Aller au contenu
        </a>
        <Navbar />
        <main id="contenu" className="pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
