import { useTranslations } from "next-intl";

export default function FooterEditorialSection() {
  const t = useTranslations("footer");
  const locations = t.raw("locations") as string[];

  return (
    <footer className="relative w-full bg-[#0a0a0a] px-8 md:px-24 py-32 border-t border-white/5">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-16 md:grid md:grid-cols-3 md:gap-20 md:items-start">
          <div>
            <h3 className="mb-6 font-serif text-2xl text-white">
              {t("brandTitle")}
            </h3>
            <p className="max-w-xs text-sm leading-relaxed text-white/50">
              {t("subtextLine1")}
              <br />
              {t("subtextLine2")}
            </p>
          </div>

          <div>
            <p className="mb-6 text-xs uppercase tracking-[0.4em] text-white/40">
              {t("locationLabel")}
            </p>
            <div className="space-y-3 text-sm text-white/70">
              {locations.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-6 text-xs uppercase tracking-[0.4em] text-white/40">
              {t("contactLabel")}
            </p>
            <div className="space-y-3">
              <a
                href="https://wa.me/34650644628"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm text-white/70 transition duration-300 hover:text-white"
              >
                {t("whatsapp")}
              </a>
              <a
                href="https://www.instagram.com/daviniadosantotattoo/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm text-white/70 transition duration-300 hover:text-white"
              >
                {t("instagram")}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-20 border-t border-white/5 pt-10 text-center">
          <p className="text-xs tracking-widest text-white/30">
            {t("copyright")}
            <br />
            {t("rights")}
          </p>
        </div>
      </div>
    </footer>
  );
}
