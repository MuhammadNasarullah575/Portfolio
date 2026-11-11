"use client";

import { personalData } from "@/data/portfolioData";
import { 
  GraduationCap, 
  Award, 
  Calendar, 
  CheckCircle2, 
  ShieldCheck, 
  BookOpen, 
  FileCheck 
} from "lucide-react";

export default function Education() {
  const { education } = personalData;

  const relevantCourses = [
    "Artificial Intelligence & Machine Learning",
    "Computer Vision & Pattern Recognition",
    "Data Structures & Algorithms",
    "Microprocessors & Microcontrollers",
    "Digital Logic & Circuit Design",
    "Database Management Systems (SQL)",
    "Operating Systems & Architecture",
    "Object-Oriented Programming (OOP)",
    "Signals & Linear Systems",
    "Computer Communication & Networks"
  ];

  return (
    <section id="education" className="py-24 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono uppercase tracking-wider mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            Academic Foundation
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education & Certifications
          </h2>
          <p className="text-slate-400 max-w-xl text-sm sm:text-base mt-2">
            Rigorous engineering background backed by accredited university education and recognized achievements.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Degree Card */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-7 sm:p-8 rounded-2xl bg-slate-900/60 border border-emerald-500/30 shadow-xl shadow-emerald-500/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-bl-full pointer-events-none" />

              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
                    <GraduationCap className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      {education.degree}
                    </h3>
                    <p className="text-sm font-medium text-emerald-400">
                      {education.institution}
                    </p>
                  </div>
                </div>

                <div className="text-right shrink-0">
                  <span className="inline-block px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/30 font-mono font-bold text-emerald-300 text-sm">
                    First Division
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                Comprehensive 4-year degree synthesizing computer hardware architectures, embedded electronic systems, digital signal processing, algorithm design, and applied machine learning models.
              </p>

              {/* Distinctions Checklist */}
              <div className="mb-6 space-y-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                  Key Honors & Credentials:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                  {education.distinctions.map((dist, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2 bg-slate-950/50 p-2.5 rounded-lg border border-slate-800">
                      <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{dist}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Relevant Coursework */}
              <div className="pt-5 border-t border-slate-800/80">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 font-semibold">
                  Core Engineering Coursework:
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {relevantCourses.map((c) => (
                    <span
                      key={c}
                      className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-slate-950 text-slate-300 border border-slate-800"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Academic Background Breakdown */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 space-y-4">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Award className="w-4 h-4 text-emerald-400" />
                Academic Progression
              </h3>

              <div className="space-y-3">
                {education.academics.map((item, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 flex items-center justify-between">
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-white">
                        {item.label}
                      </h4>
                      <span className="text-[11px] text-emerald-400 font-medium">
                        {item.note}
                      </span>
                    </div>
                    <div className="text-right font-mono font-bold text-xs sm:text-sm text-slate-200">
                      {item.score}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Special Honor Card */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-emerald-950/30 to-slate-900/60 border border-emerald-500/20 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center shrink-0">
                <BookOpen className="w-6 h-6 text-emerald-400" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">Hafiz-e-Quran Distinction</h4>
                <p className="text-xs text-slate-400 mt-0.5">
                  Demonstrating exemplary retention, dedication, and systematic learning capacity.
                </p>
              </div>
            </div>

            {/* Professional Accreditation Card */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-cyan-950/30 to-slate-900/60 border border-cyan-500/20 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center shrink-0">
                <FileCheck className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">PEC Registered Engineer</h4>
                <p className="text-xs text-slate-400 mt-0.5">
                  Pakistan Engineering Council certified professional in Computer Engineering.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

