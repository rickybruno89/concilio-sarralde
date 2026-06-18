import { SSN_TAGS, UIF_TAGS } from "./data";
import { Amp, PageSection, SectionEyebrow, SmallTag } from "./shared";

export function ARTSection() {
  return (
    <PageSection id="art-section">
      <SectionEyebrow>Especialización única</SectionEyebrow>
      <div className="grid grid-cols-1 items-start gap-10 border-t-[3px] border-gold pt-12 md:grid-cols-[1fr_2fr] print:grid-cols-[1fr_2fr]">
        <div>
          <div className="mb-4 text-[clamp(22px,2.5vw,36px)] font-bold leading-[1.15] text-dark">
            Los únicos especialistas en Seguros <Amp /> ART de la región
          </div>
        </div>
        <div>
          <p className="mb-[18px] text-sm leading-[1.85] text-[#666]">
            La única firma de referencia en el sector asegurador de la región.
            Inscriptos en el Registro de Auditores Externos de la SSN,
            ejecutamos procedimientos acordados, presentaciones ante la SSN y
            acompañamiento técnico integral para compañías de seguros y ART.
          </p>
          <div className="flex flex-wrap gap-2">
            {SSN_TAGS.map((t) => (
              <SmallTag key={t}>{t}</SmallTag>
            ))}
          </div>
        </div>
        <div>
          <div className="mb-4 text-[clamp(22px,2.5vw,36px)] font-bold leading-[1.15] text-dark">
            Revisores Externos Independientes ante la UIF
          </div>
        </div>
        <div>
          <div className="mb-2 border-l-[3px] border-gold bg-black/[0.02] px-7 py-5">
            <div className="font-serif text italic leading-[1.85] text-[#333]">
              "Lo que no se mide no se controla, y lo que no se controla no se
              mejora. Por ello, todo sistema de cumplimiento eficaz requiere
              indicadores, monitoreo y revisión continua."
            </div>
            <div className="mt-3 text-sm font-semibold tracking-[1px] text-gold">
              — Cr. Jorge Bustos Foglia; Asociado.
            </div>
          </div>
          <p className="mb-[18px] text-sm leading-[1.85] text-[#666]">
            Acompañamos a los Sujetos Obligados en todo el proceso de revisión
            externa: desde el diagnóstico inicial de sus controles internos
            hasta la elaboración del informe final, asegurando el cumplimiento
            en tiempo y forma de los requerimientos vigentes.
          </p>
          <div className="flex flex-wrap gap-2">
            {UIF_TAGS.map((t) => (
              <SmallTag key={t}>{t}</SmallTag>
            ))}
          </div>
        </div>
      </div>
    </PageSection>
  );
}
