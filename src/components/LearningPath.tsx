"use client";

import { 
  Cpu, 
  Brain, 
  Terminal, 
  ArrowUpRight, 
  BookOpen, 
  Sparkles, 
  CheckCircle2 
} from "lucide-react";

export default function LearningPath() {
  const modules = [
    {
      code: "01_EMBEDDED_ROBOTICS",
      title: "Arduino & Circuit Architecture",
      desc: "Microcontroller architecture, C/C++ programming, series & parallel circuit principles, and UART communication protocols.",
      topics: ["Arduino Uno", "Microcontrollers", "UART Protocols", "Signal Flow"],
    },
    {
      code: "02_SENSOR_TELEMETRY",
      title: "Sensors & Actuator Control",
      desc: "Practical hands-on sensor integration including ultrasonic distance meters, OLED displays, heart rate sensors, and relays.",
      topics: ["Ultrasonic & Pulse", "OLED/LCD Displays", "Servo Motors", "Smart Relays"],
    },
    {
      code: "03_COMPUTER_VISION_AI",
      title: "Computer Vision & YOLOv8",
      desc: "Dataset labeling, model training, and real-time edge inference for hazard, fire, and object detection with OpenCV.",
      topics: ["YOLOv8 Models", "OpenCV Pipelines", "Video Tracking", "Alert Systems"],
    },
    {
      code: "04_FULLSTACK_SYSTEMS",
      title: "Next.js & Cloud Web Apps",
      desc: "Connecting hardware telemetry and ML endpoints to responsive modern web applications and SaaS control dashboards.",
      topics: ["Next.js Architecture", "RESTful Endpoints", "Vercel CI/CD", "IoT Webhooks"],
    },
  ];

  return (
    <section id="learning" className="max-w-7xl mx-auto px-6 py-24 border-b border-[#1f2933]">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-14 gap-6 text-left">
        <div className="max-w-xl">
          <p className="font-mono text-[#00ff9c] text-xs tracking-[0.5em] mb-4 uppercase">
            06. LEARNING_PATH & MENTORSHIP
          </p>
          <h2 className="font-header text-3xl sm:text-4xl font-bold text-white">
            Robotics, IoT & Practical AI
          </h2>
          <p className="text-[#9da7b3] font-mono text-xs sm:text-sm mt-2">
            Disruptive Education Tech Fellowship curriculum & STEM mentoring framework.
          </p>
        </div>

        <a
          href="https://github.com/MuhammadNasarullah575"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#00ff9c] font-mono text-xs border-b border-[#00ff9c] pb-1 hover:text-white hover:border-white transition-all inline-flex items-center gap-1.5"
        >
          <span>VIEW_ENGINEERING_REPOSITORIES</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {modules.map((m) => (
          <div
            key={m.code}
            className="p-6 bg-[#0d1117] border border-[#1f2933] hover:border-[#00ff9c]/50 transition-all duration-300 group rounded-sm flex flex-col justify-between hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(0,255,156,0.12)]"
          >
            <div>
              <span className="font-mono text-[#00ff9c] text-[11px] font-bold block mb-2">
                {m.code}
              </span>
              <h4 className="text-sm font-header text-white uppercase tracking-wider mb-2 group-hover:text-[#00ff9c] transition-colors">
                {m.title}
              </h4>
              <p className="text-xs text-[#9da7b3] leading-relaxed mb-4 font-sans">
                {m.desc}
              </p>
            </div>

            <div className="pt-3 border-t border-[#1f2933] flex flex-wrap gap-1">
              {m.topics.map((t) => (
                <span
                  key={t}
                  className="font-mono text-[9px] px-1.5 py-0.5 bg-[#050505] text-[#9da7b3] border border-[#1f2933]"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Tech Fellowship Highlight Card */}
      <div className="mt-8 p-6 bg-[#00ff9c]/5 border border-[#00ff9c]/30 rounded-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded border border-[#00ff9c]/40 bg-[#0d1117] flex items-center justify-center shrink-0">
            <BookOpen className="w-5 h-5 text-[#00ff9c]" />
          </div>
          <div>
            <h4 className="font-header text-sm text-white font-bold">
              Tech Fellow — Federal Directorate of Education (FDE) & LearnOBots
            </h4>
            <p className="text-xs text-[#9da7b3] font-mono mt-0.5">
              Empowered 30+ students through practical STEM, microcontrollers, sensor kits, and creative hardware innovation.
            </p>
          </div>
        </div>

        <a
          href="#contact"
          className="font-mono text-xs font-bold px-4 py-2 bg-[#00ff9c] text-black uppercase hover:scale-105 transition shrink-0 text-center"
        >
          REQUEST_TRAINING.sh
        </a>
      </div>
    </section>
  );
}

