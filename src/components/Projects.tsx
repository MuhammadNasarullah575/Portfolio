"use client";

import { useState } from "react";
import { projects, Project } from "@/data/portfolioData";
import { 
  ExternalLink, 
  Github, 
  ArrowRight, 
  ArrowUpRight, 
  X, 
  CheckCircle2, 
  Sparkles, 
  Maximize2, 
  Eye, 
  ShoppingBag, 
  Flame, 
  TrendingUp, 
  Database 
} from "lucide-react";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "Web Development", "AI/ML", "Data Science"];

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  // Fallback image mapper for projects
  const getProjectImage = (project: Project) => {
    if (project.id === "tijaaro-ecommerce") return "/images/tijaaro-showcase.png";
    if (project.id === "fire-detection") return "/images/fire-detection.jfif";
    if (project.id === "daraz-scraper") return "/images/daraz-scraper.jfif";
    if (project.id === "short-squeeze") return "/images/short-squeeze.jfif";
    return project.image;
  };

  return (
    <section id="projects" className="py-24 relative border-t border-slate-200/80 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800/80 text-indigo-600 dark:text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Featured Portfolio Work</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Selected Engineering Projects
          </h2>

          <p className="text-slate-600 dark:text-slate-400 max-w-2xl text-sm sm:text-base mt-3 leading-relaxed">
            Real production applications, computer vision systems, and automated data pipelines developed with modern architectures.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8 p-1.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  activeCategory === cat
                    ? "bg-indigo-600 text-white shadow-md shadow-indigo-500/25"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => {
            const projectImg = getProjectImage(project);

            return (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group flex flex-col justify-between rounded-3xl bg-white dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 hover:border-indigo-300 dark:hover:border-indigo-500/50 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer hover:-translate-y-1"
              >
                <div>
                  {/* High-Resolution Project Picture Banner */}
                  <div className="relative h-64 sm:h-72 w-full bg-slate-900 overflow-hidden border-b border-slate-200 dark:border-slate-800">
                    {projectImg ? (
                      <img
                        src={projectImg}
                        alt={project.title}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-tr from-indigo-900 via-slate-900 to-purple-900 flex items-center justify-center p-6 text-center">
                        <span className="text-white font-bold text-lg">{project.title}</span>
                      </div>
                    )}

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/20" />

                    {/* Top Badges */}
                    <div className="absolute top-4 left-4 flex items-center gap-2">
                      <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-white/95 dark:bg-slate-900/90 text-indigo-700 dark:text-indigo-300 border border-slate-200/80 dark:border-slate-700 backdrop-blur-md shadow-sm">
                        {project.tag}
                      </span>
                    </div>

                    <div className="absolute top-4 right-4">
                      <span className="p-2 rounded-xl bg-black/60 text-white backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity inline-flex items-center gap-1 text-xs font-medium">
                        <Maximize2 className="w-3.5 h-3.5 text-indigo-400" />
                        <span>Inspect</span>
                      </span>
                    </div>

                    {/* Bottom Title on Image */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="text-xs font-bold uppercase tracking-wider text-indigo-300 block mb-1">
                        {project.category}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold text-white drop-shadow-md">
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  {/* Card Description & Details */}
                  <div className="p-6 sm:p-7">
                    <p className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 mb-2">
                      {project.subtitle}
                    </p>

                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6 line-clamp-3">
                      {project.summary}
                    </p>

                    {/* Key Highlights / Metrics */}
                    {project.metrics && project.metrics.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.metrics.map((m, idx) => (
                          <span
                            key={idx}
                            className="inline-flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                          >
                            <CheckCircle2 className="w-3 h-3 text-indigo-600 dark:text-indigo-400" />
                            {m}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Card Footer: Tech Stack & Actions */}
                <div className="px-6 sm:px-7 pb-6 sm:pb-7 pt-4 border-t border-slate-100 dark:border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
                  
                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-medium px-2.5 py-0.5 rounded-md bg-slate-50 dark:bg-slate-950 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="text-[11px] font-medium px-2 py-0.5 rounded-md text-slate-400">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Actions / Live Links */}
                  <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
                    {project.links?.demo && (
                      <a
                        href={project.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs transition shadow-sm"
                        title="Live Storefront"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Live Demo</span>
                      </a>
                    )}
                    {project.links?.adminDemo && (
                      <a
                        href={project.links.adminDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-semibold text-xs border border-slate-200 dark:border-slate-700 transition"
                        title="Admin Gateway"
                      >
                        <ExternalLink className="w-3.5 h-3.5 text-indigo-500" />
                        <span>Admin</span>
                      </a>
                    )}
                    {project.links?.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition"
                        title="GitHub Repository"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Project Deep Dive Modal with High-Res Image */}
        {selectedProject && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-in fade-in duration-200"
            onClick={() => setSelectedProject(null)}
          >
            <div
              className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-9 shadow-2xl space-y-6"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white transition cursor-pointer"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800">
                    {selectedProject.tag}
                  </span>
                  <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                    • {selectedProject.category}
                  </span>
                </div>
                
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                  {selectedProject.title}
                </h3>
                
                <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 mt-1">
                  {selectedProject.subtitle}
                </p>
              </div>

              {/* High-Resolution Project Photo Banner */}
              {getProjectImage(selectedProject) && (
                <div className="w-full h-80 sm:h-96 rounded-2xl bg-black overflow-hidden flex items-center justify-center border border-slate-200 dark:border-slate-800 shadow-md">
                  <img
                    src={getProjectImage(selectedProject)}
                    alt={selectedProject.title}
                    className="w-full h-full object-contain"
                  />
                </div>
              )}

              {/* Objective Box */}
              <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200/80 dark:border-slate-800">
                <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-1">
                  Core Engineering Objective:
                </h4>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  {selectedProject.objective}
                </p>
              </div>

              {/* Full Summary */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                  Architecture & Implementation:
                </h4>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  {selectedProject.summary}
                </p>
              </div>

              {/* Key Features Checklist */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
                  Technical Modules & Capabilities:
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-700 dark:text-slate-300">
                  {selectedProject.keyFeatures.map((feat, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200/80 dark:border-slate-800"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                  Technologies & Frameworks:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-semibold px-3 py-1 rounded-lg bg-indigo-50 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 border border-indigo-200/60 dark:border-indigo-800"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal Actions */}
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-3">
                  {selectedProject.links?.demo && (
                    <a
                      href={selectedProject.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs shadow-md transition"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Customer Storefront</span>
                    </a>
                  )}
                  {selectedProject.links?.adminDemo && (
                    <a
                      href={selectedProject.links.adminDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-semibold text-xs border border-slate-200 dark:border-slate-700 transition"
                    >
                      <ExternalLink className="w-4 h-4 text-indigo-500" />
                      <span>Admin Master Gateway</span>
                    </a>
                  )}
                  {selectedProject.links?.github && (
                    <a
                      href={selectedProject.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 text-xs font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 transition"
                    >
                      <Github className="w-4 h-4" />
                      <span>GitHub Repository</span>
                    </a>
                  )}
                </div>

                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-4 py-2 text-xs font-semibold text-slate-500 hover:text-slate-800 dark:hover:text-white rounded-xl border border-slate-200 dark:border-slate-700"
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
