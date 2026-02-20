import Reveal from "@/components/ui/reveal";

export default function ContactSection() {
  return (
    <section id="contact" className="pt-12 md:pt-20">
      <div className="section-wrap">
        <Reveal>
          <div className="rounded-[2rem] border border-brand-beige/35 bg-[linear-gradient(145deg,rgba(213,195,161,.09),rgba(255,255,255,.01))] p-8 md:p-12 lg:p-16">
            <p className="eyebrow text-brand-beige">Booking</p>
            <h2 className="headline-lg mt-6 max-w-3xl">
              Si tu próxima pieza merece una dirección artística real, empecemos.
            </h2>
            <p className="copy-muted mt-6 max-w-xl">
              Agenda abierta para proyectos seleccionados. Atención en Gandía,
              España.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="mailto:booking@memphis21.art"
                className="rounded-full bg-brand-beige px-6 py-3 text-sm uppercase tracking-[0.2em] text-brand-black transition hover:brightness-110"
              >
                booking@memphis21.art
              </a>
              <a
                href="https://instagram.com/memphis21tattoo"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/20 px-6 py-3 text-sm uppercase tracking-[0.2em] text-white transition hover:border-brand-beige hover:text-brand-beige"
              >
                Instagram
              </a>
            </div>
          </div>
        </Reveal>

        <div className="py-8 text-xs uppercase tracking-[0.26em] text-brand-muted">
          Memphis 21 © 2026
        </div>
      </div>
    </section>
  );
}
