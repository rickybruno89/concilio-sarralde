import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportOnce } from "./animations";
import { SSN_TAGS, UIF_TAGS } from "~/routes/brochure/components/data";

function TagGroup({
  logo,
  alt,
  title,
  description,
  tags,
}: {
  logo: string;
  alt: string;
  title: string;
  description: string;
  tags: string[];
}) {
  return (
    <div className="border border-white/10 bg-white/5 p-8">
      <img
        src={logo}
        alt={alt}
        width="200"
        height="48"
        loading="lazy"
        className="mb-4 h-12 w-auto object-contain brightness-0 invert opacity-80"
      />
      <h3 className="mb-3 text-lg font-bold text-on-dark">{title}</h3>
      <p className="mb-6 text-sm leading-relaxed text-on-dark-secondary">
        {description}
      </p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="border border-gold/20 bg-gold/5 px-3 py-1.5 text-xs font-medium uppercase tracking-wider text-gold/80"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export function Compliance() {
  return (
    <section id="compliance" className="bg-surface py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mb-16 text-center"
        >
          <motion.div variants={fadeUp} custom={0} className="mb-3 text-xs font-bold uppercase tracking-eyebrow text-gold">
            Habilitaciones
          </motion.div>
          <motion.h2 variants={fadeUp} custom={1} className="mb-6 text-3xl font-bold text-on-dark sm:text-4xl">
            Registros & Cumplimiento
          </motion.h2>
          <motion.div variants={fadeUp} custom={2} className="mx-auto h-1 w-12 bg-gold" />
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid gap-8 md:grid-cols-2"
        >
          <motion.div variants={fadeUp} custom={0}>
            <TagGroup
              logo="/assets/ssn.png"
              alt="Superintendencia de Seguros de la Nación"
              title="Registro de Auditores Externos — SSN"
              description="Ezequiel Sarralde, uno de los 336 auditores registrados en el país, socio del estudio, integra el Registro de Auditores Externos de la Superintendencia de Seguros de la Nación (SSN). Este organismo controla el mercado asegurador argentino y exige que las auditorías de las compañías de seguros sean realizadas exclusivamente por contadores inscriptos en dicho registro."
              tags={SSN_TAGS}
            />
          </motion.div>
          <motion.div variants={fadeUp} custom={1}>
            <TagGroup
              logo="/assets/uif.png"
              alt="Unidad de Información Financiera"
              title="Revisor Externo Independiente (REI) — UIF"
              description="Jorge Bustos Foglia, uno de los 207 revisores de la UIF en el país, socio del estudio, integra el Registro de Revisores Externos Independientes de la Unidad de Información Financiera (UIF). Este organismo es responsable de la prevención del lavado de activos y la financiación del terrorismo en el país, y exige que la revisión externa de los sujetos obligados sea realizada exclusivamente por profesionales inscriptos en dicho registro."
              tags={UIF_TAGS}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
