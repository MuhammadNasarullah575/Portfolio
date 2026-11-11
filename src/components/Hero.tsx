"use client";

import { useState, useEffect } from "react";
import { personalData } from "@/data/portfolioData";
import { 
  Sparkles, 
  ArrowRight, 
  FileText, 
  Github, 
  Linkedin, 
  Mail, 
  MapPin, 
  Brain, 
  Code2, 
  Cpu, 
  ChevronDown 
} from "lucide-react";

interface HeroProps {
  onOpenResume?: () => void;
}

export default function Hero({ onOpenResume }: HeroProps) {
  const [roleIndex, setRoleIndex] = useState(0);
  const roles = personalData.roleSubtitles;

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Glow Spheres */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-emerald-600/15 via-teal-500/10 to-cyan-500/15 rounded-full blur-[130px] pointer-events-none animate-glow" />
      <div className="absolute top-1/3 -left-32 w-80 h-80 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 -right-32 w-80 h-80 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/80 border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm font-medium mb-6 backdrop-blur-md shadow-sm shadow-emerald-500/10">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>{personalData.status}</span>
            <span className="text-slate-600">|</span>
            <span className="flex items-center gap-1 text-slate-400 text-xs">
              <MapPin className="w-3 h-3 text-emerald-400" />
              Sargodha, Pakistan
            </span>
          </div>

          {/* Main Hero Heading */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-4">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
              {personalData.name}
            </span>
          </h1>

          {/* Dynamic Role Subtitle */}
          <div className="h-10 sm:h-12 flex items-center justify-center mb-6">
            <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-slate-300 flex items-center gap-2">
              <span className="text-emerald-400 font-mono">&gt;</span>
              <span className="transition-all duration-500 key={roleIndex}">
                {roles[roleIndex]}
              </span>
            </p>
          </div>

          {/* Tagline & Elevator Pitch */}
          <p className="text-base sm:text-lg text-emerald-300/90 font-medium italic mb-4 max-w-2xl">
            "{personalData.tagline}"
          </p>

          <p className="text-sm sm:text-base text-slate-400 max-w-2xl leading-relaxed mb-8">
            I combine my knowledge of <strong>Artificial Intelligence</strong>, <strong>Machine Learning</strong>, <strong>Computer Vision</strong>, and <strong>Full-Stack Web Development</strong> to transform ideas into practical, technology-driven solutions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-12">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-slate-950 font-semibold text-sm transition-all duration-200 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:-translate-y-0.5"
            >
              <span>Explore Projects</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-700/80 hover:border-slate-500 font-semibold text-sm transition-all duration-200 backdrop-blur-sm"
            >
              <FileText className="w-4 h-4 text-emerald-400" />
              <span>View & Download CV</span>
            </button>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900/50 hover:bg-slate-900 text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700 font-medium text-sm transition-all duration-200"
            >
              <Mail className="w-4 h-4 text-cyan-400" />
              <span>Contact Me</span>
            </a>
          </div>

          {/* Social Links Bar */}
          <div className="flex items-center gap-3 text-slate-400 mb-12">
            <a
              href={personalData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 hover:border-emerald-500/50 hover:text-emerald-400 transition-colors"
              title="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={personalData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 hover:border-cyan-500/50 hover:text-cyan-400 transition-colors"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personalData.email}`}
              className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 hover:border-teal-500/50 hover:text-teal-400 transition-colors"
              title="Email Directly"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Metric Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 w-full max-w-4xl">
            {personalData.heroStats.map((stat, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm hover:border-slate-700 transition-all text-center group"
              >
                <div className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-200">
                  {stat.value}
                </div>
                <div className="text-xs text-slate-400 mt-1 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Subtle Scroll Down Prompt */}
      <a
        href="#about"
        className="absolute bottom-3 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-500 hover:text-emerald-400 transition-colors text-xs font-mono"
      >
        <span>scroll</span>
        <ChevronDown className="w-3.5 h-3.5 animate-bounce" />
      </a>
    </section>
  );
}

