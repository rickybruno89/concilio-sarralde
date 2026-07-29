import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimateInView } from "./animations";

const FAQS = [
  {
    question: "¿En qué zonas del país y del mundo trabajan?",
    answer:
      "Tenemos sede en Buenos Aires (Palermo) y en San Miguel de Tucumán, y mantenemos presencia activa en más de 30 países de América, Europa y el Caribe a través de nuestra red de alianzas y clientes con operaciones internacionales.",
  },
  {
    question: "¿Qué significa que trabajan de forma complementaria a EY y Deloitte?",
    answer:
      "En proyectos de alta complejidad colaboramos junto a EY y Deloitte compartiendo metodología y estándares de trabajo. No somos una franquicia ni estamos afiliados formalmente a ninguna de las dos firmas: mantenemos nuestra independencia como estudio boutique y sumamos esa colaboración cuando el proyecto lo requiere.",
  },
  {
    question: "¿Qué tipo de empresas e industrias atienden?",
    answer:
      "Trabajamos con empresas de los sectores agropecuario, industrial, comercio y retail, comercio exterior, construcción, inmobiliario, salud, tecnología, servicios financieros, seguros y ART, asociaciones y fundaciones, y organismos estatales, entre otros. Contamos con más de 300 clientes atendidos a lo largo de nuestra trayectoria.",
  },
  {
    question: "¿En qué se diferencian de las Big Four?",
    answer:
      "Nuestro equipo incluye profesionales con experiencia previa en firmas Big Four, pero funcionamos como un estudio boutique: equipos interdisciplinarios (contadores, auditores, abogados y especialistas en sistemas) con atención directa de los socios, mayor flexibilidad y un área legal propia integrada al servicio. Además, somos de los pocos estudios de la región con un equipo dedicado específicamente a Seguros y ART.",
  },
  {
    question: "¿Cómo garantizan la confidencialidad de la información?",
    answer:
      "La confidencialidad y el secreto profesional son pilares de nuestro trabajo. Actuamos con independencia total y sin conflictos de interés, y nuestros socios están habilitados ante organismos de control como la Superintendencia de Seguros de la Nación (SSN) y la Unidad de Información Financiera (UIF), lo que exige altos estándares de reserva y cumplimiento normativo.",
  },
  {
    question: "¿Cómo aseguran la independencia del equipo auditor?",
    answer:
      "La independencia profesional es una condición no negociable de nuestro trabajo: no participamos en la gestión ni en las decisiones operativas de los clientes que auditamos, y evaluamos posibles conflictos de interés antes de aceptar cada encargo. Esto se suma a las exigencias de los registros profesionales en los que estamos inscriptos.",
  },
  {
    question: "¿Con qué normas y estándares trabajan?",
    answer:
      "Aplicamos las normas contables profesionales vigentes en Argentina y, cuando el proyecto lo requiere, normas internacionales (NIIF/IFRS y normas internacionales de auditoría), en línea con la metodología y los estándares que compartimos con EY y Deloitte en los trabajos conjuntos.",
  },
  {
    question: "¿Cuál es la diferencia entre auditoría externa y consultoría?",
    answer:
      "La auditoría externa es un servicio de aseguramiento: revisamos y emitimos una opinión independiente sobre los estados contables u otra información de la empresa. La consultoría, en cambio, es un servicio de asesoramiento activo (tributario, legal, de gestión, etc.) donde trabajamos junto al cliente para mejorar procesos o resolver un problema puntual. Cuando ambos servicios podrían generar un conflicto de independencia, los separamos por equipo o los derivamos según corresponda.",
  },
  {
    question: "¿Cómo puedo empezar a trabajar con Concilio & Sarralde?",
    answer:
      "Podés escribirnos por WhatsApp a cualquiera de nuestras dos sedes o enviarnos un correo desde la sección de Contacto. Nos vamos a poner en contacto para entender tu necesidad y coordinar los siguientes pasos según el servicio que estés buscando.",
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
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
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
