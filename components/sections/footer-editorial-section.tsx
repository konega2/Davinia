export default function FooterEditorialSection() {
  return (
    <section
      id="footer_editorial_v1"
      className="relative w-full border-t border-white/5 bg-[#0a0a0a] px-8 pb-0 pt-12 md:px-24 md:pb-0 md:pt-14"
    >
      <div className="mx-auto max-w-[1400px]">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <h3 className="mb-4 font-serif text-2xl text-white">Memphis 21 Tattoo</h3>
            <p className="max-w-md text-sm leading-relaxed text-white/50">
              Estudio de tatuaje especializado en realismo, blackwork y diseño
              personalizado.
            </p>
          </div>

          <div className="space-y-6">
            <a
              href="https://wa.me/34650644628"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-sm uppercase tracking-[0.3em] text-white/50 transition duration-300 hover:text-white"
            >
              WHATSAPP
            </a>
            <a
              href="https://www.instagram.com/memphis21tattoo/"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-sm uppercase tracking-[0.3em] text-white/50 transition duration-300 hover:text-white"
            >
              INSTAGRAM
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-white/5 pt-6 text-center md:mt-10">
          <p className="text-xs tracking-widest text-white/30">
            © 2026 Memphis 21 Tattoo
            <br />
            Todos los derechos reservados.
          </p>
        </div>
      </div>
    </section>
  );
}
