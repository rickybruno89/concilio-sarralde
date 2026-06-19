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
      <div className="relative z-[1] flex min-h-[500px] flex-col px-5 py-9 pt-[56px] md:px-[52px] print:min-h-[297mm] print:px-[16mm] print:pt-[18mm] print:pb-[5mm]">
        {/* ── Brand (centered) ── */}
        <div className="mb-10 flex flex-col items-center text-center">
          <img
            alt="Concilio Sarralde"
            src="./assets/logo-white.png"
            className="mb-3 block h-10"
          />
          <div className="text-[20px] font-bold uppercase tracking-[3px] text-white">
            Concilio <Amp /> Sarralde
          </div>
          <div className="mt-1 text-[14px] uppercase font-bold tracking-[2px] text-gray-300">
            Firma Boutique Internacional
          </div>
        </div>

        {/* Fotos */}
        <div className="grid grid-cols-3 gap-2">
          {/* Ariadna Sarralde */}
          <div className="flex flex-col items-center">
            <div className="h-30 w-30 overflow-hidden rounded-full">
              <img
                alt=""
                src="./assets/socio-ezequiel-sarralde.png"
                className="h-47 w-full object-cover object-[center_10%]"
              />
            </div>
            <span className="max-w-[150px] mt-1 text-center text-[12px] text-[#ccc]">
              Ezequiel Sarralde
            </span>
            <span className="max-w-[150px]  text-center text-[12px] text-[#ccc]">
              Auditoría y Contabilidad
            </span>
          </div>
          {/* Ariadna Sarralde */}
          <div className="flex flex-col items-center">
            <div className="h-30 w-30 overflow-hidden rounded-full">
              <img
                alt=""
                src="./assets/socio-octavio-concilio.png"
                className="h-47 w-full object-cover object-center"
              />
            </div>
            <span className="max-w-[150px] mt-1 text-center text-[12px] text-[#ccc]">
              Octavio Concilio
            </span>
            <span className="max-w-[150px] text-center text-[12px] text-[#ccc]">
              Impuestos y Laboral
            </span>
          </div>
          {/* Ariadna Sarralde */}
          <div className="flex flex-col items-center">
            <div className="h-30 w-30 overflow-hidden rounded-full">
              <img
                alt=""
                src="./assets/socio-ariel-del-rivero.png"
                className="h-47 w-full object-cover object-center"
              />
            </div>
            <span className="max-w-[150px] mt-1 text-center text-[12px] text-[#ccc]">
              Ariel Del Rivero
            </span>
            <span className="max-w-[150px] text-center text-[12px] text-[#ccc]">
              Auditoría y Contabilidad, Fusiones y Adquisiciones (M&A)
            </span>
          </div>
          {/* Ariadna Sarralde */}
          <div className="flex flex-col items-center">
            <div className="h-30 w-30 overflow-hidden rounded-full">
              <img
                alt=""
                src="./assets/socio-jorge-bustos-foglia.png"
                className="h-47 w-full object-cover object-center"
              />
            </div>
            <span className="max-w-[150px] mt-1 text-center text-[12px] text-[#ccc]">
              Jorge Bustos Foglia
            </span>
            <span className="max-w-[150px]  text-center text-[12px] text-[#ccc]">
              Control y Cumplimiento
            </span>
          </div>
          {/* Ariadna Sarralde */}
          <div className="flex flex-col items-center">
            <div className="h-30 w-30 overflow-hidden rounded-full">
              <img
                alt=""
                src="./assets/socio-ariadna-sarralde.png"
                className="h-full w-full object-cover object-[center_-250%] scale-200"
              />
            </div>
            <span className="max-w-[150px] mt-1 text-center text-[12px] text-[#ccc]">
              Ariadna Sarralde
            </span>
            <span className="max-w-[150px]  text-center text-[12px] text-[#ccc]">
              Auditoría y Contabilidad
            </span>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="mt-auto flex flex-col gap-1 border-t border-white/10 pt-5 ">
          {/* ── Oficinas ── */}
          <div className="mb-8">
            <div className="mb-5 text-[15px] font-bold uppercase tracking-[3px] text-gold">
              Nuestras oficinas
            </div>

            <div className="grid grid-cols-2">
              {/* Buenos Aires */}
              <div className="mb-5">
                <div className="mb-1 text-[16px] font-bold uppercase tracking-[1px] text-white">
                  Buenos Aires
                </div>
                <div className="text-[16px] leading-[1.7] text-[#ccc]">
                  Av. Belgrano 1217, Piso 10, Of. 106
                  <br />
                  Ciudad de Buenos Aires, Argentina
                  <br />
                  Tel. +54 11 5309 2157
                </div>
              </div>

              {/* Tucumán */}
              <div>
                <div className="mb-1 text-[16px] font-bold uppercase tracking-[1px] text-white">
                  Tucumán
                </div>
                <div className="text-[16px] leading-[1.7] text-[#ccc]">
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
          </div>

          {/* ── Demos el primer paso ── */}
          <div className="mb-8">
            <div className="mb-1 text-[16px] font-bold uppercase tracking-[1px] text-white">
              Demos el primer paso
            </div>
            <div className="mb-4 text-[16px] text-[#ccc]">
              Para consultas y propuestas, comuníquese con nosotros.
            </div>
            <span className="mb-3 flex items-center gap-2 text-[16px] text-white">
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
            <span className="flex items-center gap-2 text-[16px] text-white">
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
          <div className="text-[12px] text-white text-center">
            © 2026 Estudio Concilio <Amp /> Sarralde S.A.S. · Todos los derechos
            reservados
          </div>
          <div className="text-[12px] font-semibold text-[#ccc] text-center">
            San Miguel de Tucumán · Buenos Aires · República Argentina
          </div>
        </div>
      </div>
    </footer>
  );
}
