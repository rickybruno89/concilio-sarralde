import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportOnce } from "./animations";
import { SSN_TAGS, UIF_TAGS } from "~/routes/brochure/components/data";

function TagGroup({
  logo,
  alt,
  tags,
}: {
  logo: string;
  alt: string;
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
        className="mb-6 h-12 w-auto object-contain brightness-0 invert opacity-80"
      />
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
            <TagGroup logo="/assets/ssn.png" alt="SSN" tags={SSN_TAGS} />
          </motion.div>
          <motion.div variants={fadeUp} custom={1}>
            <TagGroup logo="/assets/uif.png" alt="UIF" tags={UIF_TAGS} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
