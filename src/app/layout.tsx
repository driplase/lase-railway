import type { Metadata } from "next";
import { M_PLUS_1p, M_PLUS_1_Code, Noto_Sans, Montserrat, Ubuntu_Sans_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Image from 'next/image'
import Link from "next/link";
import LogoImage from "@/assets/temporary_logo.png"

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat'
});

const notoSans = Noto_Sans({
  subsets: ['latin'],
  variable: '--font-noto-sans'
});

const ubuntuSansMono = Ubuntu_Sans_Mono({
  variable: "--font-ubuntu-sans-mono",
  subsets: ["latin"],
});

const mPlus1p = M_PLUS_1p({
  variable: "--font-m-plus-1p",
  weight: ["400", "700"],
  subsets: ["latin"],
});

const mPlus1Code = M_PLUS_1_Code({
  variable: "--font-m-plus-1-code",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "どろぷす急行電鉄",
  description: "どろぷす急行電鉄のウェブサイトです。",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", mPlus1p.variable, mPlus1Code.variable, ubuntuSansMono.variable, "font-sans", notoSans.variable, montserrat.variable)}
    >
      <body className="min-h-full flex flex-col">
        <header className="w-full px-8 py-4 border border-red-500 flex justify-between">
          {/* Logo */}
          <Link href="/">
            <Image
              src={LogoImage}
              alt="どろぷす急行電鉄"
              height={48}
              loading="eager"
            />
          </Link>

          <nav className="flex gap-6 items-center">
            <Link href="/stations">
              駅一覧・路線図
            </Link>
            <Link href="/visiting">
              観光案内
            </Link>
            <Link href="/history">
              歴史
            </Link>
            <Link href="/recruit">
              求人情報
            </Link>
          </nav>
        </header>

        {children}

        <footer>
          {/* Footer */}
        </footer>
      </body>
    </html>
  );
}
