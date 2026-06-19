import { INDUSTRIAS } from "./data";
import {
  GoldRule,
  PageSection,
  RegistroCard,
  SectionEyebrow,
  SectionTitle,
  Tag,
} from "./shared";

export function QuienesSomosSection() {
  return (
    <PageSection id="nosotros">
      <SectionEyebrow>Quiénes somos</SectionEyebrow>
      <SectionTitle>Una firma construida sobre experiencia real</SectionTitle>
      <GoldRule />
      <div className="mt-14 grid grid-cols-1 items-start gap-[72px] xl:grid-cols-2 print:grid-cols-1">
        {/* Left column */}
        <div className="[&_p]:mb-[18px] [&_p]:text-base [&_p]:font-light [&_p]:leading-[1.9] [&_p]:text-[#555]">
          <p>
            Fundada en 2012 por Ezequiel Sarralde —contador y auditor de
            proyectos internacionales— y Octavio Concilio —contador,
            tributarista y especialista en asesoramiento a empresas públicas y
            privadas—, con la visión de ofrecer una solución profesional
            completa e integral. Desde entonces, el estudio fue ampliando su
            equipo con profesionales de disciplinas afines y consolidando
            vínculos estratégicos con colegas de Tucumán y Buenos Aires, lo que
            permitió sumar nuevos socios a la firma.
          </p>
          <div className="my-7 border-l-[3px] border-gold bg-black/[0.02] px-7 py-5">
            <div className="font-serif text italic leading-[1.85] text-[#333]">
              "Nos sumergimos en cada desafío como si fuera propio. Entendemos
              el negocio desde adentro y acompañamos cada decisión con una
              visión integral. Trabajamos junto a nuestros clientes como socios
              estratégicos, comprometidos con sus objetivos. Su crecimiento y
              éxito son también el reflejo de nuestro compromiso"
            </div>
            <div className="mt-3 text-sm font-semibold tracking-[1px] text-gold">
              — Ezequiel Sarralde; Socio Fundador.
            </div>
          </div>
          <p>
            La mayoría de nuestro plantel proviene de las principales firmas
            internacionales de auditoría y consultoría —conocidas como Big Four,
            las cuatro firmas más grandes del mundo—. Esa formación define
            nuestra metodología, rigor técnico y estándares de calidad en cada
            encargo.
          </p>
          <p>
            Contamos con proyectos activos en más de 30 países, manteniendo
            siempre el trato personalizado como pilar de nuestra propuesta.
          </p>
          <p>
            Trabajamos tanto con organismos del sector público como con empresas
            privadas, entendiendo que cada uno tiene su propia lógica, objetivos
            y exigencias regulatorias, y adaptamos nuestra metodología a cada
            realidad.
          </p>
        </div>
        {/* Right column – Registros */}
        <div className="break-inside-avoid print:pt-[18mm]">
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
      </div>

      {/* Clientes */}
      <div className="my-10">
        <SectionEyebrow>Clientes</SectionEyebrow>
        <SectionTitle>
          Nuestra experiencia es transversal a todos los sectores
        </SectionTitle>
        <GoldRule />
        <div className="my-7 border-l-[3px] border-gold bg-black/[0.02] px-7 py-5">
          <div className="font-serif text italic leading-[1.85] text-[#333]">
            "Cada proyecto representa una historia diferente, y nos enorgullece
            haber contribuido al éxito de tantas organizaciones a lo largo de
            nuestra trayectoria."
          </div>
          <div className="mt-3 text-sm font-semibold tracking-[1px] text-gold">
            — Cr. Ariel del Rivero; Socio.
          </div>
        </div>
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
