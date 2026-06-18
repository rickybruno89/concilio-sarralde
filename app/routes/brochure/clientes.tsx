import { CLIENTES_PRIVADOS, CLIENTES_PUBLICOS, INDUSTRIAS } from "./data";
import { ClientLogo, GoldRule, PageSection, SectionEyebrow, SectionTitle, Tag } from "./shared";

export function ClientesSection() {
  return (
    <PageSection id="clientes">
      <div className="mb-14">
        <SectionEyebrow>Clientes</SectionEyebrow>
        <SectionTitle>Nuestra experiencia es transversal a todos los sectores</SectionTitle>
        <GoldRule />
        <p className="max-w-[640px] text-base font-light leading-[1.85] text-[#666]">
          Trabajamos con empresas de distintas industrias, adaptando nuestra metodología a cada realidad, tanto en el ámbito público como privado.
        </p>
      </div>

      {/* Industrias */}
      <div className="mb-5 text-[13px] font-bold uppercase tracking-[3px] text-gold">Industrias que atendemos</div>
      <div className="border border-[#e0e0e0] p-7 mb-14">
        <div className="flex flex-wrap gap-2.5">
          {INDUSTRIAS.map((ind) => <Tag key={ind}>{ind}</Tag>)}
        </div>
      </div>

      {/* Clientes y Alianzas */}
      <div className="mt-16">
        <div className="mb-7 text-[13px] font-bold uppercase tracking-[3px] text-gold">Clientes y Alianzas</div>

        <div className="text-sm font-bold tracking-[3px] uppercase text-gold mb-4 mt-8">Sector Privado</div>
        <div className="grid grid-cols-2 border-l border-t border-[#e0e0e0] md:grid-cols-4 print:grid-cols-4">
          {CLIENTES_PRIVADOS.map((c) => <ClientLogo key={c.alt} {...c} />)}
        </div>

        <div className="text-sm font-bold tracking-[3px] uppercase text-gold mb-4 mt-10">Sector Público</div>
        <div className="grid grid-cols-2 border-l border-t border-[#e0e0e0] md:grid-cols-4 print:grid-cols-4">
          {CLIENTES_PUBLICOS.map((c) => <ClientLogo key={c.alt} {...c} />)}
        </div>
      </div>
    </PageSection>
  );
}
