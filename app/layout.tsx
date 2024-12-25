import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Noto_Sans_KR } from "next/font/google";

const notoSansKr = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto-sans-kr",
});

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: '크리스마스 카드 - 사랑하는 아내 다현 에게',
  description: '유안이 엄마에게 전하는 크리스마스 메시지',
  openGraph: {
    title: '크리스마스 카드 - 사랑하는 아내 다현 에게',
    description: '유안이 엄마에게 전하는 크리스마스 메시지',
    images: [{
      url: 'https://dahyun.shop/og-image.jpg',
      width: 1200,
      height: 630,
      alt: '유안이네 가족사진',
    }],
    locale: 'ko_KR',
    type: 'website',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${geistSans.variable} ${geistMono.variable} ${notoSansKr.variable}`}>
        {children}
      </body>
    </html>
  );
}
