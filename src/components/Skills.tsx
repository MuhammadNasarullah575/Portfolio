"use client";

import { useState } from "react";
import { 
  Brain, 
  Code2, 
  Database, 
  Cpu, 
  Wrench, 
  CheckCircle2, 
  Sparkles, 
  Layers 
} from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Artificial Intelligence & ML",
      description: "Computer vision, deep neural networks, predictive modeling, and NLP pipelines",
      icon: <Brain className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />,
      skills: [
        { name: "Computer Vision & YOLOv8", level: 92, isCore: true },
        { name: "OpenCV & Video Processing", level: 90, isCore: true },
        { name: "Machine Learning (Scikit-learn)", level: 88, isCore: true },
        { name: "Natural Language Processing (NLP)", level: 85, isCore: true },
        { name: "Deep Learning (TensorFlow/Keras)", level: 80, isCore: false },
        { name: "Sentence Transformers (MiniLM)", level: 84, isCore: false },
        { name: "Data Preprocessing & Augmentation", level: 90, isCore: true },
        { name: "Model Evaluation & Metrics", level: 88, isCore: false },
      ]
    },
    {
      title: "Full-Stack Web Development",
      description: "Modern, responsive, user-centric web applications and scalable APIs",
      icon: <Code2 className="w-5 h-5 text-violet-600 dark:text-violet-400" />,
      skills: [
        { name: "React.js & Next.js (App Router)", level: 92, isCore: true },
        { name: "JavaScript (ES6+) & TypeScript", level: 88, isCore: true },
        { name: "HTML5 & Tailwind CSS / Modern UI", level: 95, isCore: true },
        { name: "RESTful API Design & Integration", level: 86, isCore: true },
        { name: "Node.js & Express.js", level: 80, isCore: false },
        { name: "PostgreSQL & SQL Databases", level: 82, isCore: false },
        { name: "MongoDB & Mongoose", level: 78, isCore: false },
        { name: "Responsive UI/UX Architecture", level: 92, isCore: true },
      ]
    },
    {
      title: "Data Science & Automation",
      description: "Web data extraction, pipeline automation, analytics dashboards, and processing",
      icon: <Database className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
      skills: [
        { name: "Python Scripting & Automation", level: 94, isCore: true },
        { name: "Web Scraping (Playwright, BS4)", level: 92, isCore: true },
        { name: "Pandas & NumPy Data Wrangling", level: 90, isCore: true },
        { name: "Streamlit Dashboard Development", level: 88, isCore: true },
        { name: "Financial Data & FINRA Metrics", level: 85, isCore: false },
        { name: "Data Cleaning & Normalization", level: 90, isCore: true },
        { name: "Data Visualization (Matplotlib)", level: 84, isCore: false },
      ]
    },
    {
      title: "Robotics & Embedded Systems",
      description: "Microcontroller programming, sensor integration, hardware prototyping",
      icon: <Cpu className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
      skills: [
        { name: "Arduino Uno & Microcontrollers", level: 90, isCore: true },
        { name: "IoT & Sensor Telemetry Interfacing", level: 88, isCore: true },
        { name: "UART & Serial Communications", level: 85, isCore: true },
        { name: "C / C++ Embedded Basics", level: 82, isCore: false },
        { name: "Electronics & Circuit Design", level: 84, isCore: false },
        { name: "Actuators, Displays & Motor Control", level: 86, isCore: true },
      ]
    },
    {
      title: "Tools, Platforms & Deployment",
      description: "Development environments, version control, and cloud hosting",
      icon: <Wrench className="w-5 h-5 text-amber-600 dark:text-amber-400" />,
      skills: [
        { name: "Git & GitHub Version Control", level: 92, isCore: true },
        { name: "VS Code & Remote Toolchains", level: 95, isCore: true },
        { name: "Vercel Deployment & CI/CD", level: 90, isCore: true },
        { name: "Google Colab & Jupyter Labs", level: 92, isCore: true },
        { name: "Linux / CLI Environments", level: 82, isCore: false },
        { name: "XAMPP & Local Server Stacks", level: 85, isCore: false },
      ]
    }
  ];

  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="skills" className="py-24 relative border-t border-slate-200/80 dark:border-slate-800 bg-white/50 dark:bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800/80 text-indigo-600 dark:text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Skills & Core Competencies
          </h2>

          <p className="text-slate-600 dark:text-slate-400 max-w-2xl text-sm sm:text-base mt-3 leading-relaxed">
            Honest and verified proficiencies reflecting hands-on software development and engineering experience.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 mb-10">
          {skillCategories.map((cat, idx) => (
            <button
              key={cat.title}
              onClick={() => setActiveTab(idx)}
              className={`p-4 rounded-2xl border text-left transition-all duration-200 flex flex-col justify-between cursor-pointer ${
                activeTab === idx
                  ? "bg-white dark:bg-slate-900 border-indigo-500 shadow-md ring-2 ring-indigo-500/10"
                  : "bg-white/60 dark:bg-slate-900/40 border-slate-200/80 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 hover:bg-white dark:hover:bg-slate-900/80"
              }`}
            >
              <div className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200/60 dark:border-slate-700/60 flex items-center justify-center mb-3">
                {cat.icon}
              </div>

              <div>
                <h3 className={`text-xs sm:text-sm font-bold ${
                  activeTab === idx ? "text-indigo-600 dark:text-indigo-400" : "text-slate-800 dark:text-slate-200"
                }`}>
                  {cat.title}
                </h3>
                <span className="text-[11px] text-slate-400 font-medium">
                  {cat.skills.length} competencies
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* Active Skills Detailed View */}
        <div className="p-7 sm:p-9 rounded-3xl bg-white dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-5 mb-8 gap-3">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                {skillCategories[activeTab].title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                {skillCategories[activeTab].description}
              </p>
            </div>

            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200/60 dark:border-indigo-800">
              {skillCategories[activeTab].skills.filter(s => s.isCore).length} Core Proficiencies
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">
            {skillCategories[activeTab].skills.map((skill) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex items-center justify-between text-xs sm:text-sm">
                  <span className="font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                    {skill.name}
                    {skill.isCore && (
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300">
                        Core
                      </span>
                    )}
                  </span>
                  <span className="font-mono text-xs font-semibold text-slate-500 dark:text-slate-400">
                    {skill.level}%
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="w-full h-2.5 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 transition-all duration-700 ease-out"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
