"use client";

import { useState } from "react";
import { projects, Project } from "@/data/portfolioData";
import { 
  FolderGit2, 
  ExternalLink, 
  Github, 
  ArrowRight, 
  ArrowUpRight, 
  X, 
  CheckCircle2, 
  Activity, 
  Eye, 
  Cpu, 
  Flame, 
  TrendingUp, 
  ShoppingBag, 
  FileText 
} from "lucide-react";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("ALL");

  const categories = ["ALL", "AI/ML", "Web Development", "Data Science", "Robotics & IoT"];

  const filteredProjects = activeCategory === "ALL"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  // High-impact visual thumbnail renderers for each project
  const renderVisualThumbnail = (project: Project) => {
    // If the project has an actual user-provided picture, render high-res image showcase
    if (project.image) {
      return (
        <div className="w-full h-56 bg-black relative flex items-center justify-center overflow-hidden group">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d1117] via-transparent to-transparent opacity-80" />
          
          {/* Subtle Cyber scanline overlay */}
          <div className="absolute inset-0 pointer-events-none opacity-10 bg-[linear-gradient(#00ff9c_1px,transparent_1px)] bg-[size:100%_4px]" />
          
          <div className="absolute bottom-2 left-3 right-3 flex justify-between items-center text-[10px] font-mono text-white bg-black/80 backdrop-blur-md px-2.5 py-1 rounded border border-[#1f2933]">
            <span className="text-[#00ff9c] font-bold flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00ff9c] animate-pulse" />
              LIVE_SYSTEM_ASSET
            </span>
            <span className="text-slate-400">HIGH_RES_PREVIEW</span>
          </div>
        </div>
      );
    }

    switch (project.id) {
      case "fire-detection":
        return (
          <div className="w-full h-56 bg-[#090d16] relative flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform duration-500">
            {/* Visual HUD Simulation */}
            <div className="absolute inset-0 bg-[radial-gradient(#ff4d00_1px,transparent_1px)] bg-[size:16px_16px] opacity-15" />
            <div className="w-40 h-32 border-2 border-red-500 rounded relative flex flex-col justify-between p-2.5 shadow-[0_0_20px_rgba(239,68,68,0.4)] bg-red-500/5">
              <span className="font-mono text-[9px] bg-red-600 text-white px-1.5 py-0.5 rounded font-bold w-fit">
                YOLOv8: FLAME [99.2%]
              </span>
              <div className="space-y-1 font-mono text-[8px] text-red-300">
                <p>&gt; Kalman Track: Active</p>
                <p>&gt; SMTP Alert: Armed</p>
              </div>
              <div className="flex justify-between items-end border-t border-red-500/40 pt-1">
                <span className="font-mono text-[8px] text-red-400">FPS: 34.2</span>
                <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
              </div>
            </div>
            <div className="absolute bottom-3 left-4 font-mono text-[10px] text-[#9da7b3] flex items-center gap-1.5">
              <Flame className="w-3.5 h-3.5 text-orange-400" />
              <span>Real-Time CCTV Stream Inference</span>
            </div>
          </div>
        );

      case "short-squeeze":
        return (
          <div className="w-full h-56 bg-[#090d16] relative flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform duration-500">
            <div className="absolute inset-0 bg-[radial-gradient(#00ff9c_1px,transparent_1px)] bg-[size:16px_16px] opacity-15" />
            {/* FinTech Chart Bars */}
            <div className="flex items-end gap-2.5 h-28">
              <div className="w-4 h-12 bg-slate-700 rounded-t" />
              <div className="w-4 h-16 bg-slate-700 rounded-t" />
              <div className="w-4 h-10 bg-slate-700 rounded-t" />
              <div className="w-4 h-24 bg-[#00ff9c] rounded-t shadow-[0_0_15px_rgba(0,255,156,0.6)] animate-pulse" />
              <div className="w-4 h-18 bg-emerald-500 rounded-t" />
              <div className="w-4 h-14 bg-cyan-500 rounded-t" />
            </div>
            <div className="absolute top-4 right-4 font-mono text-[10px] text-[#00ff9c] bg-black/70 px-2 py-0.5 border border-[#00ff9c]/40 rounded">
              5-DAY_SQUEEZE_PROB: 88.5%
            </div>
            <div className="absolute bottom-3 left-4 font-mono text-[10px] text-[#9da7b3] flex items-center gap-1.5">
              <TrendingUp className="w-3.5 h-3.5 text-[#00ff9c]" />
              <span>FINRA Short Interest Analytics</span>
            </div>
          </div>
        );

      case "news-stock-prediction":
        return (
          <div className="w-full h-56 bg-[#090d16] relative flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform duration-500">
            <div className="absolute inset-0 bg-[radial-gradient(#a855f7_1px,transparent_1px)] bg-[size:16px_16px] opacity-15" />
            <div className="w-64 p-3.5 rounded bg-[#0d1117] border border-purple-500/40 font-mono text-[9px] space-y-2 shadow-lg">
              <div className="flex justify-between text-purple-400">
                <span>[DistilBART_NLP]</span>
                <span>SENTIMENT: BULLISH</span>
              </div>
              <div className="p-1.5 bg-black/60 rounded text-slate-300">
                "Fed cuts rates by 50 bps..."
              </div>
              <div className="flex justify-between text-slate-400 text-[8px]">
                <span className="text-[#00ff9c]">REGIME: SPIKE</span>
                <span>CONFIDENCE: 94%</span>
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div className="w-full h-56 bg-[#090d16] relative flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform duration-500">
            <div className="w-64 p-3.5 rounded bg-[#0d1117] border border-cyan-500/40 font-mono text-[9px] space-y-2 shadow-lg">
              <div className="flex justify-between text-cyan-400">
                <span>[MiniLM-L6-v2]</span>
                <span>3,460 LABELED</span>
              </div>
              <div className="text-slate-300 text-[8px]">
                Dense Vector Embedding (Dim: 384)
              </div>
              <div className="flex gap-1.5 text-[8px]">
                <span className="px-1.5 py-0.5 bg-[#1f2933] text-white">BiLSTM</span>
                <span className="px-1.5 py-0.5 bg-[#00ff9c]/20 text-[#00ff9c]">SVC</span>
                <span className="px-1.5 py-0.5 bg-[#1f2933] text-white">PCA</span>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <section id="projects" className="max-w-7xl mx-auto px-6 py-24 border-b border-[#1f2933]">
      
      {/* Section Header with Category Filters */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-14 gap-6">
        <div>
          <p className="font-mono text-[#00ff9c] text-xs tracking-[0.5em] mb-2 uppercase">
            03. PROJECTS_SHOWCASE
          </p>
          <h3 className="font-header text-3xl sm:text-4xl font-bold text-white">
            Featured Engineering Systems
          </h3>
        </div>

        {/* Filter Buttons */}
        <div className="flex gap-2 flex-wrap font-mono text-[11px]">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 uppercase transition-all duration-200 border rounded-sm font-semibold cursor-pointer ${
                activeCategory === cat
                  ? "border-[#00ff9c] bg-[#00ff9c] text-black shadow-[0_0_15px_rgba(0,255,156,0.3)]"
                  : "border-[#1f2933] text-[#9da7b3] hover:border-[#00ff9c] hover:text-[#00ff9c] bg-[#0d1117]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            onClick={() => setSelectedProject(project)}
            className="group relative bg-[#0d1117] border border-[#1f2933] hover:border-[#00ff9c]/50 rounded-sm overflow-hidden transition-all duration-300 flex flex-col h-full cursor-pointer hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(0,255,156,0.15)]"
          >
            {/* Visual Header / Thumbnail */}
            <div className="relative shrink-0 overflow-hidden border-b border-[#1f2933]">
              {renderVisualThumbnail(project)}

              {/* Tag / Category Badge */}
              <div className="absolute top-3 left-3 bg-[#00ff9c] text-black text-[10px] font-bold px-2.5 py-1 uppercase tracking-wider font-mono z-10 rounded-sm shadow-md">
                {project.tag}
              </div>

              <div className="absolute top-3 right-3 bg-black/80 text-[#9da7b3] border border-[#1f2933] text-[9px] font-mono px-2 py-0.5 uppercase z-10 rounded-sm">
                {project.category}
              </div>
            </div>

            {/* Content Body */}
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h4 className="font-header text-lg sm:text-xl font-bold mb-2 text-white group-hover:text-[#00ff9c] transition-colors tracking-tight">
                  {project.title}
                </h4>

                <p className="text-xs font-mono text-[#00b3ff] mb-3">
                  {project.subtitle}
                </p>

                <p className="text-xs sm:text-sm text-[#9da7b3] leading-relaxed line-clamp-3 mb-6 font-sans">
                  {project.summary}
                </p>
              </div>

              <div>
                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#1f2933]/70 mb-5">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] font-mono border border-[#1f2933] bg-[#050505] px-2 py-1 text-[#9da7b3] uppercase tracking-tighter"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="text-[10px] font-mono border border-[#1f2933] bg-[#050505] px-1.5 py-1 text-[#555]">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>

                {/* Bottom Action Strip */}
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] text-[#00ff9c] font-bold flex items-center gap-1.5 group-hover:underline">
                    DETAILS <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>

                  <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
                    {project.links?.demo && (
                      <a
                        href={project.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 border border-[#00ff9c]/50 text-[#00ff9c] hover:bg-[#00ff9c] hover:text-black transition-colors rounded-sm"
                        title="Live Store Demo"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {project.links?.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 border border-[#1f2933] text-[#9da7b3] hover:text-white hover:border-[#00ff9c] transition-colors rounded-sm"
                        title="GitHub Repo"
                      >
                        <Github className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Want to View More Projects CTA (Styled like Muquit's Google Drive link) */}
      <div className="mt-14 flex justify-center">
        <a
          href="https://github.com/MuhammadNasarullah575"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-3 px-8 py-3.5 border border-[#00ff9c] text-[#00ff9c] font-mono text-xs sm:text-sm uppercase tracking-[0.2em] hover:bg-[#00ff9c] hover:text-black transition-all duration-300 rounded-sm"
        >
          <span>WANT_TO_VIEW_MORE_PROJECTS?</span>
          <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </a>
      </div>

      {/* Project Deep Dive Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#0d1117] border border-[#00ff9c]/40 rounded-sm p-6 sm:p-8 shadow-[0_0_50px_rgba(0,255,156,0.15)] space-y-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 p-2 bg-[#1f2933] text-[#9da7b3] hover:text-[#00ff9c] hover:border-[#00ff9c] border border-transparent transition-colors rounded-sm"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div>
              <div className="flex items-center gap-2 mb-2 font-mono text-xs">
                <span className="bg-[#00ff9c] text-black font-bold px-2 py-0.5 uppercase">
                  {selectedProject.tag}
                </span>
                <span className="text-[#00b3ff]">
                  // {selectedProject.category}
                </span>
              </div>
              <h3 className="font-header text-2xl sm:text-3xl font-bold text-white">
                {selectedProject.title}
              </h3>
              <p className="font-mono text-xs sm:text-sm text-[#00ff9c] mt-1">
                &gt; {selectedProject.subtitle}
              </p>
            </div>

            {/* Objective Box */}
            <div className="p-4 bg-[#050505] border border-[#1f2933] rounded-sm">
              <span className="font-mono text-[#00ff9c] text-xs uppercase tracking-wider block mb-1 font-bold">
                ENGINEERING_OBJECTIVE:
              </span>
              <p className="text-xs sm:text-sm text-[#9da7b3] leading-relaxed">
                {selectedProject.objective}
              </p>
            </div>

            {/* Summary */}
            <div>
              <span className="font-mono text-white text-xs uppercase tracking-wider block mb-2 font-bold">
                SYSTEM_ARCHITECTURE:
              </span>
              <p className="text-xs sm:text-sm text-[#9da7b3] leading-relaxed font-sans">
                {selectedProject.summary}
              </p>
            </div>

            {/* Key Features */}
            <div>
              <span className="font-mono text-white text-xs uppercase tracking-wider block mb-3 font-bold">
                MODULES & KEY_FEATURES:
              </span>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                {selectedProject.keyFeatures.map((feat, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2 bg-[#050505] p-2.5 border border-[#1f2933]"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#00ff9c] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div>
              <span className="font-mono text-white text-xs uppercase tracking-wider block mb-2 font-bold">
                TECH_STACK:
              </span>
              <div className="flex flex-wrap gap-1.5 font-mono text-[11px]">
                {selectedProject.technologies.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 bg-[#1f2933]/60 border border-[#1f2933] text-[#00ff9c]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="pt-4 border-t border-[#1f2933] flex flex-wrap justify-between items-center gap-3">
              <div className="flex flex-wrap gap-2 font-mono text-xs">
                {selectedProject.links?.demo && (
                  <a
                    href={selectedProject.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-[#00ff9c] text-black font-bold uppercase rounded-sm hover:scale-105 transition"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    STOREFRONT_DEMO
                  </a>
                )}
                {selectedProject.links?.adminDemo && (
                  <a
                    href={selectedProject.links.adminDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 border border-[#00b3ff] text-[#00b3ff] hover:bg-[#00b3ff] hover:text-black font-bold uppercase rounded-sm transition"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    ADMIN_GATEWAY
                  </a>
                )}
                {selectedProject.links?.github && (
                  <a
                    href={selectedProject.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 border border-[#1f2933] text-white hover:border-[#00ff9c] font-bold uppercase rounded-sm transition"
                  >
                    <Github className="w-3.5 h-3.5" />
                    GITHUB_REPO
                  </a>
                )}
              </div>

              <button
                onClick={() => setSelectedProject(null)}
                className="font-mono text-xs text-[#9da7b3] hover:text-white px-3 py-1.5 border border-[#1f2933]"
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
