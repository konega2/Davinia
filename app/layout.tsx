import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import LenisProvider from "@/components/lenis-provider";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://memphis21.art"),
  title: {
    default: "Memphis 21 | Tattoo Artist in Gandía",
    template: "%s | Memphis 21",
  },
  description:
    "Editorial portfolio of Memphis 21, tattoo artist based in Gandía, Spain. Cinematic, minimal and artistic pieces with a premium experience.",
  keywords: [
    "Memphis 21",
    "Tattoo artist Gandía",
    "Tattoo artist Spain",
    "Fine line tattoo",
    "Artistic tattoo portfolio",
  ],
  openGraph: {
    title: "Memphis 21 | Tattoo Artist in Gandía",
    description:
      "A premium artistic portfolio by Memphis 21. Dark, cinematic and editorial tattoo storytelling.",
    url: "https://memphis21.art",
    siteName: "Memphis 21",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Memphis 21 | Tattoo Artist in Gandía",
    description:
      "A premium artistic portfolio by Memphis 21. Dark, cinematic and editorial tattoo storytelling.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${manrope.variable} ${cormorant.variable} bg-brand-black text-white antialiased`}
      >
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
