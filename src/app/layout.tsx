import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ray-dev | Portfólio",
  description: "Tutoriais amigáveis para desenvolvedores. Focados em React, CSS, Animação e muito mais!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" dir="ltr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <nav className="flex gap-6 bg-slate-200 text-black w-max p-4">
          <Link href="/">Home</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/projetos">Projetos</Link>
        </nav>

        {children}
      </body>
    </html>
  );
}
