"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { useTranslations } from "next-intl";

type StyleKey = "realism_bn" | "anime" | "color_pop_art" | "fine_line";

type TattooItem = {
  src: string;
  style: StyleKey;
};

const tattooItems: TattooItem[] = [
  { src: "/tatto2.jpg", style: "realism_bn" },
  { src: "/tato1.jpg", style: "realism_bn" },
  { src: "/tato2.png", style: "realism_bn" },
  { src: "/tato3.png", style: "realism_bn" },
  { src: "/tato7.png", style: "realism_bn" },
  { src: "/tato8.png", style: "realism_bn" },
  { src: "/tato10.png", style: "realism_bn" },
  { src: "/tato12.png", style: "realism_bn" },
  { src: "/Tato6.png", style: "realism_bn" },
  { src: "/tat9.png", style: "anime" },
  { src: "/tato4.png", style: "anime" },
  { src: "/tato5.png", style: "anime" },
  { src: "/tat1.jpeg", style: "color_pop_art" },
  { src: "/tato9.png", style: "color_pop_art" },
  { src: "/tato13.png", style: "color_pop_art" },
  { src: "/tato11.png", style: "fine_line" },
];

const filters = ["realism_bn", "anime", "color_pop_art", "fine_line"] as const;

type FilterValue = (typeof filters)[number];

export default function PortfolioByStyleSection() {
  const t = useTranslations("portfolio");

  const [activeFilter, setActiveFilter] = useState<FilterValue>("realism_bn");

  const filteredItems = useMemo(
    () => tattooItems.filter((item) => item.style === activeFilter),
    [activeFilter],
  );

  return (
    <section
      id="portfolio_by_style_section_v1"
      className="relative w-full border-t border-white/5 bg-[#0a0a0a] px-8 py-40 md:px-24"
    >
      <div className="mx-auto max-w-[1600px]">
        <header className="mb-24">
          <p className="mb-8 text-xs uppercase tracking-[0.38em] text-white/40">
            {t("label")}
          </p>

          <h2 className="mb-8 font-serif text-5xl leading-tight text-white md:text-6xl">
            {t("title")}
          </h2>

          <p className="max-w-2xl text-lg leading-relaxed text-white/65">
            {t("descriptionLine1")}
            <br />
            {t("descriptionLine2")}
          </p>

          <div className="mt-12 flex flex-wrap gap-2.5 md:gap-3">
            {filters.map((filter) => {
              const isActive = activeFilter === filter;

              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  className={`rounded-full border px-4 py-2 text-xs uppercase tracking-[0.2em] transition duration-300 ease-out md:text-sm ${
                    isActive
                      ? "border-white/35 bg-white/[0.03] text-white"
                      : "border-white/15 text-white/55 hover:border-white/25 hover:text-white/80"
                  }`}
                >
                  {t(`filters.${filter}` as any)}
                </button>
              );
            })}
          </div>
        </header>

        <div className="border-t border-white/5 pt-16">
          <div className="mb-8 flex items-end justify-between">
            <h3 className="font-serif text-3xl tracking-[2px] text-white md:text-4xl">
              {t(`filters.${activeFilter}` as any)}
            </h3>
            <span className="text-xs uppercase tracking-[0.24em] text-white/40">
              {t("count", { count: filteredItems.length })}
            </span>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3"
            >
              {filteredItems.map((item, index) => (
                <motion.article
                  key={`${activeFilter}-${item.src}`}
                  initial={{ opacity: 0, y: 22, scale: 0.985 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.55, delay: index * 0.06, ease: "easeOut" }}
                  className="group relative overflow-hidden rounded-2xl"
                >
                  <Image
                    src={item.src}
                    alt={t("imageAlt", { style: t(`filters.${item.style}` as any) })}
                    width={1100}
                    height={1400}
                    className="aspect-[4/5] w-full object-cover transition duration-700 ease-out group-hover:scale-[1.04]"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-black/10 opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" />

                  <div className="pointer-events-none absolute inset-x-0 bottom-0 p-5 opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100">
                    <p className="text-xs uppercase tracking-[0.3em] text-white/90">
                      {t(`filters.${item.style}` as any)}
                    </p>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
