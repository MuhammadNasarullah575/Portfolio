"use client";

import { services } from "@/data/portfolioData";
import { 
  Brain, 
  Layout, 
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
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case "Brain": return <Brain className="w-6 h-6 text-emerald-400" />;
      case "Layout": return <Layout className="w-6 h-6 text-teal-400" />;
      case "Database": return <Database className="w-6 h-6 text-cyan-400" />;
      default: return <Cpu className="w-6 h-6 text-blue-400" />;
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
    <section id="services" className="py-24 relative border-t border-slate-900 bg-slate-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono uppercase tracking-wider mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            Client & Business Offerings
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Services I Offer
          </h2>
          <p className="text-slate-400 max-w-xl text-sm sm:text-base mt-2">
            Professional freelance, consulting, and end-to-end development services for businesses and innovators.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="flex flex-col justify-between p-7 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-emerald-500/40 hover:bg-slate-900/70 transition-all duration-300 group"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700/80 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {getServiceIcon(service.icon)}
                  </div>
                  <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    {service.badge}
                  </span>
                </div>

                {/* Title & Short Description */}
                <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors mb-2">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Deliverables Checklist */}
                <div className="space-y-2 mb-6">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                    Typical Deliverables:
                  </h4>
                  <ul className="space-y-2 text-xs text-slate-300">
                    {service.deliverables.map((item, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-slate-800/80">
                <button
                  onClick={() => handleHireClick(service.title)}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-slate-800/80 hover:bg-emerald-500 hover:text-slate-950 text-slate-200 text-xs font-semibold transition-all duration-200 border border-slate-700/80 hover:border-emerald-400 shadow-sm"
                >
                  <span>Request This Service</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

