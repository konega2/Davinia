"use client";

import { motion } from "framer-motion";

const processItems = [
  {
    number: "01",
    title: "Concepto",
    description:
      "Escucho tu idea y la transformo en una dirección creativa clara y personal.",
  },
  {
    number: "02",
    title: "Diseño",
    description:
      "Cada pieza se construye desde cero, adaptada a tu anatomía y estilo.",
  },
  {
    number: "03",
    title: "Ejecución",
    description:
      "Trabajo preciso en un entorno profesional, cuidado y controlado.",
  },
];

const sectionEase: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

export default function ProcessExperienceSection() {
  return (
    <section
      id="process_manifesto_layout_v1"
      className="relative w-full bg-[#0a0a0a] px-8 py-40 md:px-24"
    >
      <div>
        <p className="mb-8 text-xs uppercase tracking-[0.4em] text-white/40">
          EL PROCESO
        </p>
        <h2 className="mb-32 max-w-4xl font-serif text-5xl leading-tight text-white md:text-7xl">
          Cada pieza tiene su ritmo.
        </h2>
      </div>

      <div className="flex flex-col gap-32">
        {processItems.map((item, index) => (
          <motion.article
            key={item.number}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.12, ease: "easeOut" }}
            className={`relative max-w-3xl ${index === 1 ? "ml-auto" : ""}`}
          >
            <p className="pointer-events-none absolute left-[-20px] top-[-40px] select-none font-serif text-[120px] leading-none text-white/5 md:text-[200px]">
              {item.number}
            </p>

            <div className="relative z-10">
              <h3 className="font-serif text-3xl leading-[1.05] text-white md:text-4xl">
                {item.title.toUpperCase()}
              </h3>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
                {item.description}
              </p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
