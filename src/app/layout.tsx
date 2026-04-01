import type { Metadata } from "next";
import { Fraunces, Instrument_Sans } from "next/font/google";
import "@/styles/globals.css";
import { CustomCursor } from "@/components/layout/CustomCursor";

// ─── Fonts ────────────────────────────────────────────────────────────────────

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-instrument",
  display: "swap",
});

// ─── Metadata ─────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Sahil Mahmood — Full Stack & AI Engineer",
  description:
    "Full stack developer and AI automation engineer building scalable web apps and intelligent workflows.",
  keywords: [
    "full stack developer",
    "AI automation",
    "MERN stack",
    "React",
    "Next.js",
    "LangChain",
  ],
  authors: [{ name: "Sahil Mahmood" }],
  openGraph: {
    title: "Sahil Mahmood — Full Stack & AI Engineer",
    description: "Build systems powered by AI. Code that delivers.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sahil Mahmood — Full Stack & AI Engineer",
    description: "Build systems powered by AI. Code that delivers.",
  },
};

// ─── Layout ───────────────────────────────────────────────────────────────────

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${instrumentSans.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-bg text-text font-instrument antialiased overflow-x-hidden">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}