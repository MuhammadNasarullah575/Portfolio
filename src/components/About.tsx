"use client";

import { personalData, professionalStrengths } from "@/data/portfolioData";
import { 
  GraduationCap, 
  Award, 
  BookOpen, 
  CheckCircle, 
  Sparkles, 
  Layers, 
  Search, 
  Users, 
  TrendingUp, 
  CheckCircle2, 
  Target 
} from "lucide-react";

export default function About() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Sparkles": return <Sparkles className="w-5 h-5 text-emerald-400" />;
      case "Layers": return <Layers className="w-5 h-5 text-teal-400" />;
      case "Search": return <Search className="w-5 h-5 text-cyan-400" />;
      case "Users": return <Users className="w-5 h-5 text-blue-400" />;
      case "TrendingUp": return <TrendingUp className="w-5 h-5 text-emerald-400" />;
      default: return <CheckCircle2 className="w-5 h-5 text-teal-400" />;
    }
  };

  return (
    <section id="about" className="py-24 relative border-t border-slate-900 bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono uppercase tracking-wider mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            Background & Mindset
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About Me
          </h2>
          <p className="text-slate-400 max-w-xl text-sm sm:text-base mt-2">
            Bridging hardware foundations with modern machine learning and full-stack web engineering.
          </p>
        </div>

        {/* Top Story & Credentials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Left Bio Column */}
          <div className="lg:col-span-7 space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800/80 backdrop-blur-sm space-y-4">
              <p>
                I am <span className="text-white font-semibold">{personalData.name}</span>, a Computer Engineer with a deep passion for Artificial Intelligence, Machine Learning, Full-Stack Web Development, and emerging cyber-physical systems.
              </p>
              <p>
                I hold a Bachelor's degree in Computer Engineering from the <strong className="text-emerald-300 font-medium">Institute of Space Technology (IST), KICSIT</strong>, graduating with a CGPA of <strong className="text-emerald-300 font-medium">3.23 / 4.00</strong> and maintaining a First Division record throughout my academic sessions.
              </p>
              <p>
                My professional journey encompasses hands-on development in computer vision, machine learning models, financial market prediction engines, automated web scraping, and production e-commerce platforms.
              </p>
              <p>
                Beyond code, I served as a <strong>Tech Fellow</strong> under the Federal Directorate of Education's <em>Disruptive Education</em> initiative, where I trained and mentored students on practical STEM, robotics, Arduino microcontrollers, sensor telemetry, and IoT-based hardware solutions.
              </p>
              <p className="pt-2 text-slate-400 border-t border-slate-800/60 italic text-xs sm:text-sm">
                "I believe in continuous learning, practical experimentation, and developing technology that solves real-world challenges."
              </p>
            </div>

            {/* Career Vision Card */}
            <div className="p-5 rounded-xl bg-gradient-to-r from-emerald-950/40 via-teal-950/20 to-slate-900/40 border border-emerald-500/20">
              <div className="flex items-center gap-2 text-emerald-400 font-semibold text-sm mb-2">
                <Target className="w-4 h-4" />
                <span>Career Vision</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {personalData.vision}
              </p>
            </div>
          </div>

          {/* Right Credentials Column */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Quick Badges Card */}
            <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-4">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Award className="w-4 h-4 text-emerald-400" />
                Honors & Accreditations
              </h3>

              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-950/60 border border-slate-800/60">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center shrink-0">
                    <GraduationCap className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider">PEC Registered Engineer</h4>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Accredited by Pakistan Engineering Council as a professional Computer Engineer.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-950/60 border border-slate-800/60">
                  <div className="w-8 h-8 rounded-lg bg-teal-500/10 flex items-center justify-center shrink-0">
                    <BookOpen className="w-4 h-4 text-teal-400" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider">Hafiz-e-Quran</h4>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Completed full memorization of the Holy Quran, fostering immense discipline and focus.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-950/60 border border-slate-800/60">
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center shrink-0">
                    <CheckCircle className="w-4 h-4 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider">Academic First Division</h4>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Consistent First Division throughout Matriculation (87.8%), Intermediate (64.4%), and BS Computer Engineering (CGPA 3.23).
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Info Matrix */}
            <div className="p-5 rounded-2xl bg-slate-900/50 border border-slate-800/70">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                Key Details
              </h4>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div>
                  <span className="text-slate-500 block">Location:</span>
                  <span className="text-slate-200 font-medium">Sargodha, Pakistan</span>
                </div>
                <div>
                  <span className="text-slate-500 block">Degree:</span>
                  <span className="text-slate-200 font-medium">BS Computer Eng.</span>
                </div>
                <div>
                  <span className="text-slate-500 block">Institute:</span>
                  <span className="text-slate-200 font-medium">IST (KICSIT)</span>
                </div>
                <div>
                  <span className="text-slate-500 block">Languages:</span>
                  <span className="text-slate-200 font-medium">English, Urdu</span>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Section 8: Professional Strengths ("What I Bring to the Table") */}
        <div>
          <div className="text-center mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              What I Bring to the Table
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Core working competencies and professional value I deliver to engineering teams
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {professionalStrengths.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-slate-900/40 border border-slate-800/70 hover:border-emerald-500/30 hover:bg-slate-900/70 transition-all duration-200 group"
              >
                <div className="w-10 h-10 rounded-lg bg-slate-800/80 border border-slate-700/60 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                  {getIcon(item.icon)}
                </div>
                <h4 className="text-sm font-semibold text-white mb-1.5 group-hover:text-emerald-400 transition-colors">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
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

