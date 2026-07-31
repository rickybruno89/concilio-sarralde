import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { AnimateInView } from "./animations";

const STATS = [
  { value: 14, suffix: "", label: "Años de trayectoria" },
  { value: 300, suffix: "+", label: "Clientes satisfechos" },
  { value: 30, suffix: "+", label: "Países" },
  { value: 2, suffix: "", label: "Sedes" },
];

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const duration = 2000;
    const startTime = performance.now();
    const timer = requestAnimationFrame(function tick(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      setCount(Math.round(progress * target));
      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    });
    return () => cancelAnimationFrame(timer);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {suffix === "+" ? "+" : ""}
      {count}
      {suffix === "+" ? "" : suffix}
    </span>
  );
}

export function QuienesSomos() {
  return (
    <section id="nosotros" className="bg-surface-light py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <AnimateInView stagger>
          <div className="max-w-xl">
            <div className="mb-3 text-xs font-bold uppercase tracking-eyebrow text-gold">
              Quiénes Somos
            </div>
            <h2 className="mb-6 text-3xl font-bold leading-tight text-on-light sm:text-4xl">
              Una firma construida sobre experiencia real
            </h2>
          </div>

          <div className="grid gap-16 grid-cols-1 lg:grid-cols-2 lg:gap-20">
            <div>
              <div className="mb-4 h-1 w-12 bg-gold" />
              <p className="mb-6 text-base leading-relaxed text-on-light-secondary">
                <b>En 2012, Ezequiel Sarralde y Octavio Concilio</b> fundaron el
                estudio con una visión clara: ofrecer una solución profesional
                completa, interdisciplinaria y de primer nivel.
              </p>
              <p className="mb-6 text-base leading-relaxed text-on-light-secondary">
                Desde entonces, el equipo creció incorporando profesionales de
                Ciencias Económicas, Abogacía, Sistemas y Marketing,
                consolidando vínculos estratégicos en Tucumán y Buenos Aires, y
                sumando nuevos socios a la firma.
              </p>
              <p className="text-base leading-relaxed text-on-light-secondary">
                Trabajamos con organismos públicos y empresas privadas,
                adaptando nuestra metodología a la lógica, los objetivos y las
                exigencias regulatorias de cada cliente.
              </p>
            </div>

            <div className="bg-surface-dark p-8 rounded-2xl text-2xl text-on-dark">
              <p className="mb-6 text-base leading-relaxed">
                La mayoría de nuestro plantel proviene de las principales firmas
                internacionales de auditoría y consultoría, las llamadas{" "}
                <span className="text-gold">Big Four.</span>
              </p>
              <p className="mb-6 text-base leading-relaxed">
                Esa formación define nuestra metodología, nuestro rigor técnico
                y los estándares de calidad que aplicamos en cada encargo.
              </p>
              <p className="mb-6 text-base leading-relaxed">
                Hoy contamos con proyectos activos en más de{" "}
                <span className="text-gold">30 países</span>, manteniendo
                siempre el trato personalizado como pilar de nuestra propuesta.
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:col-span-2">
              {STATS.map((s) => (
                <div key={s.label} className="border-l-2 border-gold pl-6">
                  <div className="text-4xl font-bold text-on-light sm:text-5xl">
                    <CountUp target={s.value} suffix={s.suffix} />
                  </div>
                  <div className="mt-2 text-sm uppercase tracking-label text-on-light-muted">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimateInView>
      </div>
    </section>
  );
}
