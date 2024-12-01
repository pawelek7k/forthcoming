import localFont from "next/font/local";
import { Navigation } from "../components/Navigation";
import "../globals.css";
import { NextAuthProvider } from "./NextAuthProvider";
import { ReduxProvider } from "./ReduxProvider";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReduxProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased bg-zinc-950 text-zinc-100`}
        >
          <NextAuthProvider>
            <Navigation />
            <main className="pt-20 p-6">{children}</main>
          </NextAuthProvider>
        </body>
      </html>
    </ReduxProvider>
  );
}
