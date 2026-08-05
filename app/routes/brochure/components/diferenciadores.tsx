import { DIFERENCIADORES } from "../../../lib/data";
import { DifCard, GoldRule, SectionEyebrow, SectionTitle } from "./shared";

export function DiferenciadoresSection() {
  return (
    <section className="bg-dark px-5 py-16 md:px-[52px] md:py-[100px] print:min-h-[297mm] print:w-[210mm] print:break-after-page print:px-[16mm] print:py-[18mm]">
      <SectionEyebrow>Por qué elegirnos</SectionEyebrow>
      <SectionTitle>Lo que nos hace diferentes</SectionTitle>
      <GoldRule />
      <div className="mt-8">
        {DIFERENCIADORES.map((d) => (
          <DifCard key={d.num} {...d} />
        ))}
      </div>
    </section>
  );
}
