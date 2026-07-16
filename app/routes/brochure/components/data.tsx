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
  "Agropecuario",
  "Asociaciones & Fundaciones",
  "Bebidas & Manufactureras",
  "Comercio & Retail",
  "Comercio Exterior (Importación & Exportación)",
  "Construcción",
  "Industrial",
  "Inmobiliario",
  "Juegos de Azar",
  "Organismos Estatales",
  "Salud",
  "Seguros & ART",
  "Servicios Financieros",
  "Tecnología & Software",
];

export const CLIENTES_PRIVADOS = [
  { name: "The Coca-Cola Company" },
  { name: "OSDE", logo: "./assets/osde.png" },
  { name: "La Serenísima", logo: "./assets/la-serenisima.png" },
  { name: "Coprotab", logo: "./assets/coprotab.png" },
  {
    name: "Colegio de Graduados en Cs. Económicas de Tucumán",
    logo: "./assets/colegio-de-graduados.png",
  },
  {
    name: "UNSTA",
    logo: "./assets/unsta.jpg",
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

export const ALIANZAS_ESTRATEGICAS = [
  { name: "EY Argentina", logo: "./assets/ey.png" },
  { name: "Deloitte", logo: "./assets/deloitte.png" },
];

export const SERVICIOS = [
  {
    title: "Auditoría & Control",
    description:
      "Revisión independiente de estados contables, procesos y operaciones con rigor de primer nivel internacional.",
    items: [
      "Estados Contables",
      "Auditoría de procesos",
      "Auditoría de Seguros & ART",
      "Certificaciones",
      "Balance social",
    ],
  },
  {
    title: "Compliance & Cumplimiento",
    description:
      "Programa integral de prevención y cumplimiento normativo. Líderes en la región habilitados ante SSN y UIF.",
    items: [
      "LA/FT/PT",
      "Programa de integridad",
      "Oficial de cumplimiento",
      "Manual de prevención",
      'Empresas "B"',
    ],
  },
  {
    title: "Outsourcing & RRHH",
    description:
      "Externalizamos funciones contables y de recursos humanos para que tu equipo se enfoque en el negocio.",
    items: [
      "Outsourcing contable",
      "Liquidación de sueldos",
      "Selección de personal",
      "Consultoría laboral",
      "Planes de carrera",
    ],
  },
  {
    title: "M&A & Emprendedores",
    description:
      "Acompañamos desde la idea hasta la venta: planes de negocio, valuaciones y búsqueda de inversores o compradores.",
    items: [
      "Planes de negocio",
      "Valuación de empresas",
      "Due diligence compra/venta",
      "Certificado PyME",
      "Start up a PyME",
    ],
  },
  {
    title: "Consultoría Tributaria",
    description:
      "Optimización fiscal nacional e internacional para reducir carga impositiva y anticipar riesgos tributarios.",
    items: [
      "Planeamiento fiscal",
      "Tributación internacional",
      "Precios de transferencia",
      "Recupero de impuestos",
      "Defensa en inspecciones",
    ],
  },
  {
    title: "Área Legal",
    description:
      "Asesoramiento jurídico societario completo, desde la constitución hasta fusiones, adquisiciones y conflictos.",
    items: [
      "Constitución de sociedades",
      "Fusiones & adquisiciones",
      "Compliance legal",
      "Presentaciones IGJ",
      "Conflictos societarios",
    ],
  },
  {
    title: "Información de Gestión",
    description:
      "Transformamos datos en decisiones: tableros, costos, presupuestos y reportes para líderes que necesitan claridad.",
    items: [
      "Analytics & tableros",
      "Costos & rentabilidades",
      "Presupuestos",
      "Reingeniería de procesos",
      "Control interno",
    ],
  },
  {
    title: "Diagnóstico Empresarial",
    description:
      "Visitamos, relevamos y analizamos tu organización para identificar problemas, riesgos y oportunidades de mejora.",
    items: [
      "Relevamiento in situ",
      "Diagnóstico de procesos",
      "Detección de riesgos",
      "Plan de acción",
      "Informe ejecutivo",
    ],
  },
];

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
