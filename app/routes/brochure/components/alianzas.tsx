import {
  ALIANZAS_ESTRATEGICAS,
  CLIENTES_PRIVADOS,
  CLIENTES_PUBLICOS,
} from "../../../lib/data";
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

      {/* Alianzas estrategicas */}
      <div className="break-inside-avoid">
        <div className="mt-10 text-[12px] font-bold uppercase tracking-[3px] text-gold">
          Alianzas estratégicas
        </div>
        <div className="mt-6 flex gap-10">
          <img alt={"EY"} src={"./assets/ey.png"} className="block h-14" />
          <img
            alt={"DELOITTE"}
            src={"./assets/deloitte.png"}
            className="block h-14 mt-4"
          />
        </div>
        <p className="text-base font-light leading-[1.85] text-[#666] italic mt-4">
          Trabajamos en conjunto con EY y Deloitte en proyectos de alta
          complejidad a nivel local e internacional, compartiendo metodología,
          estándares y equipos.
        </p>
      </div>
    </PageSection>
  );
}
