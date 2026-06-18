import { CLIENTES_PRIVADOS, CLIENTES_PUBLICOS, INDUSTRIAS } from "./data";
import { ClientLogo, PageSection } from "./shared";

export function AlianzasSection() {
  return (
    <PageSection id="clientes">
      {/* Clientes y Alianzas */}
      <div className="mb-7 text-[15px] font-bold uppercase tracking-[3px] text-gold">
        Alianzas
      </div>

      <div className="text-sm font-bold tracking-[3px] uppercase text-gold mb-4 mt-8">
        Sector Privado
      </div>
      <div className="grid grid-cols-2 border-l border-t border-[#e0e0e0] md:grid-cols-4 print:grid-cols-4">
        {CLIENTES_PRIVADOS.map((c) => (
          <ClientLogo key={c.alt} {...c} />
        ))}
      </div>

      <div className="break-inside-avoid print:pt-[18mm]">
        <div className="text-sm font-bold tracking-[3px] uppercase text-gold mb-4 mt-10">
          Sector Público
        </div>
        <div className="grid grid-cols-2 border-l border-t border-[#e0e0e0] md:grid-cols-4 print:grid-cols-4">
          {CLIENTES_PUBLICOS.map((c) => (
            <ClientLogo key={c.alt} {...c} />
          ))}
        </div>
      </div>
    </PageSection>
  );
}
