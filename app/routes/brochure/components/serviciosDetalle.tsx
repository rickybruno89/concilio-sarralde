import { SERVICIOS } from "./data";
import {
  GoldRule,
  PageSection,
  SectionEyebrow,
  SectionTitle,
  ServiceCard,
} from "./shared";

export function ServiciosDetalleSection() {
  return (
    <PageSection id="servicios-detalle">
      <SectionEyebrow>Servicios</SectionEyebrow>
      <SectionTitle>
        Soluciones que generan confianza y resultados.
      </SectionTitle>
      <GoldRule />
      <div className="grid grid-cols-1 md:grid-cols-4 print:grid-cols-2 gap-3 mt-10">
        {SERVICIOS.map((s, i) => (
          <ServiceCard key={i} {...s} />
        ))}
      </div>
    </PageSection>
  );
}
