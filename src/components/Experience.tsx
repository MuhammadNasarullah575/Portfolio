"use client";

import { experiences } from "@/data/portfolioData";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="max-w-7xl mx-auto px-6 py-24 border-b border-[#1f2933]">
      <div className="mb-14">
        <p className="font-mono text-[#00ff9c] text-xs tracking-[0.5em] mb-4 uppercase">
          04. PROFESSIONAL_TRACK
        </p>
        <h2 className="font-header text-3xl sm:text-4xl font-bold text-white text-left">
          Work Experience
        </h2>
        <p className="text-[#9da7b3] font-mono text-xs sm:text-sm mt-2">
          Verified industry, research, and technical fellowship engagements in AI and Computer Engineering.
        </p>
      </div>

      <div className="space-y-6">
        {experiences.map((exp) => (
          <div
            key={exp.id}
            className={`p-6 sm:p-8 rounded-sm border transition-all duration-300 relative ${
              exp.isCurrent
                ? "bg-[#0d1117] border-[#00ff9c]/50 shadow-[0_0_30px_rgba(0,255,156,0.12)]"
                : "bg-[#0d1117] border-[#1f2933] hover:border-[#00ff9c]/40"
            }`}
          >
            {/* Top Bar: Role & Status */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 border-b border-[#1f2933] pb-4">
              <div>
                <div className="flex items-center gap-3 flex-wrap">
                  <h3 className="font-header text-lg sm:text-xl font-bold text-white tracking-tight">
                    {exp.role}
                  </h3>
                  {exp.isCurrent && (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-[#00ff9c]/10 text-[#00ff9c] border border-[#00ff9c]/30 text-[10px] font-mono font-bold tracking-widest uppercase">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00ff9c] animate-ping" />
                      ACTIVE_NOW
                    </span>
                  )}
                </div>
                <p className="font-mono text-xs sm:text-sm text-[#00b3ff] mt-1 font-semibold">
                  {exp.company}
                </p>
              </div>

              <div className="font-mono text-xs text-[#9da7b3] flex items-center gap-4">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#00ff9c]" />
                  {exp.period}
                </span>
                {exp.location && (
                  <span className="hidden sm:flex items-center gap-1 text-[#555]">
                    <MapPin className="w-3.5 h-3.5 text-[#555]" />
                    {exp.location}
                  </span>
                )}
              </div>
            </div>

            {/* Description */}
            <p className="text-xs sm:text-sm text-[#9da7b3] leading-relaxed mb-6 font-sans">
              {exp.description}
            </p>

            {/* Key Responsibilities */}
            <div className="mb-6">
              <span className="font-mono text-xs text-white uppercase tracking-wider block mb-3 font-bold">
                CORE_RESPONSIBILITIES:
              </span>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5 text-xs text-slate-300">
                {exp.responsibilities.map((r, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2 bg-[#050505] p-2.5 border border-[#1f2933] rounded-sm"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#00ff9c] shrink-0 mt-0.5" />
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack */}
            <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-[#1f2933]">
              <span className="font-mono text-[10px] text-[#555] uppercase mr-1">
                STACK:
              </span>
              {exp.technologies.map((t) => (
                <span
                  key={t}
                  className="font-mono text-[10px] px-2 py-0.5 bg-[#050505] border border-[#1f2933] text-[#00ff9c]"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
