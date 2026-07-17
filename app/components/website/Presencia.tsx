import { AnimateInView } from "./animations";

export function Presencia() {
  return (
    <section id="presencia" className="overflow-hidden bg-surface-dark py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <AnimateInView
          stagger
          className="mb-12 text-center"
        >
          <div className="mb-3 text-xs font-bold uppercase tracking-eyebrow text-gold">
            Presencia Internacional
          </div>
          <h2 className="mb-6 text-3xl font-bold text-on-dark sm:text-4xl">
            Alcance Global
          </h2>
          <div className="mx-auto mb-6 h-1 w-12 bg-gold" />
          <p className="mx-auto max-w-xl text-base text-on-dark-secondary">
            Oficinas en Tucumán y Buenos Aires. Presencia activa en más de 30 países de América, Europa y el Caribe.
          </p>
        </AnimateInView>

        <AnimateInView
          className="mx-auto max-w-4xl"
        >
          <svg className="w-full" viewBox="0 0 1000 500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Mapa de presencia internacional de Concilio & Sarralde en América, Europa y el Caribe">
            <defs>
              <filter id="webGlow">
                <feGaussianBlur result="blur" stdDeviation="3" />
                <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
              </filter>
            </defs>
            <g fill="#2E2E32" stroke="#45454A" strokeWidth="0.5" transform="translate(220 80) scale(2.15)">
              <path d="M0 14L132 0L55 72L104 102L58 178L58 88L-20 16Z" />
              <path d="M200 18L322 4L226 76L226 158L128 70L170 22L200 18Z" />
              <path d="M258 108L308 168L258 154L258 108Z" />
            </g>
            <g opacity="0.22" stroke="#B58A32" strokeDasharray="4 5" strokeWidth="1.5">
              {[[370,393,300,150],[370,393,320,190],[370,393,340,250],[370,393,395,250],
                [370,393,400,310],[370,393,580,145],[370,393,625,135],[370,393,550,200],
                [370,393,665,155],[370,393,670,185]].map(([x1,y1,x2,y2],i)=>(
                <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />
              ))}
            </g>
            <g fill="#D4A835" filter="url(#webGlow)">
              <circle cx={300} cy={140} r={6} />
              <circle cx={320} cy={195} r={8} />
              <circle cx={320} cy={195} r={18} opacity={0.15} />
              <circle cx={335} cy={250} r={6} />
              <circle cx={395} cy={250} r={6} />
              <circle cx={400} cy={315} r={7} />
              <circle cx={400} cy={355} r={6} />
              <circle cx={370} cy={395} r={12} />
              <circle cx={370} cy={395} r={28} opacity={0.18} />
              <circle cx={580} cy={145} r={6} />
              <circle cx={625} cy={135} r={5} />
              <circle cx={665} cy={155} r={5} />
              <circle cx={550} cy={200} r={6} />
              <circle cx={670} cy={185} r={5} />
              <circle cx={355} cy={275} r={3} opacity={0.8} />
              <circle cx={365} cy={292} r={3} opacity={0.8} />
              <circle cx={415} cy={288} r={3} opacity={0.8} />
              <circle cx={352} cy={340} r={3} opacity={0.8} />
              <circle cx={355} cy={385} r={3} opacity={0.8} />
            </g>
            <g fill="#D4A835" fontFamily="Inter, Arial, sans-serif" fontSize="10" fontWeight="600" textAnchor="middle">
              {[["CANADA",300,128],["USA",320,182],["MEXICO",335,238],["CARIBE",395,238],
                ["BRASIL",400,302],["URUGUAY",400,342],["ARGENTINA",370,375],
                ["UK",580,132],["DINAMARCA",625,123],["HOLANDA",665,143],
                ["ESPAÑA",550,188],["ITALIA",670,173]].map(([label,x,y])=>(
                <text key={label as string} x={x as number} y={y as number}>{label as string}</text>
              ))}
            </g>
          </svg>
        </AnimateInView>
      </div>
    </section>
  );
}
