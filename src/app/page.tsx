"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import HardwareLab from "@/components/HardwareLab";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ResumeModal from "@/components/ResumeModal";

export default function Home() {
  const [resumeOpen, setResumeOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>(
    "AI & Machine Learning Solutions"
  );
  
  // Default theme is LIGHT mode as requested ("theme bi default light ho lakin Dark theme k liye bi button given ho")
  const [isDark, setIsDark] = useState<boolean>(false);

  useEffect(() => {
    // Check local storage or system preference only if user previously saved
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    setIsDark((prev) => {
      const nextTheme = !prev;
      if (nextTheme) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
      return nextTheme;
    });
  };

  const handleSelectService = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#090d16] text-slate-900 dark:text-slate-100 transition-colors duration-300 relative selection:bg-indigo-500/20 selection:text-indigo-600 dark:selection:bg-indigo-500/30 dark:selection:text-indigo-300">
      
      {/* Navigation with Theme Switcher */}
      <Navbar
        onOpenResume={() => setResumeOpen(true)}
        isDark={isDark}
        onToggleTheme={toggleTheme}
      />

      {/* Main Flow */}
      <main>
        {/* Hero Section */}
        <Hero onOpenResume={() => setResumeOpen(true)} />

        {/* About & Credentials */}
        <About />

        {/* Featured Projects with Real Pictures (Tijaaro, Fire Detection, Daraz, Short Squeeze) */}
        <Projects />

        {/* Tech Fellow Hardware Lab (6 Real Prototype Photos + Lightbox) */}
        <HardwareLab />

        {/* Experience Timeline */}
        <Experience />

        {/* Technical Skills */}
        <Skills />

        {/* Client Offerings */}
        <Services onSelectService={handleSelectService} />

        {/* Contact & Inquiries */}
        <Contact preselectedService={selectedService} />
      </main>

      {/* Footer */}
      <Footer />

      {/* In-App Resume / CV Viewer Modal */}
      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />

    </div>
  );
}
