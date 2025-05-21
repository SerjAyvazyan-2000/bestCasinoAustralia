import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CookieBanner from "@/components/CookieBanner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Best Online Casino in Australia | Play & Win Big",
  description: "Discover the best online casinos in Australia. Top bonuses, fast payouts, and real Australian dollars. Play now and win big!",
  keywords: [
    "Best online casino Australia",
    "AU casinos",
    "play pokies",
    "casino bonuses",
    "real money gambling",
    "Australian dollars"
  ],
  authors: [{ name: "BestCasinoAU" }],
  openGraph: {
    title: "Best Online Casino in Australia | Play & Win Big",
    description: "Discover Australia’s top-rated online casinos. Bonus offers, fast withdrawals, real AUD!",
    url: "",
    siteName: "BestCasinoAU",
  
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Online Casino in Australia",

  },
  icons: {
    icon: "/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
          <Header />
        {children}
              <Footer />

         <CookieBanner />
      </body>
    </html>
  );
}
