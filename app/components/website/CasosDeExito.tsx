import { AnimateInView } from "./animations";

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
        <AnimateInView
          stagger
          className="mb-16 text-center"
        >
          <div className="mb-3 text-xs font-bold uppercase tracking-eyebrow text-gold">
            Experiencia comprobada
          </div>
          <h2 className="mb-6 text-3xl font-bold text-on-dark sm:text-4xl">
            Casos de Éxito
          </h2>
          <div className="mx-auto h-1 w-12 bg-gold" />
        </AnimateInView>

        <AnimateInView
          stagger
          className="grid gap-8 md:grid-cols-3"
        >
          {CASOS.map((caso) => (
            <article
              key={caso.title}
              className="flex flex-col border border-white/10 bg-white/5 p-8 transition-all duration-500 hover:border-gold/40 hover:bg-white/10"
            >
              <h3 className="mb-4 text-xl font-bold text-on-dark">{caso.title}</h3>
              <p className="mb-6 flex-1 text-sm leading-relaxed text-on-dark-secondary">
                {caso.text}
              </p>
              <span className="mt-auto inline-block self-start border border-gold/30 bg-gold/10 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-gold">
                {caso.tag}
              </span>
            </article>
          ))}
        </AnimateInView>
      </div>
    </section>
  );
}
