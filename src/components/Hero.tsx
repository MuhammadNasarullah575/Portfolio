"use client";

import { useState, useEffect } from "react";
import { personalData } from "@/data/portfolioData";
import SignalCanvas from "./SignalCanvas";
import { 
  Terminal, 
  ArrowRight, 
  FileText, 
  Linkedin, 
  Github, 
  ChevronDown, 
  Cpu, 
  Sparkles, 
  Activity 
} from "lucide-react";

interface HeroProps {
  onOpenResume?: () => void;
}

export default function Hero({ onOpenResume }: HeroProps) {
  const specialties = [
    "AI & Machine Learning Engineer",
    "Computer Vision & YOLOv8 Specialist",
    "Full-Stack Web Developer (Next.js / React)",
    "Robotics & IoT Systems Architect",
    "PEC Registered Computer Engineer",
  ];

  const [currentText, setCurrentText] = useState("");
  const [count, setCount] = useState(0);
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = specialties[count % specialties.length];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setCurrentText(fullText.slice(0, index + 1));
        setIndex((prev) => prev + 1);

        if (index + 1 === fullText.length) {
          setTimeout(() => setIsDeleting(true), 2200);
        }
      } else {
        setCurrentText(fullText.slice(0, index - 1));
        setIndex((prev) => prev - 1);

        if (index - 1 === 0) {
          setIsDeleting(false);
          setCount((prev) => prev + 1);
        }
      }
    }, isDeleting ? 40 : 80);

    return () => clearTimeout(timer);
  }, [index, isDeleting, count]);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 overflow-hidden border-b border-[#1f2933]">
      {/* Background Signal Flow Canvas & Grid */}
      <SignalCanvas />
      <div className="fixed inset-0 grid-bg opacity-30 -z-20 pointer-events-none" />

      {/* Radial Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00ff9c]/5 rounded-full blur-[140px] pointer-events-none animate-pulse-glow" />

      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        
        {/* System Initialize Tag */}
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0d1117] border border-[#00ff9c]/30 rounded-sm mb-6 shadow-[0_0_15px_rgba(0,255,156,0.1)]">
          <span className="w-2 h-2 rounded-full bg-[#00ff9c] animate-ping" />
          <span className="font-mono text-[#00ff9c] text-xs sm:text-sm tracking-[0.3em] uppercase">
            System.Initialize()
          </span>
        </div>

        {/* Large Name Header */}
        <h1 className="font-header text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight mb-4 text-white uppercase">
          Engr.{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff9c] via-[#22c55e] to-[#00b3ff] drop-shadow-[0_0_25px_rgba(0,255,156,0.35)]">
            Nasarullah
          </span>
        </h1>

        {/* Typing Console Prompt */}
        <div className="h-10 sm:h-12 flex items-center justify-center mb-6">
          <p className="font-mono text-base sm:text-xl md:text-2xl text-[#9da7b3] flex items-center">
            <span className="text-[#00ff9c] mr-2 font-bold">&gt;</span>
            <span className="text-white font-medium">{currentText}</span>
            <span className="inline-block w-2.5 h-5 bg-[#00ff9c] ml-1 animate-pulse" />
          </p>
        </div>

        {/* Tagline */}
        <p className="font-mono text-xs sm:text-sm text-[#00ff9c]/90 max-w-2xl mb-4 uppercase tracking-wider">
          // "{personalData.tagline}"
        </p>

        {/* Core Subtitle Paragraph */}
        <p className="text-sm sm:text-base text-[#9da7b3] max-w-2xl leading-relaxed mb-10 font-sans">
          Computer Engineer from <strong className="text-white">Institute of Space Technology (IST)</strong>. 
          Architecting AI-powered computer vision models, data-driven market forecasting engines, and high-performance full-stack web applications.
        </p>

        {/* Cyber Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-md sm:max-w-none mb-12 font-mono">
          <a
            href="#projects"
            className="w-full sm:w-auto bg-[#00ff9c] text-black px-8 py-3.5 font-bold uppercase text-xs sm:text-sm tracking-wider hover:scale-105 hover:shadow-[0_0_25px_rgba(0,255,156,0.5)] transition duration-300 rounded-sm flex items-center justify-center gap-2 group"
          >
            <span>03. VIEW_PROJECTS</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="#contact"
            className="w-full sm:w-auto border border-[#1f2933] bg-[#0d1117]/80 text-white px-8 py-3.5 font-bold uppercase text-xs sm:text-sm tracking-wider hover:border-[#00ff9c] hover:text-[#00ff9c] hover:bg-[#00ff9c]/5 transition duration-300 rounded-sm flex items-center justify-center gap-2"
          >
            <Terminal className="w-4 h-4 text-[#00ff9c]" />
            <span>INITIATE_CONTACT</span>
          </a>

          <button
            onClick={onOpenResume}
            className="w-full sm:w-auto border border-[#00b3ff]/40 bg-[#0d1117]/80 text-[#00b3ff] px-6 py-3.5 font-bold uppercase text-xs sm:text-sm tracking-wider hover:border-[#00b3ff] hover:bg-[#00b3ff]/10 hover:shadow-[0_0_20px_rgba(0,179,255,0.3)] transition duration-300 rounded-sm flex items-center justify-center gap-2"
          >
            <FileText className="w-4 h-4" />
            <span>RESUME_ATS</span>
          </button>
        </div>

        {/* Live System Telemetry Strip */}
        <div className="w-full max-w-4xl border-t border-[#1f2933] pt-6 flex flex-wrap justify-center sm:justify-between items-center gap-4 text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] text-[#555]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#00ff9c] animate-ping" />
            <span className="text-[#9da7b3]">STATUS:</span>
            <span className="text-[#00ff9c] font-bold">AVAILABLE_FOR_HIRE</span>
          </div>

          <div>
            <span className="text-[#9da7b3]">PEC_ACCREDITED:</span>{" "}
            <span className="text-white font-bold">COMP_ENGINEER</span>
          </div>

          <div>
            <span className="text-[#9da7b3]">DEGREE:</span>{" "}
            <span className="text-[#00b3ff] font-bold">BS_CE (IST/KICSIT)</span>
          </div>

          <div>
            <span className="text-[#9da7b3]">HONOR:</span>{" "}
            <span className="text-[#00ff9c] font-bold">HAFIZ_E_QURAN</span>
          </div>
        </div>

      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[#555] hover:text-[#00ff9c] transition-colors flex flex-col items-center font-mono text-[9px] uppercase tracking-widest"
      >
        <span>SCROLL_DOWN</span>
        <ChevronDown className="w-3.5 h-3.5 animate-bounce mt-1 text-[#00ff9c]" />
      </a>
    </section>
  );
}
