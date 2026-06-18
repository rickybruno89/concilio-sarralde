import { Amp } from "./shared";

export const STATS = [
  { value: "14", label: "Años de trayectoria" },
  {
    value: (
      <>
        <em>+</em>300
      </>
    ),
    label: "Clientes satisfechos",
  },
  {
    value: (
      <>
        <em>+</em>30
      </>
    ),
    label: "Países",
  },
  { value: "2", label: "Sedes" },
];

export const INDUSTRIAS = [
  "Organismos Estatales",
  "Seguros & ART",
  "Industrial",
  "Agropecuario",
  "Comercio & Retail",
  "Servicios Financieros",
  "Inmobiliario",
  "Tecnología",
  "Juegos de Azar",
  "Salud",
  "Construcción",
  "Asociaciones & Fundaciones",
  "Comercio Exterior (Importación & Exportación)",
];

export const CLIENTES_PRIVADOS = [
  { name: "The Coca-Cola Company" },
  { name: "EY Argentina", logo: "./assets/ey.png" },
  { name: "Deloitte", logo: "./assets/deloitte.png" },
  { name: "OSDE", logo: "./assets/osde.png" },
  { name: "La Serenísima", logo: "./assets/la-serenisima.png" },
  { name: "Coprotab", logo: "./assets/coprotab.png" },
  {
    name: "Colegio de Graduados en Cs. Económicas de Tucumán",
    logo: "./assets/colegio-de-graduados.png",
  },
  { name: "Club Atlético San Martín", logo: "./assets/san-martin.png" },
];

export const CLIENTES_PUBLICOS = [
  { name: "Caja Popular de Ahorros", logo: "./assets/cpa.png" },
  { name: "PopulART", logo: "./assets/populart.png" },
  {
    name: "Municipalidad de San Miguel de Tucumán",
    logo: "./assets/municipalidad-smt.png",
  },
  { name: "CPM GIRSU", logo: "./assets/cpm-girsu.png" },
];

export const SERVICIOS = [
  {
    title: (
      "Auditoría y Control"
    ),
    items: [
      "Control externo de EECC",
      "Control interno y operativo",
      "Due Diligence",
      "Procedimientos acordados",
      "Revisiones especiales",
      "Auditoría operativa de procesos",
      "Certificaciones contables",
      "Balance Social",
      "Seguros y ART",
    ],
  },
  {
    title: "Consultoría Tributaria",
    items: [
      "Planeamiento fiscal",
      "Liquidaciones nac. y prov.",
      "Precios de transferencia",
      "Tributación internacional",
      "Convenios doble imposición",
      "Recupero de impuestos",
      "Defensa en inspecciones",
      "Gestión ejecuciones fiscales",
    ],
  },
  {
    title: "Área Legal",
    items: [
      "Constitución de sociedades",
      "Fusiones y adquisiciones",
      "Asesoramiento societario",
      "Compliance legal",
      "Disolución de sociedades",
      "Actas Directorio y Asamblea",
      "Presentaciones ante IGJ",
      "Conflictos societarios",
    ],
  },
  {
    title: (
      "Outsourcing y RRHH"
    ),
    items: [
      "Outsourcing contable",
      "Liquidación de sueldos",
      "Gestión de RRHH",
      "Selección de personal",
      "Consultoría laboral",
      "Capacitación empresarial",
      "Evaluación del desempeño",
      "Planes de carrera",
    ],
  },
  {
    title: "Información de Gestión",
    items: [
      "Analytics y tableros",
      "Costos y rentabilidades",
      "Reingeniería de procesos",
      "Rediseño de reportes",
      "Control interno",
      "Homogeneización de datos",
      "Presupuestos y proyecciones",
    ],
  },
  {
    title: (
      <>
        M<Amp />A y Emprendedores
      </>
    ),
    items: [
      "Planes de negocio",
      "Análisis de inversión",
      "Carpeta financiera",
      "Due diligence compra/venta",
      "Valuación de empresas",
      "Búsqueda de compradores",
      "Certificado PyME",
      "Start Up a PyME",
    ],
  },
  {
    title: "Compliance",
    items: [
      "LA/FT/PT",
      "Programa de integridad",
      "Canales de denuncia",
      'Empresas "B"',
      "Control de sistemas internos",
      "Manual de prevención",
      "Oficial de cumplimiento",
    ],
  },
  {
    title: "Diagnóstico Empresarial",
    items: [
      "Visita y relevamiento in situ",
      "Diagnóstico de procesos",
      "Identificación de problemas",
      "Recomendaciones de mejora",
      "Seguimiento de implementación",
      "Detección de riesgos",
      "Plan de acción",
      "Informe ejecutivo",
    ],
  },
] as const;

export const VALORES = [
  {
    title: "Confidencialidad",
    description:
      "Trabajamos bajo la más estricta reserva y secreto profesional. La información de nuestros clientes es sagrada.",
  },
  {
    title: "Confiabilidad",
    description:
      "Nuestros clientes deben considerarnos como un proveedor confiable, en todos los aspectos de nuestros servicios.",
  },
  {
    title: "Trabajo en Equipo",
    description:
      "La mejor forma de lograr objetivos con la máxima calidad posible y en los tiempos acordados.",
  },
  {
    title: "Integridad, Ética y Calidad Humana",
    description:
      "Los cimientos de nuestros trabajos, orientados al prestigio y la seriedad durante y después de cumplidos los objetivos.",
  },
  {
    title: "Transparencia y Honestidad",
    description:
      "Política totalmente transparente para con nuestro cliente, sin lugar a dudas en el alcance y la prestación de nuestros servicios.",
  },
  {
    title: "Flexibilidad",
    description:
      "Ante un mundo de permanente cambio, trabajamos con adaptabilidad. Nos ajustamos a cada cliente, industria y contexto.",
  },
];

export const DIFERENCIADORES = [
  {
    num: "01",
    title: "Equipo Interdisciplinario",
    body: "Contadores, auditores, abogados y especialistas en sistemas trabajando de forma integrada. Una sola firma, todas las respuestas.",
    foot: "Área Legal Propia",
  },
  {
    num: "02",
    title: "ADN Big Four",
    body: "La mayoría de nuestro plantel proviene de las principales firmas internacionales de auditoría y consultoría — conocidas como Big Four, las 4 firmas más grandes del mundo. Metodología global con cercanía local y atención personalizada.",
    foot: "Estándares Internacionales",
  },
  {
    num: "03",
    title: "Únicos en la Región",
    body: "La única firma de la región con equipo dedicado al control y procedimientos acordados para Segurosy ART. Inscriptos en el Registro de Auditores Externos de la SSN y habilitados como Revisores Externos Independientes (REI) ante la UIF — dos de los registros más exigentes del sistema regulatorio argentino.",
    foot: "SSN · UIF · ART",
  },
  {
    num: "04",
    title: "Alcance Global",
    body: "Proyectos activos en más de 30 países. Ejecutamos procedimientos acordados para The Coca-Cola Company, verificando estándares en todo el continente americano.",
    foot: "+30 Países",
  },
  {
    num: "05",
    title: "Independencia Total",
    body: "Independencia profesional que garantiza estrictas políticas de confidencialidad y objetividad en cada encargo, sin conflictos de interés.",
    foot: "Confidencialidad Absoluta",
  },
  {
    num: "06",
    title: "Sector Público y Privado",
    body: "Experiencia en organismos públicos y empresas privadas. Entendemos que los objetivos del sector público son distintos y adaptamos nuestra metodología a cada realidad.",
    foot: "Experiencia Transversal",
  },
];

export const SSN_TAGS = [
  "Control",
  "Asesoramiento técnico",
  "Procedimientos acordados",
  "Reservas técnicas",
  "Relaciones técnicas",
  "Requerimientos SSN",
  "FFEP",
  "Cumplimiento SRT",
];
export const UIF_TAGS = [
  "Diagnóstico de controles internos",
  "Revisión externa independiente",
  "Informe REI",
  "Sujetos Obligados",
  "LA/FT/PT",
  "Cumplimiento UIF",
];
