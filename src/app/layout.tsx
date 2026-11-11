import type { Metadata } from "next";
import { Inter, Orbitron, Roboto_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  display: "swap",
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Engr. Muhammad Nasarullah | AI/ML Engineer & Full-Stack Developer",
  description:
    "Official Portfolio of Engr. Muhammad Nasarullah — Computer Engineer, AI/ML Engineer, Computer Vision Specialist, and Full-Stack Web Developer. Transforming ideas into intelligent solutions.",
  keywords: [
    "Muhammad Nasarullah",
    "Engr. Muhammad Nasarullah",
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
    title: "Engr. Muhammad Nasarullah | AI/ML Engineer & Full-Stack Developer",
    description:
      "Building Intelligent Solutions Through AI, Engineering, and Modern Web Technologies. Explore featured AI systems, YOLOv8 vision models, and full-stack web platforms.",
    siteName: "Muhammad Nasarullah Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Engr. Muhammad Nasarullah | AI/ML Engineer & Full-Stack Developer",
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
    <html lang="en" className={`${inter.variable} ${orbitron.variable} ${robotoMono.variable} scroll-smooth dark`}>
      <head>
        <meta name="theme-color" content="#050505" />
      </head>
      <body className="bg-[#050505] text-[#e6edf3] font-sans overflow-x-hidden selection:bg-[#00ff9c]/20 selection:text-[#00ff9c]">
        {children}
      </body>
    </html>
  );
}
