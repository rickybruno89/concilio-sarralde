import { useEffect } from "react";
import { motion } from "framer-motion";

export function PrivacyPolicyModal({ onClose }: { onClose: () => void }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-60 flex items-center justify-center bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 40, scale: 0.97 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label="Política de privacidad"
        className="relative flex max-h-dvh w-full flex-col overflow-hidden bg-surface text-white sm:max-h-[85vh] sm:max-w-4xl sm:rounded-lg sm:border sm:border-white/10"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 px-6 py-4 sm:px-8">
          <h2 className="text-lg font-bold text-on-dark">
            Política de privacidad
          </h2>
          <button
            onClick={onClose}
            aria-label="Cerrar política de privacidad"
            className="flex h-10 w-10 items-center justify-center rounded-full text-white/60 transition-colors hover:bg-white/10 hover:text-white"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto px-6 py-6 sm:px-8">
          <p className="mb-6 text-xs uppercase tracking-eyebrow text-gold">
            Última actualización: julio de 2026
          </p>

          <div className="space-y-6 text-sm leading-relaxed text-on-dark-secondary">
            <section>
              <h3 className="mb-2 text-base font-bold text-on-dark">
                1. Cookies y tecnologías similares
              </h3>
              <p className="mb-3">
                Este sitio no utiliza cookies publicitarias, cookies de
                analítica ni cookies destinadas a rastrear la actividad de los
                visitantes.
              </p>
              <p>
                El sitio tampoco utiliza almacenamiento local con fines de
                seguimiento, personalización o publicidad.
              </p>
            </section>

            <section>
              <h3 className="mb-2 text-base font-bold text-on-dark">
                2. Datos técnicos de navegación
              </h3>
              <p className="mb-3">
                Al acceder al sitio, el proveedor de alojamiento puede procesar
                automáticamente determinados datos técnicos necesarios para
                entregar el contenido, mantener la seguridad y diagnosticar
                errores, como la dirección IP, la fecha y hora de acceso, el
                tipo de navegador y las páginas solicitadas.
              </p>
              <p>
                Estos datos no son utilizados por Estudio Concilio &amp;
                Sarralde para elaborar perfiles publicitarios ni para realizar
                seguimiento comercial de los visitantes.
              </p>
            </section>

            <section>
              <h3 className="mb-2 text-base font-bold text-on-dark">
                3. Servicios de terceros
              </h3>
              <p>
                Este sitio no depende de servicios externos de seguimiento,
                publicidad o analítica. Las tipografías se sirven desde el propio
                servidor del sitio, sin conexiones a terceros.
              </p>
            </section>

            <section>
              <h3 className="mb-2 text-base font-bold text-on-dark">
                4. Comunicaciones
              </h3>
              <p>
                Si el visitante se comunica por correo electrónico, los datos
                incluidos en el mensaje serán utilizados únicamente para
                responder la consulta y gestionar la relación correspondiente.
              </p>
            </section>

            <section>
              <h3 className="mb-2 text-base font-bold text-on-dark">
                5. Derechos y contacto
              </h3>
              <p>
                Las personas pueden solicitar información, acceso, rectificación
                o supresión de sus datos personales cuando corresponda,
                escribiendo a:{" "}
                <a
                  href="mailto:a.sarralde@concilioysarralde.com.ar"
                  className="text-gold underline hover:text-dark-gold"
                >
                  a.sarralde@concilioysarralde.com.ar
                </a>
              </p>
            </section>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-white/10 px-6 py-4 sm:px-8">
          <button
            onClick={onClose}
            className="w-full bg-gold px-5 py-2.5 text-xs font-bold uppercase tracking-nav text-surface-dark transition-all hover:bg-dark-gold sm:w-auto"
          >
            Cerrar
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}
