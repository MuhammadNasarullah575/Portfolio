"use client";

import { useState } from "react";
import { skillCategories } from "@/data/portfolioData";
import { 
  Brain, 
  Layout, 
  Database, 
  Cpu, 
  Wrench, 
  CheckCircle2, 
  Sparkles, 
  Info 
} from "lucide-react";

export default function Skills() {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case "Brain": return <Brain className="w-5 h-5 text-emerald-400" />;
      case "Layout": return <Layout className="w-5 h-5 text-teal-400" />;
      case "Database": return <Database className="w-5 h-5 text-cyan-400" />;
      case "Cpu": return <Cpu className="w-5 h-5 text-blue-400" />;
      default: return <Wrench className="w-5 h-5 text-purple-400" />;
    }
  };

  return (
    <section id="skills" className="py-24 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono uppercase tracking-wider mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            Technical Stack
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Technical Skills & Competencies
          </h2>
          <p className="text-slate-400 max-w-xl text-sm sm:text-base mt-2">
            Structured skill breakdown across deep learning, web development, data scraping, and hardware systems.
          </p>

          {/* Transparent Note */}
          <div className="mt-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-900/60 border border-slate-800 text-slate-400 text-xs">
            <Info className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span>Proficiencies reflect actual hands-on engineering and independent implementation experience.</span>
          </div>
        </div>

        {/* Skill Category Selector Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-10">
          {skillCategories.map((cat, idx) => (
            <button
              key={cat.title}
              onClick={() => setActiveCategoryIndex(idx)}
              className={`p-4 rounded-xl border text-left transition-all duration-200 flex flex-col justify-between ${
                activeCategoryIndex === idx
                  ? "bg-slate-900 border-emerald-500/40 shadow-lg shadow-emerald-500/5 ring-1 ring-emerald-500/30"
                  : "bg-slate-900/40 border-slate-800 hover:border-slate-700 hover:bg-slate-900/70"
              }`}
            >
              <div className="mb-2">
                {getCategoryIcon(cat.icon)}
              </div>
              <div>
                <h3 className={`text-xs sm:text-sm font-bold ${
                  activeCategoryIndex === idx ? "text-emerald-300" : "text-slate-300"
                }`}>
                  {cat.title}
                </h3>
                <span className="text-[11px] text-slate-500 font-mono">
                  {cat.skills.length} competencies
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* Active Category Skills Detailed View */}
        <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/50 border border-slate-800 backdrop-blur-sm">
          <div className="flex items-center justify-between border-b border-slate-800/80 pb-4 mb-6">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                {skillCategories[activeCategoryIndex].title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                {skillCategories[activeCategoryIndex].description}
              </p>
            </div>
            <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded border border-emerald-500/20 hidden sm:inline-block">
              {skillCategories[activeCategoryIndex].skills.filter(s => s.isKey).length} Core Proficiencies
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5">
            {skillCategories[activeCategoryIndex].skills.map((skill) => (
              <div key={skill.name} className="space-y-1.5">
                <div className="flex items-center justify-between text-xs sm:text-sm">
                  <span className="font-medium text-slate-200 flex items-center gap-1.5">
                    {skill.name}
                    {skill.isKey && (
                      <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-semibold">
                        Core
                      </span>
                    )}
                  </span>
                  <span className="font-mono text-xs text-slate-400">
                    {skill.level}%
                  </span>
                </div>
                {/* Progress Bar */}
                <div className="w-full h-2 rounded-full bg-slate-950 overflow-hidden border border-slate-800/80">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-teal-400 transition-all duration-700 ease-out"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Quick Skill Tags */}
          <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-wrap items-center gap-2">
            <span className="text-xs text-slate-500 font-mono mr-2">Quick Tags:</span>
            {skillCategories[activeCategoryIndex].skills.map((s) => (
              <span
                key={s.name}
                className="text-xs font-mono px-2.5 py-1 rounded-md bg-slate-950 text-slate-300 border border-slate-800"
              >
                #{s.name.replace(/\s+/g, '')}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

