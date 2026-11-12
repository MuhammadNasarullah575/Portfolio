import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Muhammad Nasarullah — AI/ML Engineer & Full-Stack Developer",
  description:
    "Official Portfolio of Muhammad Nasarullah — Computer Engineer, AI/ML Specialist, and Full-Stack Developer. Transforming complex engineering and machine learning challenges into high-performance applications.",
  keywords: [
    "Muhammad Nasarullah",
    "AI/ML Engineer",
    "Full-Stack Web Developer",
    "Computer Engineer",
    "Computer Vision",
    "YOLOv8",
    "Next.js",
    "React",
    "Data Scraping",
    "Robotics",
    "IoT",
    "Pakistan",
    "Sargodha",
    "PEC Registered Engineer",
    "IST"
  ],
  authors: [{ name: "Muhammad Nasarullah" }],
  creator: "Muhammad Nasarullah",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://muhammad-nasarullah.vercel.app",
    title: "Muhammad Nasarullah — AI/ML Engineer & Full-Stack Developer",
    description:
      "Building intelligent solutions with AI, computer vision, and modern full-stack web architecture. Explore live e-commerce applications, ML prediction engines, and robotics prototypes.",
    siteName: "Muhammad Nasarullah Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Nasarullah — AI/ML Engineer & Full-Stack Developer",
    description:
      "Building intelligent solutions with AI, computer vision, and modern full-stack web architecture.",
    creator: "@Nasarullah",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/portfolio-logo.png", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: "/portfolio-logo.png",
    apple: "/portfolio-logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <head>
        <meta name="theme-color" content="#f8fafc" />
        <link rel="icon" href="/portfolio-logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/portfolio-logo.png" />
      </head>
      <body className="bg-slate-50 dark:bg-[#090d16] text-slate-900 dark:text-slate-100 font-sans antialiased selection:bg-indigo-500/20 selection:text-indigo-600 dark:selection:bg-indigo-500/30 dark:selection:text-indigo-300 transition-colors duration-300">
        {children}
      </body>
    </html>
  );
}
