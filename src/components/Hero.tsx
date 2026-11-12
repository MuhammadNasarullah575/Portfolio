"use client";

import { useState, useEffect } from "react";
import { personalData } from "@/data/portfolioData";
import { 
  ArrowRight, 
  Github, 
  Linkedin, 
  Mail, 
  MapPin, 
  CheckCircle, 
  Sparkles, 
  Layers, 
  Cpu, 
  ArrowUpRight 
} from "lucide-react";

export default function Hero() {
  const roles = [
    "AI & Machine Learning Engineer",
    "Computer Vision & YOLOv8 Specialist",
    "Full-Stack Web Developer (Next.js & React)",
    "Robotics & IoT Systems Architect",
    "PEC Registered Computer Engineer",
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleEmailClick = () => {
    try {
      navigator.clipboard.writeText(personalData.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } catch (_) {}
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-4 overflow-hidden">
      
      {/* Background Subtle Gradient Blobs (Adapts to Light / Dark) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-gradient-to-tr from-indigo-500/10 via-violet-500/10 to-cyan-500/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-1/3 -left-32 w-80 h-80 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 -right-32 w-80 h-80 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 light-grid-pattern dark:dark-grid-pattern opacity-60 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        
        {/* Availability Status Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-sm mb-6 text-xs font-semibold text-slate-700 dark:text-slate-300 backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span>{personalData.status}</span>
          <span className="text-slate-300 dark:text-slate-700">|</span>
          <span className="text-slate-500 dark:text-slate-400 flex items-center gap-1 font-normal">
            <MapPin className="w-3 h-3 text-indigo-500" />
            Sargodha, Pakistan
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4">
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-500 bg-clip-text text-transparent">
            {personalData.name}
          </span>
        </h1>

        {/* Dynamic Rotating Role */}
        <div className="h-10 sm:h-12 flex items-center justify-center mb-6">
          <p className="text-lg sm:text-2xl font-bold text-slate-700 dark:text-slate-300 flex items-center gap-2">
            <span className="text-indigo-600 dark:text-indigo-400 font-mono font-bold">&gt;</span>
            <span className="transition-all duration-300">
              {roles[currentRoleIndex]}
            </span>
          </p>
        </div>

        {/* Professional Tagline */}
        <p className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-300 max-w-2xl font-medium italic mb-4 leading-relaxed">
          "{personalData.tagline}"
        </p>

        {/* Narrative Pitch */}
        <p className="text-xs sm:text-sm md:text-base text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed mb-10">
          Computer Engineer from <strong className="text-slate-900 dark:text-white font-semibold">Institute of Space Technology (IST)</strong>. 
          I combine <strong className="text-indigo-600 dark:text-indigo-400 font-semibold">Machine Learning</strong>, <strong className="text-indigo-600 dark:text-indigo-400 font-semibold">Computer Vision</strong>, and <strong className="text-indigo-600 dark:text-indigo-400 font-semibold">Modern Full-Stack Web Development</strong> to transform complex engineering ideas into practical, commercial-grade solutions.
        </p>

        {/* Call to Actions */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 mb-12">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white font-semibold text-xs sm:text-sm shadow-md shadow-indigo-500/20 hover:shadow-indigo-500/35 hover:-translate-y-0.5 transition-all"
          >
            <span>Explore Featured Projects</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="#hardware-lab"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-800 font-semibold text-xs sm:text-sm shadow-sm transition-all"
          >
            <Cpu className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
            <span>Tech Fellow Hardware Lab</span>
          </a>
        </div>

        {/* Social Quick Links Bar */}
        <div className="flex items-center gap-3 text-slate-500 dark:text-slate-400 mb-14">
          <a
            href={personalData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:text-indigo-600 dark:hover:text-white hover:border-indigo-300 dark:hover:border-indigo-500/40 transition shadow-sm"
            title="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={personalData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:text-indigo-600 dark:hover:text-white hover:border-indigo-300 dark:hover:border-indigo-500/40 transition shadow-sm"
            title="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <div className="relative">
            <a
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${personalData.email}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleEmailClick}
              className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:text-indigo-600 dark:hover:text-white hover:border-indigo-300 dark:hover:border-indigo-500/40 transition shadow-sm flex items-center justify-center"
              title={`Email: ${personalData.email} (Opens Gmail & copies address)`}
            >
              <Mail className="w-4 h-4" />
            </a>
            {copiedEmail && (
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 text-[10px] font-medium rounded shadow-md whitespace-nowrap animate-in fade-in">
                Email copied!
              </span>
            )}
          </div>
        </div>

        {/* Live Metric Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 sm:gap-4 w-full max-w-4xl">
          {personalData.heroStats.map((stat, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-white/90 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 backdrop-blur-sm hover:border-indigo-300 dark:hover:border-indigo-500/40 transition-all text-center shadow-sm hover:shadow-md hover:-translate-y-0.5 group"
            >
              <div className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent group-hover:scale-105 transition-transform">
                {stat.value}
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
