import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import Script from "next/script";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      {children}
      <Script
        defer
        src="https://cloud.umami.is/script.js"
        data-website-id="72b95bc8-c7a9-45e3-8779-e405fc1eaedf"
        strategy="afterInteractive"
      />
    </NextIntlClientProvider>
  );
}
