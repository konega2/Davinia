"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useMemo, useState } from "react";

type TattooItem = {
  src: string;
  style:
    | "REALISMO"
    | "BLACKWORK"
    | "ANIME"
    | "COLOR / NEW SCHOOL"
    | "GEOMÉTRICO"
    | "FINE LINE";
};

const tattooItems: TattooItem[] = [
  { src: "/tat8.png", style: "REALISMO" },
  { src: "/tatto2.jpg", style: "REALISMO" },
  { src: "/tatto4.png", style: "REALISMO" },
  { src: "/tat1.jpeg", style: "BLACKWORK" },
  { src: "/tat2.png", style: "BLACKWORK" },
  { src: "/tat5.png", style: "BLACKWORK" },
  { src: "/tat6.png", style: "BLACKWORK" },
  { src: "/tat7.png", style: "BLACKWORK" },
  { src: "/tat3.png", style: "ANIME" },
  { src: "/tat4.png", style: "ANIME" },
  { src: "/tat9.png", style: "COLOR / NEW SCHOOL" },
  { src: "/tatto1.png", style: "GEOMÉTRICO" },
  { src: "/tatto3.png", style: "FINE LINE" },
];

const filters = [
  "TODOS",
  "REALISMO",
  "BLACKWORK",
  "ANIME",
  "COLOR / NEW SCHOOL",
  "GEOMÉTRICO",
  "FINE LINE",
] as const;

type FilterValue = (typeof filters)[number];

export default function PortfolioByStyleSection() {
  const [activeFilter, setActiveFilter] = useState<FilterValue>("TODOS");

  const filteredItems = useMemo(() => {
    if (activeFilter === "TODOS") {
      return tattooItems;
    }

    return tattooItems.filter((item) => item.style === activeFilter);
  }, [activeFilter]);

  return (
    <section
      id="portfolio_by_style_section_v1"
      className="relative w-full bg-[#0a0a0a] px-8 py-40 md:px-24"
    >
      <div className="mx-auto max-w-[1600px]">
        <header className="mb-24">
          <p className="mb-8 text-xs uppercase tracking-[0.4em] text-white/40">
            MIS TRABAJOS
          </p>

          <h2 className="mb-12 font-serif text-5xl leading-tight text-white md:text-6xl">
            Una selección de piezas realizadas.
          </h2>

          <p className="max-w-2xl text-lg leading-relaxed text-white/60">
            Cada tatuaje nace de una idea única.
            <br />
            Explora la galería y filtra por lenguaje visual.
          </p>

          <div className="mt-12 flex flex-wrap gap-3">
            {filters.map((filter) => {
              const isActive = activeFilter === filter;

              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  className={`rounded-full border px-4 py-2 text-xs uppercase tracking-[0.22em] transition duration-300 ease-out md:text-sm ${
                    isActive
                      ? "border-[#c4a26b]/70 text-[#d8b989]"
                      : "border-white/15 text-white/55 hover:border-white/30 hover:text-white/80"
                  }`}
                >
                  {filter}
                </button>
              );
            })}
          </div>
        </header>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="border-t border-white/5 pt-16"
        >
          <div className="mb-8 flex items-end justify-between">
            <h3 className="font-serif text-3xl tracking-[2px] text-white md:text-4xl">
              {activeFilter === "TODOS" ? "GALERÍA" : activeFilter}
            </h3>
            <span className="text-xs uppercase tracking-[0.24em] text-white/40">
              {filteredItems.length} piezas
            </span>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredItems.map((item, index) => (
              <motion.article
                key={`${item.style}-${item.src}`}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.03, ease: "easeOut" }}
                whileHover={{ scale: 1.02 }}
                className="group relative cursor-pointer overflow-hidden rounded-xl"
              >
                <Image
                  src={item.src}
                  alt={`${item.style} tattoo work`}
                  width={1100}
                  height={1400}
                  className="aspect-[4/5] w-full object-cover"
                />
                <div className="pointer-events-none absolute inset-0 bg-black/20 opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" />
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
