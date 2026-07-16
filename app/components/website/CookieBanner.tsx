import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("cookies_accepted");
    if (!accepted) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("cookies_accepted", "true");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem("cookies_accepted", "false");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-surface/95 backdrop-blur-md"
        >
          <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-6 py-5 sm:flex-row sm:justify-between lg:px-10" role="dialog" aria-label="Aviso de cookies">
            <p className="text-sm text-white/60">
              Utilizamos cookies para mejorar su experiencia de navegación. Al continuar, acepta nuestra{" "}
              <a href="/politica-cookies" className="text-gold underline">política de cookies</a>.
            </p>
            <div className="flex gap-3">
              <button
                onClick={decline}
                className="border border-white/20 px-5 py-2 text-xs font-bold uppercase tracking-nav text-white/60 transition-all hover:border-white/40 hover:text-white"
              >
                Rechazar
              </button>
              <button
                onClick={accept}
                className="bg-gold px-5 py-2 text-xs font-bold uppercase tracking-nav text-surface-dark transition-all hover:bg-dark-gold"
              >
                Aceptar
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
