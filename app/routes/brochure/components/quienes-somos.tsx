import { Amp, GoldRule, PageSection, RegistroCard, SectionEyebrow, SectionTitle } from "./shared";

export function QuienesSomosSection() {
  return (
    <PageSection id="nosotros">
      <SectionEyebrow>Quiénes somos</SectionEyebrow>
      <SectionTitle>Una firma construida sobre experiencia real</SectionTitle>
      <GoldRule />
      <div className="mt-14 grid grid-cols-1 items-start gap-[72px] md:grid-cols-2 print:grid-cols-2">
        {/* Left column */}
        <div className="[&_p]:mb-[18px] [&_p]:text-base [&_p]:font-light [&_p]:leading-[1.9] [&_p]:text-[#555]">
          <p>
            Fundada en 2012 por Ezequiel Sarralde —contador y auditor de proyectos internacionales— y Octavio Concilio —contador, tributarista y especialista en asesoramiento a empresas públicas y privadas—, con la visión de ofrecer una solución profesional completa e integral. Desde entonces, el estudio fue ampliando su equipo con profesionales de disciplinas afines y consolidando vínculos estratégicos con colegas de Tucumán y Buenos Aires, lo que permitió sumar nuevos socios a la firma.
          </p>
          <div className="my-7 border-l-[3px] border-gold bg-black/[0.02] px-7 py-5">
            <div className="font-serif text-sm italic leading-[1.85] text-[#333]">
              "Nos sumergimos en cada desafío como si fuera propio. Entendemos el negocio desde adentro y acompañamos cada decisión con visión integral. No somos un consultor externo más — el éxito de nuestros clientes es nuestro éxito."
            </div>
            <div className="mt-3 text-xs font-semibold tracking-[1px] text-gold">
              — Ezequiel Sarralde <Amp /> Octavio Concilio, Socios Fundadores
            </div>
          </div>
          <p>La mayoría de nuestro plantel proviene de las principales firmas internacionales de auditoría y consultoría —conocidas como Big Four, las cuatro firmas más grandes del mundo—. Esa formación define nuestra metodología, rigor técnico y estándares de calidad en cada encargo.</p>
          <p>Contamos con proyectos activos en más de 30 países, manteniendo siempre el trato personalizado como pilar de nuestra propuesta.</p>
          <p>Trabajamos tanto con organismos del sector público como con empresas privadas, entendiendo que cada uno tiene su propia lógica, objetivos y exigencias regulatorias, y adaptamos nuestra metodología a cada realidad.</p>
        </div>
        {/* Right column – Registros */}
        <div>
          <div className="mb-[18px] text-[12px] font-bold uppercase tracking-[3px] text-[#bbb]">Habilitaciones y registros oficiales</div>
          <div className="flex flex-col gap-3">
            <RegistroCard
              logoAlt="SSN" logoSrc="./assets/ssn.png"
              title="Registro de Auditores Externos — SSN"
              description="Ezequiel Sarralde, uno de los 336 auditores registrados en el país, socio del estudio, integra el Registro de Auditores Externos de la Superintendencia de Seguros de la Nación (SSN). Este organismo controla el mercado asegurador argentino y exige que las auditorías de las compañías de seguros sean realizadas exclusivamente por contadores inscriptos en dicho registro."
            />
            <RegistroCard
              logoAlt="UIF" logoSrc="./assets/uif.png"
              title="Revisor Externo Independiente (REI) — UIF"
              description="Jorge Bustos Foglia, uno de los 207 revisores de la UIF en el país, socio del estudio, integra el Registro de Revisores Externos Independientes de la Unidad de Información Financiera (UIF). Este organismo es responsable de la prevención del lavado de activos y la financiación del terrorismo en el país, y exige que la revisión externa de los sujetos obligados sea realizada exclusivamente por profesionales inscriptos en dicho registro."
            />
          </div>
        </div>
      </div>
    </PageSection>
  );
}
