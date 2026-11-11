"use client";

import { useState } from "react";
import { hardwareProjects, HardwareProject } from "@/data/portfolioData";
import { 
  Cpu, 
  Maximize2, 
  X, 
  Sparkles, 
  CheckCircle2, 
  Award, 
  Layers, 
  ExternalLink 
} from "lucide-react";

export default function HardwareLab() {
  const [activeItem, setActiveItem] = useState<HardwareProject | null>(null);

  return (
    <section id="hardware-lab" className="max-w-7xl mx-auto px-6 py-24 border-b border-[#1f2933]">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-14 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#00ff9c]/10 border border-[#00ff9c]/30 font-mono text-[11px] text-[#00ff9c] font-bold uppercase tracking-widest mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>06. EMBEDDED_HARDWARE_LAB</span>
          </div>

          <h2 className="font-header text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Tech Fellow Robotics & IoT Prototypes
          </h2>
          
          <p className="text-[#9da7b3] font-mono text-xs sm:text-sm mt-2 max-w-2xl leading-relaxed">
            Physical computing systems, sensor telemetry, and embedded electronics engineered and taught under the 
            <strong className="text-white"> Federal Directorate of Education (FDE)</strong> & 
            <strong className="text-[#00ff9c]"> LearnOBots</strong> Disruptive Education Fellowship.
          </p>
        </div>

        <div className="flex items-center gap-3 font-mono text-xs">
          <span className="px-3 py-1.5 bg-[#0d1117] border border-[#1f2933] text-[#9da7b3] rounded">
            6 Physical Prototypes
          </span>
          <span className="px-3 py-1.5 bg-[#00ff9c]/10 border border-[#00ff9c]/40 text-[#00ff9c] font-bold rounded">
            100+ Students Mentored
          </span>
        </div>
      </div>

      {/* Hardware Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {hardwareProjects.map((item) => (
          <div
            key={item.id}
            onClick={() => setActiveItem(item)}
            className="group bg-[#0d1117] border border-[#1f2933] hover:border-[#00ff9c]/60 rounded-xl overflow-hidden transition-all duration-300 flex flex-col justify-between cursor-pointer hover:-translate-y-1.5 hover:shadow-[0_0_30px_rgba(0,255,156,0.18)]"
          >
            {/* Real Project Photo Container */}
            <div className="relative h-60 bg-black/60 overflow-hidden flex items-center justify-center border-b border-[#1f2933]">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-500"
              />

              {/* Category Pill */}
              <div className="absolute top-3 left-3 bg-[#00ff9c] text-black font-mono text-[9px] font-bold px-2.5 py-1 uppercase tracking-wider rounded shadow-md">
                {item.category.split("&")[0].trim()}
              </div>

              {/* Zoom Action Icon */}
              <div className="absolute top-3 right-3 p-1.5 rounded bg-black/70 border border-[#1f2933] text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-3.5 h-3.5 text-[#00ff9c]" />
              </div>

              {/* Status Bar */}
              <div className="absolute bottom-2 left-3 right-3 flex justify-between items-center text-[9px] font-mono text-slate-300 bg-black/80 backdrop-blur-sm px-2.5 py-1 rounded border border-[#1f2933]">
                <span className="text-[#00ff9c] flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00ff9c] animate-pulse" />
                  PHYSICAL_PROTOTYPE
                </span>
                <span className="text-slate-400">ARDUINO_UNO</span>
              </div>
            </div>

            {/* Content Body */}
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-header text-lg font-bold text-white group-hover:text-[#00ff9c] transition-colors mb-2">
                  {item.title}
                </h3>
                
                <p className="text-xs text-[#9da7b3] leading-relaxed line-clamp-3 mb-4 font-sans">
                  {item.description}
                </p>
              </div>

              <div>
                {/* Hardware Component Pills */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#1f2933] mb-4">
                  {item.components.map((comp) => (
                    <span
                      key={comp}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#050505] text-[#9da7b3] border border-[#1f2933]"
                    >
                      {comp}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between font-mono text-[11px] text-[#00ff9c] pt-2">
                  <span className="font-bold flex items-center gap-1">
                    INSPECT_SPECS
                  </span>
                  <span className="text-slate-400 text-[10px]">
                    Click to Enlarge
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox / High-Res Hardware Modal */}
      {activeItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setActiveItem(null)}
        >
          <div
            className="relative w-full max-w-3xl max-h-[92vh] overflow-y-auto bg-[#0d1117] border border-[#00ff9c]/50 rounded-xl p-6 sm:p-8 shadow-[0_0_50px_rgba(0,255,156,0.2)] space-y-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveItem(null)}
              className="absolute top-4 right-4 p-2 bg-[#1f2933] text-[#9da7b3] hover:text-[#00ff9c] rounded transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image Display */}
            <div className="w-full h-80 sm:h-96 rounded-lg bg-black/80 border border-[#1f2933] overflow-hidden flex items-center justify-center relative p-3">
              <img
                src={activeItem.image}
                alt={activeItem.title}
                className="w-full h-full object-contain"
              />
              <div className="absolute top-3 left-3 bg-[#00ff9c] text-black font-mono font-bold text-xs px-2.5 py-1 rounded">
                {activeItem.category}
              </div>
            </div>

            {/* Modal Info */}
            <div>
              <h3 className="font-header text-2xl font-bold text-white mb-2">
                {activeItem.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#9da7b3] leading-relaxed font-sans mb-4">
                {activeItem.description}
              </p>

              {/* STEM Fellowship Impact Box */}
              <div className="p-4 rounded-lg bg-[#00ff9c]/5 border border-[#00ff9c]/30 mb-5">
                <span className="font-mono text-xs text-[#00ff9c] font-bold block mb-1 uppercase tracking-wider">
                  STEM Mentorship & Pedagogical Impact:
                </span>
                <p className="text-xs text-slate-300">
                  {activeItem.impact}
                </p>
              </div>

              {/* Components Grid */}
              <div>
                <span className="font-mono text-xs text-white uppercase font-bold block mb-2">
                  Embedded Hardware Components:
                </span>
                <div className="flex flex-wrap gap-2 font-mono text-xs">
                  {activeItem.components.map((c) => (
                    <span
                      key={c}
                      className="px-2.5 py-1 rounded bg-[#050505] border border-[#1f2933] text-[#00ff9c]"
                    >
                      ✓ {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="pt-4 border-t border-[#1f2933] flex justify-between items-center font-mono text-xs">
              <span className="text-[#555]">
                TECH_FELLOW // FDE_DISRUPTIVE_EDUCATION
              </span>
              <button
                onClick={() => setActiveItem(null)}
                className="px-4 py-1.5 border border-[#1f2933] text-slate-300 hover:text-white rounded"
              >
                CLOSE_VIEW
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}

