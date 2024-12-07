import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import localFont from "next/font/local";
import { Navigation } from "../../components/Navigation";
import "../../globals.css";
import { NextAuthProvider } from "./NextAuthProvider";
import { ReduxProvider } from "./ReduxProvider";

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
    params: { locale: string };
  }>
) {
  const params = await props.params;

  const { locale } = params;

  const { children } = props;

  const messages = await getMessages();
  return (
    <ReduxProvider>
      <html lang={locale || "en"}>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased bg-dark-primary-bg text-zinc-100`}
        >
          <NextIntlClientProvider messages={messages}>
            <NextAuthProvider>
              <Navigation />
              <main className="min-h-screen">{children}</main>
            </NextAuthProvider>
          </NextIntlClientProvider>
        </body>
      </html>
    </ReduxProvider>
  );
}
