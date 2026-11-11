"use client";

import { experiences } from "@/data/portfolioData";
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  ChevronRight, 
  Sparkles, 
  ExternalLink 
} from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative border-t border-slate-900">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono uppercase tracking-wider mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            Career Path
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Professional Experience
          </h2>
          <p className="text-slate-400 max-w-xl text-sm sm:text-base mt-2">
            Chronological engineering track record across AI development, market prediction, and STEM education.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l border-slate-800 ml-4 md:ml-32 space-y-12">
          {experiences.map((exp, index) => {
            const isLimeox = exp.id === "limeox";
            const isLearnobots = exp.id === "learnobots";
            const isAitec = exp.id === "aitec";

            return (
              <div key={exp.id} className="relative pl-6 sm:pl-8 group">
                
                {/* Timeline Dot with Pulse if Current */}
                <div
                  className={`absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-2 transition-transform duration-300 group-hover:scale-125 ${
                    exp.isCurrent
                      ? "bg-emerald-500 border-slate-950 ring-4 ring-emerald-500/20"
                      : "bg-slate-800 border-slate-600 group-hover:border-emerald-400 group-hover:bg-emerald-500"
                  }`}
                />

                {/* Left Period Label on Desktop */}
                <div className="hidden md:block absolute -left-36 top-1 text-right w-28">
                  <span className="text-xs font-mono font-medium text-slate-400">
                    {exp.period.split("–")[0].trim()}
                  </span>
                  <span className="block text-[11px] text-slate-500 font-mono">
                    {exp.period.split("–")[1]?.trim() || ""}
                  </span>
                </div>

                {/* Experience Card */}
                <div
                  className={`p-6 sm:p-7 rounded-2xl transition-all duration-200 border ${
                    exp.isCurrent
                      ? "bg-slate-900/80 border-emerald-500/30 shadow-lg shadow-emerald-500/5 hover:border-emerald-500/50"
                      : "bg-slate-900/40 border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/60"
                  }`}
                >
                  {/* Top Bar: Role & Company */}
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-lg sm:text-xl font-bold text-white">
                          {exp.role}
                        </h3>
                        {exp.isCurrent && (
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 uppercase tracking-wide">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                            Current Experience
                          </span>
                        )}
                      </div>
                      <p className="text-sm font-medium text-emerald-400/90 mt-0.5">
                        {exp.company}
                      </p>
                    </div>

                    <div className="flex items-center gap-3 text-xs text-slate-400 font-mono">
                      <span className="flex items-center gap-1 md:hidden">
                        <Calendar className="w-3.5 h-3.5 text-slate-500" />
                        {exp.period}
                      </span>
                      {exp.location && (
                        <span className="flex items-center gap-1 text-slate-500">
                          <MapPin className="w-3 h-3 text-slate-500" />
                          {exp.location}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Summary Description */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  {/* Key Responsibilities */}
                  <div className="mb-5 space-y-2">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                      Key Responsibilities & Contributions:
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-slate-300">
                      {exp.responsibilities.map((resp, rIdx) => (
                        <li key={rIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies Used */}
                  <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-1.5">
                    <span className="text-[11px] text-slate-500 font-mono mr-1">Tech:</span>
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-slate-950/80 text-slate-300 border border-slate-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

