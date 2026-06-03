import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Etimen - Et Pişirme Rehberi",
    template: "%s | Etimen",
  },
  description:
    "Dana, kuzu, tavuk ve tüm et türleri için profesyonel pişirme rehberi. Sıcaklık, süre, sos ve pişirme derecesi hesaplamaları.",
  keywords: [
    "et pişirme",
    "steak",
    "sous vide",
    "bbq",
    "pἁşirme",
    "thermometer",
    "et sıcaklığı",
    "pirzola",
    "antrikot",
    "bonfile",
  ],
  authors: [{ name: "Etimen" }],
  creator: "Etimen",
  publisher: "Etimen",
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://etimen.com",
    siteName: "Etimen",
    title: "Etimen - Et Pişirme Rehberi",
    description:
      "Profesyonel et pişirme rehberi ve hesaplama aracı.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Etimen",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Etimen - Et Pişirme Rehberi",
    description: "Profesyonel et pişirme rehberi ve hesaplama aracı.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0A0A0A",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} h-full antialiased`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
