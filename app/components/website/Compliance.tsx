import { AnimateInView } from "./animations";
import { SSN_TAGS, UIF_TAGS } from "~/routes/brochure/components/data";
import { asset } from "~/lib/asset";

function TagGroup({
  logos,
  alt,
  title,
  description,
  tags,
}: {
  logos: string[];
  alt: string;
  title: string;
  description: string;
  tags: string[];
}) {
  return (
    <div className="border border-white/10 bg-white/5 p-8 h-full">
      <div className="flex gap-4 flex-wrap items-center">
        {logos.map((src, index) => (
          <img
            src={src}
            alt={alt}
            loading="lazy"
            className={`mb-4 w-auto object-contain ${index === 0 ? "h-18" : "h-16"}`}
          />
        ))}
      </div>
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
        <AnimateInView stagger className="mb-16 text-center">
          <div className="mb-3 text-xs font-bold uppercase tracking-eyebrow text-gold">
            Habilitaciones
          </div>
          <h2 className="mb-6 text-3xl font-bold text-on-dark sm:text-4xl">
            Registros & Cumplimiento
          </h2>
          <div className="mx-auto h-1 w-12 bg-gold" />
        </AnimateInView>

        <AnimateInView stagger className="grid gap-8 md:grid-cols-2">
          <div>
            <TagGroup
              logos={[asset("/assets/BCRA-logo.png"), asset("/assets/ssn.png")]}
              alt="Superintendencia de Seguros de la Nación"
              title="Registro de Auditores Externos — SSN"
              description="Los Crs. Ezequiel Sarralde y Ariadna Sarralde, socios del estudio, forman parte del Registro de Auditores Externos de la Superintendencia de Seguros de la Nación (SSN), organismo que regula el mercado asegurador argentino y exige que las auditorías de las compañías de seguros sean realizadas exclusivamente por contadores inscriptos en dicho registro. Además, el estudio ejecuta procedimientos acordados para el Banco Central de la República Argentina (BCRA)."
              tags={SSN_TAGS}
            />
          </div>
          <div>
            <TagGroup
              logos={[asset("/assets/uif.png")]}
              alt="Unidad de Información Financiera"
              title="Revisor Externo Independiente (REI) — UIF"
              description="Jorge Bustos Foglia, socio del estudio, integra el Registro de Revisores Externos Independientes de la Unidad de Información Financiera (UIF), organismo responsable de la prevención del lavado de activos y la financiación del terrorismo en el país. La revisión externa de los sujetos obligados debe ser realizada por profesionales inscriptos en dicho registro."
              tags={UIF_TAGS}
            />
          </div>
        </AnimateInView>
      </div>
    </section>
  );
}
