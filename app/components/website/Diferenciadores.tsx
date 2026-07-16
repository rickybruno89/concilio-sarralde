import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportOnce } from "./animations";
import { DIFERENCIADORES } from "~/routes/brochure/components/data";

export function Diferenciadores() {
  return (
    <section id="diferenciadores" className="bg-surface-dark py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mb-16 text-center"
        >
          <motion.div
            variants={fadeUp}
            custom={0}
            className="mb-3 text-xs font-bold uppercase tracking-eyebrow text-gold"
          >
            ¿Por qué elegirnos?
          </motion.div>
          <motion.h2
            variants={fadeUp}
            custom={1}
            className="mb-6 text-3xl font-bold text-on-dark sm:text-4xl"
          >
            Lo que nos diferencia
          </motion.h2>
          <motion.div
            variants={fadeUp}
            custom={2}
            className="mx-auto h-1 w-12 bg-gold"
          />
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {DIFERENCIADORES.map((d, i) => (
            <motion.div
              key={d.num}
              variants={fadeUp}
              custom={i}
              className="border border-white/10 bg-white/5 p-8 transition-all duration-500 hover:border-gold/40 hover:bg-white/10 flex flex-col justify-between"
            >
              <div className="mb-4 text-5xl font-bold text-gold transition-colors group-hover:text-gold/40">
                {d.num}
              </div>
              <div>
                <h3 className="mb-3 text-lg font-bold text-on-dark">
                  {d.title}
                </h3>
                <p className="mb-6 text-sm leading-relaxed text-on-dark-secondary">
                  {d.body}
                </p>
              </div>
              <div className="mt-auto border-t border-white/10 pt-4 text-xs font-bold uppercase tracking-label text-gold">
                {d.foot}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
