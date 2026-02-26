"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function BookingWhatsappSection() {
  const t = useTranslations("booking");
  const locations = t.raw("locations") as string[];

  return (
    <section
      id="booking_whatsapp_section_v2"
      className="relative w-full border-t border-white/5 bg-[#0a0a0a] px-8 py-28 md:px-24 md:py-32"
    >
      <div className="mx-auto max-w-[1100px] text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8 text-xs uppercase tracking-[0.4em] text-white/40"
        >
          {t("label")}
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.8, delay: 0.08, ease: "easeOut" }}
          className="mb-10 font-serif text-5xl leading-tight text-white md:text-6xl"
        >
          {t("title")}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, delay: 0.16, ease: "easeOut" }}
          className="mx-auto mb-12 max-w-2xl text-lg leading-relaxed text-white/60"
        >
          <p>{t("p1")}</p>
          <p className="mt-4">
            {t("locationsTitle")}
            <br />
            {locations[0]}
            <br />
            {locations[1]}
            <br />
            {t("whatsappOnly")}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.8, delay: 0.24, ease: "easeOut" }}
          className="mt-10 flex flex-col items-center justify-center gap-8 md:flex-row"
        >
          <a
            href="https://wa.me/34650644628"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-white/30 px-14 py-5 text-sm uppercase tracking-[0.2em] text-white transition-all duration-500 ease-out hover:border-transparent"
          >
            <span className="absolute inset-0 translate-x-[-100%] bg-white transition-transform duration-500 ease-out group-hover:translate-x-0" />
            <span className="relative z-10 transition-colors duration-500 group-hover:text-black">
              {t("whatsappCta")}
            </span>
          </a>

          <div className="flex flex-col items-center justify-center">
            <a
              href="https://www.instagram.com/daviniadosantotattoo/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative text-sm uppercase tracking-[0.3em] text-white/50 transition duration-300 after:absolute after:-bottom-2 after:left-0 after:h-px after:w-0 after:bg-white after:transition-all after:duration-500 hover:text-white hover:after:w-full"
            >
              {t("instagramCta")}
            </a>
            <p className="mx-auto mt-4 max-w-sm text-xs text-white/30">
              {t("instagramNoteLine1")}
              <br />
              {t("instagramNoteLine2")}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
