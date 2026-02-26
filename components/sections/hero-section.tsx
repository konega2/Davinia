"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useTranslations } from "next-intl";

export default function HeroSection() {
  const t = useTranslations("hero");
  const sectionRef = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const textOpacity = useTransform(scrollYProgress, [0, 0.52], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.52], [0, -34]);
  const textScale = useTransform(scrollYProgress, [0, 0.52], [1, 0.965]);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-brand-black px-4 sm:px-6"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_32%,rgba(213,195,161,.075),transparent_52%)]" />
      <div
        className="absolute inset-0 opacity-[0.045] mix-blend-soft-light"
        style={{ backgroundImage: "url('/noise.svg')" }}
      />

      <motion.div
        style={{ opacity: textOpacity, y: textY, scale: textScale }}
        className="relative z-10 flex w-full max-w-[1500px] flex-col items-center justify-center text-center"
      >
        <div className="flex flex-col items-center justify-center">
          <div className="overflow-hidden">
            <motion.h1
              initial={{ clipPath: "inset(0 100% 0 0)", opacity: 0 }}
              animate={{ clipPath: "inset(0 0% 0 0)", opacity: 1 }}
              transition={{ duration: 1.08, delay: 0.12, ease: "easeOut" }}
              className="whitespace-nowrap font-serif text-[clamp(2.9rem,14vw,11rem)] uppercase leading-[0.86] tracking-[0.14em] text-white sm:tracking-[0.18em] lg:tracking-[0.22em]"
            >
              <motion.span
                initial={{ y: 26, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.9, delay: 0.22, ease: "easeOut" }}
                className="inline-block"
              >
                {t("nameLine1")}
              </motion.span>
            </motion.h1>
          </div>

          <div className="mt-0.5 overflow-hidden sm:mt-1">
            <motion.p
              initial={{ clipPath: "inset(0 100% 0 0)", opacity: 0 }}
              animate={{ clipPath: "inset(0 0% 0 0)", opacity: 1 }}
              transition={{ duration: 0.96, delay: 0.32, ease: "easeOut" }}
              className="font-serif text-[clamp(2.05rem,9.3vw,6.45rem)] uppercase leading-[0.9] tracking-[0.2em] text-white sm:tracking-[0.22em]"
            >
              <motion.span
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.82, delay: 0.4, ease: "easeOut" }}
                className="inline-block"
              >
                {t("nameLine2")}
              </motion.span>
            </motion.p>
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.95, delay: 0.92, ease: "easeOut" }}
          className="mt-5 text-[12px] uppercase tracking-[0.28em] text-brand-beige sm:mt-6 sm:text-[14px] sm:tracking-[0.34em]"
        >
          <span className="block">{t("subtitle")}</span>
          <span className="mt-3 block text-[12px] normal-case tracking-normal text-white/55 sm:text-[14px]">
            {t("description")}
          </span>
        </motion.p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.25, duration: 0.9 }}
        className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 sm:bottom-10"
      >
        <div className="relative h-14 w-px overflow-hidden bg-white/15 sm:h-16">
          <motion.span
            aria-hidden="true"
            className="absolute left-0 top-0 block h-3 w-px bg-brand-beige"
            animate={{ y: [0, 46, 0] }}
            transition={{ duration: 2.25, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
