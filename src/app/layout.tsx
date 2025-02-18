import type { Metadata } from "next";
// import { Noto_Sans } from "next/font/google";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";
import "./globals.css";

const minion = localFont({
  src: "../assets/fonts/minion.woff2",
  variable: "--font-minion",
});

// const notoSans = Noto_Sans({
//   variable: "--font-noto-sans",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "nare sushi bar",
  description: "nare sushi bar",
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html className="h-full" lang="es">
      <body className={cn("h-full font-primary antialiased", minion.variable)}>{children}</body>
    </html>
  );
}
