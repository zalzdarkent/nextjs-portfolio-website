// app/[locale]/layout.tsx
import type { Metadata } from "next";
import { Rubik_Glitch, Special_Elite, VT323 } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import "./globals.css";
import Script from "next/script";

const rubikGlitch = Rubik_Glitch({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-glitch",
  display: "swap",
});

const specialElite = Special_Elite({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-special-elite",
  display: "swap",
});

const vt323 = VT323({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-vt323",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://alif-fadillah-portfolio.vercel.app"),
  title: {
    default: "Alif Fadillah Ummar - Junior Software Engineer",
    template: "%s | Alif Fadillah Ummar",
  },
  description: "Fresh Graduate S1 Informatika Unsika.",
  openGraph: {
    title: "Alif Fadillah Ummar - Junior Software Engineer",
    description: "Deskripsi singkat untuk sosial media.",
    url: "https://alif-fadillah-portfolio.vercel.app",
    siteName: "Alif Fadillah Ummar Portfolio",
    locale: "id_ID",
    type: "website",
  },
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;  // Next.js 15: params adalah Promise
}) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={`${rubikGlitch.variable} ${specialElite.variable} ${vt323.variable} scroll-smooth`}
    >
      <body className="bg-brutal-white antialiased text-brutal-black">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
        <Script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="72b95bc8-c7a9-45e3-8779-e405fc1eaedf"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}