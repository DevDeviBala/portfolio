import type { Metadata } from "next";
import { Fraunces, Public_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["400", "500", "600"],
  display: "swap",
});

const publicSans = Public_Sans({
  subsets: ["latin"],
  variable: "--font-public-sans",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: "Devi Bala — Python Full Stack Engineer",
  description:
    "Python Full Stack Engineer building backend systems, APIs, automation workflows, integrations, and data-driven platforms.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
  openGraph: {
    title: "Devi Bala — Python Full Stack Engineer",
    description:
      "Backend-focused engineer building scalable APIs, automation systems, integrations, and data-driven platforms.",
    type: "website",
    url: "https://example.com",
    siteName: "Devi Bala M",
  },
  twitter: {
    card: "summary_large_image",
    title: "Devi Bala — Python Full Stack Engineer",
    description:
      "Backend-focused engineer building scalable APIs, automation systems, integrations, and data-driven platforms.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${publicSans.variable} ${jetbrainsMono.variable}`}
    >
      <body className="font-sans bg-ink text-text antialiased">{children}</body>
    </html>
  );
}
