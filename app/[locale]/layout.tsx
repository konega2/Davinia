import type {Metadata} from "next";
import {notFound} from "next/navigation";
import {NextIntlClientProvider} from "next-intl";
import {getMessages, getTranslations, setRequestLocale} from "next-intl/server";

import LocaleHtmlLang from "@/components/locale-html-lang";
import SiteNavbar from "@/components/site-navbar";
import {defaultLocale, locales, type Locale} from "@/i18n/config";

export function generateStaticParams() {
  return locales.map((locale) => ({locale}));
}

export async function generateMetadata({
  params,
}: {
  params: {locale: string};
}): Promise<Metadata> {
  const {locale} = params;

  const resolvedLocale = locales.includes(locale as Locale)
    ? (locale as Locale)
    : defaultLocale;

  const t = await getTranslations({locale: resolvedLocale, namespace: "meta"});
  const nav = await getTranslations({locale: resolvedLocale, namespace: "nav"});

  const languages = Object.fromEntries(
    locales.map((l) => [l, `/${l}`])
  ) as Record<string, string>;

  return {
    metadataBase: new URL("https://memphis21.art"),
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: `/${resolvedLocale}`,
      languages,
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: `/${resolvedLocale}`,
      siteName: nav("brand"),
      locale: resolvedLocale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: {locale: string};
}>) {
  const {locale} = params;

  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages({locale});

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <LocaleHtmlLang />
      <SiteNavbar />
      {children}
    </NextIntlClientProvider>
  );
}
