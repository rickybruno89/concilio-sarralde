import { AnimateInView } from "./animations";
import {
  CLIENTES_PRIVADOS,
  CLIENTES_PUBLICOS,
  ALIANZAS_ESTRATEGICAS,
} from "~/routes/brochure/components/data";
import { asset } from "~/lib/asset";

function LogoGrid({
  title,
  items,
}: {
  title: string;
  items: { name: string; logo?: string }[];
}) {
  return (
    <div className="mb-12">
      <div className="mb-6 text-xs font-bold uppercase tracking-eyebrow text-gold/70">
        {title}
      </div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {items.map((c) => (
          <div
            key={c.name}
            className="group flex h-24 items-center justify-center border border-gray-200 bg-white p-4 transition-all duration-300 hover:border-gold/40 hover:shadow-md"
          >
            {c.logo ? (
              <img
                src={asset(c.logo.replace("./assets/", "/assets/"))}
                alt={`Logo de ${c.name}`}
                loading="lazy"
                className="max-h-14 max-w-full object-contain transition-all duration-300 group-hover:grayscale group-hover:opacity-50"
              />
            ) : (
              <span className="text-center text-xs font-medium uppercase tracking-wider text-on-light group-hover:text-on-light-muted">
                {c.name}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export function Clientes() {
  return (
    <section id="clientes" className="bg-surface-light py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <AnimateInView
          stagger
          className="mb-16 text-center"
        >
          <div className="mb-3 text-xs font-bold uppercase tracking-eyebrow text-gold">
            Confían en nosotros
          </div>
          <h2 className="mb-6 text-3xl font-bold text-on-light sm:text-4xl">
            Clientes & Alianzas Estratégicas
          </h2>
          <div className="mx-auto h-1 w-12 bg-gold" />
        </AnimateInView>

        <AnimateInView
        >
          <LogoGrid title="Alianzas Estratégicas" items={ALIANZAS_ESTRATEGICAS} />
          <LogoGrid title="Sector Privado" items={CLIENTES_PRIVADOS} />
          <LogoGrid title="Sector Público" items={CLIENTES_PUBLICOS} />
        </AnimateInView>
      </div>
    </section>
  );
}
