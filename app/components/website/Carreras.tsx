import { AnimateInView } from "./animations";

const CV_EMAIL = "a.sarralde@concilioysarralde.com.ar";
const CV_SUBJECT = "CARRERAS - CV Apellido y Nombre";
const MAILTO_HREF = `mailto:${CV_EMAIL}?subject=${encodeURIComponent(CV_SUBJECT)}`;

export function Carreras() {
  return (
    <section id="carreras" className="bg-surface-light py-12 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <AnimateInView stagger className="mx-auto max-w-2xl text-center">
          <div className="mb-3 text-xs font-bold uppercase tracking-eyebrow text-gold">
            Sumate al equipo
          </div>
          <h2 className="mb-6 text-3xl font-bold text-on-light sm:text-4xl">
            Trabajá con nosotros
          </h2>
          <div className="mx-auto mb-6 h-1 w-12 bg-gold" />
          <p className="mb-10 text-base leading-relaxed text-on-light-secondary">
            Buscamos profesionales que quieran crecer en un estudio boutique con
            proyección internacional.
          </p>
          <p className="mb-10 text-base leading-relaxed text-on-light-secondary">
            Si te interesa sumarte, envianos tu CV a{" "}
            <a
              href={MAILTO_HREF}
              className="text-gold underline underline-offset-2 transition-colors hover:text-dark-gold"
            >
              {CV_EMAIL}
            </a>{" "}
            con el asunto{" "}
            <span className="text-on-light">&ldquo;{CV_SUBJECT}&rdquo;</span>.
          </p>
          <p className="mb-10 text-sm italic leading-relaxed text-on-light-muted">
            No te olvides de reemplazar &ldquo;Apellido y Nombre&rdquo; en el
            asunto por tus datos. El CV debe estar en formato PDF y nombrado
            como &ldquo;CV-Apellido-Nombre.pdf&rdquo;.
          </p>
          <a
            href={MAILTO_HREF}
            className="inline-flex items-center gap-2 border border-gold bg-gold px-8 py-3.5 text-sm font-bold uppercase tracking-label text-surface-dark transition-all duration-300 hover:bg-dark-gold hover:border-dark-gold"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-hidden="true"
            >
              <rect x="2" y="4" width="20" height="13" rx="2" />
              <polyline points="2,4 12,13 22,4" />
            </svg>
            Enviar mi CV
          </a>
        </AnimateInView>
      </div>
    </section>
  );
}
