import { SERVICIOS } from "./data";
import { GoldRule, PageSection, SectionEyebrow, SectionTitle, ServiceCard } from "./shared";

export function ServiciosSection() {
  return (
    <PageSection id="servicios">
      <div className="mb-12 grid grid-cols-1 items-end gap-[72px] md:grid-cols-[1fr_2fr] print:grid-cols-[1fr_2fr]">
        <div>
          <SectionEyebrow>Servicios</SectionEyebrow>
          <SectionTitle>Qué hacemos</SectionTitle>
          <GoldRule />
        </div>
        <div>
          <div className="border-l-[3px] border-gold bg-black/[0.02] px-7 py-5">
            <div className="font-serif text-base italic leading-[1.85] text-[#333]">
              "Cada cliente tiene un desafío distinto. Nos involucramos para entenderlo, diagnosticarlo y resolverlo — con equipos especializados, metodología de primer nivel y el compromiso de acompañar cada etapa del camino."
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 border-l border-t border-[#e0e0e0] md:grid-cols-4 print:grid-cols-4">
        {SERVICIOS.map((s, i) => <ServiceCard key={i} title={s.title} items={s.items as unknown as string[]} />)}
      </div>
    </PageSection>
  );
}
