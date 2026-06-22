import { INDUSTRIAS, STATS } from "./data";
import {
  GoldRule,
  PageSection,
  RegistroCard,
  SectionEyebrow,
  SectionTitle,
  Stat,
  Tag,
} from "./shared";

export function QuienesSomosSection() {
  return (
    <PageSection id="nosotros">
      <SectionEyebrow>Quiénes somos</SectionEyebrow>
      <SectionTitle>Una firma construida sobre experiencia real</SectionTitle>
      <GoldRule />
      <div className="grid xl:grid-cols-2 print:grid-cols-2 gap-10 mt-10">
        <div className="text-base font-light leading-[1.9] text-[#555]">
          <p className="font-bold! mb-5 text-balance">
            En 2012, Ezequiel Sarralde y Octavio Concilio fundaron el estudio
            con una visión clara: ofrecer una solución profesional completa,
            interdisciplinaria y de primer nivel.
          </p>
          <p className="mb-5 text-balance">
            Desde entonces, el equipo creció incorporando profesionales de
            disciplinas afines, consolidando vínculos estratégicos en Tucumán y
            Buenos Aires, y sumando nuevos socios a la firma.
          </p>
          <p className="text-balance">
            Trabajamos con organismos públicos y empresas privadas, adaptando
            nuestra metodología a la lógica, los objetivos y las exigencias
            regulatorias de cada cliente.
          </p>
        </div>
        <div className="text-base font-light leading-[1.9] text-[#e0e0e0]">
          <div className="bg-[#0a0a0a] p-6 rounded-2xl">
            <p className="mb-5 text-balance">
              La mayoría de nuestro plantel proviene de las principales firmas
              internacionales de auditoría y consultoría — las llamadas{" "}
              <span className="text-gold">Big Four</span>.
            </p>
            <p className="mb-5 text-balance">
              Esa formación define nuestra metodología, nuestro rigor técnico y
              los estándares de calidad que aplicamos en cada encargo.
            </p>
            <p className="text-pretty">
              Hoy contamos con proyectos activos en más de{" "}
              <span className="text-gold">30 países</span>, manteniendo siempre
              el trato personalizado como pilar de nuestra propuesta.
            </p>
          </div>
        </div>
      </div>
      <div className="text-center mt-10">
        <div className="grid grid-cols-4 gap-5 pt-10 justify-items-center">
          {STATS.map((s) => (
            <Stat key={s.label} value={s.value} label={s.label} />
          ))}
        </div>
      </div>
    </PageSection>
  );
}
