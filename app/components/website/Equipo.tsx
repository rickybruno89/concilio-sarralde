import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportOnce } from "./animations";

const TEAM: { name: string; role: string; img: string; quote: string; imgExtra?: string }[] = [
  {
    name: "Ezequiel Sarralde",
    role: "Auditoría y Contabilidad",
    img: "/assets/socio-ezequiel-sarralde.png",
    quote: "",
  },
  {
    name: "Octavio Concilio",
    role: "Impuestos y Laboral",
    img: "/assets/socio-octavio-concilio.png",
    quote: "",
  },
  {
    name: "Ariel Del Rivero",
    role: "Auditoría, M&A · Buenos Aires",
    img: "/assets/socio-ariel-del-rivero.png",
    quote:
      "Cuando una empresa cambia de manos o busca crecer, cada detalle importa. Un buen asesor encuentra lo que podría salir mal.",
  },
  {
    name: "Jorge Bustos Foglia",
    role: "Control y Cumplimiento",
    img: "/assets/socio-jorge-bustos-foglia.png",
    imgExtra: "scale-125",
    quote:
      "Lo que no se mide no se controla, y lo que no se controla no se mejora.",
  },
  {
    name: "Ariadna Sarralde",
    role: "Auditoría y Contabilidad",
    img: "/assets/socio-ariadna-sarralde.png",
    quote:
      "El mejor asesor no es el que aparece cuando hay un problema. Es el que ya estaba ahí antes.",
  },
];

export function Equipo() {
  return (
    <section id="equipo" className="bg-surface-light py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mb-16 text-center"
        >
          <motion.div variants={fadeUp} custom={0} className="mb-3 text-xs font-bold uppercase tracking-eyebrow text-gold">
            Nuestro Equipo
          </motion.div>
          <motion.h2 variants={fadeUp} custom={1} className="mb-6 text-3xl font-bold text-on-light sm:text-4xl">
            Los profesionales detrás de cada solución
          </motion.h2>
          <motion.div variants={fadeUp} custom={2} className="mx-auto h-1 w-12 bg-gold" />
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {TEAM.map((m, i) => (
            <motion.div
              key={m.name}
              variants={fadeUp}
              custom={i}
              className="group flex flex-col items-center border border-gray-200 bg-white p-8 pt-10 text-center transition-all duration-500 hover:border-gold/40 hover:shadow-lg"
            >
              {/* Circular photo */}
              <div className="mb-6 h-32 w-32 overflow-hidden rounded-full border-2 border-gray-200 bg-gray-100 transition-all duration-500 group-hover:border-gold sm:h-36 sm:w-36">
                <img
                  src={m.img}
                  alt={`Foto de ${m.name}, ${m.role}`}
                  loading="lazy"
                  className={`h-full w-full object-cover object-top grayscale transition-all duration-500 group-hover:grayscale-0 ${m.imgExtra || ""}`}
                />
              </div>

              {/* Info */}
              <h3 className="text-lg font-bold text-on-light">{m.name}</h3>
              <div className="mb-4 text-xs font-medium uppercase tracking-label text-gold/70">
                {m.role}
              </div>

              {/* Quote */}
              {m.quote && (
                <div className="mt-auto w-full border-t border-gray-100 pt-4">
                  <p className="text-sm italic leading-relaxed text-on-light-muted">
                    "{m.quote}"
                  </p>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
