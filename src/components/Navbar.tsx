"use client";

import { useState } from "react";
import { personalData } from "@/data/portfolioData";
import { 
  Cpu, 
  Menu, 
  X, 
  Github, 
  Linkedin, 
  FileText, 
  Terminal, 
  ChevronRight, 
  Sparkles 
} from "lucide-react";

interface NavbarProps {
  onOpenResume?: () => void;
}

export default function Navbar({ onOpenResume }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "01. About", href: "#about" },
    { label: "02. Process", href: "#process" },
    { label: "03. Projects", href: "#projects" },
    { label: "04. Experience", href: "#experience" },
    { label: "05. Stack", href: "#skills" },
    { label: "06. Mentorship", href: "#learning" },
    { label: "07. Services", href: "#services" },
    { label: "08. Contact", href: "#contact" },
  ];

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-[#050505]/90 backdrop-blur-xl border-b border-[#1f2933]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <a
            href="#"
            className="font-header text-lg sm:text-xl tracking-tighter text-[#00ff9c] flex items-center gap-2 group"
          >
            <div className="w-8 h-8 rounded border border-[#00ff9c]/40 bg-[#0d1117] flex items-center justify-center group-hover:border-[#00ff9c] group-hover:shadow-[0_0_15px_rgba(0,255,156,0.4)] transition-all">
              <Cpu className="w-4 h-4 text-[#00ff9c]" />
            </div>
            <span className="font-bold tracking-tight text-white group-hover:text-[#00ff9c] transition-colors">
              ENGR. <span className="text-[#00ff9c]">NASARULLAH</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden xl:flex items-center gap-7 font-mono text-xs uppercase tracking-widest text-[#9da7b3]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-[#00ff9c] transition-colors"
              >
                {link.label}
              </a>
            ))}

            <div className="flex items-center gap-4 border-l border-[#1f2933] pl-6">
              <a
                href={personalData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#9da7b3] hover:text-[#00ff9c] transition"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={personalData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#9da7b3] hover:text-[#00b3ff] transition"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <button
                onClick={onOpenResume}
                className="px-3 py-1 border border-[#00ff9c]/50 text-[#00ff9c] hover:bg-[#00ff9c] hover:text-black transition-all rounded-sm font-bold text-[10px] tracking-wider"
              >
                CURRICULUM_VITAE
              </button>
            </div>
          </div>

          {/* Tablet/Mobile Actions */}
          <div className="flex xl:hidden items-center gap-3">
            <button
              onClick={onOpenResume}
              className="px-2.5 py-1 border border-[#00ff9c]/50 text-[#00ff9c] text-[10px] font-mono hover:bg-[#00ff9c] hover:text-black transition rounded-sm"
            >
              CV
            </button>
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="text-white hover:text-[#00ff9c] transition p-1"
              aria-label="Open Menu"
            >
              <Menu className="w-7 h-7" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div
          onClick={() => setMobileMenuOpen(false)}
          className="fixed inset-0 bg-black/70 z-[55] backdrop-blur-sm transition-opacity"
        />
      )}

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-y-0 right-0 z-[60] w-full sm:w-80 bg-[#0d1117] border-l border-[#00ff9c]/30 shadow-2xl transition-transform duration-500 ease-in-out md:hidden ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full p-8 relative overflow-y-auto">
          {/* Scanline pattern */}
          <div className="absolute inset-0 pointer-events-none opacity-10 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(0,255,156,0.06),rgba(0,179,255,0.02),rgba(0,255,156,0.06))] bg-[length:100%_4px,4px_100%]" />

          {/* Top Bar */}
          <div className="flex justify-between items-center mb-12 relative z-10">
            <span className="font-mono text-[10px] text-[#00ff9c] tracking-wider">
              SYSTEM_NAV_v3.2
            </span>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="text-white hover:text-[#00ff9c] transition-colors p-2 border border-[#1f2933]"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Links */}
          <nav className="flex flex-col gap-5 font-header text-lg uppercase tracking-tight relative z-10">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="group flex items-center justify-between text-slate-300 hover:text-[#00ff9c] transition-all"
              >
                <span>{link.label}</span>
                <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 text-[#00ff9c] transition-all" />
              </a>
            ))}
          </nav>

          {/* Bottom Telemetry */}
          <div className="mt-auto border-t border-[#1f2933] pt-6 relative z-10">
            <div className="font-mono text-[10px] text-[#9da7b3] mb-4 space-y-1">
              <p>&gt; STATUS: <span className="text-[#00ff9c]">ENCRYPTED_ONLINE</span></p>
              <p>&gt; PEC_REG: <span className="text-white">VERIFIED_COMP_ENGR</span></p>
              <p>&gt; CORE: <span className="text-[#00b3ff]">AI_VISION_FULLSTACK</span></p>
            </div>
            <div className="flex gap-3">
              <a
                href={personalData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-[#1f2933] text-white hover:bg-[#00ff9c] hover:text-black transition-all"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={personalData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-[#1f2933] text-white hover:bg-[#00ff9c] hover:text-black transition-all"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
