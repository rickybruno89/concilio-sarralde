import { SSN_TAGS, UIF_TAGS } from "./data";
import { Amp, SectionEyebrow, SmallTag } from "./shared";

export function ARTSection() {
  return (
    <div className="relative overflow-hidden bg-[#f5f5f5] px-5 py-[88px] md:px-[52px] print:min-h-[297mm] print:w-[210mm] print:break-after-page print:px-[16mm] print:py-[18mm]">
      <div className="relative z-[1] grid grid-cols-1 items-start gap-[72px] border-t-[3px] border-gold pt-12 md:grid-cols-[1fr_2fr] print:grid-cols-[1fr_2fr]">
        <div>
          <SectionEyebrow inverted>Especialización única</SectionEyebrow>
          <div className="mb-4 text-[clamp(22px,2.5vw,36px)] font-bold leading-[1.15] text-dark">
            Los únicos especialistas en Seguros <Amp /> ART de la región
          </div>
        </div>
        <div>
          <p className="mb-[18px] text-sm leading-[1.85] text-[#666]">
            La única firma de referencia en el sector asegurador de la región. Inscriptos en el Registro de Auditores Externos de la SSN, ejecutamos procedimientos acordados, presentaciones ante la SSN y acompañamiento técnico integral para compañías de seguros y ART.
          </p>
          <div className="flex flex-wrap gap-2">
            {SSN_TAGS.map((t) => <SmallTag key={t}>{t}</SmallTag>)}
          </div>
        </div>
        <div>
          <div className="mb-4 text-[clamp(22px,2.5vw,36px)] font-bold leading-[1.15] text-dark">
            Revisores Externos Independientes ante la UIF
          </div>
        </div>
        <div>
          <p className="mb-[18px] text-sm leading-[1.85] text-[#666]">
            Acompañamos a los Sujetos Obligados en todo el proceso de revisión externa: desde el diagnóstico inicial de sus controles internos hasta la elaboración del informe final, asegurando el cumplimiento en tiempo y forma de los requerimientos vigentes.
          </p>
          <div className="flex flex-wrap gap-2">
            {UIF_TAGS.map((t) => <SmallTag key={t}>{t}</SmallTag>)}
          </div>
        </div>
      </div>
    </div>
  );
}
