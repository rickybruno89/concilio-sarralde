import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimateInView } from "./animations";

const FAQS = [
  {
    question:
      "¿Cómo logran trabajar en tantos países manteniendo la misma calidad de servicio?",
    answer:
      "Nuestra organización, los equipos interdisciplinarios y una metodología de trabajo estandarizada nos permiten brindar el mismo nivel de servicio sin importar la ubicación del cliente. Contamos con herramientas para trabajar de forma remota, flexibilidad para viajar y una red de contactos en distintos países. Para nosotros, la distancia no es una limitación.",
  },
  {
    question:
      "¿Qué significa que colaboran con grandes firmas internacionales?",
    answer:
      "En determinados proyectos de alta complejidad colaboramos puntualmente con profesionales de reconocidas firmas internacionales de auditoría y consultoría, compartiendo metodologías y estándares de trabajo. Mantenemos nuestra independencia y cada colaboración responde exclusivamente a las necesidades del proyecto.",
  },
  {
    question:
      "¿En qué se diferencian de las grandes firmas de auditoría y consultoría?",
    answer:
      "Nuestro equipo reúne experiencia adquirida en algunas de las principales firmas internacionales, pero trabajamos con la agilidad y cercanía de un estudio independiente. Ofrecemos atención directa de los socios, equipos interdisciplinarios, mayor flexibilidad y soluciones adaptadas a la realidad de cada cliente. Además, contamos con un equipo especializado en Seguros y ART.",
  },
  {
    question: "¿Cuál es la diferencia entre auditoría externa y consultoría?",
    answer:
      "La auditoría externa es un servicio de aseguramiento mediante el cual revisamos información y emitimos una opinión independiente. La consultoría, en cambio, implica analizar, diagnosticar y recomendar soluciones para mejorar procesos, resolver problemas y acompañar la toma de decisiones. Cuando ambos servicios pudieran generar un conflicto de independencia, se prestan mediante equipos separados o se derivan según corresponda.",
  },
  {
    question: "¿Por qué se consideran una firma boutique?",
    answer:
      "Ser una firma boutique significa ofrecer un servicio altamente personalizado. Nuestros socios participan activamente en cada proyecto, conformamos equipos a medida para cada cliente y priorizamos relaciones de largo plazo, combinando cercanía, flexibilidad y altos estándares técnicos.",
  },
  {
    question: "¿Por qué además de auditores somos consultores?",
    answer:
      "Nuestro trabajo va más allá del cumplimiento normativo: analizamos, diagnosticamos y recomendamos, acompañando a cada organización en las decisiones que definen su crecimiento. Incluso al prestar servicios tradicionales, abordamos cada proyecto con una mirada consultiva.",
  },
  {
    question: "¿Con qué normas y estándares trabajan?",
    answer:
      "Aplicamos las normas profesionales, contables y regulatorias que correspondan según la actividad, las necesidades del cliente y el organismo que lo supervise. Esto puede incluir normas argentinas e internacionales y requerimientos de organismos como el BCRA, la SSN, la UIF, la SRT, la CNV y ARCA, entre otros.",
  },
  {
    question: "¿Cómo incorporan la tecnología en sus servicios?",
    answer:
      "Trabajamos con herramientas de inteligencia artificial, automatización y plataformas tecnológicas que nos permiten brindar un servicio más eficiente, seguro y preciso. Nuestra infraestructura facilita el trabajo remoto, la colaboración entre equipos y el intercambio y resguardo seguro de la información de nuestros clientes.",
  },
];

function FaqItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border border-gray-200 bg-white transition-colors duration-300 hover:border-gold/40">
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left sm:px-8"
      >
        <span className="text-base font-bold text-on-light">{question}</span>
        <span
          className={`flex h-8 w-8 shrink-0 items-center justify-center border border-gold/40 text-gold transition-transform duration-300 ${
            isOpen ? "rotate-45" : ""
          }`}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <line x1="12" y1="4" x2="12" y2="20" />
            <line x1="4" y1="12" x2="20" y2="12" />
          </svg>
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-6 text-sm leading-relaxed text-on-light-secondary sm:px-8">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-surface-light py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <AnimateInView stagger className="mb-16 text-center">
          <div className="mb-3 text-xs font-bold uppercase tracking-eyebrow text-gold">
            Preguntas Frecuentes
          </div>
          <h2 className="mb-6 text-3xl font-bold text-on-light sm:text-4xl">
            Resolvemos tus dudas
          </h2>
          <div className="mx-auto h-1 w-12 bg-gold" />
        </AnimateInView>

        <AnimateInView className="mx-auto flex max-w-3xl flex-col gap-4">
          {FAQS.map((faq, i) => (
            <FaqItem
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </AnimateInView>
      </div>
    </section>
  );
}
