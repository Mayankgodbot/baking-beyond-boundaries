import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Baking Beyond Boundaries | Eggless Millet Teacakes — Dehradun",
  description: "Handcrafted eggless, millet-based dry teacakes by Vasudha Jain. FSSAI certified, sugar-free options. Masters in Food & Nutrition. Order from Rajpur, Dehradun.",
  keywords: ["eggless bakery", "millet teacakes", "dehradun bakery", "sugar free cakes", "FSSAI certified", "healthy bakery", "ragi cookies", "Vasudha Jain"],
  authors: [{ name: "Vasudha Jain" }],
  openGraph: {
    title: "Baking Beyond Boundaries — Eggless Millet Teacakes",
    description: "Handcrafted eggless, millet-based dry teacakes. FSSAI registered. Made with love in Rajpur, Dehradun.",
    url: "https://bakingbeyondboundaries.in",
    siteName: "Baking Beyond Boundaries",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Baking Beyond Boundaries",
    description: "Eggless millet-based teacakes from Dehradun",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/images/favicon.ico" sizes="any" />
        <meta name="theme-color" content="#A67C52" />
      </head>
      <body className={`${playfair.variable} ${inter.variable} font-sans bg-cream antialiased`}>
        <Navbar />
        <main className="min-h-screen pt-16 lg:pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}