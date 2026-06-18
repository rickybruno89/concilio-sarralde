export function Amp() {
  return <span className="font-serif italic font-normal text-gold">&amp;</span>;
}

export function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-4 text-[15px] font-bold uppercase tracking-[4px] text-gold">
      {children}
    </div>
  );
}

export function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-5 text-[clamp(28px,3.5vw,50px)] font-bold leading-[1.08] tracking-[-0.5px] text-dark">
      {children}
    </h2>
  );
}

export function GoldRule() {
  return <div className="my-3 h-0.75 w-12 bg-gold" />;
}

export function PageSection({
  id,
  className = "",
  children,
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className={`px-5 py-16 md:px-[52px] md:py-[100px] print:min-h-[297mm] print:w-[210mm] print:break-after-page print:px-[16mm] print:py-[18mm] ${className}`}
    >
      {children}
    </section>
  );
}

export function Stat({
  value,
  label,
}: {
  value: React.ReactNode;
  label: string;
}) {
  return (
    <div className="border-b border-white/20 pb-4 md:mr-12 md:border-b-0 md:border-r md:border-white/20 md:pr-12 print:mr-8 print:border-b-0 print:border-r print:pr-8">
      <div className="text-[44px] font-bold leading-none text-white">
        {value}
      </div>
      <div className="mt-1.5 text-[13px] font-semibold uppercase tracking-[2px] text-white/60">
        {label}
      </div>
    </div>
  );
}

export function ClientLogo({ alt, src }: { alt: string; src: string }) {
  return (
    <div className="flex items-center justify-center border-r border-b border-[#e0e0e0] bg-white p-6 min-h-[110px]">
      <img
        alt={alt}
        src={src}
        className="block h-auto max-h-[90px] w-full max-w-[160px] object-contain"
      />
    </div>
  );
}

export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block text-[13px] font-semibold text-dark bg-[#f5f5f5] text-gray-600 border border-[#e0e0e0] rounded-full px-2 py-1">
      {children}
    </span>
  );
}

export function SmallTag({ children }: { children: React.ReactNode }) {
  return (
    <span className="border border-[#dcdcdc] px-3 py-[5px] text-[12px] font-bold uppercase tracking-[1.5px] text-[#666]">
      {children}
    </span>
  );
}

export function ServiceCard({
  title,
  items,
}: {
  title: React.ReactNode;
  items: string[];
}) {
  return (
    <div className="cursor-default border-b border-r border-[#e0e0e0] border-t-2 border-t-transparent px-[22px] py-[26px] transition hover:border-t-gold hover:bg-dark [&:hover_.srv-name]:text-dark [&:hover_li]:text-dark/45">
      <div className="srv-name mb-3 text-[15px] font-bold text-dark">
        {title}
      </div>
      <ul className='list-none [&_li]:border-b [&_li]:border-black/[0.04] [&_li]:py-[3px] [&_li]:text-[15px] [&_li]:leading-[1.6] [&_li]:text-[#888] [&_li:before]:text-gold [&_li:before]:content-["–_"]'>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export function ValueCard({
  title,
  description,
}: {
  title: React.ReactNode;
  description: string;
}) {
  return (
    <div className="border-b border-r border-[#e0e0e0] p-[34px]">
      <div className="mb-2.5 text-[16px] font-bold text-gold">{title}</div>
      <div className="text-[15px] leading-[1.8] text-[#666]">{description}</div>
    </div>
  );
}

export function DifCard({
  num,
  title,
  body,
  foot,
}: {
  num: string;
  title: React.ReactNode;
  body: React.ReactNode;
  foot: string;
}) {
  return (
    <div className="border border-[#333] p-8">
      <div className="mb-2 text-[28px] font-bold text-gold">{num}</div>
      <div className="mb-3 text-[16px] font-bold text-dark">{title}</div>
      <div className="mb-4 text-[15px] leading-[1.8] text-[#aaa]">{body}</div>
      <div className="text-[12px] font-bold uppercase tracking-[2px] text-gold">
        {foot}
      </div>
    </div>
  );
}

export function RegistroCard({
  entity,
  title,
  description,
}: {
  entity: "SSN" | "UIF";
  title: string;
  description: string;
}) {
  return (
    <div className="flex items-center gap-4 border border-[#ebebeb] bg-[#f5f5f5] px-5 py-4">
      <div className="[&_strong]:mb-[3px] [&_strong]:block [&_strong]:text-[15px] [&_strong]:font-bold [&_strong]:text-dark [&_span]:text-sm [&_span]:leading-[1.6] [&_span]:text-[#888]">
        <strong>{title}</strong>
        <span>{description}</span>
        <div className="h-px w-full shrink-0 bg-[#e0e0e0] my-3" />
        <div className={`w-80 ${entity === "UIF" ? "bg-[#232d4f] p-3" : ""}`}>
          <img
            alt={entity === "SSN" ? "SSN" : "UIF"}
            src={entity === "SSN" ? "./assets/ssn.png" : "./assets/uif.png"}
          />
        </div>
      </div>
    </div>
  );
}
