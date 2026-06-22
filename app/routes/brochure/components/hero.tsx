import { Amp } from "./shared";

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden border-b-4 border-gold px-5 py-14 pt-[100px] md:px-[52px] md:py-[88px] md:pt-[148px] print:min-h-[297mm] print:w-[210mm] print:break-after-page print:px-[16mm] print:py-[18mm]">
      <img
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-center"
        src="./assets/hero.jpeg"
      />
      <div className="absolute inset-0 bg-black/80" />
      <div className="relative z-[1] max-w-[960px] text-center">
        <div>
          <div className="flex justify-center">
            <img
              alt="Concilio Sarralde"
              src="./assets/logo-white.png"
              className="mb-3 block h-20"
            />
          </div>
          <div className="text-[26px] font-bold uppercase tracking-[3px] text-white">
            Concilio <Amp /> Sarralde
          </div>
          <div className="mb-7 text-[13px] font-bold uppercase tracking-[4px] text-gold">
            Firma Boutique Internacional · Desde 2012
          </div>
        </div>
        <h1 className="mb-8 text-[40px] font-bold leading-none tracking-[-1px] text-white md:text-[clamp(46px,6vw,88px)] md:tracking-[-2px] [&_em]:not-italic [&_em]:text-gold">
          Experiencia global
          <br />
          <em>Soluciones locales</em>
        </h1>
        <p className="mx-auto mb-14 max-w-[640px] text-[16px] font-light leading-[1.85] text-[#e0e0e0] md:text-[17px]">
          Cada organización enfrenta desafíos únicos. Estamos para
          simplificarlos acompañando cada decisión con el rigor de las grandes
          firmas internacionales y la cercanía de un equipo que se involucra
          como si el negocio fuera propio.
        </p>
      </div>
    </section>
  );
}
