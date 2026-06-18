import { VALORES } from "./data";
import { GoldRule, PageSection, SectionEyebrow, SectionTitle, ValueCard } from "./shared";

export function ValoresSection() {
  return (
    <PageSection id="valores">
      <SectionEyebrow>Valores</SectionEyebrow>
      <SectionTitle>Lo que nos define</SectionTitle>
      <GoldRule />
      <div className="mt-14 grid grid-cols-1 border-l border-t border-[#e0e0e0] md:grid-cols-3 print:grid-cols-3">
        {VALORES.map((v, i) => <ValueCard key={i} title={v.title} description={v.description} />)}
      </div>
    </PageSection>
  );
}
