"use client";

import { personalData, experiences, projects, skillCategories } from "@/data/portfolioData";
import { 
  X, 
  Printer, 
  Download, 
  Mail, 
  MapPin, 
  Github, 
  Linkedin, 
  GraduationCap, 
  CheckCircle2, 
  ExternalLink 
} from "lucide-react";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl p-6 sm:p-10 text-slate-200 print:bg-white print:text-black print:p-0 print:border-none print:shadow-none print:max-h-none print:max-w-none"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Floating Actions (Hidden in Print) */}
        <div className="sticky top-0 z-20 flex items-center justify-between pb-4 mb-6 border-b border-slate-800 bg-slate-900/90 backdrop-blur-sm print:hidden">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
              Curriculum Vitae Preview
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs transition-colors shadow-sm"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save as PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content Container */}
        <div className="space-y-6 text-xs sm:text-sm print:text-xs">
          
          {/* Header */}
          <div className="border-b border-slate-800 pb-5">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white print:text-black">
              {personalData.name}
            </h1>
            <p className="text-emerald-400 font-semibold mt-1 print:text-emerald-800">
              {personalData.title}
            </p>
            <p className="text-xs text-slate-400 italic mt-1 print:text-slate-600">
              "{personalData.tagline}"
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 mt-3 print:text-slate-700">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                {personalData.location}
              </span>
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-emerald-400" />
                {personalData.email}
              </span>
              <span className="flex items-center gap-1">
                <Github className="w-3.5 h-3.5 text-emerald-400" />
                github.com/MuhammadNasarullah575
              </span>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 print:text-emerald-800 mb-2">
              Professional Summary
            </h2>
            <p className="text-slate-300 leading-relaxed print:text-slate-800 text-xs sm:text-sm">
              Computer Engineer (IST / KICSIT, CGPA 3.23) and PEC Registered Engineer with verified experience across AI/ML development, computer vision, quantitative market forecasting, web scraping, and full-stack web engineering. Proven ability to translate complex deep learning architectures into scalable, high-performance applications and prototype embedded IoT systems.
            </p>
          </div>

          {/* Experience */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 print:text-emerald-800 mb-3">
              Professional Experience
            </h2>
            <div className="space-y-4">
              {experiences.map((exp) => (
                <div key={exp.id} className="border-l-2 border-emerald-500/50 pl-3.5 py-0.5">
                  <div className="flex justify-between items-start flex-wrap">
                    <h3 className="font-bold text-white print:text-black text-sm">
                      {exp.role} — <span className="text-emerald-400 print:text-emerald-800">{exp.company}</span>
                    </h3>
                    <span className="text-xs font-mono text-slate-400 print:text-slate-600">
                      {exp.period}
                    </span>
                  </div>
                  <ul className="mt-1.5 space-y-1 text-slate-300 print:text-slate-800 text-xs">
                    {exp.responsibilities.slice(0, 4).map((r, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-1.5">
                        <span className="text-emerald-400 font-bold">•</span>
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Featured Projects */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 print:text-emerald-800 mb-3">
              Selected Projects
            </h2>
            <div className="space-y-3">
              {projects.slice(0, 4).map((p) => (
                <div key={p.id} className="p-3 rounded-lg bg-slate-950/60 border border-slate-800 print:border-slate-300 print:bg-transparent">
                  <div className="flex justify-between items-center mb-1">
                    <h3 className="font-bold text-white print:text-black text-xs sm:text-sm">
                      {p.title}
                    </h3>
                    <span className="text-[10px] font-mono text-emerald-400 print:text-emerald-800">
                      {p.tag}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 print:text-slate-800 mb-1.5">
                    {p.summary}
                  </p>
                  <div className="text-[10px] font-mono text-slate-400 print:text-slate-600">
                    <strong>Tech:</strong> {p.technologies.join(", ")}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 print:text-emerald-800 mb-2">
              Technical Core Competencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div className="bg-slate-950/50 p-2.5 rounded border border-slate-800 print:border-slate-300">
                <span className="font-bold text-white print:text-black block mb-0.5">AI, ML & Computer Vision:</span>
                <span className="text-slate-300 print:text-slate-700">YOLOv8, OpenCV, Scikit-learn, TensorFlow, NLP, Sentence Transformers, Video Processing</span>
              </div>
              <div className="bg-slate-950/50 p-2.5 rounded border border-slate-800 print:border-slate-300">
                <span className="font-bold text-white print:text-black block mb-0.5">Web & Software Development:</span>
                <span className="text-slate-300 print:text-slate-700">Next.js, React, JavaScript (ES6+), TypeScript, Tailwind CSS, Node.js, PostgreSQL, MongoDB, REST APIs</span>
              </div>
              <div className="bg-slate-950/50 p-2.5 rounded border border-slate-800 print:border-slate-300">
                <span className="font-bold text-white print:text-black block mb-0.5">Data Automation & Scraping:</span>
                <span className="text-slate-300 print:text-slate-700">Python, Playwright, Pandas, NumPy, Streamlit, Financial APIs, FINRA short interest</span>
              </div>
              <div className="bg-slate-950/50 p-2.5 rounded border border-slate-800 print:border-slate-300">
                <span className="font-bold text-white print:text-black block mb-0.5">Embedded Systems & Hardware:</span>
                <span className="text-slate-300 print:text-slate-700">Arduino Uno, Sensors, UART Communication, C/C++, OLED/LCD Displays, Electronics</span>
              </div>
            </div>
          </div>

          {/* Education & Honors */}
          <div className="pt-3 border-t border-slate-800">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 print:text-emerald-800 mb-2">
              Education & Honors
            </h2>
            <div className="flex justify-between items-start text-xs">
              <div>
                <span className="font-bold text-white print:text-black">
                  Bachelor of Science in Computer Engineering
                </span>
                <span className="block text-slate-400 print:text-slate-600">
                  Institute of Space Technology (IST), KICSIT • First Division throughout
                </span>
                <span className="block text-emerald-400 print:text-emerald-800 font-semibold text-[11px] mt-0.5">
                  PEC Registered Engineer • Hafiz-e-Quran
                </span>
              </div>
              <div className="font-mono font-bold text-emerald-300 print:text-emerald-800">
                CGPA 3.23 / 4.00
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

