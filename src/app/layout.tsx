import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/src/components/Navbar";
import BottomNavbar from "@/src/components/BottomNavbar";
import CookieConsent, {
  CookieConsentProvider,
} from "@/src/components/cookie-consent";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const title = "ร่วมสร้างพื้นที่การเรียนรู้ที่ใช่...สำหรับทุกชุมชน";
const description =
  "คู่มือการออกแบบพื้นที่การเรียนรู้สำหรับชุมชน TK Park พร้อมเป็นพันธมิตรในการออกแบบ พัฒนาและยกระดับแหล่งเรียนรู้ให้เป็นพื้นที่ที่ผู้คนทุกวัยอยากเข้ามาเรียนรู้สร้างสรรค์ และเติบโตไปด้วยกัน";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ??
      "https://punchupworld.github.io/tk-network",
  ),
  title,
  description,
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    type: "website",
    locale: "th_TH",
    title,
    description,
    images: [
      {
        url: "/OG.png",
        width: 1584,
        height: 832,
        alt: title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/OG.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="th"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cascadia+Mono:ital,wght@0,200..700;1,200..700&family=Prompt:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-th min-h-full flex flex-col bg-white">
        <CookieConsentProvider>
          <Navbar />
          <div className="mt-[-92px] font-th">{children}</div>
          <BottomNavbar />
          <CookieConsent />
        </CookieConsentProvider>
      </body>
    </html>
  );
}
