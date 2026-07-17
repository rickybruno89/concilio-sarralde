import { AnimateInView } from "./animations";
import { INDUSTRIAS } from "~/routes/brochure/components/data";

export function Industrias() {
  return (
    <section id="industrias" className="bg-surface-light py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <AnimateInView
          className="mb-16 text-center"
        >
          <div className="mb-3 text-xs font-bold uppercase tracking-eyebrow text-gold">
            Alcance Sectorial
          </div>
          <h2 className="mb-6 text-3xl font-bold text-on-light sm:text-4xl">
            Industrias que Atendemos
          </h2>
          <div className="mx-auto mb-6 h-1 w-12 bg-gold" />
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-on-light-secondary">
            Nuestra experiencia es transversal a todos los sectores. Trabajamos con empresas de distintas industrias, adaptando nuestra metodología a cada realidad.
          </p>
        </AnimateInView>

        <AnimateInView
          stagger
          className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
        >
          {INDUSTRIAS.map((industria) => (
            <div
              key={industria}
              className="flex items-center justify-center border border-gray-200 bg-white px-4 py-5 text-center text-sm font-medium text-on-light transition-all duration-300 hover:border-gold/40 hover:shadow-md"
            >
              {industria}
            </div>
          ))}
        </AnimateInView>
      </div>
    </section>
  );
}
