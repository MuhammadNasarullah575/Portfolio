"use client";

import { personalData } from "@/data/portfolioData";
import { Github, Linkedin, Mail, ArrowUp, Cpu } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-[#1f2933] bg-[#0d1117]/80 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Column 1: System Identity */}
          <div>
            <h4 className="font-header text-[#00ff9c] mb-4 tracking-widest uppercase text-sm flex items-center gap-2">
              <Cpu className="w-4 h-4" /> System_Identity
            </h4>
            <p className="text-[#9da7b3] text-sm leading-relaxed mb-6 font-sans">
              Specializing in computer vision (YOLOv8), predictive machine learning pipelines, responsive Next.js web applications, and embedded IoT hardware systems.
            </p>
            <div className="flex gap-3">
              <a
                href={personalData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-[#1f2933] hover:border-[#00ff9c] text-[#9da7b3] hover:text-[#00ff9c] transition rounded-sm"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={personalData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-[#1f2933] hover:border-[#00ff9c] text-[#9da7b3] hover:text-[#00ff9c] transition rounded-sm"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalData.email}`}
                className="p-2 border border-[#1f2933] hover:border-[#00ff9c] text-[#9da7b3] hover:text-[#00ff9c] transition rounded-sm"
                title="Email Direct"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: System Online Telemetry */}
          <div className="font-mono text-sm">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#00ff9c] animate-ping" />
              <span className="font-header text-[#00ff9c] tracking-widest uppercase text-sm">
                SYSTEM_ONLINE
              </span>
            </div>
            <p className="mb-2 text-[#9da7b3] text-xs sm:text-sm">
              &gt; Location: <span className="text-white">Sargodha, Punjab, Pakistan</span>
            </p>
            <p className="mb-2 text-[#9da7b3] text-xs sm:text-sm">
              &gt; Degree: <span className="text-[#00b3ff]">BS Computer Eng. (IST)</span>
            </p>
            <p className="mb-2 text-[#9da7b3] text-xs sm:text-sm">
              &gt; Accreditation: <span className="text-[#00ff9c]">PEC Registered Engineer</span>
            </p>
            <p className="text-[#9da7b3] text-xs sm:text-sm">
              &gt; Status: <span className="text-[#00ff9c] font-bold">Available for Hire & Contracting</span>
            </p>
          </div>

          {/* Column 3: Transmission */}
          <div>
            <h4 className="font-header text-[#00ff9c] mb-4 tracking-widest uppercase text-sm">
              Data_Transmission
            </h4>
            <p className="text-xs text-[#9da7b3] mb-4 font-mono italic">
              Request technical documentation, project quotes, or schedule an interview:
            </p>
            <a
              href={`mailto:${personalData.email}`}
              className="block w-full py-3 px-4 border border-[#1f2933] text-center hover:border-[#00ff9c] hover:bg-[#00ff9c]/5 text-[#00ff9c] transition text-xs font-mono font-bold tracking-wider rounded-sm"
            >
              SEND_ENCRYPTED_MESSAGE
            </a>
          </div>

        </div>

        {/* Bottom Credits & Back to Top */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 border-t border-[#1f2933] font-mono text-[10px] text-[#9da7b3] gap-4">
          <p>© {new Date().getFullYear()} ENGR. MUHAMMAD NASARULLAH // ALL RIGHTS RESERVED.</p>
          
          <div className="flex items-center gap-4">
            <span className="uppercase tracking-widest hidden md:inline">
              Built with Next.js 14 // React // Tailwind CSS
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 border border-[#1f2933] text-[#9da7b3] hover:text-[#00ff9c] hover:border-[#00ff9c] transition rounded-sm"
              title="Return to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
