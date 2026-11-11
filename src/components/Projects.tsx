"use client";

import { useState } from "react";
import { projects, Project } from "@/data/portfolioData";
import { 
  FolderGit2, 
  ExternalLink, 
  Github, 
  Sparkles, 
  CheckCircle2, 
  Layers, 
  ArrowUpRight, 
  Maximize2, 
  X, 
  ShieldCheck, 
  TrendingUp, 
  Cpu 
} from "lucide-react";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ["All", "AI/ML", "Web Development", "Data Science", "Robotics & IoT"];

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 relative border-t border-slate-900 bg-slate-950/60">
      {/* Background Glow */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono uppercase tracking-wider mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            Engineering Showcase
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured Projects
          </h2>
          <p className="text-slate-400 max-w-2xl text-sm sm:text-base mt-2">
            Selected real-world systems spanning Computer Vision, Quantitative Market Intelligence, Full-Stack E-Commerce, and Embedded IoT.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8 p-1.5 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-sm">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-gradient-to-r from-emerald-500 to-teal-600 text-slate-950 font-semibold shadow-md shadow-emerald-500/20"
                    : "text-slate-400 hover:text-white hover:bg-slate-800/60"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="flex flex-col justify-between rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-emerald-500/40 hover:bg-slate-900/80 transition-all duration-300 p-6 group hover:-translate-y-1 shadow-lg shadow-black/40"
            >
              <div>
                {/* Top Badge & Tag */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    {project.tag}
                  </span>
                  <span className="text-xs text-slate-500 font-mono">
                    {project.category}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors mb-1.5 flex items-center justify-between">
                  <span>{project.title}</span>
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="opacity-0 group-hover:opacity-100 transition-opacity p-1 text-slate-400 hover:text-white"
                    title="Quick Details"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>
                </h3>
                <p className="text-xs text-teal-400/80 font-medium mb-3">
                  {project.subtitle}
                </p>

                {/* Summary */}
                <p className="text-xs sm:text-sm text-slate-400 line-clamp-3 mb-4 leading-relaxed">
                  {project.summary}
                </p>

                {/* Metric Highlights */}
                {project.metrics && project.metrics.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.metrics.map((m, mIdx) => (
                      <span
                        key={mIdx}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800/70 text-slate-300 border border-slate-700/60"
                      >
                        ✓ {m}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <div>
                {/* Technologies List */}
                <div className="pt-4 border-t border-slate-800/80 flex flex-wrap gap-1.5 mb-5">
                  {project.technologies.slice(0, 5).map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-950 text-slate-400 border border-slate-800"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 5 && (
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-950 text-slate-500">
                      +{project.technologies.length - 5}
                    </span>
                  )}
                </div>

                {/* Actions & Links */}
                <div className="flex items-center justify-between pt-2">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-xs font-semibold text-emerald-400 hover:text-emerald-300 inline-flex items-center gap-1 transition-colors"
                  >
                    Deep Dive Details
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>

                  <div className="flex items-center gap-2">
                    {project.links?.demo && (
                      <a
                        href={project.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 transition-colors"
                        title="Live Storefront Demo"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                    {project.links?.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                        title="GitHub Repository"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Project Deep Dive Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
          <div
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-slate-900 border border-slate-700 rounded-2xl p-6 sm:p-8 shadow-2xl space-y-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition-colors"
              aria-label="Close Modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                  {selectedProject.tag}
                </span>
                <span className="text-xs text-slate-400 font-mono">
                  {selectedProject.category}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                {selectedProject.title}
              </h3>
              <p className="text-sm font-medium text-teal-400 mt-1">
                {selectedProject.subtitle}
              </p>
            </div>

            {/* Objective */}
            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
              <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold mb-1">
                Core Engineering Objective:
              </h4>
              <p className="text-xs sm:text-sm text-slate-300">
                {selectedProject.objective}
              </p>
            </div>

            {/* Comprehensive Description */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                Architecture & Summary:
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {selectedProject.summary}
              </p>
            </div>

            {/* Key Features */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                Key Technical Highlights & Modules:
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-300">
                {selectedProject.keyFeatures.map((feat, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-2 bg-slate-950/40 p-2.5 rounded-lg border border-slate-800/60">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                Tech Stack & Frameworks:
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {selectedProject.technologies.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-mono px-2.5 py-1 rounded-md bg-slate-800 text-slate-200 border border-slate-700"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Live Links in Modal */}
            <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap gap-2">
                {selectedProject.links?.demo && (
                  <a
                    href={selectedProject.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-xs transition-colors shadow-sm"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    Live Storefront Demo
                  </a>
                )}
                {selectedProject.links?.adminDemo && (
                  <a
                    href={selectedProject.links.adminDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white font-semibold text-xs transition-colors shadow-sm"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    Admin Gateway Demo
                  </a>
                )}
                {selectedProject.links?.github && (
                  <a
                    href={selectedProject.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs font-medium border border-slate-700 transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    View GitHub Repository
                  </a>
                )}
              </div>

              <button
                onClick={() => setSelectedProject(null)}
                className="text-xs text-slate-400 hover:text-white px-3 py-1.5 rounded-lg border border-slate-800 hover:bg-slate-800"
              >
                Close View
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}

