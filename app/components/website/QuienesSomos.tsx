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
        <AnimateInView
          stagger
          className="grid gap-16 lg:grid-cols-2 lg:gap-20"
        >
          {/* Left: text */}
          <div>
            <div className="mb-3 text-xs font-bold uppercase tracking-eyebrow text-gold">
              Quiénes Somos
            </div>
            <h2 className="mb-6 text-3xl font-bold leading-tight text-on-light sm:text-4xl">
              Soluciones que generan confianza y resultados
            </h2>
            <div className="mb-4 h-1 w-12 bg-gold" />
            <p className="mb-6 text-base leading-relaxed text-on-light-secondary">
              Somos una firma boutique internacional fundada en Tucumán, Argentina, con sede
              también en Buenos Aires. Desde 2012 brindamos servicios profesionales integrales
              con estándares Big Four, cercanía local y presencia activa en más de 30 países.
            </p>
            <p className="text-base leading-relaxed text-on-light-secondary">
              Nuestro equipo interdisciplinario de contadores, auditores, abogados y
              especialistas en sistemas trabaja de forma integrada para ofrecer soluciones
              a medida en auditoría, consultoría, compliance, outsourcing y más.
            </p>
          </div>

          {/* Right: stats */}
          <div className="grid grid-cols-2 gap-8">
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
        </AnimateInView>
      </div>
    </section>
  );
}
