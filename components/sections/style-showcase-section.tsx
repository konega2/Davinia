"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

type StyleItem = {
  id: string;
  image: string;
};

const styleItems: StyleItem[] = [
  {
    id: "realism_bn",
    image: "/tatto2.jpg",
  },
  {
    id: "anime",
    image: "/tat9.png",
  },
  {
    id: "color_pop_art",
    image: "/tat1.jpeg",
  },
];

export default function StyleShowcaseSection() {
  const t = useTranslations("styles");

  return (
    <section className="relative min-h-screen w-full bg-[#000] px-8 py-36 md:px-20 md:py-40">
      <div className="mb-16 md:mb-20">
        <div>
          <h2 className="relative inline-block pb-3 text-[12px] uppercase tracking-[4px] text-[rgba(196,162,107,0.78)] after:absolute after:bottom-0 after:left-0 after:h-px after:w-10 after:bg-[rgba(196,162,107,0.78)] md:text-[14px]">
            {t("label")}
          </h2>
        </div>

        <p className="mt-7 max-w-2xl font-serif text-[clamp(2.375rem,5vw,4rem)] leading-[1.1] text-white/90 md:mt-8">
          {t("headline")}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-20 md:grid-cols-3 md:gap-14">
        {styleItems.map((item, index) => (
          <motion.article
            key={item.id}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.28 }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
            className="w-full"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="group relative h-[56vh] min-h-[340px] w-full overflow-hidden"
            >
              <Image
                src={item.image}
                alt={t(`cards.${item.id}.alt` as any)}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover contrast-[1.08]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent opacity-35 transition-opacity duration-500 ease-out md:opacity-0 md:group-hover:opacity-100" />
            </motion.div>

            <h3 className="mt-7 font-serif text-[clamp(1.7rem,3vw,2.8rem)] leading-[0.95] tracking-[2px] text-white">
              {t(`cards.${item.id}.title` as any)}
            </h3>
            <div className="mt-3 h-px w-10 bg-[#c4a26b]" />
            <p className="mt-3 text-[15px] leading-relaxed text-[#bdb5a7] md:text-[1rem]">
              {t(`cards.${item.id}.description` as any)}
            </p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
