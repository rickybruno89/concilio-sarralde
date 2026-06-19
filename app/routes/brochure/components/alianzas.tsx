import { CLIENTES_PRIVADOS, CLIENTES_PUBLICOS } from "./data";
import {
  ClientLogo,
  GoldRule,
  PageSection,
  SectionEyebrow,
  SectionTitle,
} from "./shared";

/** Card para Coca-Cola: texto + logo sutil detrás */
function CocaColaCard({ name }: { name: string }) {
  return (
    <div className="relative flex items-center justify-center p-6 min-h-[110px] overflow-hidden">
      <img
        alt=""
        src="./assets/coca-cola.png"
        className="absolute inset-0 m-auto h-auto max-h-[50px] w-full max-w-[100px] object-contain opacity-[0.2] grayscale"
      />
      <span className="relative z-1 text-center text-[13px] font-semibold text-[#333]">
        {name}
      </span>
    </div>
  );
}

export function AlianzasSection() {
  return (
    <PageSection id="clientes">
      <SectionEyebrow>Clientes y Alianzas</SectionEyebrow>
      <SectionTitle>Confían en nosotros</SectionTitle>
      <GoldRule />
      <p className="max-w-160 text-base font-light leading-[1.85] text-[#666] mb-8">
        Trabajamos con empresas líderes del sector privado y organismos del
        sector público, adaptando nuestra metodología a cada realidad.
      </p>

      {/* Sector Privado */}
      <div className="mb-4 text-[12px] font-bold uppercase tracking-[3px] text-gold">
        Sector Privado
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 print:grid-cols-4 mb-8">
        {CLIENTES_PRIVADOS.map((c) =>
          c.logo ? (
            <ClientLogo key={c.name} alt={c.name} src={c.logo} />
          ) : (
            <CocaColaCard key={c.name} name={c.name} />
          ),
        )}
      </div>

      {/* Sector Público */}
      <div className="break-inside-avoid">
        <div className="mb-4 text-[12px] font-bold uppercase tracking-[3px] text-gold">
          Sector Público
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 print:grid-cols-4">
          {CLIENTES_PUBLICOS.map((c) => (
            <ClientLogo key={c.name} alt={c.name} src={c.logo} />
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 items-end gap-8 md:grid-cols-[1fr_2fr] print:grid-cols-1">
        <div>
          <SectionEyebrow>Servicios</SectionEyebrow>
          <SectionTitle>
            Soluciones que generan confianza y resultados.
          </SectionTitle>
          <GoldRule />
        </div>
        <div>
          <div className="border-l-[3px] border-gold bg-black/2 px-7 py-5">
            <div className="font-serif text-base italic leading-[1.85] text-[#333]">
              "Cada desafío es único. Nos involucramos para entenderlo,
              diagnosticarlo y resolverlo, con equipos especializados,
              metodología de primer nivel y el compromiso de acompañar cada
              etapa del camino"
            </div>
            <div className="mt-3 text-sm font-semibold tracking-[1px] text-gold">
              — Cra Ariadna Sarralde; Socia.
            </div>
          </div>
        </div>
      </div>
    </PageSection>
  );
}
