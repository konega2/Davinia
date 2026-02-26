"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const artworks = [
  { src: "/artwork-01.svg" },
  { src: "/artwork-02.svg" },
  { src: "/artwork-03.svg" },
];

export default function ArtworkSection() {
  const t = useTranslations("artwork");
  const items = t.raw("items") as Array<{ alt: string }>;

  return (
    <section
      id="artwork"
      className="relative w-full bg-[#111111] px-8 md:px-24 py-48 border-t border-white/5"
    >
      <div className="mx-auto max-w-6xl">
        <motion.header
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <p className="mb-6 text-xs uppercase tracking-[0.4em] text-white/40">
            {t("label")}
          </p>

          <h2 className="mb-12 font-serif text-5xl leading-tight text-white md:text-6xl">
            {t("title")}
          </h2>

          <p className="text-lg leading-relaxed text-white/70">
            {t("description")}
          </p>
        </motion.header>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, delay: 0.08, ease: "easeOut" }}
          className="grid gap-10 md:grid-cols-3"
        >
          {artworks.map((item, index) => (
            <article
              key={item.src}
              className="group relative aspect-[4/5] overflow-hidden rounded-xl"
            >
              <Image
                src={item.src}
                alt={items[index]?.alt ?? t("title")}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-black/20 opacity-0 transition-opacity duration-700 ease-out group-hover:opacity-100" />
            </article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
