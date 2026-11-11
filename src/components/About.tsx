"use client";

import { personalData } from "@/data/portfolioData";
import { 
  Cpu, 
  Eye, 
  Terminal, 
  ShieldCheck, 
  BookOpen, 
  Award, 
  GraduationCap, 
  Layers, 
  ArrowUpRight, 
  Binary, 
  Activity 
} from "lucide-react";

export default function About() {
  const services = [
    {
      code: "SRV_01",
      title: "Computer Vision & YOLOv8",
      desc: "Real-time hazard detection, video tracking with Kalman filtering, OpenCV image pipelines, and high-FPS edge inference models.",
      tech: "YOLOv8 // OpenCV // CVZone // Python"
    },
    {
      code: "SRV_02",
      title: "Full-Stack Web Development",
      desc: "Engineering responsive web applications, high-converting e-commerce platforms, and intuitive administrative SaaS dashboards.",
      tech: "Next.js // React // Tailwind // Vercel"
    },
    {
      code: "SRV_03",
      title: "FinTech & Predictive ML",
      desc: "Quantitative stock market risk models, FINRA short interest analysis, RSI/MACD indicators, and probabilistic regime forecasting.",
      tech: "Python // Scikit-learn // Pandas // Streamlit"
    },
    {
      code: "SRV_04",
      title: "NLP & Semantic Transformers",
      desc: "High-dimensional text embeddings with Sentence-Transformers (MiniLM), news sentiment modeling, and BiLSTM neural classifiers.",
      tech: "DistilBART // MiniLM // BiLSTM // PostgreSQL"
    },
    {
      code: "SRV_05",
      title: "Automated Data Scraping & ETL",
      desc: "Resilient automated Python harvesting pipelines, dynamic browser automation with Playwright, and structured data extraction.",
      tech: "Playwright // BeautifulSoup // Pandas // APIs"
    },
    {
      code: "SRV_06",
      title: "Robotics & IoT Prototyping",
      desc: "Microcontroller firmware in C/C++, sensor telemetry integration, UART serial communication, and smart actuator controllers.",
      tech: "Arduino Uno // C/C++ // Sensors // Embedded"
    }
  ];

  return (
    <section id="about" className="max-w-7xl mx-auto px-6 py-24 border-b border-[#1f2933]">
      
      {/* Top Profile Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Column: Story & Narrative */}
        <div className="lg:col-span-7">
          <p className="font-mono text-[#00ff9c] text-xs tracking-[0.5em] mb-4 uppercase">
            01. PROFILE_OVERVIEW
          </p>

          <h2 className="font-header text-3xl sm:text-5xl mb-6 font-bold leading-tight text-white">
            Engineering{" "}
            <span className="text-[#00ff9c] drop-shadow-[0_0_12px_rgba(0,255,156,0.4)]">
              Intelligent Systems
            </span>{" "}
            for a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff9c] to-[#00b3ff]">
              Smarter World
            </span>.
          </h2>

          <div className="space-y-4 text-[#9da7b3] leading-relaxed text-sm sm:text-base font-sans">
            <p>
              I am <strong className="text-white">Engr. Muhammad Nasarullah</strong>, an 
              <strong className="text-[#00ff9c]"> AI/ML Engineer</strong> and 
              <strong className="text-[#00b3ff]"> Full-Stack Web Developer</strong> with a Bachelor's degree in 
              Computer Engineering from the <strong className="text-white">Institute of Space Technology (IST), KICSIT</strong> (CGPA 3.23 / 4.00), maintaining a continuous First Division record throughout my academic sessions.
            </p>

            <p>
              I combine the mathematical rigor of machine learning, deep learning, and computer vision with modern full-stack web engineering. My portfolio includes real-time hazardous fire & smoke detection engines (YOLOv8), financial market risk classifiers (US stocks & FINRA metrics), transformer-based NLP news sentiment predictors, and production e-commerce platforms.
            </p>

            <p>
              Additionally, I served as a <strong>Tech Fellow</strong> under the Federal Directorate of Education's <em>Disruptive Education</em> initiative, conducting hands-on engineering labs in robotics, Arduino programming, sensors, and IoT hardware prototyping.
            </p>
          </div>

          {/* Academic & Professional Distinction Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-8 font-mono text-xs">
            <div className="p-3 bg-[#0d1117] border border-[#1f2933] hover:border-[#00ff9c] transition-colors flex items-center gap-2.5">
              <ShieldCheck className="w-4 h-4 text-[#00ff9c] shrink-0" />
              <div>
                <span className="text-[10px] text-[#555] block">ACCREDITATION</span>
                <span className="text-white font-bold">PEC Registered</span>
              </div>
            </div>

            <div className="p-3 bg-[#0d1117] border border-[#1f2933] hover:border-[#00ff9c] transition-colors flex items-center gap-2.5">
              <BookOpen className="w-4 h-4 text-[#00ff9c] shrink-0" />
              <div>
                <span className="text-[10px] text-[#555] block">HONOR</span>
                <span className="text-white font-bold">Hafiz-e-Quran</span>
              </div>
            </div>

            <div className="p-3 bg-[#0d1117] border border-[#1f2933] hover:border-[#00b3ff] transition-colors flex items-center gap-2.5">
              <Award className="w-4 h-4 text-[#00b3ff] shrink-0" />
              <div>
                <span className="text-[10px] text-[#555] block">MERIT</span>
                <span className="text-white font-bold">First Division</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: 3D Holographic AI Neural Core */}
        <div className="lg:col-span-5 relative flex justify-center items-center py-8">
          <div className="absolute w-80 h-80 bg-[#00ff9c]/10 rounded-full blur-[110px] animate-pulse pointer-events-none" />

          <div className="cyber-3d-wrapper">
            <div className="cyber-card">
              <div className="w-full h-full rounded-2xl bg-[#0d1117] border border-[#00ff9c]/40 shadow-[0_0_30px_rgba(0,255,156,0.2)] p-6 flex flex-col justify-between relative overflow-hidden backdrop-blur-xl">
                
                {/* Background Scanline Pattern */}
                <div className="absolute inset-0 pointer-events-none opacity-10 bg-[linear-gradient(#00ff9c_1px,transparent_1px)] bg-[size:100%_4px]" />

                {/* HUD Top Bar */}
                <div className="flex justify-between items-center font-mono text-[10px] text-[#00ff9c] pb-3 border-b border-[#1f2933] relative z-10">
                  <span className="flex items-center gap-1.5">
                    <Activity className="w-3.5 h-3.5 animate-pulse" />
                    AI_CORE_ONLINE
                  </span>
                  <span className="text-[#9da7b3]">LAT: 12ms // 60FPS</span>
                </div>

                {/* Central Futuristic Visualization */}
                <div className="relative my-auto flex flex-col items-center justify-center z-10 py-4">
                  {/* Concentric Rotating Rings */}
                  <div className="w-40 h-40 rounded-full border-2 border-dashed border-[#00ff9c]/40 flex items-center justify-center animate-[spin_20s_linear_infinite] relative">
                    <div className="w-32 h-32 rounded-full border border-[#00b3ff]/50 flex items-center justify-center animate-[spin_12s_linear_infinite_reverse]">
                      <div className="w-20 h-20 rounded-full bg-[#00ff9c]/10 border border-[#00ff9c] flex items-center justify-center shadow-[0_0_20px_rgba(0,255,156,0.5)]">
                        <Cpu className="w-10 h-10 text-[#00ff9c]" />
                      </div>
                    </div>
                  </div>

                  {/* Simulated HUD Detection Boxes */}
                  <div className="absolute top-2 left-2 px-2 py-0.5 rounded bg-black/80 border border-red-500/80 font-mono text-[9px] text-red-400">
                    [YOLOv8] HAZARD_DETECT: 98.4%
                  </div>
                  <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-black/80 border border-[#00ff9c]/80 font-mono text-[9px] text-[#00ff9c]">
                    [MODEL] LIGHTGBM: SPIKE_CONF 92%
                  </div>
                </div>

                {/* HUD Footer Telemetry */}
                <div className="font-mono text-[10px] text-[#9da7b3] pt-3 border-t border-[#1f2933] flex justify-between items-center relative z-10">
                  <span>CORE: IST_CE_2026</span>
                  <span className="text-[#00ff9c] font-bold">READY_TO_DEPLOY</span>
                </div>

              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Services Grid (6 Cyber Cards with Hover Elevation & Glow) */}
      <div className="mt-20">
        <div className="mb-8">
          <p className="font-mono text-[#00ff9c] text-xs tracking-[0.3em] uppercase mb-1">
            CAPABILITIES & SPECIALIZATIONS
          </p>
          <h3 className="font-header text-2xl sm:text-3xl font-bold text-white">
            Engineering Solutions I Deliver
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((srv) => (
            <div
              key={srv.code}
              className="border border-[#00ff9c]/20 p-6 bg-[#0b1120]/60 backdrop-blur-sm hover:border-[#00ff9c] hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(0,255,156,0.18)] transition-all duration-300 rounded-sm flex flex-col justify-between group"
            >
              <div>
                <span className="font-mono text-[#00ff9c] text-xs tracking-widest block mb-2">
                  {srv.code}
                </span>
                <h4 className="text-white text-lg font-bold font-header mb-3 group-hover:text-[#00ff9c] transition-colors">
                  {srv.title}
                </h4>
                <p className="text-[#9da7b3] text-sm leading-relaxed mb-6 font-sans">
                  {srv.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-[#1f2933] font-mono text-[11px] text-[#00ff9c]/80">
                &gt; {srv.tech}
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
