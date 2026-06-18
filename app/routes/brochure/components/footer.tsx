import { Amp, PageSection } from "./shared";

export function FooterSection() {
  return (
    <footer className="relative min-h-[500px] overflow-hidden bg-dark print:min-h-[297mm] print:w-[210mm] print:break-after-page">
      {/* Background image + overlay */}
      <img
        alt=""
        src="./assets/puente-mujer.webp"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-black/80" />

      {/* Content */}
      <div className="relative z-[1] flex min-h-[500px] flex-col px-5 py-9 pt-[56px] md:px-[52px] print:min-h-[297mm] print:px-[16mm] print:py-[18mm]">
        {/* ── Brand (centered) ── */}
        <div className="mb-10 flex flex-col items-center text-center">
          <img
            alt="Concilio Sarralde"
            src="./assets/logo-white.png"
            className="mb-3 block h-20"
          />
          <div className="text-[26px] font-bold uppercase tracking-[3px] text-white">
            Concilio <Amp /> Sarralde
          </div>
          <div className="mt-1 text-[18px] uppercase tracking-[2px] text-gray-300">
            Firma Boutique Internacional
          </div>
        </div>

        {/* ── Oficinas ── */}
        <div className="mb-8">
          <div className="mb-5 text-[22px] font-bold uppercase tracking-[3px] text-gold">
            Oficinas
          </div>

          {/* Buenos Aires */}
          <div className="mb-5">
            <div className="mb-1 text-[18px] font-bold uppercase tracking-[1px] text-white">
              Buenos Aires
            </div>
            <div className="text-[18px] leading-[1.7] text-[#ccc]">
              Av. Belgrano 1217, Piso 10, Of. 106
              <br />
              Ciudad de Buenos Aires, Argentina
              <br />
              Tel. +54 11 5309 2157
            </div>
          </div>

          {/* Tucumán */}
          <div>
            <div className="mb-1 text-[18px] font-bold uppercase tracking-[1px] text-white">
              Tucumán
            </div>
            <div className="text-[18px] leading-[1.7] text-[#ccc]">
              Salta 78, Piso 4, Of. D
              <br />
              San Miguel de Tucumán, Argentina
              <br />
              <span className="text-gold">
                Escribinos por WhatsApp: +54 381 469 4769
              </span>
            </div>
          </div>
        </div>

        {/* ── Demos el primer paso ── */}
        <div className="mb-8">
          <div className="mb-1 text-[22px] font-bold text-white">
            Demos el primer paso
          </div>
          <div className="mb-4 text-[18px] text-[#ccc]">
            Para consultas y propuestas, comuníquese con nosotros.
          </div>
          <span className="mb-3 flex items-center gap-2 text-[18px] text-white">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <polyline points="2,4 12,13 22,4" />
            </svg>
            a.sarralde@concilioysarralde.com.ar
          </span>
          <span className="flex items-center gap-2 text-[18px] text-white">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <rect x="2" y="2" width="20" height="20" rx="2" />
              <line x1="8" y1="11" x2="8" y2="16" />
              <line x1="8" y1="8" x2="8" y2="8.5" />
              <path d="M12 16v-5c0 0 0-2 2-2s2 2 2 2v5" />
            </svg>
            linkedin.com/company/concilio-sarralde
          </span>
        </div>

        {/* ── Bottom bar ── */}
        <div className="mt-auto flex flex-col items-center gap-1 border-t border-white/10 pt-5 text-center">
          <div className="text-[16px] text-white">
            © 2026 Estudio Concilio <Amp /> Sarralde S.A.S. · Todos los derechos
            reservados
          </div>
          <div className="text-[16px] font-semibold text-[#ccc]">
            San Miguel de Tucumán · Buenos Aires · República Argentina
          </div>
        </div>
      </div>
    </footer>
  );
}
