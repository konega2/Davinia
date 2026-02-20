import Reveal from "@/components/ui/reveal";

const steps = [
  {
    id: "01",
    title: "Concepto",
    description:
      "Conversación personal para traducir idea, emoción y referencias en dirección visual.",
  },
  {
    id: "02",
    title: "Diseño",
    description:
      "Boceto exclusivo con composición adaptada al cuerpo y una lectura estética atemporal.",
  },
  {
    id: "03",
    title: "Ejecución",
    description:
      "Sesión precisa y controlada, enfocada en detalle, ritmo y resultado elegante.",
  },
];

export default function ProcessSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="section-wrap grid gap-10 lg:grid-cols-[.9fr_1.1fr]">
        <Reveal>
          <p className="eyebrow">Experiencia Memphis 21</p>
          <h2 className="headline-lg mt-6 max-w-xl">
            Un proceso personal, exclusivo y completamente guiado.
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
