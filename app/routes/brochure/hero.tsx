import { STATS } from "./data";
import { Stat } from "./shared";

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden border-b-4 border-gold bg-white px-5 py-14 pt-[100px] md:px-[52px] md:py-[88px] md:pt-[148px] print:min-h-[297mm] print:w-[210mm] print:break-after-page print:px-[16mm] print:py-[18mm]">
      <img alt="" className="absolute inset-0 h-full w-full object-cover object-center brightness-[0.3] md:left-auto md:right-0 md:w-[48%] md:brightness-[0.7] print:right-0 print:w-[48%] print:brightness-[0.7]" src="./assets/hero.png" />
      <div className="relative z-[1] max-w-[680px]">
        <div className="mb-7 text-[11px] font-bold uppercase tracking-[4px] text-gold">Firma Boutique Internacional · Desde 2012</div>
        <h1 className="mb-8 text-[40px] font-bold leading-none tracking-[-1px] text-white md:text-[clamp(46px,6vw,88px)] md:tracking-[-2px] md:text-dark print:text-dark [&_em]:not-italic [&_em]:text-gold">
          Experiencia global<br /><em>Soluciones locales</em>
        </h1>
        <p className="mb-14 max-w-[560px] text-[15px] font-light leading-[1.85] text-white md:text-[17px] md:text-[#555] print:text-[#555]">
          Profesionales de las ciencias económicas, jurídicas y tecnológicas trabajando como un solo equipo interdisciplinario. Formados en las firmas de mayor prestigio internacional, comprometidos con cada cliente.
        </p>
        <div className="flex flex-col gap-5 pt-10 md:flex-row md:flex-wrap md:gap-0 print:flex-row print:gap-0">
          {STATS.map((s) => <Stat key={s.label} value={s.value} label={s.label} />)}
        </div>
      </div>
    </section>
  );
}
