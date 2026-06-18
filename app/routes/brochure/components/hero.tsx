import { STATS } from "./data";
import { Stat } from "./shared";

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden border-b-4 border-gold px-5 py-14 pt-[100px] md:px-[52px] md:py-[88px] md:pt-[148px] print:min-h-[297mm] print:w-[210mm] print:break-after-page print:px-[16mm] print:py-[18mm]">
      <img alt="" className="absolute inset-0 h-full w-full object-cover object-center" src="./assets/bicentenario.webp" />
      <div className="absolute inset-0 bg-black/70" />
      <div className="relative z-[1] max-w-[960px] text-center">
        <div className="mb-7 text-[13px] font-bold uppercase tracking-[4px] text-gold">Firma Boutique Internacional · Desde 2012</div>
        <h1 className="mb-8 text-[40px] font-bold leading-none tracking-[-1px] text-white md:text-[clamp(46px,6vw,88px)] md:tracking-[-2px] [&_em]:not-italic [&_em]:text-gold">
          Experiencia global<br /><em>Soluciones locales</em>
        </h1>
        <p className="mx-auto mb-14 max-w-[640px] text-[16px] font-light leading-[1.85] text-[#e0e0e0] md:text-[17px]">
          Profesionales de las ciencias económicas, jurídicas y tecnológicas trabajando como un solo equipo interdisciplinario. Formados en las firmas de mayor prestigio internacional, comprometidos con cada cliente.
        </p>
        <div className="flex flex-col items-center gap-5 pt-10 md:flex-row md:justify-center md:gap-0 print:flex-row print:gap-0">
          {STATS.map((s) => <Stat key={s.label} value={s.value} label={s.label} />)}
        </div>
      </div>
    </section>
  );
}
