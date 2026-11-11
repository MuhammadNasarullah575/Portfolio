import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Muhammad Nasarullah | AI/ML Engineer & Full-Stack Web Developer",
  description:
    "Official Portfolio of Muhammad Nasarullah — Computer Engineer, AI/ML Engineer, and Full-Stack Web Developer. Specializing in Computer Vision (YOLOv8), Predictive Machine Learning, Next.js, and Robotics & IoT.",
  keywords: [
    "Muhammad Nasarullah",
    "AI/ML Engineer",
    "Full-Stack Web Developer",
    "Computer Engineer",
    "Computer Vision",
    "YOLOv8",
    "OpenCV",
    "Next.js",
    "React",
    "Machine Learning",
    "NLP",
    "Robotics",
    "IoT",
    "Pakistan",
    "Sargodha",
    "Institute of Space Technology",
    "PEC Registered Engineer"
  ],
  authors: [{ name: "Muhammad Nasarullah" }],
  creator: "Muhammad Nasarullah",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://muhammad-nasarullah.vercel.app",
    title: "Muhammad Nasarullah | AI/ML Engineer & Full-Stack Web Developer",
    description:
      "Building Intelligent Solutions Through AI, Engineering, and Modern Web Technologies. Explore featured AI models, computer vision systems, and full-stack web applications.",
    siteName: "Muhammad Nasarullah Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Nasarullah | AI/ML Engineer & Full-Stack Web Developer",
    description:
      "Building Intelligent Solutions Through AI, Engineering, and Modern Web Technologies.",
    creator: "@Nasarullah",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} dark`}>
      <head>
        <meta name="theme-color" content="#030712" />
      </head>
      <body className="bg-slate-950 text-slate-100 antialiased selection:bg-emerald-500/20 selection:text-emerald-300">
        {children}
      </body>
    </html>
  );
}

