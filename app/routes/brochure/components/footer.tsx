import { Amp } from "./shared";

export function FooterSection() {
  return (
    <footer className="min-h-[500px] relative overflow-hidden bg-dark px-5 py-9 pt-[72px] md:px-[52px] print:min-h-[297mm] print:w-[210mm] print:break-after-page print:px-[16mm] print:py-[18mm]">
      <img
        alt=""
        src="./assets/puente-mujer.webp"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-black/80" />
      <div className="relative z-[1] grid grid-cols-1 gap-12 md:grid-cols-[1fr_1fr_1fr] print:grid-cols-[1fr_1fr_1fr]">
        {/* Col 1 – Brand */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <img
              alt="Concilio Sarralde"
              src="./assets/logo-white.png"
              className="h-[28px]"
            />
            <div className="text-[16px] font-bold tracking-[2px] uppercase text-white">
              Concilio <Amp /> Sarralde
            </div>
          </div>
          <p className="text-[15px] leading-[1.8] text-[#e0e0e0]">
            Firma boutique internacional de servicios profesionales en
            auditoría, consultoría tributaria, legal y outsourcing.
          </p>
        </div>
        {/* Col 2 – Sedes */}
        <div>
          <div className="mb-4 text-[12px] font-bold uppercase tracking-[3px] text-gold">
            Sedes
          </div>
          <div className="text-[15px] leading-[2.2] text-[#e0e0e0]">
            <strong className="text-dark">Tucumán</strong>
            <br />
            San Martín 536, Piso 3 · CP 4000
            <br />
            <strong className="text-dark">Buenos Aires</strong>
            <br />
            Av. Santa Fe 1621 · CP 1060
          </div>
        </div>
        {/* Col 3 – Contacto */}
        <div>
          <div className="mb-4 text-[12px] font-bold uppercase tracking-[3px] text-gold">
            Contacto
          </div>
          <div className="text-[15px] leading-[2.2] text-[#e0e0e0]">
            info@concilioysarralde.com
            <br />
            +54 381 421-1234
            <br />
            concilioysarralde.com
            <br />
            linkedin.com/company/concilio-sarralde
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-between gap-2 pt-6 text-center md:flex-row print:flex-row mt-8">
        <div className="text-[15px] text-[#e0e0e0]">
          © 2026 Estudio Concilio <Amp /> Sarralde S.A.S. · Todos los derechos
          reservados
        </div>
        <div className="text-[15px] text-[#e0e0e0]">
          San Miguel de Tucumán · Buenos Aires · República Argentina
        </div>
      </div>
    </footer>
  );
}
