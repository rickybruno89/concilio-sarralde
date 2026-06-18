import "../../styles/brochure-print.css";

import { ARTSection } from "./components/art";
import { AlianzasSection } from "./components/alianzas";
import { DiferenciadoresSection } from "./components/diferenciadores";
import { FooterSection } from "./components/footer";
import { HeroSection } from "./components/hero";
import { MapaSection } from "./components/mapa";
import { QuienesSomosSection } from "./components/quienes-somos";
import { ServiciosDetalleSection } from "./components/serviciosDetalle";
import { ValoresSection } from "./components/valores";

export function meta() {
  return [{ title: "Brochure | Concilio & Sarralde" }];
}

export default function BrochureRoute() {
  return (
    <main className="bg-white font-[Source_Sans_3,Arial,sans-serif] text-[#1a1a1a] print:bg-white">
      <HeroSection />
      <QuienesSomosSection />
      <AlianzasSection />
      <ServiciosDetalleSection />
      <ARTSection />
      <DiferenciadoresSection />
      <MapaSection />
      <ValoresSection />
      <FooterSection />
    </main>
  );
}
