import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportOnce } from "./animations";

const CASOS = [
  {
    title: "The Coca-Cola Company",
    text: "Ejecutamos procedimientos acordados para The Coca-Cola Company, verificando el cumplimiento de estándares en su red de franquicias y embotelladoras en todo el continente americano.",
    tag: "Procedimientos acordados",
  },
  {
    title: "Sector Público",
    text: "Acompañamos a instituciones del Estado con el mismo rigor técnico, adaptando nuestra metodología a las exigencias regulatorias y al interés público que cada organismo representa.",
    tag: "Control institucional",
  },
  {
    title: "Seguros & ART",
    text: "La única firma de referencia en el sector asegurador de la región. Inscriptos en el Registro de Auditores Externos de la SSN, ejecutamos procedimientos acordados y acompañamiento técnico integral.",
    tag: "Único en la región",
  },
];

export function CasosDeExito() {
  return (
    <section id="casos" className="bg-surface-dark py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mb-16 text-center"
        >
          <motion.div variants={fadeUp} custom={0} className="mb-3 text-xs font-bold uppercase tracking-eyebrow text-gold">
            Experiencia comprobada
          </motion.div>
          <motion.h2 variants={fadeUp} custom={1} className="mb-6 text-3xl font-bold text-on-dark sm:text-4xl">
            Casos de Éxito
          </motion.h2>
          <motion.div variants={fadeUp} custom={2} className="mx-auto h-1 w-12 bg-gold" />
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid gap-8 md:grid-cols-3"
        >
          {CASOS.map((caso, i) => (
            <motion.article
              key={caso.title}
              variants={fadeUp}
              custom={i}
              className="flex flex-col border border-white/10 bg-white/5 p-8 transition-all duration-500 hover:border-gold/40 hover:bg-white/10"
            >
              <h3 className="mb-4 text-xl font-bold text-on-dark">{caso.title}</h3>
              <p className="mb-6 flex-1 text-sm leading-relaxed text-on-dark-secondary">
                {caso.text}
              </p>
              <span className="mt-auto inline-block self-start border border-gold/30 bg-gold/10 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-gold">
                {caso.tag}
              </span>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
