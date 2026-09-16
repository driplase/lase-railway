import type { Metadata } from "next";
import { M_PLUS_2, M_PLUS_1_Code, Noto_Sans, Montserrat, Ubuntu_Sans_Mono } from "next/font/google";
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

const mPlus2 = M_PLUS_2({
  variable: "--font-m-plus-2",
  subsets: ["latin"],
});

const mPlus1Code = M_PLUS_1_Code({
  variable: "--font-m-plus-1-code",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "どろぷす鉄道",
  description: "どろぷす鉄道のウェブサイトです。",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", mPlus2.variable, mPlus1Code.variable, ubuntuSansMono.variable, "font-sans", notoSans.variable, montserrat.variable)}
    >
      <body className="min-h-full flex flex-col">
        <header className="w-full px-8 py-4 flex justify-between shadow-xl shadow-gray-500/12">
          {/* Logo */}
          <Link href="/">
            <Image
              src={LogoImage}
              alt="どろぷす鉄道"
              height={48}
              loading="eager"
            />
          </Link>

          <nav className="flex gap-6 items-center">
            {[
              { name: "駅一覧・路線図", url: "/stations" },
              // { name: "観光案内", url: "/visiting" },
              // { name: "歴史", url: "/history" },
              // { name: "求人情報", url: "/recruit" },
            ].map((item, idx) => (
              <Link key={idx} className="hover:underline" href={item.url}>
                { item.name }
              </Link>
            ))}
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
