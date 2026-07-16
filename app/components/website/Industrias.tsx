import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportOnce } from "./animations";
import { INDUSTRIAS } from "~/routes/brochure/components/data";

export function Industrias() {
  return (
    <section id="industrias" className="bg-surface-light py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mb-16 text-center"
        >
          <motion.div variants={fadeUp} custom={0} className="mb-3 text-xs font-bold uppercase tracking-eyebrow text-gold">
            Alcance Sectorial
          </motion.div>
          <motion.h2 variants={fadeUp} custom={1} className="mb-6 text-3xl font-bold text-on-light sm:text-4xl">
            Industrias que Atendemos
          </motion.h2>
          <motion.div variants={fadeUp} custom={2} className="mx-auto mb-6 h-1 w-12 bg-gold" />
          <motion.p variants={fadeUp} custom={3} className="mx-auto max-w-2xl text-base leading-relaxed text-on-light-secondary">
            Nuestra experiencia es transversal a todos los sectores. Trabajamos con empresas de distintas industrias, adaptando nuestra metodología a cada realidad.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
        >
          {INDUSTRIAS.map((industria, i) => (
            <motion.div
              key={industria}
              variants={fadeUp}
              custom={i % 5}
              className="flex items-center justify-center border border-gray-200 bg-white px-4 py-5 text-center text-sm font-medium text-on-light transition-all duration-300 hover:border-gold/40 hover:shadow-md"
            >
              {industria}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
