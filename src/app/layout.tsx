import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const displayFont = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "NORDEN Architecture — архитектура и дизайн интерьера",
  description:
    "NORDEN Architecture — бюро архитектуры и дизайна интерьера. Проектируем частные дома, квартиры и коммерческие пространства полного цикла: от концепции до авторского надзора.",
  keywords: [
    "архитектурное бюро",
    "дизайн интерьера",
    "проектирование домов",
    "NORDEN Architecture",
  ],
  openGraph: {
    title: "NORDEN Architecture — архитектура и дизайн интерьера",
    description:
      "Бюро архитектуры и дизайна интерьера полного цикла: концепция, проект, авторский надзор.",
    type: "website",
    locale: "ru_RU",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ru" className={`${displayFont.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
