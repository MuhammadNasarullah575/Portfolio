"use client";

import { useState } from "react";
import { hardwareProjects, HardwareProject } from "@/data/portfolioData";
import { 
  Cpu, 
  Maximize2, 
  X, 
  Sparkles, 
  CheckCircle2, 
  Layers, 
  BookOpen, 
  Award 
} from "lucide-react";

export default function HardwareLab() {
  const [activeItem, setActiveItem] = useState<HardwareProject | null>(null);

  return (
    <section id="hardware-lab" className="py-24 relative border-t border-slate-200/80 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-14 gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/80 text-emerald-700 dark:text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
              <Cpu className="w-3.5 h-3.5" />
              <span>Embedded Hardware & Robotics</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Tech Fellow Hardware Lab
            </h2>
            
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-2.5 max-w-2xl leading-relaxed">
              Real-world physical computing systems, sensors, and microcontrollers built and demonstrated under the 
              <strong className="text-slate-900 dark:text-white font-semibold"> Federal Directorate of Education (FDE)</strong> & 
              <strong className="text-emerald-600 dark:text-emerald-400 font-semibold"> LearnOBots</strong> Disruptive Education initiative.
            </p>
          </div>

          <div className="flex items-center gap-3 text-xs font-semibold">
            <span className="px-3.5 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 shadow-sm">
              {hardwareProjects.length} Physical Prototypes
            </span>
            <span className="px-3.5 py-2 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/60 text-emerald-700 dark:text-emerald-400 shadow-sm">
              30+ Students Trained
            </span>
          </div>
        </div>

        {/* Real Hardware Prototype Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {hardwareProjects.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveItem(item)}
              className="group bg-white dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 hover:border-emerald-300 dark:hover:border-emerald-500/50 rounded-3xl overflow-hidden transition-all duration-300 flex flex-col justify-between cursor-pointer hover:-translate-y-1 hover:shadow-xl shadow-sm"
            >
              {/* Actual Hardware Photo Container */}
              <div className="relative h-64 bg-slate-950 overflow-hidden flex items-center justify-center border-b border-slate-200 dark:border-slate-800">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                />

                {/* Category Pill */}
                <div className="absolute top-3.5 left-3.5 bg-white/95 dark:bg-slate-900/90 text-slate-900 dark:text-white font-semibold text-[10px] px-3 py-1 rounded-full shadow-md backdrop-blur-md border border-slate-200/60 dark:border-slate-700">
                  {item.category.split("&")[0].trim()}
                </div>

                {/* Inspect Pill */}
                <div className="absolute top-3.5 right-3.5 p-2 rounded-xl bg-black/60 text-white backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 text-xs">
                  <Maximize2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Enlarge</span>
                </div>

                {/* Device Type Pill */}
                <div className="absolute bottom-3 left-3.5 right-3.5 flex justify-between items-center text-[10px] font-medium text-white bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-xl border border-slate-700/60">
                  <span className="text-emerald-400 font-semibold flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    Physical Working System
                  </span>
                  <span className="text-slate-300">Arduino Uno</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors mb-2">
                    {item.title}
                  </h3>
                  
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3 mb-5">
                    {item.description}
                  </p>
                </div>

                <div>
                  {/* Components Used */}
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-100 dark:border-slate-800 mb-4">
                    {item.components.slice(0, 3).map((comp) => (
                      <span
                        key={comp}
                        className="text-[10px] font-semibold px-2.5 py-0.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                      >
                        {comp}
                      </span>
                    ))}
                    {item.components.length > 3 && (
                      <span className="text-[10px] font-semibold px-2 py-0.5 text-slate-400">
                        +{item.components.length - 3} more
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                    <span>Inspect System Specs</span>
                    <span className="text-slate-400 text-[11px] font-normal">Click to Open</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox / Zoom Modal */}
        {activeItem && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-in fade-in duration-200"
            onClick={() => setActiveItem(null)}
          >
            <div
              className="relative w-full max-w-3xl max-h-[92vh] overflow-y-auto bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveItem(null)}
                className="absolute top-5 right-5 p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white transition cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Large Image Showcase */}
              <div className="w-full h-80 sm:h-96 rounded-2xl bg-black overflow-hidden flex items-center justify-center p-3 relative shadow-inner">
                <img
                  src={activeItem.image}
                  alt={activeItem.title}
                  className="w-full h-full object-contain"
                />
                <div className="absolute top-4 left-4 bg-white/95 dark:bg-slate-900/90 text-slate-900 dark:text-white font-bold text-xs px-3 py-1 rounded-full shadow-md">
                  {activeItem.category}
                </div>
              </div>

              {/* Title & Description */}
              <div>
                <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white mb-2">
                  {activeItem.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                  {activeItem.description}
                </p>

                {/* Educational Impact Box */}
                <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 mb-5">
                  <span className="text-xs font-bold text-emerald-800 dark:text-emerald-300 block mb-1">
                    STEM Fellowship & Mentorship Impact:
                  </span>
                  <p className="text-xs sm:text-sm text-emerald-950 dark:text-emerald-200 leading-relaxed">
                    {activeItem.impact}
                  </p>
                </div>

                {/* Component List */}
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-2">
                    Hardware Components & Microcontrollers:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {activeItem.components.map((c) => (
                      <span
                        key={c}
                        className="text-xs font-semibold px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700"
                      >
                        ✓ {c}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex justify-between items-center text-xs font-semibold text-slate-500">
                <span>Tech Fellow • FDE Disruptive Education</span>
                <button
                  onClick={() => setActiveItem(null)}
                  className="px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
