import { AnimateInView } from "./animations";
import { asset } from "~/lib/asset";

function LogoGrid() {
  return (
    <div className="flex flex-col-reverse gap-16 lg:grid lg:grid-cols-2 lg:gap-20 items-center sm:mt-15">
      <div>
        <p className="text-base leading-relaxed text-on-light-secondary my-2">
          Creemos que las mejores soluciones surgen de un análisis profundo y de
          una comprensión integral de cada situación. Por ello, estudiamos cada
          caso de manera individual, considerando sus particularidades y los
          desafíos que presenta, para definir el enfoque más adecuado. Cuando la
          naturaleza del asunto lo requiere,
          <span className="font-extrabold text-on-light">
            {" "}
            colaboramos de manera puntual con profesionales de distintas
            especialidades y firmas de reconocida trayectoria, trabajando como
            un solo equipo e integrando conocimientos y experiencias que aportan
            valor agregado al proceso.
          </span>
        </p>
        <p className="mt-6 text-base leading-relaxed text-on-light-secondary my-2">
          Esta modalidad de trabajo nos permite ofrecer respuestas más
          completas, combinando distintas perspectivas sin perder la
          coordinación, el seguimiento ni la responsabilidad profesional que
          distinguen a nuestro estudio. Nuestro compromiso es brindar un
          servicio de excelencia, sustentado en el rigor técnico, la calidad
          humana y una atención cercana, siempre orientada a proteger los
          intereses de quienes depositan su confianza en nosotros.
        </p>
      </div>

      <div>
        <img
          src={asset("/assets/trabajo-colaborativo.png")}
          alt="Trabajo colaborativo"
          loading="lazy"
          className="w-full h-auto rounded-2xl object-cover"
        />
      </div>
    </div>
  );
}

export function Colaboraciones() {
  return (
    <section id="colaboraciones" className="bg-surface-light py-24 sm:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <AnimateInView stagger className="mb-6 text-center">
          <div className="mb-3 text-xs font-bold uppercase tracking-eyebrow text-gold">
            Alianzas Estratégicas
          </div>
          {/* <h2 className="mb-6 text-3xl font-bold text-on-light sm:text-4xl">
            Clientes & Alianzas Estratégicas
          </h2> */}
          <h2 className="mb-6 text-3xl font-bold text-on-light sm:text-4xl">
            Trabajo Colaborativo
          </h2>
          <div className="mx-auto h-1 w-12 bg-gold" />
        </AnimateInView>

        <AnimateInView>
          <LogoGrid />
          {/* <LogoGrid title="Sector Privado" items={CLIENTES_PRIVADOS} />
          <LogoGrid title="Sector Público" items={CLIENTES_PUBLICOS} /> */}
        </AnimateInView>
      </div>
    </section>
  );
}
