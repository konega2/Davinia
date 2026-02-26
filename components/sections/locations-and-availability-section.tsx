"use client";

import {motion} from "framer-motion";
import {useTranslations} from "next-intl";

export default function LocationsAndAvailabilitySection() {
  const t = useTranslations("locationsAvailability");
  const list = t.raw("list") as string[];
  const upcomingItems = t.raw("upcomingItems") as string[];

  return (
    <section
      id="add_locations_and_availability_section_v1"
      className="relative w-full bg-[#0a0a0a] px-8 py-40 border-t border-white/5 md:px-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-24 md:grid-cols-2">
          <motion.div
            initial={{opacity: 0, y: 40}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true, amount: 0.35}}
            transition={{duration: 0.8, ease: "easeOut"}}
          >
            <p className="mb-6 text-xs uppercase tracking-[0.4em] text-white/40">
              {t("label")}
            </p>

            <h2 className="mb-10 font-serif text-5xl leading-tight text-white md:text-6xl">
              {t("title")}
            </h2>

            <p className="max-w-xl text-lg leading-relaxed text-white/70">
              {t("description")}
            </p>
          </motion.div>

          <motion.div
            initial={{opacity: 0, y: 40}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true, amount: 0.35}}
            transition={{duration: 0.8, delay: 0.08, ease: "easeOut"}}
            className="relative pl-8"
          >
            <span
              aria-hidden="true"
              className="absolute left-0 top-0 h-full w-[1px] bg-white/20"
            />

            <div className="space-y-8 font-serif text-4xl text-white/80">
              {list.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>

            {Array.isArray(upcomingItems) && upcomingItems.length > 0 ? (
              <p className="mt-12 text-sm text-white/50">
                {t("upcomingTitle")}
                <br />
                {upcomingItems.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </p>
            ) : null}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
