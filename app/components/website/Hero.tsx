import { motion } from "framer-motion";
import { fadeUp } from "./animations";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-surface-dark"
    >
      {/* Background image */}
      <img
        src="/assets/hero-3.jpg"
        alt=""
        aria-hidden="true"
        loading="eager"
        fetchPriority="high"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-surface-dark/85" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
          className="mb-4 text-xs font-bold uppercase tracking-eyebrow text-gold"
        >
          Firma Boutique Internacional
        </motion.div>

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
          className="mb-6 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Concilio <span className="text-gold">&</span> Sarralde
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
          className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg"
        >
          Soluciones integrales en auditoría, consultoría, compliance y
          servicios profesionales con alcance en más de 30 países.
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={3}
          className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <button
            onClick={() =>
              document
                .querySelector("#servicios")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="rounded-none bg-gold px-8 py-3.5 text-xs font-bold uppercase tracking-label text-surface-dark transition-all hover:bg-dark-gold"
          >
            Nuestros Servicios
          </button>
          <button
            onClick={() =>
              document
                .querySelector("#contacto")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="border border-white/30 px-8 py-3.5 text-xs font-bold uppercase tracking-label text-white transition-all hover:border-gold hover:text-gold"
          >
            Contacto
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        aria-hidden="true"
      >
        <div className="h-10 w-6 rounded-full border-2 border-white/30 flex items-start justify-center pt-2">
          <div className="h-2 w-1 rounded-full bg-gold" />
        </div>
      </motion.div>
    </section>
  );
}
