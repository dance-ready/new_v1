import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import TopBar from "@/components/TopBar";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-display",
});

const sans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
  variable: "--font-sans",
});

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.danceready.org";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Dance Ready Project — Reducing injury risk, elevating performance",
    template: "%s · Dance Ready Project",
  },
  description:
    "The Dance Ready Project equips dancers, teachers, and studios with research-based education, screening tools, and conditioning programs that reduce injury risk and optimise performance across the lifespan.",
  openGraph: {
    type: "website",
    siteName: "Dance Ready Project",
    url: SITE_URL,
    title:
      "Dance Ready Project — Reducing injury risk, elevating performance",
    description:
      "Research-based education, screening tools, and conditioning programs for dancers across the lifespan.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dance Ready Project",
    description:
      "Reducing injury risk, elevating performance — for dancers across the lifespan.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body>
        <TopBar />
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
