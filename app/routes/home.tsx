import type { Route } from "./+types/home";
import { Navbar } from "~/components/website/Navbar";
import { Hero } from "~/components/website/Hero";
import { QuienesSomos } from "~/components/website/QuienesSomos";
import { Diferenciadores } from "~/components/website/Diferenciadores";
import { Servicios } from "~/components/website/Servicios";
import { Valores } from "~/components/website/Valores";
import { Presencia } from "~/components/website/Presencia";
import { Clientes } from "~/components/website/Clientes";
import { Compliance } from "~/components/website/Compliance";
import { Equipo } from "~/components/website/Equipo";
import { Footer } from "~/components/website/Footer";
import { CookieBanner } from "~/components/website/CookieBanner";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Concilio & Sarralde — Firma Boutique Internacional" },
    {
      name: "description",
      content:
        "Soluciones integrales en auditoría, consultoría, compliance y servicios profesionales con alcance en más de 30 países.",
    },
  ];
}

export default function Home() {
  return (
    <div className="bg-surface-dark text-white">
      <Navbar />
      <Hero />
      <QuienesSomos />
      <Diferenciadores />
      <Servicios />
      <Valores />
      <Presencia />
      <Clientes />
      <Compliance />
      <Equipo />
      <Footer />
      <CookieBanner />
    </div>
  );
}
