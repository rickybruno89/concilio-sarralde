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
      className={`px-5 py-16 md:px-[52px] md:py-[100px] print:min-h-[297mm] print:w-[210mm] print:break-after-page print:px-[16mm] print:py-[18mm] ${className} border-b-4 border-gold`}
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
    <div className="first:border-0 border-l-3 border-l-gold w-full">
      <div className="text-[44px] font-bold leading-none text-[#333333]">
        {value}
      </div>
      <div className="mt-1.5 text-[13px] font-semibold uppercase tracking-[2px] text-[#888888]">
        {label}
      </div>
    </div>
  );
}

export function ClientLogo({ alt, src }: { alt: string; src: string }) {
  return (
    <div className="flex items-center justify-center p-6 min-h-[110px]">
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
  description,
  items,
}: {
  title: React.ReactNode;
  description: string;
  items: string[];
}) {
  return (
    <div className="px-2 py-4 border border-[#e0e0e0] rounded-2xl flex">
      <div className="p-2">
        <div className="h-2 w-2 bg-dark-gold rounded-full" />
      </div>
      <div className="flex-1">
        <div className="mb-1 text-[16px] font-bold text-dark">{title}</div>
        <div className="mb-1 text-[13px] text-dark">{description}</div>
        <div className="flex gap-1 flex-wrap">
          {items.map((item, i) => (
            <span
              className="inline-block bg-gold/10 rounded-full px-1 py-px text-[11px] font-semibold text-dark-gold"
              key={i}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
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
    <div className="p-2">
      <div className="flex items-center gap-4">
        <div className="text-[22px] font-bold text-gold">
          {num}
          <span className="ml-5 text-[18px] font-bold text-gold">{foot}</span>
        </div>
      </div>
      <div className="ml-12 mt-2 text-[15px] font-bold text-dark">
        {title}: <span className="leading-[1.8] text-[#aaa]">{body}</span>
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
        <div className={`w-40 ${entity === "UIF" ? "bg-[#232d4f] p-3" : ""}`}>
          <img
            alt={entity === "SSN" ? "SSN" : "UIF"}
            src={entity === "SSN" ? "./assets/ssn.png" : "./assets/uif.png"}
          />
        </div>
      </div>
    </div>
  );
}

export function Quote({
  children,
  author,
}: {
  children: React.ReactNode;
  author: string;
}) {
  return (
    <div className="border-l-[3px] border-gold bg-black/2 px-7 py-5">
      <div className="font-serif text-base italic leading-[1.85] text-[#333]">
        {children}
      </div>
      <div className="mt-3 text-sm font-semibold tracking-[1px] text-gold">
        — {author}
      </div>
    </div>
  );
}
