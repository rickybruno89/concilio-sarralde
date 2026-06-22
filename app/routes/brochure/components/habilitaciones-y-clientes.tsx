import { INDUSTRIAS } from "./data";
import {
  GoldRule,
  PageSection,
  RegistroCard,
  SectionEyebrow,
  SectionTitle,
  Tag,
} from "./shared";

export function HabilitacionesYClientesSection() {
  return (
    <PageSection id="nosotros">
      <div className="break-inside-avoid">
        <div className="mb-[18px] text-[12px] font-bold uppercase tracking-[3px] text-[#bbb]">
          Habilitaciones y registros oficiales
        </div>
        <div className="flex flex-col gap-3 break-inside-avoid">
          <RegistroCard
            entity="SSN"
            title="Registro de Auditores Externos - SSN"
            description="El Cr. Ezequiel Sarralde forma parte del selecto grupo de 336 Auditores Externos registrados y habilitados por la Superintendencia de Seguros de la Nación (SSN), organismo rector del mercado asegurador argentino."
          />
          <RegistroCard
            entity="UIF"
            title="Revisor Externo Independiente (REI) - UIF"
            description="El Cr. Jorge Bustos Foglia, socio del estudio, forma parte del selecto grupo de 207 Revisores Externos Independientes registrados y habilitados por la Unidad de Información Financiera (UIF), organismo rector en materia de prevención del lavado de activos y la financiación del terrorismo en la Argentina."
          />
        </div>
      </div>

      {/* Clientes */}
      <div className="my-10">
        <SectionEyebrow>Clientes</SectionEyebrow>
        <SectionTitle>
          Nuestra experiencia es transversal a todos los sectores
        </SectionTitle>
        <GoldRule />
      </div>

      {/* Industrias */}
      <div className="mb-5 text-[15px] font-bold uppercase tracking-[3px] text-gold">
        Industrias que atendemos
      </div>
      <div className="flex flex-wrap gap-1.5">
        {INDUSTRIAS.map((ind) => (
          <Tag key={ind}>{ind}</Tag>
        ))}
      </div>
    </PageSection>
  );
}
