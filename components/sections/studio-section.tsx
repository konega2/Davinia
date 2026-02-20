"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const sectionEase: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

export default function StudioSection() {
  return (
    <section
      id="studio_section_cinematic_v4"
      className="relative w-full overflow-hidden bg-[#0a0a0a] px-8 py-48 md:px-24"
    >
      <div className="grid items-center gap-24 md:grid-cols-[1fr_1.2fr]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.8, ease: sectionEase }}
        >
          <p className="mb-8 text-xs uppercase tracking-[0.4em] text-white/40">
            EL ESTUDIO
          </p>

          <div className="mb-12 h-px w-16 bg-white/20" />

          <h2 className="mb-12 font-serif text-5xl leading-[1.1] text-white md:text-6xl">
            Un espacio
            <br />
            donde el detalle
            <br />
            importa.
          </h2>

          <div className="max-w-lg space-y-6 text-lg leading-relaxed text-white/70">
            <p>
              Trabajo en un entorno profesional, higiénico y controlado. Cada
              sesión se desarrolla con calma, precisión y respeto por tu piel.
            </p>
            <p>
              Creo una experiencia personalizada donde la conversación y la
              confianza forman parte del proceso creativo.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, delay: 0.08, ease: sectionEase }}
          className="relative w-full md:ml-auto md:max-w-[560px] md:translate-y-4"
        >
          <Image
            src="/estudio.png"
            alt="Interior del estudio de tatuaje"
            width={1200}
            height={1500}
            className="aspect-[4/5] w-full rounded-3xl object-cover brightness-95 contrast-105"
          />
          <div className="pointer-events-none absolute inset-0 rounded-3xl bg-black/10" />
        </motion.div>
      </div>
    </section>
  );
}
