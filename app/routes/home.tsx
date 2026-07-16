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
    { title: "Concilio & Sarralde — Firma Boutique Internacional de Auditoría y Consultoría" },
    {
      name: "description",
      content:
        "Firma boutique internacional de auditoría, consultoría, compliance y servicios profesionales. Sede en Buenos Aires y Tucumán con alcance en más de 30 países.",
    },
    { name: "keywords", content: "auditoría, consultoría, compliance, outsourcing, impuestos, firma boutique, Argentina, Buenos Aires, Tucumán, servicios profesionales, Concilio Sarralde" },
    { name: "robots", content: "index, follow" },
    { name: "author", content: "Estudio Concilio & Sarralde S.A.S." },

    // Canonical
    { tagName: "link", rel: "canonical", href: "https://www.concilioysarralde.com.ar" },

    // Open Graph
    { property: "og:type", content: "website" },
    { property: "og:locale", content: "es_AR" },
    { property: "og:site_name", content: "Concilio & Sarralde" },
    { property: "og:title", content: "Concilio & Sarralde — Firma Boutique Internacional" },
    { property: "og:description", content: "Firma boutique internacional de auditoría, consultoría, compliance y servicios profesionales con alcance en más de 30 países." },
    { property: "og:url", content: "https://www.concilioysarralde.com.ar" },
    { property: "og:image", content: "https://www.concilioysarralde.com.ar/assets/og-image.jpg" },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },

    // Twitter Card
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "Concilio & Sarralde — Firma Boutique Internacional" },
    { name: "twitter:description", content: "Firma boutique internacional de auditoría, consultoría, compliance y servicios profesionales." },
    { name: "twitter:image", content: "https://www.concilioysarralde.com.ar/assets/og-image.jpg" },
  ];
}

export default function Home() {
  return (
    <div className="bg-surface-dark text-white">
      <a href="#nosotros" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-60 focus:bg-gold focus:px-4 focus:py-2 focus:text-surface-dark focus:font-bold">
        Saltar al contenido
      </a>
      <Navbar />
      <main>
        <Hero />
        <QuienesSomos />
        <Diferenciadores />
        <Servicios />
        <Valores />
        <Presencia />
        <Clientes />
        <Compliance />
        <Equipo />
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
}
