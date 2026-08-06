import { AnimateInView } from "./animations";
import { asset } from "~/lib/asset";

const FOUNDERS = [
  {
    name: "Ezequiel Sarralde",
    role: "Auditoría y Contabilidad",
    img: asset("/assets/socio-ezequiel-sarralde.png"),
  },
  {
    name: "Octavio Concilio",
    role: "Impuestos y Laboral",
    img: asset("/assets/socio-octavio-concilio.png"),
  },
];

const FOUNDERS_QUOTE =
  "Nos sumergimos en cada desafío como si fuera propio. Entendemos el negocio desde adentro y acompañamos cada decisión con visión integral. No somos un consultor externo más, el éxito de nuestros clientes es nuestro éxito.";

const SOCIOS: {
  name: string;
  role: string;
  img: string;
  quote: string;
  imgExtra?: string;
}[] = [
  // {
  //   name: "Ariel Del Rivero",
  //   role: "Auditoría, M&A · Buenos Aires",
  //   img: asset("/assets/socio-ariel-del-rivero.png"),
  //   quote:
  //     "Cuando una empresa cambia de manos o busca crecer, cada detalle importa. Un buen asesor encuentra lo que podría salir mal.",
  // },
  {
    name: "Jorge Bustos Foglia",
    role: "Procesos, Control y Cumplimiento",
    img: asset("/assets/socio-jorge-bustos-foglia.png"),
    imgExtra: "scale-115",
    quote:
      "Lo que no se mide no se controla, y lo que no se controla no se mejora.",
  },
  {
    name: "Ariadna Sarralde",
    role: "Auditoría y Project Management",
    img: asset("/assets/socio-ariadna-sarralde.png"),
    imgExtra: "scale-150",
    quote:
      "El valor de un asesor no está en la rapidez para resolver un problema, sino en la anticipación que evita que ocurra. Por eso nuestro rol empieza mucho antes.",
  },
];

export function Equipo() {
  return (
    <section id="equipo" className="bg-surface-light py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <AnimateInView stagger className="mb-16 text-center">
          <div className="mb-3 text-xs font-bold uppercase tracking-eyebrow text-gold">
            Nuestro Equipo
          </div>
          <h2 className="mb-6 text-3xl font-bold text-on-light sm:text-4xl">
            Los profesionales detrás de cada solución
          </h2>
          <div className="mx-auto h-1 w-12 bg-gold" />
        </AnimateInView>

        <div className="grid gap-8">
          {/* Founders — shared card */}
          <AnimateInView className="mb-4 border border-gray-200 bg-white p-8 sm:p-10 transition-all duration-500 hover:border-gold/40 hover:shadow-lg lg:mx-auto lg:mb-8 lg:w-5/6">
            <div className="mb-8 text-xs font-bold uppercase tracking-eyebrow text-gold/70">
              Socios Fundadores
            </div>
            <div className="grid gap-8 sm:grid-cols-2 mb-8">
              {FOUNDERS.map((f) => (
                <div key={f.name} className="group flex items-center gap-5">
                  <div className="h-32 w-32 shrink-0 overflow-hidden rounded-full border-2 border-gray-200 bg-gray-100 transition-all duration-500 group-hover:border-gold sm:h-36 sm:w-36">
                    <img
                      src={f.img}
                      alt={`Foto de ${f.name}, ${f.role}`}
                      loading="lazy"
                      className="h-full w-full object-cover object-top grayscale transition-all duration-500 group-hover:grayscale-0"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-on-light">
                      {f.name}
                    </h3>
                    <div className="text-xs font-medium uppercase tracking-label text-gold/70">
                      {f.role}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="border-t border-gray-100 pt-6">
              <blockquote className="border-l-2 border-gold pl-5">
                <p className="text-sm italic leading-relaxed text-on-light-muted">
                  &ldquo;{FOUNDERS_QUOTE}&rdquo;
                </p>
              </blockquote>
            </div>
          </AnimateInView>

          {/* Associates — shared card */}
          <AnimateInView className="border border-gray-200 bg-white p-8 sm:p-10 transition-all duration-500 hover:border-gold/40 hover:shadow-lg lg:mx-auto lg:w-5/6">
            <div className="mb-8 text-xs font-bold uppercase tracking-eyebrow text-gold/70">
              Asociados
            </div>
            <div className="grid gap-20 sm:gap-8 sm:grid-cols-2">
              {SOCIOS.map((m) => (
                <div key={m.name}>
                  <div className="group flex items-center gap-5">
                    <div className="h-32 w-32 shrink-0 overflow-hidden rounded-full border-2 border-gray-200 bg-gray-100 transition-all duration-500 group-hover:border-gold sm:h-36 sm:w-36">
                      <img
                        src={m.img}
                        alt={`Foto de ${m.name}, ${m.role}`}
                        loading="lazy"
                        className={`h-full w-full object-cover object-top grayscale transition-all duration-500 group-hover:grayscale-0 ${m.imgExtra || ""}`}
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-on-light">
                        {m.name}
                      </h3>
                      <div className="text-xs font-medium uppercase tracking-label text-gold/70">
                        {m.role}
                      </div>
                    </div>
                  </div>
                  {m.quote && (
                    <div className="mt-2 pt-2 sm:mt-6 border-t border-gray-100 sm:pt-6">
                      <blockquote className="border-l-2 border-gold pl-5">
                        <p className="text-sm italic leading-relaxed text-on-light-muted">
                          &ldquo;{m.quote}&rdquo;
                        </p>
                      </blockquote>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </AnimateInView>
        </div>
      </div>
    </section>
  );
}
