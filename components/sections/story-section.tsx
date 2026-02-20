"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function StorySection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const textY = useTransform(scrollYProgress, [0, 1], [16, -16]);
  const lines = ["Cada tatuaje", "es una historia", "irrepetible."];

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-brand-black px-6"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04),transparent_60%)]" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035] mix-blend-soft-light"
        style={{ backgroundImage: "url('/noise.svg')" }}
      />

      <motion.div style={{ y: textY }} className="relative z-10 text-center">
        {lines.map((line, index) => (
          <motion.p
            key={line}
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 1.05, delay: index * 0.2, ease: "easeOut" }}
            className="font-serif text-[clamp(2.45rem,9.2vw,4.6rem)] font-light leading-[1.02] tracking-[0.028em] text-white md:text-[clamp(2rem,6vw,6rem)]"
          >
            {line}
          </motion.p>
        ))}
      </motion.div>
    </section>
  );
}
