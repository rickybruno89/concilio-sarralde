import "../styles/brochure-print.css";

/* ── Reusable sub-components ── */

function Amp() {
  return <span className="font-serif italic font-normal text-gold">&amp;</span>;
}

function SectionEyebrow({ children, inverted }: { children: React.ReactNode; inverted?: boolean }) {
  return (
    <div className={`mb-4 text-[13px] font-bold uppercase tracking-[4px] ${inverted ? "text-[#e8c05a]" : "text-gold"}`}>
      {children}
    </div>
  );
}

function SectionTitle({ children, light }: { children: React.ReactNode; light?: boolean }) {
  return (
    <h2 className={`mb-5 text-[clamp(28px,3.5vw,50px)] font-bold leading-[1.08] tracking-[-0.5px] ${light ? "text-white" : "text-dark"}`}>
      {children}
    </h2>
  );
}

function GoldRule() {
  return <div className="my-6 h-[3px] w-12 bg-gold" />;
}

function PageSection({
  id,
  className = "",
  children,
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className={`px-5 py-16 md:px-[52px] md:py-[100px] print:min-h-[297mm] print:w-[210mm] print:break-after-page print:px-[16mm] print:py-[18mm] ${className}`}
    >
      {children}
    </section>
  );
}

function Stat({ value, label }: { value: React.ReactNode; label: string }) {
  return (
    <div className="border-b border-[#e0e0e0] pb-4 md:mr-12 md:border-b-0 md:border-r md:pr-12 print:mr-8 print:border-b-0 print:border-r print:pr-8">
      <div className="text-[44px] font-bold leading-none text-white md:text-dark print:text-dark">{value}</div>
      <div className="mt-1.5 text-[11px] font-semibold uppercase tracking-[2px] text-[#aaa]">{label}</div>
    </div>
  );
}

function ClientLogo({ alt, src }: { alt: string; src: string }) {
  return (
    <div className="flex items-center justify-center border-r border-b border-[#e0e0e0] bg-white p-6 min-h-[110px]">
      <img alt={alt} src={src} className="block h-auto max-h-[90px] w-full max-w-[160px] object-contain" />
    </div>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block text-[13px] font-semibold text-dark bg-[#f5f5f5] border border-[#e0e0e0] px-4 py-[7px]">
      {children}
    </span>
  );
}

function SmallTag({ children }: { children: React.ReactNode }) {
  return (
    <span className="border border-[#dcdcdc] px-3 py-[5px] text-[10px] font-bold uppercase tracking-[1.5px] text-[#666]">
      {children}
    </span>
  );
}

function ServiceCard({ title, items }: { title: React.ReactNode; items: string[] }) {
  return (
    <div className="cursor-default border-b border-r border-[#e0e0e0] border-t-2 border-t-transparent px-[22px] py-[26px] transition hover:border-t-gold hover:bg-dark [&:hover_.srv-name]:text-white [&:hover_li]:text-white/45">
      <div className="srv-name mb-3 text-[13px] font-bold text-dark">{title}</div>
      <ul className='list-none [&_li]:border-b [&_li]:border-black/[0.04] [&_li]:py-[3px] [&_li]:text-[13px] [&_li]:leading-[1.6] [&_li]:text-[#888] [&_li:before]:text-gold [&_li:before]:content-["–_"]'>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function ValueCard({ title, description }: { title: React.ReactNode; description: string }) {
  return (
    <div className="border-b border-r border-[#e0e0e0] p-[34px]">
      <div className="mb-2.5 text-[15px] font-bold text-gold">{title}</div>
      <div className="text-[13px] leading-[1.8] text-[#666]">{description}</div>
    </div>
  );
}

function DifCard({ num, title, body, foot }: { num: string; title: React.ReactNode; body: React.ReactNode; foot: string }) {
  return (
    <div className="border border-[#333] p-8">
      <div className="mb-2 text-[28px] font-bold text-gold">{num}</div>
      <div className="mb-3 text-[15px] font-bold text-white">{title}</div>
      <div className="mb-4 text-[13px] leading-[1.8] text-[#aaa]">{body}</div>
      <div className="text-[10px] font-bold uppercase tracking-[2px] text-gold">{foot}</div>
    </div>
  );
}

function RegistroCard({ logoAlt, logoSrc, title, description }: { logoAlt: string; logoSrc: string; title: string; description: string }) {
  return (
    <div className="flex items-center gap-4 border border-[#ebebeb] bg-[#f5f5f5] px-5 py-4">
      <div className="flex w-[88px] shrink-0 items-center [&_img]:h-auto [&_img]:max-h-8 [&_img]:w-full [&_img]:object-contain">
        <img alt={logoAlt} src={logoSrc} />
      </div>
      <div className="h-9 w-px shrink-0 bg-[#e0e0e0]" />
      <div className="[&_strong]:mb-[3px] [&_strong]:block [&_strong]:text-[13px] [&_strong]:font-bold [&_strong]:text-dark [&_span]:text-xs [&_span]:leading-[1.6] [&_span]:text-[#888]">
        <strong>{title}</strong>
        <span>{description}</span>
      </div>
    </div>
  );
}

/* ── Data ── */

const STATS = [
  { value: "14", label: "Años de trayectoria" },
  { value: <><em>+</em>300</>, label: "Clientes satisfechos" },
  { value: <><em>+</em>30</>, label: "Países" },
  { value: "2", label: "Sedes" },
];

const INDUSTRIAS = [
  "Organismos Estatales", "Seguros & ART", "Industrial", "Agropecuario",
  "Consumo Masivo", "Servicios Financieros", "Inmobiliario", "Tecnología", "Juegos de Azar",
];

const CLIENTES_PRIVADOS = [
  { alt: "The Coca-Cola Company", src: "./assets/coca-cola.png" },
  { alt: "EY Argentina", src: "./assets/ey.png" },
  { alt: "Deloitte", src: "./assets/deloitte.png" },
  { alt: "OSDE", src: "./assets/osde.png" },
  { alt: "La Serenísima", src: "./assets/la-serenisima.png" },
  { alt: "Coprotab", src: "./assets/coprotab.png" },
  { alt: "Colegio de Graduados en Ciencias Económicas de Tucumán", src: "./assets/colegio-de-graduados.png" },
];

const CLIENTES_PUBLICOS = [
  { alt: "Caja Popular de Ahorros", src: "./assets/cpa.png" },
  { alt: "PopulART", src: "./assets/populart.png" },
  { alt: "Caja popular de ahorros seguros", src: "./assets/cpa-seguros.png" },
  { alt: "Municipalidad de San Miguel de Tucumán", src: "./assets/municipalidad-smt.png" },
  { alt: "CPM GIRSU", src: "./assets/cpm-girsu.png" },
  { alt: "Quiniela", src: "./assets/quiniela.png" },
  { alt: "Hipodromo", src: "./assets/hipodromo.png" },
  { alt: "Casino", src: "./assets/casino.png" },
  { alt: "Tuqui 10", src: "./assets/tuqui.png" },
];

const SERVICIOS = [
  { title: <>Auditoría <Amp /> Control</>, items: ["Control externo de EECC","Control interno y operativo","Due Diligence","Procedimientos acordados","Revisiones especiales","Auditoría operativa de procesos","Certificaciones contables","Balance Social",<>Seguros <Amp /> ART ↓</>] },
  { title: "Consultoría Tributaria", items: ["Planeamiento fiscal","Liquidaciones nac. y prov.","Precios de transferencia","Tributación internacional","Convenios doble imposición","Recupero de impuestos","Defensa en inspecciones","Gestión ejecuciones fiscales"] },
  { title: "Área Legal", items: ["Constitución de sociedades","Fusiones y adquisiciones","Asesoramiento societario","Compliance legal","Disolución de sociedades",<>Actas Directorio <Amp /> Asamblea</>,"Presentaciones ante IGJ","Conflictos societarios"] },
  { title: <>Outsourcing <Amp /> RRHH</>, items: ["Outsourcing contable","Liquidación de sueldos","Gestión de RRHH","Selección de personal","Consultoría laboral","Capacitación empresarial","Evaluación del desempeño","Planes de carrera"] },
  { title: "Información de Gestión", items: ["Analytics y tableros","Costos y rentabilidades","Reingeniería de procesos","Rediseño de reportes","Control interno","Homogeneización de datos","Presupuestos y proyecciones"] },
  { title: <>M<Amp />A <Amp /> Emprendedores</>, items: ["Planes de negocio","Análisis de inversión","Carpeta financiera","Due diligence compra/venta","Valuación de empresas","Búsqueda de compradores","Certificado PyME","Start Up a PyME"] },
  { title: "Compliance", items: ["LA/FT/PT","Programa de integridad","Canales de denuncia",'Empresas "B"',"Control de sistemas internos","Manual de prevención","Oficial de cumplimiento"] },
  { title: "Diagnóstico Empresarial", items: ["Visita y relevamiento in situ","Diagnóstico de procesos","Identificación de problemas","Recomendaciones de mejora","Seguimiento de implementación","Detección de riesgos","Plan de acción","Informe ejecutivo"] },
] as const;

const VALORES = [
  { title: "Confidencialidad", description: "Trabajamos bajo la más estricta reserva y secreto profesional. La información de nuestros clientes es sagrada." },
  { title: "Confiabilidad", description: "Nuestros clientes deben considerarnos como un proveedor confiable, en todos los aspectos de nuestros servicios." },
  { title: "Trabajo en Equipo", description: "La mejor forma de lograr objetivos con la máxima calidad posible y en los tiempos acordados." },
  { title: <>Integridad, Ética <Amp /> Calidad Humana</>, description: "Los cimientos de nuestros trabajos, orientados al prestigio y la seriedad durante y después de cumplidos los objetivos." },
  { title: <>Transparencia <Amp /> Honestidad</>, description: "Política totalmente transparente para con nuestro cliente, sin lugar a dudas en el alcance y la prestación de nuestros servicios." },
  { title: "Flexibilidad", description: "Ante un mundo de permanente cambio, trabajamos con adaptabilidad. Nos ajustamos a cada cliente, industria y contexto." },
];

const DIFERENCIADORES = [
  { num: "01", title: "Equipo Interdisciplinario", body: "Contadores, auditores, abogados y especialistas en sistemas trabajando de forma integrada. Una sola firma, todas las respuestas.", foot: "Área Legal Propia" },
  { num: "02", title: "ADN Big Four", body: "La mayoría de nuestro plantel proviene de las principales firmas internacionales de auditoría y consultoría — conocidas como Big Four, las 4 firmas más grandes del mundo. Metodología global con cercanía local y atención personalizada.", foot: "Estándares Internacionales" },
  { num: "03", title: "Únicos en la Región", body: <>La única firma de la región con equipo dedicado al control y procedimientos acordados para Seguros <Amp /> ART. Inscriptos en el Registro de Auditores Externos de la SSN y habilitados como Revisores Externos Independientes (REI) ante la UIF — dos de los registros más exigentes del sistema regulatorio argentino.</>, foot: "SSN · UIF · ART" },
  { num: "04", title: "Alcance Global", body: "Proyectos activos en más de 30 países. Ejecutamos procedimientos acordados para The Coca-Cola Company, verificando estándares en todo el continente americano.", foot: "+30 Países" },
  { num: "05", title: "Independencia Total", body: "Independencia profesional que garantiza estrictas políticas de confidencialidad y objetividad en cada encargo, sin conflictos de interés.", foot: "Confidencialidad Absoluta" },
  { num: "06", title: <>Sector Público <Amp /> Privado</>, body: "Experiencia en organismos públicos y empresas privadas. Entendemos que los objetivos del sector público son distintos y adaptamos nuestra metodología a cada realidad.", foot: "Experiencia Transversal" },
];

const SSN_TAGS = ["Control","Asesoramiento técnico","Procedimientos acordados","Reservas técnicas","Relaciones técnicas","Requerimientos SSN","FFEP","Cumplimiento SRT"];
const UIF_TAGS = ["Diagnóstico de controles internos","Revisión externa independiente","Informe REI","Sujetos Obligados","LA/FT/PT","Cumplimiento UIF"];

/* ── Section Components ── */

function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden border-b-4 border-gold bg-white px-5 py-14 pt-[100px] md:px-[52px] md:py-[88px] md:pt-[148px] print:min-h-[297mm] print:w-[210mm] print:break-after-page print:px-[16mm] print:py-[18mm]">
      <img alt="" className="absolute inset-0 h-full w-full object-cover object-center brightness-[0.3] md:left-auto md:right-0 md:w-[48%] md:brightness-[0.7] print:right-0 print:w-[48%] print:brightness-[0.7]" src="./assets/hero.png" />
      <div className="relative z-[1] max-w-[680px]">
        <div className="mb-7 text-[11px] font-bold uppercase tracking-[4px] text-gold">Firma Boutique Internacional · Desde 2012</div>
        <h1 className="mb-8 text-[40px] font-bold leading-none tracking-[-1px] text-white md:text-[clamp(46px,6vw,88px)] md:tracking-[-2px] md:text-dark print:text-dark [&_em]:not-italic [&_em]:text-gold">
          Experiencia global<br /><em>Soluciones locales</em>
        </h1>
        <p className="mb-14 max-w-[560px] text-[15px] font-light leading-[1.85] text-white md:text-[17px] md:text-[#555] print:text-[#555]">
          Profesionales de las ciencias económicas, jurídicas y tecnológicas trabajando como un solo equipo interdisciplinario. Formados en las firmas de mayor prestigio internacional, comprometidos con cada cliente.
        </p>
        <div className="flex flex-col gap-5 pt-10 md:flex-row md:flex-wrap md:gap-0 print:flex-row print:gap-0">
          {STATS.map((s) => <Stat key={s.label} value={s.value} label={s.label} />)}
        </div>
      </div>
    </section>
  );
}

function QuienesSomosSection() {
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
          <div className="mb-[18px] text-[10px] font-bold uppercase tracking-[3px] text-[#bbb]">Habilitaciones y registros oficiales</div>
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

function ClientesSection() {
  return (
    <PageSection id="clientes">
      <div className="mb-14">
        <SectionEyebrow>Clientes</SectionEyebrow>
        <SectionTitle>Nuestra experiencia es transversal a todos los sectores</SectionTitle>
        <GoldRule />
        <p className="max-w-[640px] text-base font-light leading-[1.85] text-[#666]">
          Trabajamos con empresas de distintas industrias, adaptando nuestra metodología a cada realidad, tanto en el ámbito público como privado.
        </p>
      </div>

      {/* Industrias */}
      <div className="mb-5 text-[13px] font-bold uppercase tracking-[3px] text-gold">Industrias que atendemos</div>
      <div className="border border-[#e0e0e0] p-7 mb-14">
        <div className="flex flex-wrap gap-2.5">
          {INDUSTRIAS.map((ind) => <Tag key={ind}>{ind}</Tag>)}
        </div>
      </div>

      {/* Clientes y Alianzas */}
      <div className="mt-16">
        <div className="mb-7 text-[13px] font-bold uppercase tracking-[3px] text-gold">Clientes y Alianzas</div>

        <div className="text-sm font-bold tracking-[3px] uppercase text-gold mb-4 mt-8">Sector Privado</div>
        <div className="grid grid-cols-2 border-l border-t border-[#e0e0e0] md:grid-cols-4 print:grid-cols-4">
          {CLIENTES_PRIVADOS.map((c) => <ClientLogo key={c.alt} {...c} />)}
        </div>

        <div className="text-sm font-bold tracking-[3px] uppercase text-gold mb-4 mt-10">Sector Público</div>
        <div className="grid grid-cols-2 border-l border-t border-[#e0e0e0] md:grid-cols-4 print:grid-cols-4">
          {CLIENTES_PUBLICOS.map((c) => <ClientLogo key={c.alt} {...c} />)}
        </div>
      </div>
    </PageSection>
  );
}

function MisionVisionSection() {
  return (
    <PageSection className="bg-[#f9f9f9]">
      <SectionEyebrow>Misión y Visión</SectionEyebrow>
      <SectionTitle>Nuestro propósito y proyección</SectionTitle>
      <GoldRule />
      <div className="mt-14 grid grid-cols-1 gap-12 md:grid-cols-2 print:grid-cols-2">
        <div className="border border-[#e0e0e0] bg-white p-10">
          <div className="mb-2 text-[10px] font-bold uppercase tracking-[3px] text-gold">Misión</div>
          <div className="mb-3 text-[15px] font-bold text-dark">Nuestro propósito</div>
          <div className="text-[13px] leading-[1.8] text-[#666]">
            Brindar a nuestros clientes el mejor servicio profesional en las áreas de nuestra especialidad, para que encuentren en nosotros una total satisfacción y apoyo a los problemas que se presentan en su actividad diaria.
          </div>
        </div>
        <div className="border border-[#e0e0e0] bg-white p-10">
          <div className="mb-2 text-[10px] font-bold uppercase tracking-[3px] text-gold">Visión</div>
          <div className="mb-3 text-[15px] font-bold text-dark">Líderes en cada área</div>
          <div className="text-[13px] leading-[1.8] text-[#666]">
            Ser líderes en los servicios que prestamos, con proyección internacional y reconocidos por nuestro rigor técnico e independencia.
          </div>
        </div>
      </div>
    </PageSection>
  );
}

function DiferenciadoresSection() {
  return (
    <section className="bg-dark px-5 py-16 md:px-[52px] md:py-[100px] print:min-h-[297mm] print:w-[210mm] print:break-after-page print:px-[16mm] print:py-[18mm]">
      <SectionEyebrow inverted>Por qué elegirnos</SectionEyebrow>
      <SectionTitle light>Lo que nos hace diferentes</SectionTitle>
      <GoldRule />
      <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-3 print:grid-cols-3">
        {DIFERENCIADORES.map((d) => <DifCard key={d.num} {...d} />)}
      </div>
    </section>
  );
}

function ServiciosSection() {
  return (
    <PageSection id="servicios">
      <div className="mb-12 grid grid-cols-1 items-end gap-[72px] md:grid-cols-[1fr_2fr] print:grid-cols-[1fr_2fr]">
        <div>
          <SectionEyebrow>Servicios</SectionEyebrow>
          <SectionTitle>Qué hacemos</SectionTitle>
          <GoldRule />
        </div>
        <div>
          <div className="border-l-[3px] border-gold bg-black/[0.02] px-7 py-5">
            <div className="font-serif text-base italic leading-[1.85] text-[#333]">
              "Cada cliente tiene un desafío distinto. Nos involucramos para entenderlo, diagnosticarlo y resolverlo — con equipos especializados, metodología de primer nivel y el compromiso de acompañar cada etapa del camino."
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 border-l border-t border-[#e0e0e0] md:grid-cols-4 print:grid-cols-4">
        {SERVICIOS.map((s, i) => <ServiceCard key={i} title={s.title} items={s.items as unknown as string[]} />)}
      </div>
    </PageSection>
  );
}

function ARTSection() {
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

function MapaSection() {
  return (
    <div className="overflow-hidden bg-dark px-5 py-[100px] md:px-[52px] print:min-h-[297mm] print:w-[210mm] print:break-after-page print:px-[16mm] print:py-[18mm]" id="global">
      <div className="mb-4 text-[13px] font-bold uppercase tracking-[4px] text-[#e8c05a] text-center">Presencia internacional</div>
      <h2 className="mb-5 text-[clamp(28px,3.5vw,50px)] font-bold leading-[1.08] tracking-[-0.5px] text-white text-center">Alcance Global</h2>
      <div className="my-6 h-[3px] w-12 bg-gold mx-auto" />
      <p className="max-w-[640px] text-base font-light leading-[1.85] text-[#e0e0e0] text-center mx-auto">
        Oficinas en Tucumán y Buenos Aires. Presencia activa en más de 30 países de América, Europa y el Caribe.
      </p>
      <svg className="mt-20 scale-[1.35] md:mt-0 md:scale-100 print:mt-0 print:scale-100" style={{ width: "100%", display: "block", background: "#0a0a0a" }} viewBox="0 0 1000 500" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="softGlow">
            <feGaussianBlur result="blur" stdDeviation="3" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>
        <g fill="#2E2E32" stroke="#45454A" strokeWidth="0.5" transform="translate(220 80) scale(2.15)">
          <path d="M0 14L132 0L55 72L104 102L58 178L58 88L-20 16Z" />
          <path d="M200 18L322 4L226 76L226 158L128 70L170 22L200 18Z" />
          <path d="M258 108L308 168L258 154L258 108Z" />
        </g>
        <g opacity="0.22" stroke="#B58A32" strokeDasharray="4 5" strokeWidth="1.5">
          {[[370,393,300,150],[370,393,320,190],[370,393,340,250],[370,393,395,250],[370,393,400,310],[370,393,580,145],[370,393,625,135],[370,393,550,200],[370,393,665,155],[370,393,670,185]].map(([x1,y1,x2,y2],i) => (
            <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />
          ))}
        </g>
        <g fill="#D4A835" filter="url(#softGlow)">
          <circle cx={300} cy={140} r={6} />
          <circle cx={320} cy={195} r={8} /><circle cx={320} cy={195} r={18} opacity={0.15} />
          <circle cx={335} cy={250} r={6} />
          <circle cx={395} cy={250} r={6} />
          <circle cx={400} cy={315} r={7} />
          <circle cx={400} cy={355} r={6} />
          <circle cx={370} cy={395} r={12} /><circle cx={370} cy={395} r={28} opacity={0.18} />
          <circle cx={580} cy={145} r={6} />
          <circle cx={625} cy={135} r={5} />
          <circle cx={665} cy={155} r={5} />
          <circle cx={550} cy={200} r={6} />
          <circle cx={670} cy={185} r={5} />
        </g>
        <g fill="#D4A835" fontFamily="Inter, Arial, sans-serif" fontSize="10" fontWeight="600" textAnchor="middle">
          {[["CANADA",300,128],["USA",320,182],["MEXICO",335,238],["CARIBE",395,238],["BRASIL",400,302],["URUGUAY",400,342],["ARGENTINA",370,375],["UK",580,132],["DINAMARCA",625,123],["HOLANDA",665,143],["ESPAÑA",550,188],["ITALIA",670,173]].map(([label, x, y]) => (
            <text key={label as string} x={x as number} y={y as number}>{label as string}</text>
          ))}
        </g>
      </svg>
    </div>
  );
}

function ValoresSection() {
  return (
    <PageSection id="valores">
      <SectionEyebrow>Valores</SectionEyebrow>
      <SectionTitle>Lo que nos define</SectionTitle>
      <GoldRule />
      <div className="mt-14 grid grid-cols-1 border-l border-t border-[#e0e0e0] md:grid-cols-3 print:grid-cols-3">
        {VALORES.map((v, i) => <ValueCard key={i} title={v.title} description={v.description} />)}
      </div>
    </PageSection>
  );
}

function FooterSection() {
  return (
    <footer className="min-h-[500px] relative overflow-hidden bg-dark px-5 py-9 pt-[72px] md:px-[52px] print:min-h-[297mm] print:w-[210mm] print:break-after-page print:px-[16mm] print:py-[18mm]">
      <img alt="" src="./assets/puente-mujer.webp" className="absolute inset-0 h-full w-full object-cover object-center" />
      <div className="absolute inset-0 bg-black/80" />
      <div className="relative z-[1] grid grid-cols-1 gap-12 md:grid-cols-[1fr_1fr_1fr] print:grid-cols-[1fr_1fr_1fr]">
        {/* Col 1 – Brand */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <img alt="Concilio Sarralde" src="./assets/logo-white.png" className="h-[28px]" />
            <div className="text-[14px] font-bold tracking-[2px] uppercase text-white">
              Concilio <Amp /> Sarralde
            </div>
          </div>
          <p className="text-[13px] leading-[1.8] text-[#e0e0e0]">
            Firma boutique internacional de servicios profesionales en auditoría, consultoría tributaria, legal y outsourcing.
          </p>
        </div>
        {/* Col 2 – Sedes */}
        <div>
          <div className="mb-4 text-[10px] font-bold uppercase tracking-[3px] text-gold">Sedes</div>
          <div className="text-[13px] leading-[2.2] text-[#e0e0e0]">
            <strong className="text-white">Tucumán</strong><br />
            San Martín 536, Piso 3 · CP 4000<br />
            <strong className="text-white">Buenos Aires</strong><br />
            Av. Santa Fe 1621 · CP 1060
          </div>
        </div>
        {/* Col 3 – Contacto */}
        <div>
          <div className="mb-4 text-[10px] font-bold uppercase tracking-[3px] text-gold">Contacto</div>
          <div className="text-[13px] leading-[2.2] text-[#e0e0e0]">
            info@concilioysarralde.com<br />
            +54 381 421-1234<br />
            concilioysarralde.com<br />
            linkedin.com/company/concilio-sarralde
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-between gap-2 pt-6 text-center md:flex-row print:flex-row mt-8">
        <div className="text-[13px] text-[#e0e0e0]">
          © 2026 Estudio Concilio <Amp /> Sarralde S.A.S. · Todos los derechos reservados
        </div>
        <div className="text-[13px] text-[#e0e0e0]">
          San Miguel de Tucumán · Buenos Aires · República Argentina
        </div>
      </div>
    </footer>
  );
}

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-[999] hidden h-[68px] items-center justify-between border-b border-[#e0e0e0] bg-white px-[52px] md:flex print:hidden">
      <div className="flex items-center gap-3.5">
        <img alt="Concilio Sarralde" src="./assets/logo-black.png" className="h-[32px]" />
        <div className="text-[15px] font-bold tracking-[2.5px] uppercase text-dark">
          Concilio <Amp /> Sarralde
        </div>
      </div>
      <div className="hidden md:flex gap-8">
        <a href="#nosotros">Nosotros</a>
        <a href="#servicios">Servicios</a>
        <a href="#clientes">Clientes</a>
        <a href="#global">Global</a>
        <a href="#valores">Valores</a>
      </div>
    </nav>
  );
}

export function meta() {
  return [{ title: "Brochure | Concilio & Sarralde" }];
}

export default function BrochureRoute() {
  return (
    <main className="bg-white font-[Source_Sans_3,Arial,sans-serif] text-[#1a1a1a] print:bg-white">
      <Navbar />
      <HeroSection />
      <QuienesSomosSection />
      <ClientesSection />
      <ServiciosSection />
      <ARTSection />
      <MisionVisionSection />
      <DiferenciadoresSection />
      <MapaSection />
      <ValoresSection />
      <FooterSection />
    </main>
  );
}
