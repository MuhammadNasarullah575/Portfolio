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
      case "Brain": return <Brain className="w-6 h-6 text-[#00ff9c]" />;
      case "Layout": return <Code2 className="w-6 h-6 text-[#00b3ff]" />;
      case "Database": return <Database className="w-6 h-6 text-[#00ff9c]" />;
      default: return <Cpu className="w-6 h-6 text-[#00b3ff]" />;
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
    <section id="services" className="max-w-7xl mx-auto px-6 py-24 border-b border-[#1f2933]">
      <div className="mb-14">
        <p className="font-mono text-[#00ff9c] text-xs tracking-[0.5em] mb-4 uppercase">
          07. CLIENT_SOLUTIONS
        </p>
        <h2 className="font-header text-3xl sm:text-4xl font-bold text-white text-left">
          Consulting & Development Offerings
        </h2>
        <p className="text-[#9da7b3] font-mono text-xs sm:text-sm mt-2">
          Turnkey engineering services for startups, businesses, and research initiatives.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((srv) => (
          <div
            key={srv.id}
            className="p-7 sm:p-8 bg-[#0d1117] border border-[#1f2933] hover:border-[#00ff9c]/50 transition-all duration-300 rounded-sm flex flex-col justify-between group hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(0,255,156,0.15)]"
          >
            <div>
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded border border-[#1f2933] bg-[#050505] flex items-center justify-center group-hover:border-[#00ff9c] transition-colors">
                  {getIcon(srv.icon)}
                </div>
                <span className="font-mono text-[10px] font-bold px-2 py-0.5 border border-[#00ff9c]/40 text-[#00ff9c] bg-[#00ff9c]/5 uppercase tracking-wider">
                  {srv.badge}
                </span>
              </div>

              {/* Title & Description */}
              <h3 className="font-header text-xl font-bold text-white mb-2 group-hover:text-[#00ff9c] transition-colors">
                {srv.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#9da7b3] leading-relaxed mb-6 font-sans">
                {srv.description}
              </p>

              {/* Deliverables Checklist */}
              <div className="space-y-2 mb-6">
                <span className="font-mono text-[11px] text-white uppercase tracking-wider block font-bold mb-2">
                  KEY_DELIVERABLES:
                </span>
                <ul className="space-y-2 text-xs text-slate-300">
                  {srv.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 bg-[#050505] p-2 border border-[#1f2933] rounded-sm">
                      <span className="w-1.5 h-1.5 bg-[#00ff9c] shrink-0 mt-1.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4 border-t border-[#1f2933]">
              <button
                onClick={() => handleHireClick(srv.title)}
                className="w-full py-2.5 px-4 border border-[#00ff9c]/40 text-[#00ff9c] hover:bg-[#00ff9c] hover:text-black font-mono text-xs font-bold uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 rounded-sm"
              >
                <span>REQUEST_SERVICE.exe</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
