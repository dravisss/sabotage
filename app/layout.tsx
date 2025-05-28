import type { Metadata } from "next";
import { Courier_Prime, Special_Elite } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import SiteLayout from '@/components/site-layout';
import NewsletterModal from '@/components/NewsletterModal';

const courierPrime = Courier_Prime({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-courier-prime",
  display: "swap",
});

const specialElite = Special_Elite({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-special-elite",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Manual de Sabotagem Corporativa",
  description: "Como destruir sua organização com classe, reuniões e boas intenções.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${courierPrime.variable} ${specialElite.variable} antialiased`}
      >
        <ThemeProvider
          enableSystem
          disableTransitionOnChange
        >
          <NewsletterModal />
          <SiteLayout>{children}</SiteLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
