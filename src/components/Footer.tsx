"use client";

import { personalData } from "@/data/portfolioData";
import { Github, Linkedin, Mail, ArrowUp, Heart } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-950 py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-10">
          
          {/* Logo & Identity */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-600 to-violet-600 flex items-center justify-center font-bold text-white text-xs">
                MN
              </div>
              <span className="font-bold text-slate-900 dark:text-white text-base">
                {personalData.name}
              </span>
            </div>

            <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm">
              AI/ML Engineer & Full-Stack Developer • Sargodha, Punjab, Pakistan
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-2.5">
            <a
              href={personalData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-white hover:border-indigo-300 dark:hover:border-indigo-500/50 transition"
              title="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={personalData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-white hover:border-indigo-300 dark:hover:border-indigo-500/50 transition"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${personalData.email}`}
              className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-white hover:border-indigo-300 dark:hover:border-indigo-500/50 transition"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            {/* Back to top */}
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-white hover:border-indigo-300 dark:hover:border-indigo-500/50 transition ml-2 cursor-pointer"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom Credits */}
        <div className="pt-8 border-t border-slate-100 dark:border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 dark:text-slate-400 gap-3 text-center sm:text-left">
          <p>© {new Date().getFullYear()} Muhammad Nasarullah. All rights reserved.</p>
          <p className="flex items-center gap-1 font-medium">
            <span>Building Intelligent Solutions Through AI, Engineering & Modern Web Technologies</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
