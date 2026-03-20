import type { Metadata } from "next";
import { Barlow_Condensed, Barlow } from "next/font/google";
import "./globals.css";

const barlowCondensed = Barlow_Condensed({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
});

const barlow = Barlow({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "WK Motors – For the Pilots Among the Drivers",
  description: "Ihre Spezialwerkstatt für Wartung, Reparatur, Leistungssteigerung und Individual-Umbauten.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${barlowCondensed.variable} ${barlow.variable} scroll-smooth`}>
      <body className="bg-[#080808] text-white antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-[#e30000] focus:text-white focus:text-sm focus:font-bold"
        >
          Zum Inhalt springen
        </a>
        {children}
      </body>
    </html>
  );
}
