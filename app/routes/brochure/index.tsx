import "../../styles/brochure-print.css";

import { ARTSection } from "./art";
import { ClientesSection } from "./clientes";
import { DiferenciadoresSection } from "./diferenciadores";
import { FooterSection } from "./footer";
import { HeroSection } from "./hero";
import { MapaSection } from "./mapa";
import { MisionVisionSection } from "./mision-vision";
import { Navbar } from "./navbar";
import { QuienesSomosSection } from "./quienes-somos";
import { ServiciosSection } from "./servicios";
import { ValoresSection } from "./valores";

export function meta() {
  return [{ title: "Brochure | Concilio & Sarralde" }];
}

export default function BrochureRoute() {
  return (
    <main className="bg-white font-[Source_Sans_3,Arial,sans-serif] text-[#1a1a1a] print:bg-white">
      <Navbar />
      <HeroSection />
      <QuienesSomosSection />
      <ClientesSection />
      <ServiciosSection />
      <ARTSection />
      <MisionVisionSection />
      <DiferenciadoresSection />
      <MapaSection />
      <ValoresSection />
      <FooterSection />
    </main>
  );
}
