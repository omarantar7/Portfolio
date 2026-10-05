import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { profile, siteUrl } from "@/data/portfolio";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const title = `${profile.name} — ${profile.role}`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: `%s | ${profile.name}`,
  },
  description: profile.description,
  applicationName: profile.name,
  authors: [{ name: profile.name, url: siteUrl }],
  creator: profile.name,
  keywords: [
    profile.name,
    "Omar Antar portfolio",
    "Full Stack Software Engineer",
    "Full Stack Developer",
    "Software Engineer Riyadh",
    "Vue",
    "Nuxt",
    "React",
    "Next.js",
    "Node.js",
    "PostgreSQL",
    "Docker",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "profile",
    firstName: "Omar",
    lastName: "Antar",
    url: "/",
    siteName: profile.name,
    title,
    description: profile.description,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: profile.description,
  },
  verification: {
    google: "pUhvOpePqlAVS3oWYcyMsivLYcgxEtGkBKFTYzeG4Oo",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={inter.variable} data-scroll-behavior="smooth">
      <body className="bg-background font-sans leading-relaxed text-body antialiased selection:bg-accent selection:text-accent-ink">
        {children}
      </body>
    </html>
  );
}
