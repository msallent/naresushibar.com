import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const minion = localFont({
  src: "../assets/fonts/Minion-Variable.woff2",
  variable: "--font-minion",
});

export const metadata: Metadata = {
  title: "nare sushi bar",
  description: "próximamente en virrey loreto 2025",
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="es">
      <body className={`${minion.variable} font-primary antialiased`}>{children}</body>
    </html>
  );
}
