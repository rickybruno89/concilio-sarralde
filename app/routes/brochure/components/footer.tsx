import { Amp, Avatar, PageSection, Quote } from "./shared";

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
        <div className="mb-5 flex flex-col items-center text-center">
          <img
            alt="Concilio Sarralde"
            src="./assets/logo-white.png"
            className="mb-3 block h-10"
          />
          <div className="text-[18px] font-bold uppercase tracking-[3px] text-white">
            Concilio <Amp /> Sarralde
          </div>
          <div className="mt-1 text-[13px] uppercase font-bold tracking-[2px] text-gray-300">
            Firma Boutique Internacional
          </div>
          <div className="mt-6 text-[13px] font-bold uppercase tracking-[3px] text-gold">
            Nuestro equipo
          </div>
        </div>

        {/* Fotos */}
        <div>
          <div className="flex justify-center mb-4">
            <Avatar
              src="./assets/socio-ezequiel-sarralde.png"
              name="Ezequiel Sarralde"
              role="Auditoría y Contabilidad"
              className="h-30 w-full object-cover object-[center_10%]"
            />
            <Avatar
              src="./assets/socio-octavio-concilio.png"
              name="Octavio Concilio"
              role="Impuestos y Laboral"
              className="h-30 w-full object-cover object-center"
            />
          </div>
          <div className="flex gap-6 mb-4 items-center">
            <div className="w-40">
              <Avatar
                src="./assets/socio-ariel-del-rivero.png"
                name="Ariel Del Rivero"
                role="Auditoría y Contabilidad, Fusiones y Adquisiciones (M&A). Buenos Aires"
                className="h-30 w-full object-cover object-center"
              />
            </div>
            <Quote author="Ariel del Rivero">
              "Cuando una empresa cambia de manos o busca crecer, cada detalle
              importa. Un buen asesor no solo encuentra lo que está mal —
              encuentra lo que podría salir mal. Esa anticipación es lo que
              protege a nuestros clientes."
            </Quote>
          </div>
          <div className="flex gap-6 mb-4 items-center">
            <div className="w-40">
              <Avatar
                src="./assets/socio-jorge-bustos-foglia.png"
                name="Jorge Bustos Foglia"
                role="Control y Cumplimiento"
                className="h-30 w-full object-cover object-center"
              />
            </div>
            <Quote author="Jorge Bustos Foglia">
              "Lo que no se mide no se controla, y lo que no se controla no se
              mejora. Todo sistema de cumplimiento eficaz requiere indicadores,
              monitoreo y revisión continua."
            </Quote>
          </div>
          <div className="flex gap-6 mb-4 items-center">
            <div className="w-40">
              <Avatar
                src="./assets/socio-ariadna-sarralde.png"
                name="Ariadna Sarralde"
                role="Auditoría y Contabilidad"
                className="h-full w-full object-cover object-[center_-250%] scale-200"
              />
            </div>
            <Quote author="Ariadna Sarralde">
              "El mejor asesor no es el que aparece cuando hay un problema. Es
              el que ya estaba ahí antes — conociendo el negocio, anticipando
              riesgos y construyendo junto al cliente una base sólida para
              crecer."
            </Quote>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="mt-auto flex flex-col gap-1 border-t border-white/10 pt-5 ">
          {/* ── Demos el primer paso ── */}
          <div className="mb-1 text-[14px] font-bold uppercase tracking-[1px] text-white">
            Demos el primer paso
          </div>
          <div className="mb-1 grid grid-cols-2 gap-4">
            <div className="mb-4 text-[13px] text-[#ccc]">
              Para consultas y propuestas, comuníquese con nosotros.
            </div>
            <div>
              <span className="mb-1 flex items-center gap-2 text-[13px] text-white">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <rect x="2" y="4" width="20" height="13" rx="2" />
                  <polyline points="2,4 12,13 22,4" />
                </svg>
                a.sarralde@concilioysarralde.com.ar
              </span>
              <span className="flex items-center gap-2 text-[13px] text-white">
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
          </div>

          {/* ── Oficinas ── */}
          <div className="mb-5">
            <div className="mb-3 text-[13px] font-bold uppercase tracking-[3px] text-gold">
              Nuestras oficinas
            </div>

            <div className="grid grid-cols-2">
              {/* Buenos Aires */}
              <div>
                <div className="mb-1 text-[12px] font-bold uppercase tracking-[1px] text-white">
                  Buenos Aires
                </div>
                <div className="text-[12px] leading-[1.7] text-[#ccc]">
                  Av. Belgrano 1217, Piso 10, Of. 106
                  <br />
                  Ciudad de Buenos Aires, Argentina
                  <br />
                  <span className="text-gold">
                    Escribinos por WhatsApp: +54 11 6291 9539
                  </span>
                </div>
              </div>

              {/* Tucumán */}
              <div>
                <div className="mb-1 text-[12px] font-bold uppercase tracking-[1px] text-white">
                  Tucumán
                </div>
                <div className="text-[12px] leading-[1.7] text-[#ccc]">
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

          <div className="text-[10px] text-white text-center">
            © 2026 Estudio Concilio <Amp /> Sarralde S.A.S. San Miguel de
            Tucumán · Buenos Aires · República Argentina · Todos los derechos
            reservados
          </div>
          <div className="text-[10px] font-semibold text-[#ccc] text-center"></div>
        </div>
      </div>
    </footer>
  );
}
