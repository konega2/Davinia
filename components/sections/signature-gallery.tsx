import Image from "next/image";
import Reveal from "@/components/ui/reveal";
import { useTranslations } from "next-intl";

const artworks = [
  { src: "/artwork-01.svg" },
  { src: "/artwork-02.svg" },
  { src: "/artwork-03.svg" },
];

export default function SignatureGallery() {
  const t = useTranslations("signature");
  const items = t.raw("items") as Array<{ alt: string; title: string }>;

  return (
    <section className="py-8 md:py-14">
      <div className="section-wrap">
        <Reveal>
          <p className="eyebrow">{t("label")}</p>
        </Reveal>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {artworks.map((artwork, index) => (
            <Reveal key={artwork.src} delay={index * 0.1}>
              <article className="art-panel shadow-luxe">
                <Image
                  src={artwork.src}
                  alt={items[index]?.alt ?? t("label")}
                  width={900}
                  height={1200}
                  className="h-[420px] w-full object-cover md:h-[480px]"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="border-t border-white/10 px-5 py-4">
                  <p className="text-sm uppercase tracking-[0.22em] text-brand-beige">
                    {items[index]?.title ?? ""}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
