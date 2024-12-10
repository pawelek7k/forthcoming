import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import localFont from "next/font/local";
import { NextAuthProvider } from "../(auth)/NextAuthProvider";
import "../../globals.css";

const geistSans = localFont({
  src: "../../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default async function RootLayout(
  props: Readonly<{
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
  }>
) {
  const params = await props.params;

  const { locale } = params;

  const { children } = props;

  const messages = await getMessages();
  return (
    <html lang={locale || "en"}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-zinc-950`}
      >
        <NextIntlClientProvider messages={messages}>
          <NextAuthProvider>{children}</NextAuthProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
