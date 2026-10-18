import type { Metadata } from "next";
import RecaptchaProviderWrapper  from "./RecaptchaProviderWrapper";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import DevBackground from "./components/DevBackground";
import PWARegister from "../components/PWARegister";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vipin Patel | Senior Frontend Developer",
  description:
    "Vipin Patel is a Senior Frontend Developer specializing in React, Next.js, Angular, TypeScript and scalable, high-performance web applications.",
  keywords: [
    "Vipin Patel",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "JavaScript Developer",
    "JavaScript",
    "html developer",
    "html",
    "reactjs",
    "nextjs",
    "html5",
    "css",
    "css3",
    "boostrap",
    "git",
    "github",
    "ci/cd",
    "TypeScript",
    "Tailwind CSS",
    "UI/UX Developer",
    "Fullstack Developer",
    "UI Developer",
    "Frontend Developer India",
    "Best Website Developer",
    "Website Developer India",
    "Web Developer India",
  ],
  authors: [{ name: "Vipin Patel" }],
  manifest: '/manifest.json',
  openGraph: {
    title: "Vipin Patel | Senior Frontend Developer",
    description:
      "Senior Frontend Developer specializing in React, Next.js, TypeScript, and high-performance scalable web applications.",
    url: "https://vipinpatel.in",
    siteName: "Vipin Patel Portfolio",
    type: "website",
    images: [
      {
        url: "https://vipinpatel.in/profile-og.jpg",
        width: 1200,
        height: 630,
        alt: "Vipin Patel - Senior Frontend Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vipin Patel | Senior Frontend Developer",
    description:
      "Building high-performance, scalable, and user-focused web applications with React, Next.js, and TypeScript.",
    images: ["https://vipinpatel.in/profile-og.jpg"],
    site: "@vipinpatel",
  },
  metadataBase: new URL("https://vipinpatel.in"),
};

export const viewport = {
  themeColor: '#000000',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <RecaptchaProviderWrapper>
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
          <PWARegister />
          <DevBackground />
        <Navbar />
        <main className="md:ml-24 min-h-screen">
          {children}
        </main>
      </body>
    </html>
    </RecaptchaProviderWrapper>
  );
}
