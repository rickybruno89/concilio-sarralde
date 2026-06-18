import "../../styles/brochure-print.css";

import { ARTSection } from "./components/art";
import { ClientesSection } from "./components/clientes";
import { DiferenciadoresSection } from "./components/diferenciadores";
import { FooterSection } from "./components/footer";
import { HeroSection } from "./components/hero";
import { MapaSection } from "./components/mapa";
import { MisionVisionSection } from "./components/mision-vision";
import { Navbar } from "./components/navbar";
import { QuienesSomosSection } from "./components/quienes-somos";
import { ServiciosSection } from "./components/servicios";
import { ValoresSection } from "./components/valores";

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
