"use client";

import { personalData } from "@/data/portfolioData";
import { 
  GraduationCap, 
  Award, 
  BookOpen, 
  ShieldCheck, 
  CheckCircle2, 
  Target, 
  Sparkles, 
  Layers, 
  TrendingUp, 
  Users, 
  Cpu, 
  Code2 
} from "lucide-react";

export default function About() {
  const strengths = [
    {
      title: "Analytical Problem Solving",
      desc: "Translating intricate technical and algorithmic bottlenecks into elegant, production-grade applications.",
      icon: <Sparkles className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
    },
    {
      title: "Full-Stack System Integration",
      desc: "Bridging machine learning models, database pipelines, and responsive web UIs into seamless products.",
      icon: <Layers className="w-5 h-5 text-violet-600 dark:text-violet-400" />
    },
    {
      title: "Computer Vision & Deep Learning",
      desc: "Fine-tuning YOLOv8 and convolutional architectures for real-time video hazard detection and tracking.",
      icon: <Cpu className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
    },
    {
      title: "Data Pipelines & Automation",
      desc: "Architecting resilient web scraping engines (Playwright/Python) and financial market forecasting models.",
      icon: <TrendingUp className="w-5 h-5 text-blue-600 dark:text-blue-400" />
    },
    {
      title: "Technical Mentorship & STEM",
      desc: "Proven track record as a Tech Fellow communicating complex engineering principles with clarity.",
      icon: <Users className="w-5 h-5 text-amber-600 dark:text-amber-400" />
    },
    {
      title: "Continuous Experimentation",
      desc: "Deep intellectual curiosity, consistently exploring emerging AI frameworks and modern web toolchains.",
      icon: <Code2 className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
    }
  ];

  return (
    <section id="about" className="py-24 relative border-t border-slate-200/80 dark:border-slate-800 bg-white/50 dark:bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800/80 text-indigo-600 dark:text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Professional Background</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Engineering Tomorrow's Intelligent Systems
          </h2>

          <p className="text-slate-600 dark:text-slate-400 max-w-2xl text-sm sm:text-base mt-3 leading-relaxed">
            Bridging rigorous computer engineering foundations with production-grade machine learning and full-stack software.
          </p>
        </div>

        {/* Narrative & Accreditations Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-20">
          
          {/* Left Bio Column */}
          <div className="lg:col-span-7 space-y-5 text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            <div className="p-7 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-4">
              <p>
                I am <strong className="text-slate-900 dark:text-white font-bold">{personalData.name}</strong>, a Computer Engineer with a deep specialization in Artificial Intelligence, Machine Learning, Computer Vision, and Modern Full-Stack Web Development.
              </p>
              
              <p>
                I graduated with a Bachelor of Science in Computer Engineering from the <strong className="text-indigo-600 dark:text-indigo-400 font-semibold">Institute of Space Technology (IST), KICSIT</strong>, achieving a CGPA of <strong className="text-indigo-600 dark:text-indigo-400 font-semibold">3.23 / 4.00</strong> and maintaining a consistent First Division record throughout my academic sessions.
              </p>

              <p>
                My professional experience encompasses building real-time hazardous fire & smoke detection engines (YOLOv8), quantitative stock market predictive models (US equities & FINRA metrics), automated marketplace data scrapers (Playwright/Python), and responsive e-commerce web applications.
              </p>

              <p>
                Additionally, I served as a <strong>Tech Fellow</strong> under the Federal Directorate of Education's <em>Disruptive Education</em> initiative, where I trained over 100 students in practical robotics, Arduino programming, and sensor telemetry.
              </p>
            </div>

            {/* Career Vision Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-indigo-50/80 via-purple-50/60 to-slate-50 dark:from-indigo-950/30 dark:via-purple-950/20 dark:to-slate-900/40 border border-indigo-200/80 dark:border-indigo-800/60">
              <div className="flex items-center gap-2 text-indigo-700 dark:text-indigo-300 font-bold text-sm mb-2">
                <Target className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                <span>My Career Vision</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                {personalData.vision}
              </p>
            </div>
          </div>

          {/* Right Credentials Column */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="p-7 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-4">
              <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Award className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                <span>Verified Honors & Accreditations</span>
              </h3>

              <div className="space-y-3 pt-1">
                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200/70 dark:border-slate-800">
                  <div className="w-9 h-9 rounded-lg bg-indigo-100 dark:bg-indigo-950/60 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                      PEC Registered Engineer
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                      Accredited professional Computer Engineer certified by Pakistan Engineering Council.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200/70 dark:border-slate-800">
                  <div className="w-9 h-9 rounded-lg bg-emerald-100 dark:bg-emerald-950/60 flex items-center justify-center shrink-0">
                    <BookOpen className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                      Hafiz-e-Quran
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                      Full memorization of the Holy Quran, cultivating immense mental retention and discipline.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200/70 dark:border-slate-800">
                  <div className="w-9 h-9 rounded-lg bg-violet-100 dark:bg-violet-950/60 flex items-center justify-center shrink-0">
                    <GraduationCap className="w-5 h-5 text-violet-600 dark:text-violet-400" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                      First Division Throughout
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                      First Division in Matriculation (87.8%), Intermediate (64.4%), and BS Computer Engineering (CGPA 3.23).
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Details Pill Matrix */}
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 shadow-sm">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                Quick Facts
              </h4>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div>
                  <span className="text-slate-400 block">Location:</span>
                  <span className="text-slate-800 dark:text-slate-200 font-semibold">Sargodha, Pakistan</span>
                </div>
                <div>
                  <span className="text-slate-400 block">Degree:</span>
                  <span className="text-slate-800 dark:text-slate-200 font-semibold">BS Computer Eng.</span>
                </div>
                <div>
                  <span className="text-slate-400 block">Institution:</span>
                  <span className="text-slate-800 dark:text-slate-200 font-semibold">IST (KICSIT)</span>
                </div>
                <div>
                  <span className="text-slate-400 block">Languages:</span>
                  <span className="text-slate-800 dark:text-slate-200 font-semibold">English, Urdu</span>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Section: Professional Strengths ("What I Bring to the Table") */}
        <div>
          <div className="text-center mb-10">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              What I Bring to the Table
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1.5">
              Core working competencies and practical value delivered to engineering teams
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {strengths.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 hover:border-indigo-300 dark:hover:border-indigo-500/50 hover:shadow-md transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform shadow-sm">
                  {item.icon}
                </div>
                <h4 className="text-base font-bold text-slate-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {item.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
