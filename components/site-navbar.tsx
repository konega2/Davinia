"use client";

import {useTranslations, useLocale} from "next-intl";
import {usePathname, useRouter} from "next/navigation";
import Link from "next/link";
import {useEffect, useMemo, useRef, useState} from "react";

import {locales} from "@/i18n/config";

export default function SiteNavbar() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const [isLocaleMenuOpen, setIsLocaleMenuOpen] = useState(false);
  const localeMenuRef = useRef<HTMLDivElement | null>(null);

  const flagByLocale = useMemo(
    () =>
      ({
        es: "🇪🇸",
        en: "🇬🇧",
        fr: "🇫🇷",
        it: "🇮🇹",
        de: "🇩🇪",
        nl: "🇳🇱",
        pt: "🇵🇹",
      }) as Record<string, string>,
    []
  );

  const onSelectLocale = (nextLocale: string) => {
    const segments = pathname.split("/");
    const hasLocalePrefix = locales.includes(segments[1] as any);

    if (hasLocalePrefix) {
      segments[1] = nextLocale;
      router.push(segments.join("/") || `/${nextLocale}`);
      return;
    }

    router.push(`/${nextLocale}${pathname === "/" ? "" : pathname}`);
  };

  useEffect(() => {
    if (!isLocaleMenuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsLocaleMenuOpen(false);
      }
    };

    const onPointerDown = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node | null;
      if (!target) return;
      if (!localeMenuRef.current?.contains(target)) {
        setIsLocaleMenuOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("mousedown", onPointerDown);
    window.addEventListener("touchstart", onPointerDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("mousedown", onPointerDown);
      window.removeEventListener("touchstart", onPointerDown);
    };
  }, [isLocaleMenuOpen]);

  return (
    <header className="pointer-events-none fixed left-0 top-0 z-[60] w-full">
      <div className="pointer-events-auto mx-auto flex w-full max-w-[1500px] items-center justify-between px-6 py-5 md:px-10">
        <Link
          href={`/${locale}`}
          className="font-serif text-sm uppercase tracking-[0.22em] text-white/80 transition hover:text-white"
        >
          {t("brand")}
        </Link>

        <nav className="flex items-center gap-8">
          <a
            href="#artwork"
            className="text-xs uppercase tracking-[0.34em] text-white/50 transition hover:text-white"
          >
            {t("artwork")}
          </a>

          <div ref={localeMenuRef} className="relative">
            <button
              type="button"
              onClick={() => setIsLocaleMenuOpen((value) => !value)}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/0 px-3 py-2 text-xs uppercase tracking-[0.34em] text-white/70 transition hover:text-white"
              aria-haspopup="menu"
              aria-expanded={isLocaleMenuOpen}
            >
              <span aria-hidden="true" className="text-sm">
                {flagByLocale[locale] ?? "🌐"}
              </span>
              <span>{t(`locales.${locale}` as any)}</span>
            </button>

            {isLocaleMenuOpen ? (
              <div
                role="menu"
                aria-label="Language selector"
                className="absolute right-0 mt-3 w-44 overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a] p-2"
              >
                {locales.map((code) => {
                  const isActive = code === locale;

                  return (
                    <button
                      key={code}
                      type="button"
                      role="menuitem"
                      onClick={() => {
                        setIsLocaleMenuOpen(false);
                        onSelectLocale(code);
                      }}
                      className={`flex w-full items-center justify-between rounded-xl px-3 py-2 text-xs uppercase tracking-[0.34em] transition hover:text-white ${
                        isActive ? "text-white" : "text-white/40"
                      }`}
                      aria-current={isActive ? "true" : undefined}
                    >
                      <span className="flex items-center gap-2">
                        <span aria-hidden="true">{flagByLocale[code] ?? "🌐"}</span>
                        <span>{t(`locales.${code}` as any)}</span>
                      </span>
                      {isActive ? (
                        <span aria-hidden="true" className="text-white/60">
                          •
                        </span>
                      ) : null}
                    </button>
                  );
                })}
              </div>
            ) : null}
          </div>
        </nav>
      </div>
    </header>
  );
}
