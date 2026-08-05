import { SSN_TAGS, UIF_TAGS } from "../../../lib/data";
import { Amp, PageSection, SectionEyebrow, SmallTag, Tag } from "./shared";

export function ARTSection() {
  return (
    <PageSection id="art-section">
      <SectionEyebrow>Especialización única</SectionEyebrow>
      <div className="grid grid-cols-1 items-start gap-10 border-t-[3px] border-gold pt-12 md:grid-cols-[1fr_2fr] print:grid-cols-[1fr_2fr]">
        <div>
          <div className="mb-4 text-[clamp(22px,2.5vw,36px)] font-bold leading-[1.15] text-dark">
            Líderes en servicios para Compañías De Seguros y ART del Norte
            Argentino
          </div>
        </div>
        <div>
          <p className="mb-[18px] text-sm leading-[1.85] text-[#666]">
            El sector asegurador tiene su propia lógica, sus propios tiempos y
            sus propias exigencias. La conocemos en profundidad. Como Auditores
            Externos inscriptos ante la SSN, acompañamos a Compañías de Seguros
            y ART con el rigor técnico que el sector requiere y la cercanía de
            un equipo que entiende su negocio.
          </p>
          <div className="flex flex-wrap gap-2">
            {SSN_TAGS.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </div>
        </div>
        <div>
          <div className="mb-4 text-[clamp(22px,2.5vw,36px)] font-bold leading-[1.15] text-dark">
            Revisores Externos Independientes ante la UIF
          </div>
        </div>
        <div>
          <p className="mb-[18px] text-sm leading-[1.85] text-[#666]">
            Acompañamos a los Sujetos Obligados en todo el proceso de revisión
            externa: desde el diagnóstico inicial de sus controles internos
            hasta la elaboración del informe final, asegurando el cumplimiento
            en tiempo y forma de los requerimientos vigentes.
          </p>
          <div className="flex flex-wrap gap-2">
            {UIF_TAGS.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </div>
        </div>
      </div>
    </PageSection>
  );
}
