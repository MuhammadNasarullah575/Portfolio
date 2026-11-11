"use client";

import { 
  Brain, 
  Code2, 
  Database, 
  Cpu, 
  Wrench, 
  Layers, 
  Terminal, 
  Network 
} from "lucide-react";

export default function Skills() {
  const categories = [
    {
      title: "AI & COMPUTER VISION",
      tag: "AI_CV_CORE",
      icon: <Brain className="w-8 h-8 text-[#00ff9c]" />,
      skills: [
        { name: "YOLOv8 Object Detection", level: "92%" },
        { name: "OpenCV & Video Processing", level: "90%" },
        { name: "Machine Learning (Scikit-learn)", level: "88%" },
        { name: "Natural Language Processing (NLP)", level: "85%" },
        { name: "Deep Learning (TensorFlow/Keras)", level: "80%" },
        { name: "Sentence Transformers (MiniLM)", level: "84%" },
      ],
    },
    {
      title: "WEB & FULL-STACK DEV",
      tag: "SOFTWARE_DEV",
      icon: <Code2 className="w-8 h-8 text-[#00ff9c]" />,
      skills: [
        { name: "Next.js (App Router)", level: "90%" },
        { name: "React.js Ecosystem", level: "92%" },
        { name: "JavaScript (ES6+) & TypeScript", level: "88%" },
        { name: "Tailwind CSS & Modern UI", level: "95%" },
        { name: "REST APIs & Backend Routes", level: "86%" },
        { name: "PostgreSQL & SQL Databases", level: "82%" },
      ],
    },
    {
      title: "DATA SCIENCE & AUTOMATION",
      tag: "DATA_ENGINEERING",
      icon: <Database className="w-8 h-8 text-[#00ff9c]" />,
      skills: [
        { name: "Python Scripting & Automation", level: "94%" },
        { name: "Web Scraping (Playwright, BS4)", level: "92%" },
        { name: "Pandas & NumPy Data Wrangling", level: "90%" },
        { name: "Streamlit Dashboard Architecture", level: "88%" },
        { name: "Financial Data & FINRA Short Metrics", level: "85%" },
        { name: "Data Cleaning & Normalization", level: "90%" },
      ],
    },
    {
      title: "ROBOTICS & EMBEDDED SYSTEMS",
      tag: "HARDWARE_IOT",
      icon: <Cpu className="w-8 h-8 text-[#00ff9c]" />,
      skills: [
        { name: "Arduino Uno & Microcontrollers", level: "90%" },
        { name: "Sensor Telemetry & Actuators", level: "88%" },
        { name: "UART Serial Communication", level: "85%" },
        { name: "Embedded C / C++ Basics", level: "82%" },
        { name: "Digital Circuits & Power Relays", level: "84%" },
        { name: "OLED & LCD Display Interfacing", level: "86%" },
      ],
    },
    {
      title: "PLATFORMS, TOOLS & DEVOPS",
      tag: "TOOLCHAIN_v2",
      icon: <Wrench className="w-8 h-8 text-[#00ff9c]" />,
      skills: [
        { name: "Git & GitHub Version Control", level: "92%" },
        { name: "Vercel Production Deployment", level: "90%" },
        { name: "VS Code & Remote Environments", level: "95%" },
        { name: "Google Colab & GPU Compute", level: "92%" },
        { name: "Jupyter Notebook & Data Labs", level: "90%" },
        { name: "XAMPP & Local Server Stacks", level: "85%" },
      ],
    },
    {
      title: "ENGINEERING DISCIPLINES",
      tag: "CORE_DISCIPLINE",
      icon: <Network className="w-8 h-8 text-[#00ff9c]" />,
      skills: [
        { name: "Computer Engineering (IST / KICSIT)", level: "CGPA 3.23" },
        { name: "PEC Registered Engineer", level: "Accredited" },
        { name: "STEM & Robotics Fellowship (FDE)", level: "Fellow" },
        { name: "Analytical Problem Solving", level: "Advanced" },
        { name: "Technical Mentorship & Teaching", level: "Verified" },
        { name: "Continuous Experimentation", level: "100%" },
      ],
    },
  ];

  return (
    <section id="skills" className="max-w-7xl mx-auto px-6 py-24 border-b border-[#1f2933]">
      <div className="mb-14">
        <p className="font-mono text-[#00ff9c] text-xs tracking-[0.5em] mb-4 uppercase">
          05. TECHNICAL_STACK
        </p>
        <h2 className="font-header text-3xl sm:text-4xl font-bold text-white text-left">
          Engineering Toolchain & Stack
        </h2>
        <p className="text-[#9da7b3] font-mono text-xs sm:text-sm mt-2">
          Hardware and software competencies validated across machine learning, web systems, and IoT.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat) => (
          <div
            key={cat.title}
            className="p-6 sm:p-7 bg-[#0d1117] border border-[#1f2933] hover:border-[#00ff9c]/50 transition-all duration-300 group relative overflow-hidden rounded-sm hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(0,255,156,0.15)]"
          >
            {/* Top Right Floating Glowing Icon */}
            <div className="absolute top-0 right-0 p-3 opacity-15 group-hover:opacity-100 transition-opacity">
              {cat.icon}
            </div>

            <div className="font-mono text-[10px] text-[#555] uppercase mb-1">
              &gt; {cat.tag}
            </div>

            <h4 className="font-header text-[#00ff9c] text-base font-bold mb-5 tracking-tight">
              {cat.title}
            </h4>

            <ul className="font-mono text-xs sm:text-[13px] space-y-3 text-[#9da7b3]">
              {cat.skills.map((skill) => (
                <li key={skill.name} className="flex items-center justify-between gap-2">
                  <span className="flex items-center gap-2 text-slate-200">
                    <span className="w-1.5 h-1.5 bg-[#00ff9c] rounded-none shrink-0" />
                    <span>{skill.name}</span>
                  </span>
                  <span className="text-[10px] text-[#555] border border-[#1f2933] px-1.5 py-0.5 bg-[#050505]">
                    {skill.level}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
