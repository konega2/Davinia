"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type StyleItem = {
  id: string;
  title: string;
  description: string;
  image: string;
};

const styleItems: StyleItem[] = [
  {
    id: "realismo",
    title: "REALISMO",
    description: "Textura viva con detalle profundo.",
    image: "/tatto2.jpg",
  },
  {
    id: "fine-line",
    title: "FINE LINE",
    description: "Línea precisa, elegante y sutil.",
    image: "/tatto3.png",
  },
  {
    id: "geometrico",
    title: "GEOMÉTRICO",
    description: "Equilibrio gráfico con carácter limpio.",
    image: "/tatto4.png",
  },
];

export default function StyleShowcaseSection() {
  return (
    <section className="relative min-h-screen w-full bg-[#000] px-8 py-36 md:px-20 md:py-40">
      <div className="mb-16 md:mb-20">
        <div>
          <h2 className="relative inline-block pb-3 text-[12px] uppercase tracking-[4px] text-[rgba(196,162,107,0.78)] after:absolute after:bottom-0 after:left-0 after:h-px after:w-10 after:bg-[rgba(196,162,107,0.78)] md:text-[14px]">
            MI ESTILO
          </h2>
        </div>

        <p className="mt-7 max-w-2xl font-serif text-[clamp(2.375rem,5vw,4rem)] leading-[1.1] text-white/90 md:mt-8">
          Una selección de los estilos que trabajamos.
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
                alt={`${item.title} style preview`}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover contrast-[1.08]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent opacity-35 transition-opacity duration-500 ease-out md:opacity-0 md:group-hover:opacity-100" />
            </motion.div>

            <h3 className="mt-7 font-serif text-[clamp(1.7rem,3vw,2.8rem)] leading-[0.95] tracking-[2px] text-white">
              {item.title}
            </h3>
            <div className="mt-3 h-px w-10 bg-[#c4a26b]" />
            <p className="mt-3 text-[15px] leading-relaxed text-[#bdb5a7] md:text-[1rem]">
              {item.description}
            </p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
