import type { Metadata } from "next";
import { Host_Grotesk, Instrument_Sans } from "next/font/google";
import "./globals.css";

const display = Host_Grotesk({ subsets: ["latin", "latin-ext"], weight: ["700", "800"], variable: "--font-display" });
const reading = Instrument_Sans({ subsets: ["latin", "latin-ext"], variable: "--font-reading" });

export const metadata: Metadata = { title: "VIB One Card MCC Checker", description: "Kiểm tra mã MCC thuộc nhóm chi tiêu nào của thẻ VIB One Card" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi" className={`${display.variable} ${reading.variable}`}>
      <body>{children}</body>
    </html>
  );
}
