"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Services from "@/components/Services";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ResumeModal from "@/components/ResumeModal";

export default function Home() {
  const [resumeOpen, setResumeOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>("AI & Machine Learning Solutions");

  const handleSelectService = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 relative selection:bg-emerald-500/20 selection:text-emerald-300">
      {/* Navigation */}
      <Navbar onOpenResume={() => setResumeOpen(true)} />

      {/* Main Sections */}
      <main>
        <Hero onOpenResume={() => setResumeOpen(true)} />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Services onSelectService={handleSelectService} />
        <Education />
        <Contact preselectedService={selectedService} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Resume Viewer / Print Modal */}
      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />
    </div>
  );
}

