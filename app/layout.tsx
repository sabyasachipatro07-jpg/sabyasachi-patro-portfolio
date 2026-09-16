import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { siteConfig } from "@/lib/site-config";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  axes: ["opsz", "SOFT", "WONK"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${siteConfig.name} — ${siteConfig.role}`,
  description:
    "Product management portfolio of Sabyasachi Patro: case studies, product sense exercises, and AI-powered prototypes from a creative professional transitioning into product management.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: `${siteConfig.name} — ${siteConfig.role}`,
    description:
      "Product case studies and AI-powered prototypes from a creative professional transitioning into product management.",
    type: "website",
  },
};

// Runs before paint so the page never flashes the wrong theme. Reads a
// stored preference first, falls back to the OS-level preference, and does
// nothing (stays on the default dark theme) if neither is available.
const noFlashThemeScript = `
(function () {
  try {
    var stored = window.localStorage.getItem('theme');
    var wantsLight = stored ? stored === 'light' : window.matchMedia('(prefers-color-scheme: light)').matches;
    if (wantsLight) document.documentElement.classList.add('light');
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${fraunces.variable} ${inter.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: noFlashThemeScript }} />
      </head>
      <body className="min-h-screen bg-ink text-paper antialiased transition-colors duration-200">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
