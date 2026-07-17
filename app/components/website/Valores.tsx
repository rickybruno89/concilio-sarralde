import { AnimateInView } from "./animations";
import { VALORES } from "~/routes/brochure/components/data";
import { asset } from "~/lib/asset";

export function Valores() {
  return (
    <section id="valores" className="relative min-h-screen overflow-hidden">
      {/* Single hero background */}
      <img
        src={asset("/assets/valores-bg.webp")}
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-black/75" />

      {/* Content over overlay */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 py-24 sm:py-32 lg:px-10">
        <AnimateInView
          stagger
          className="mb-16 text-center"
        >
          <div className="mb-3 text-xs font-bold uppercase tracking-eyebrow text-gold">
            Nuestros Pilares
          </div>
          <h2 className="mb-6 text-3xl font-bold text-on-dark sm:text-4xl">
            Valores que nos definen
          </h2>
          <div className="mx-auto h-1 w-12 bg-gold" />
        </AnimateInView>

        <AnimateInView
          stagger
          className="grid w-full gap-px sm:grid-cols-2 lg:grid-cols-3"
        >
          {VALORES.map((v, i) => (
            <div
              key={v.title}
              className="group border border-white/10 bg-white/5 px-8 py-10 transition-all duration-500 hover:bg-white/10"
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
            </div>
          ))}
        </AnimateInView>
      </div>
    </section>
  );
}
