import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportOnce } from "./animations";
import { SERVICIOS } from "~/routes/brochure/components/data";

export function Servicios() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    slidesToScroll: 1,
  });
  const [selected, setSelected] = useState(0);
  const [snapCount, setSnapCount] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelected(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", () => setSnapCount(emblaApi.scrollSnapList().length));
    setSnapCount(emblaApi.scrollSnapList().length);
    onSelect();
  }, [emblaApi, onSelect]);

  return (
    <section id="servicios" className="bg-surface-light py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mb-16 text-center"
        >
          <motion.div variants={fadeUp} custom={0} className="mb-3 text-xs font-bold uppercase tracking-eyebrow text-gold">
            Soluciones Profesionales
          </motion.div>
          <motion.h2 variants={fadeUp} custom={1} className="mb-6 text-3xl font-bold text-on-light sm:text-4xl">
            Nuestros Servicios
          </motion.h2>
          <motion.div variants={fadeUp} custom={2} className="mx-auto h-1 w-12 bg-gold" />
        </motion.div>

        {/* Carousel */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6">
            {SERVICIOS.map((s, i) => (
              <div
                key={s.title}
                className="min-w-0 flex-[0_0_100%] sm:flex-[0_0_48%] lg:flex-[0_0_31.5%]"
              >
                <div className="group flex h-full flex-col border border-gray-200 bg-white p-8 transition-all duration-500 hover:border-gold/40 hover:shadow-lg">
                  <div className="mb-4 text-xs font-bold uppercase tracking-eyebrow text-gold/60">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="mb-3 text-lg font-bold text-on-light">{s.title}</h3>
                  <p className="mb-6 text-sm leading-relaxed text-on-light-secondary">
                    {s.description}
                  </p>
                  <ul className="mt-auto space-y-2">
                    {s.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 text-sm text-on-light-muted"
                      >
                        <span className="h-1 w-1 rounded-full bg-gold" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="mt-8 flex justify-center gap-2">
          {Array.from({ length: snapCount }).map((_, i) => (
            <button
              key={i}
              onClick={() => emblaApi?.scrollTo(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === selected ? "w-8 bg-gold" : "w-2 bg-gray-300"
              }`}
            />
          ))}
        </div>

        {/* Arrows */}
        <div className="mt-6 flex justify-center gap-4">
          <button
            onClick={() => emblaApi?.scrollPrev()}
            className="flex h-12 w-12 items-center justify-center border border-gray-300 text-on-light transition-all hover:border-gold hover:text-gold"
          >
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="14,4 6,10 14,16" /></svg>
          </button>
          <button
            onClick={() => emblaApi?.scrollNext()}
            className="flex h-12 w-12 items-center justify-center border border-gray-300 text-on-light transition-all hover:border-gold hover:text-gold"
          >
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6,4 14,10 6,16" /></svg>
          </button>
        </div>
      </div>
    </section>
  );
}
