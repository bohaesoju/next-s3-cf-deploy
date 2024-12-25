import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: '크리스마스 카드 - 사랑하는 아내에게',
  description: '당신에게 전하는 특별한 크리스마스 메시지',
  openGraph: {
    title: '크리스마스 카드 - 사랑하는 아내에게',
    description: '당신에게 전하는 특별한 크리스마스 메시지',
    images: [{
      url: '/og-image.jpg',
      width: 1200,
      height: 630,
      alt: '크리스마스 카드 이미지',
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
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
