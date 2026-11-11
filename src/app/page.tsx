"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Process from "@/components/Process";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import LearningPath from "@/components/LearningPath";
import Services from "@/components/Services";
import Badges from "@/components/Badges";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ResumeModal from "@/components/ResumeModal";

export default function Home() {
  const [resumeOpen, setResumeOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>(
    "AI & Machine Learning Solutions"
  );

  const handleSelectService = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-[#e6edf3] relative selection:bg-[#00ff9c]/20 selection:text-[#00ff9c] font-sans">
      {/* Top Cyber Navigation Bar */}
      <Navbar onOpenResume={() => setResumeOpen(true)} />

      {/* Main Experience Flow */}
      <main>
        {/* Hero Section with Signal Flow Canvas */}
        <Hero onOpenResume={() => setResumeOpen(true)} />

        {/* 01. Profile Overview & 3D Neural Hologram */}
        <About />

        {/* 02. Workflow Engineering Process (STEP_01 to STEP_09) */}
        <Process />

        {/* 03. Featured Projects Showcase with Live Links & Modals */}
        <Projects />

        {/* 04. Professional Experience Timeline */}
        <Experience />

        {/* 05. Technical Stack & Toolchain Grid */}
        <Skills />

        {/* 06. STEM, Robotics & AI Fellowship Learning Path (like #learn-pcb) */}
        <LearningPath />

        {/* 07. Client Consulting & Development Services */}
        <Services onSelectService={handleSelectService} />

        {/* 08. Engineer Badges & Credential Seals (like #stickers) */}
        <Badges />

        {/* 09. Comm_Link_01 Hardware Contact Terminal */}
        <Contact preselectedService={selectedService} />
      </main>

      {/* Futuristic Telemetry Footer */}
      <Footer />

      {/* In-App ATS Curriculum Vitae Modal with Print to PDF */}
      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />
    </div>
  );
}
