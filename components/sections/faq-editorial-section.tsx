"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useTranslations } from "next-intl";

export default function FaqEditorialSection() {
  const t = useTranslations("faq");
  const faqItems = t.raw("items") as Array<{ question: string; answer: string }>;

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="faq_editorial_section_v1"
      className="relative w-full border-t border-white/5 bg-[#0a0a0a] px-8 py-40 md:px-24"
    >
      <div className="mx-auto max-w-[1000px]">
        <header>
          <p className="mb-8 text-xs uppercase tracking-[0.4em] text-white/40">
            {t("label")}
          </p>
          <h2 className="mb-20 font-serif text-5xl leading-tight text-white md:text-6xl">
            {t("title")}
          </h2>
        </header>

        <div>
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={item.question} className="border-b border-white/10 py-10">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full cursor-pointer items-center justify-between gap-8 text-left"
                >
                  <span className="font-serif text-xl text-white md:text-2xl">
                    {item.question}
                  </span>

                  <span
                    className={`relative block h-4 w-4 shrink-0 transition-transform duration-500 ease-out ${
                      isOpen ? "rotate-45" : "rotate-0"
                    }`}
                    aria-hidden="true"
                  >
                    <span className="absolute left-0 top-1/2 h-px w-4 -translate-y-1/2 bg-white/80" />
                    <span className="absolute left-1/2 top-0 h-4 w-px -translate-x-1/2 bg-white/80" />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0, y: -4 }}
                      animate={{ opacity: 1, height: "auto", y: 0 }}
                      exit={{ opacity: 0, height: 0, y: -4 }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/60">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
