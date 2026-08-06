import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { asset } from "~/lib/asset";

function ChevronIcon({ isOpen }: { isOpen?: boolean }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 640"
      className={`w-4 h-4 transition-transform duration-200 ${
        isOpen ? "rotate-180" : ""
      }`}
      fill="currentColor"
    >
      <path d="M297.4 470.6C309.9 483.1 330.2 483.1 342.7 470.6L534.7 278.6C547.2 266.1 547.2 245.8 534.7 233.3C522.2 220.8 501.9 220.8 489.4 233.3L320 402.7L150.6 233.4C138.1 220.9 117.8 220.9 105.3 233.4C92.8 245.9 92.8 266.2 105.3 278.7L297.3 470.7z" />
    </svg>
  );
}

type NavLink = {
  label: string;
  href?: string;
  children?: NavLink[];
};

const NAV_LINKS: NavLink[] = [
  { label: "Inicio", href: "#hero" },
  {
    label: "Nuestra firma",
    children: [
      { label: "Quiénes Somos", href: "#nosotros" },
      { label: "Lo que nos diferencia", href: "#diferenciadores" },
      { label: "Valores", href: "#valores" },
      { label: "Presencia", href: "#presencia" },
      { label: "Habilitaciones", href: "#compliance" },
      { label: "Equipo", href: "#equipo" },
    ],
  },
  {
    label: "Servicios",
    children: [
      { label: "Soluciones Profesionales", href: "#servicios" },
      { label: "Casos de éxito", href: "#casos" },
      { label: "Industrias que atendemos", href: "#industrias" },
      { label: "Colaboraciones", href: "#colaboraciones" },
    ],
  },
  {
    label: "Contacto",
    children: [
      { label: "Sumate al equipo", href: "#carreras" },
      { label: "Demos el primer paso", href: "#contacto" },
    ],
  },
  { label: "Preguntas Frecuentes", href: "#faq" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    setOpenDropdown(null);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        aria-label="Navegación principal"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-surface-dark shadow-lg shadow-black/20"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-[1550px] items-center justify-between px-6 py-4 nav:px-10">
          {/* Logo */}
          <button
            onClick={() => scrollTo("#hero")}
            aria-label="Ir al inicio — Concilio & Sarralde"
            className="flex flex-col items-center gap-2"
          >
            <img
              src={asset("/assets/logo-white.webp")}
              alt="Concilio & Sarralde logo"
              className="h-6 w-auto"
            />
            <span className="hidden text-xs font-bold uppercase tracking-eyebrow text-white sm:inline">
              Concilio <span className="text-gold">&</span> Sarralde
            </span>
          </button>

          {/* Desktop links */}
          <div className="hidden items-center gap-8 nav:flex">
            {NAV_LINKS.map((link) => (
              <div
                key={link.label}
                className="relative group h-6 flex items-center"
              >
                {link.children ? (
                  <>
                    <button className="cursor-pointer flex items-center gap-2 text-xs font-medium uppercase tracking-nav text-white/70 transition-colors hover:text-gold group/btn h-full">
                      {link.label}
                      <span className="group-hover/btn:rotate-180 transition-transform duration-200 flex items-center justify-center">
                        <ChevronIcon />
                      </span>
                    </button>
                    <div className="absolute left-0 top-full pt-4 w-48 bg-surface-dark rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2">
                      {link.children.map((child) => (
                        <button
                          key={child.href}
                          onClick={() => child.href && scrollTo(child.href)}
                          className="cursor-pointer block w-full text-left px-4 py-2 text-xs font-medium uppercase tracking-nav text-white/70 hover:text-gold hover:bg-white/5 transition-colors"
                        >
                          {child.label}
                        </button>
                      ))}
                    </div>
                  </>
                ) : (
                  <button
                    onClick={() => link.href && scrollTo(link.href)}
                    className="cursor-pointer flex items-center h-full text-xs font-medium uppercase tracking-nav text-white/70 transition-colors hover:text-gold"
                  >
                    {link.label}
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex flex-col gap-1.5 nav:hidden"
            aria-label={
              mobileOpen
                ? "Cerrar menú de navegación"
                : "Abrir menú de navegación"
            }
            aria-expanded={mobileOpen}
          >
            <span
              className={`block h-0.5 w-6 bg-white transition-transform duration-300 ${mobileOpen ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`block h-0.5 w-6 bg-white transition-opacity duration-300 ${mobileOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-0.5 w-6 bg-white transition-transform duration-300 ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 pt-20 flex flex-col items-center justify-start gap-6 bg-surface-dark nav:hidden overflow-y-auto"
          >
            {NAV_LINKS.map((link) => (
              <div
                key={link.label}
                className="flex flex-col items-center gap-3"
              >
                {link.children ? (
                  <>
                    <button
                      onClick={() =>
                        setOpenDropdown(
                          openDropdown === link.label ? null : link.label,
                        )
                      }
                      className="cursor-pointer flex items-center gap-2 text-lg font-medium uppercase tracking-eyebrow text-white/80 transition-colors hover:text-gold"
                    >
                      {link.label}
                      <span className="transition-transform duration-200">
                        <ChevronIcon isOpen={openDropdown === link.label} />
                      </span>
                    </button>
                    {openDropdown === link.label && (
                      <div className="flex flex-col gap-2 items-center">
                        {link.children.map((child) => (
                          <button
                            key={child.href}
                            onClick={() => child.href && scrollTo(child.href)}
                            className="cursor-pointer text-sm font-medium uppercase tracking-nav text-white/60 hover:text-gold transition-colors"
                          >
                            {child.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <button
                    onClick={() => link.href && scrollTo(link.href)}
                    className="cursor-pointer text-lg font-medium uppercase tracking-eyebrow text-white/80 transition-colors hover:text-gold"
                  >
                    {link.label}
                  </button>
                )}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
