"use client";

import {motion, useScroll, useTransform} from "framer-motion";
import { useTranslations } from "next-intl";
import {useRef} from "react";

export default function TrajectorySection() {
  const t = useTranslations("trajectory");
  const timeline = t.raw("timeline") as Array<{title: string; text: string}>;

  const sectionRef = useRef<HTMLElement | null>(null);
  const {scrollYProgress} = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const lineScaleY = useTransform(scrollYProgress, [0.08, 0.7], [0, 1]);

  return (
    <section
      ref={sectionRef}
      id="trajectory_cinematic_story_v2"
      className="relative w-full overflow-hidden bg-[#0a0a0a] px-8 py-56 border-t border-white/5 md:px-24"
    >
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{opacity: 0, y: 40}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true, amount: 0.35}}
          transition={{duration: 0.8, ease: "easeOut"}}
          className="text-center"
        >
          <p className="mb-8 text-xs uppercase tracking-[0.4em] text-white/40">
            {t("label")}
          </p>
          <h2 className="mb-24 font-serif text-5xl leading-tight text-white md:text-6xl">
            {t("title")}
          </h2>
        </motion.div>

        <div className="relative">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-0 h-full w-[1px] -translate-x-1/2 bg-white/10"
          />
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-0 h-full w-[1px] -translate-x-1/2 bg-white/25"
            style={{scaleY: lineScaleY, transformOrigin: "top"}}
          />

          <div className="space-y-24 md:space-y-28">
            {timeline.map((item, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div key={`${item.title}-${index}`} className="relative">
                  <motion.span
                    aria-hidden="true"
                    className="absolute left-1/2 top-6 h-3 w-3 -translate-x-1/2 rounded-full bg-white/70"
                    initial={{scale: 0.9, opacity: 0.6}}
                    whileInView={{scale: 1.12, opacity: 1}}
                    viewport={{once: true, amount: 0.5}}
                    transition={{duration: 0.5, ease: "easeOut"}}
                  />

                  <motion.div
                    initial={{opacity: 0, y: 60}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true, amount: 0.35}}
                    transition={{duration: 0.8, ease: "easeOut"}}
                    className={
                      isLeft
                        ? "flex justify-center md:justify-start"
                        : "flex justify-center md:justify-end"
                    }
                  >
                    <div
                      className={
                        isLeft
                          ? "max-w-md text-left md:pr-20"
                          : "max-w-md text-left md:pl-20"
                      }
                    >
                      <h3 className="mb-4 font-serif text-2xl text-white">
                        {item.title}
                      </h3>
                      <p className="text-lg leading-relaxed text-white/70">
                        {item.text}
                      </p>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
