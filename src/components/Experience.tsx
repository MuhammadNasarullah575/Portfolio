"use client";

import { experiences } from "@/data/portfolioData";
import { Briefcase, Calendar, MapPin, CheckCircle2, Sparkles } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative border-t border-slate-200/80 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800/80 text-indigo-600 dark:text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career Milestones</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Professional Experience
          </h2>

          <p className="text-slate-600 dark:text-slate-400 max-w-2xl text-sm sm:text-base mt-3 leading-relaxed">
            Chronological engineering track record across AI development, quantitative forecasting, and STEM education.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className={`p-7 sm:p-8 rounded-3xl border transition-all duration-300 relative ${
                exp.isCurrent
                  ? "bg-white dark:bg-slate-900/80 border-indigo-200 dark:border-indigo-800 shadow-md shadow-indigo-500/5 hover:border-indigo-400 dark:hover:border-indigo-600"
                  : "bg-white dark:bg-slate-900/50 border-slate-200/80 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 shadow-sm"
              }`}
            >
              {/* Header: Role & Status */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 pb-4 border-b border-slate-100 dark:border-slate-800">
                <div>
                  <div className="flex items-center gap-3 flex-wrap">
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                      {exp.role}
                    </h3>
                    {exp.isCurrent && (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800 text-xs font-bold uppercase tracking-wider">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                        Current Role
                      </span>
                    )}
                  </div>
                  <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 mt-1">
                    {exp.company}
                  </p>
                </div>

                <div className="flex items-center gap-4 text-xs font-medium text-slate-500 dark:text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-indigo-500" />
                    {exp.period}
                  </span>
                  {exp.location && (
                    <span className="hidden sm:flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      {exp.location}
                    </span>
                  )}
                </div>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                {exp.description}
              </p>

              {/* Responsibilities */}
              <div className="mb-6 space-y-2.5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Key Responsibilities & Deliverables:
                </h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5 text-xs text-slate-700 dark:text-slate-300">
                  {exp.responsibilities.map((r, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-950/50 border border-slate-200/60 dark:border-slate-800"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-slate-100 dark:border-slate-800">
                <span className="text-xs font-semibold text-slate-400 mr-1">
                  Technologies:
                </span>
                {exp.technologies.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-medium px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700"
                  >
                    {t}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
