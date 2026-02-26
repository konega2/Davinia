import Reveal from "@/components/ui/reveal";
import { useTranslations } from "next-intl";

export default function ProcessSection() {
  const t = useTranslations("processLegacy");
  const steps = t.raw("steps") as Array<{
    id: string;
    title: string;
    description: string;
  }>;

  return (
    <section className="py-20 md:py-28">
      <div className="section-wrap grid gap-10 lg:grid-cols-[.9fr_1.1fr]">
        <Reveal>
          <p className="eyebrow">{t("eyebrow")}</p>
          <h2 className="headline-lg mt-6 max-w-xl">
            {t("title")}
          </h2>
        </Reveal>

        <div className="space-y-4">
          {steps.map((step, index) => (
            <Reveal key={step.id} delay={index * 0.1}>
              <article className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 md:p-8">
                <p className="text-xs uppercase tracking-[0.3em] text-brand-beige">
                  {step.id}
                </p>
                <h3 className="mt-3 text-3xl">{step.title}</h3>
                <p className="copy-muted mt-3 max-w-2xl">{step.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
