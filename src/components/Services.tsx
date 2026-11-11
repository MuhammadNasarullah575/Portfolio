"use client";

import { services } from "@/data/portfolioData";
import { 
  Brain, 
  Code2, 
  Database, 
  Cpu, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles 
} from "lucide-react";

interface ServicesProps {
  onSelectService?: (serviceTitle: string) => void;
}

export default function Services({ onSelectService }: ServicesProps) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Brain": return <Brain className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />;
      case "Layout": return <Code2 className="w-6 h-6 text-violet-600 dark:text-violet-400" />;
      case "Database": return <Database className="w-6 h-6 text-blue-600 dark:text-blue-400" />;
      default: return <Cpu className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />;
    }
  };

  const handleHireClick = (title: string) => {
    if (onSelectService) {
      onSelectService(title);
    }
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-24 relative border-t border-slate-200/80 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800/80 text-indigo-600 dark:text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Consulting & Offerings</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Services I Offer
          </h2>

          <p className="text-slate-600 dark:text-slate-400 max-w-2xl text-sm sm:text-base mt-3 leading-relaxed">
            Turnkey engineering, machine learning pipelines, and modern web application development for businesses and innovators.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((srv) => (
            <div
              key={srv.id}
              className="p-8 sm:p-9 rounded-3xl bg-white dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 hover:border-indigo-300 dark:hover:border-indigo-500/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-slate-800 border border-indigo-100 dark:border-slate-700 flex items-center justify-center group-hover:scale-105 transition-transform shadow-sm">
                    {getIcon(srv.icon)}
                  </div>
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200/70 dark:border-indigo-800">
                    {srv.badge}
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-2.5 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {srv.title}
                </h3>
                
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                  {srv.description}
                </p>

                {/* Deliverables Checklist */}
                <div className="space-y-2 mb-8">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Typical Deliverables:
                  </h4>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                    {srv.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-5 border-t border-slate-100 dark:border-slate-800">
                <button
                  onClick={() => handleHireClick(srv.title)}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-indigo-600 hover:text-white text-slate-800 dark:text-slate-200 text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer shadow-sm"
                >
                  <span>Request This Service</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
