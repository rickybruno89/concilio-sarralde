import { SERVICIOS } from "./data";
import { PageSection, ServiceCard } from "./shared";

export function ServiciosDetalleSection() {
  return (
    <PageSection id="servicios-detalle" className="pb-0!">
      <div className="grid grid-cols-1 md:grid-cols-4 print:grid-cols-2">
        {SERVICIOS.map((s, i) => (
          <ServiceCard
            key={i}
            title={s.title}
            items={s.items as unknown as string[]}
          />
        ))}
      </div>
    </PageSection>
  );
}
