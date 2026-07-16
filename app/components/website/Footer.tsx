import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportOnce } from "./animations";

export function Footer() {
  return (
    <footer
      id="contacto"
      className="relative overflow-hidden bg-surface-dark pt-24 sm:pt-32"
    >
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
            Demos el primer paso
          </motion.div>
          <motion.h2
            variants={fadeUp}
            custom={1}
            className="mb-6 text-3xl font-bold text-on-dark sm:text-4xl"
          >
            Contacto
          </motion.h2>
          <motion.div
            variants={fadeUp}
            custom={2}
            className="mx-auto mb-6 h-1 w-12 bg-gold"
          />
          <motion.p
            variants={fadeUp}
            custom={3}
            className="mx-auto max-w-lg text-base text-on-dark-secondary"
          >
            Para consultas y propuestas, comuníquese con nosotros.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mb-16 grid gap-8 md:grid-cols-2"
        >
          {/* Buenos Aires */}
          <motion.div
            variants={fadeUp}
            custom={0}
            className="border border-white/10 bg-white/5 p-8"
          >
            <div className="mb-3 text-sm font-bold uppercase tracking-label text-on-dark">
              Buenos Aires
            </div>
            <p className="text-sm leading-relaxed text-on-dark-secondary">
              Soler 3259 - Palermo
              <br />
              Ciudad Autónoma de Buenos Aires, Argentina
            </p>
            <a href="https://wa.me/541162919539" target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-2 text-sm text-gold transition-colors hover:text-dark-gold">WhatsApp: +54 11 6291 9539</a>
          </motion.div>

          {/* Tucumán */}
          <motion.div
            variants={fadeUp}
            custom={1}
            className="border border-white/10 bg-white/5 p-8"
          >
            <div className="mb-3 text-sm font-bold uppercase tracking-label text-on-dark">
              Tucumán
            </div>
            <p className="text-sm leading-relaxed text-on-dark-secondary">
              Salta 78, Piso 4, Of. D<br />
              San Miguel de Tucumán, Argentina
            </p>
            <a href="https://wa.me/543814694769" target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-2 text-sm text-gold transition-colors hover:text-dark-gold">WhatsApp: +54 381 469 4769</a>
          </motion.div>
        </motion.div>

        {/* Contact links */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mb-16 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-8"
        >
          <a
            href="mailto:a.sarralde@concilioysarralde.com.ar"
            className="flex items-center gap-2 text-sm text-on-dark-secondary transition-colors hover:text-gold"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="mt-1"
            >
              <rect x="2" y="4" width="20" height="13" rx="2" />
              <polyline points="2,4 12,13 22,4" />
            </svg>
            a.sarralde@concilioysarralde.com.ar
          </a>
          <a
            href="https://linkedin.com/company/concilio-sarralde"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-on-dark-secondary transition-colors hover:text-gold"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <rect x="2" y="2" width="20" height="20" rx="2" />
              <line x1="8" y1="11" x2="8" y2="16" />
              <line x1="8" y1="8" x2="8" y2="8.5" />
              <path d="M12 16v-5c0 0 0-2 2-2s2 2 2 2v5" />
            </svg>
            LinkedIn
          </a>
        </motion.div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-6 text-center">
        <img
          src="/assets/logo-white.png"
          alt="C&S"
          className="mx-auto mb-3 h-6 opacity-40"
        />
        <p className="text-xs text-white/30">
          © 2026 Estudio Concilio & Sarralde S.A.S. · San Miguel de Tucumán ·
          Buenos Aires · República Argentina · Todos los derechos reservados
        </p>
      </div>
    </footer>
  );
}
