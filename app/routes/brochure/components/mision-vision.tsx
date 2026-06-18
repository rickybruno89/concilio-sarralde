import { GoldRule, PageSection, SectionEyebrow, SectionTitle } from "./shared";

export function MisionVisionSection() {
  return (
    <PageSection className="bg-[#f9f9f9]">
      <SectionEyebrow>Misión y Visión</SectionEyebrow>
      <SectionTitle>Nuestro propósito y proyección</SectionTitle>
      <GoldRule />
      <div className="mt-14 grid grid-cols-1 gap-12 md:grid-cols-2 print:grid-cols-2">
        <div className="border border-[#e0e0e0] bg-white p-10">
          <div className="mb-2 text-[12px] font-bold uppercase tracking-[3px] text-gold">Misión</div>
          <div className="mb-3 text-[16px] font-bold text-dark">Nuestro propósito</div>
          <div className="text-[15px] leading-[1.8] text-[#666]">
            Brindar a nuestros clientes el mejor servicio profesional en las áreas de nuestra especialidad, para que encuentren en nosotros una total satisfacción y apoyo a los problemas que se presentan en su actividad diaria.
          </div>
        </div>
        <div className="border border-[#e0e0e0] bg-white p-10">
          <div className="mb-2 text-[12px] font-bold uppercase tracking-[3px] text-gold">Visión</div>
          <div className="mb-3 text-[16px] font-bold text-dark">Líderes en cada área</div>
          <div className="text-[15px] leading-[1.8] text-[#666]">
            Ser líderes en los servicios que prestamos, con proyección internacional y reconocidos por nuestro rigor técnico e independencia.
          </div>
        </div>
      </div>
    </PageSection>
  );
}
