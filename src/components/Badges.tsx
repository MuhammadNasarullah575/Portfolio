"use client";

import { 
  Cpu, 
  Brain, 
  Code2, 
  ShieldCheck, 
  Flame, 
  Sparkles, 
  Layers 
} from "lucide-react";

export default function Badges() {
  const stickers = [
    {
      label: "AI / ML ENGINEER",
      sub: "TensorFlow & PyTorch",
      rotate: "rotate-[-5deg]",
      icon: <Brain className="w-10 h-10 text-[#00ff9c]" />,
      border: "border-[#00ff9c]/50",
      color: "text-[#00ff9c]",
    },
    {
      label: "COMPUTER VISION",
      sub: "YOLOv8 & OpenCV",
      rotate: "rotate-[6deg]",
      icon: <Flame className="w-10 h-10 text-orange-400" />,
      border: "border-orange-500/50",
      color: "text-orange-400",
    },
    {
      label: "FULL-STACK WEB",
      sub: "Next.js & React 18",
      rotate: "rotate-[-3deg]",
      icon: <Code2 className="w-10 h-10 text-[#00b3ff]" />,
      border: "border-[#00b3ff]/50",
      color: "text-[#00b3ff]",
    },
    {
      label: "PEC REGISTERED",
      sub: "Computer Engineer",
      rotate: "rotate-[8deg]",
      icon: <ShieldCheck className="w-10 h-10 text-emerald-400" />,
      border: "border-emerald-500/50",
      color: "text-emerald-400",
    },
    {
      label: "ROBOTICS & IOT",
      sub: "Arduino & Embedded",
      rotate: "rotate-[-7deg]",
      icon: <Cpu className="w-10 h-10 text-purple-400" />,
      border: "border-purple-500/50",
      color: "text-purple-400",
    },
  ];

  return (
    <section id="stickers" className="max-w-7xl mx-auto px-6 py-24 border-b border-[#1f2933]">
      <div className="mb-14">
        <p className="font-mono text-[#00ff9c] text-xs tracking-[0.5em] mb-4 uppercase">
          08. ENGINEER_BADGES & CREDENTIALS
        </p>
        <h2 className="font-header text-3xl sm:text-4xl font-bold text-white">
          Accreditation & Competency Seals
        </h2>
        <p className="mt-2 text-[#9da7b3] font-mono text-xs sm:text-sm">
          Certified engineering proficiencies and verified disciplinary domains.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 items-center">
        {stickers.map((s, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center text-center group cursor-pointer"
          >
            <div
              className={`w-32 h-32 sm:w-36 sm:h-36 rounded-2xl bg-[#0d1117] border-2 ${s.border} p-4 flex flex-col items-center justify-center gap-2 transition-all duration-300 transform ${s.rotate} group-hover:rotate-0 group-hover:scale-110 shadow-lg group-hover:shadow-[0_0_25px_rgba(0,255,156,0.25)]`}
            >
              <div className="group-hover:scale-110 transition-transform duration-300">
                {s.icon}
              </div>
              <span className="font-mono text-[9px] text-[#9da7b3] uppercase tracking-wider">
                {s.sub}
              </span>
            </div>

            <span className={`font-mono text-xs font-bold mt-4 tracking-wider ${s.color}`}>
              {s.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

