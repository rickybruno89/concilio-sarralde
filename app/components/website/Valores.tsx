import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportOnce } from "./animations";
import { VALORES } from "~/routes/brochure/components/data";

export function Valores() {
  return (
    <section id="valores" className="relative min-h-screen overflow-hidden">
      {/* Single hero background */}
      <img
        src="/assets/valores-bg.webp"
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-black/75" />

      {/* Content over overlay */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 py-24 sm:py-32 lg:px-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mb-16 text-center"
        >
          <motion.div variants={fadeUp} custom={0} className="mb-3 text-xs font-bold uppercase tracking-eyebrow text-gold">
            Nuestros Pilares
          </motion.div>
          <motion.h2 variants={fadeUp} custom={1} className="mb-6 text-3xl font-bold text-on-dark sm:text-4xl">
            Valores que nos definen
          </motion.h2>
          <motion.div variants={fadeUp} custom={2} className="mx-auto h-1 w-12 bg-gold" />
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid w-full gap-px sm:grid-cols-2 lg:grid-cols-3"
        >
          {VALORES.map((v, i) => (
            <motion.div
              key={v.title}
              variants={fadeUp}
              custom={i}
              className="group border border-white/10 bg-white/5 px-8 py-10 backdrop-blur-sm transition-all duration-500 hover:bg-white/10"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center border border-gold/40 text-sm font-bold text-gold">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="mb-3 text-lg font-bold text-on-dark transition-colors group-hover:text-gold">
                {v.title}
              </h3>
              <p className="text-sm leading-relaxed text-white/60">
                {v.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
