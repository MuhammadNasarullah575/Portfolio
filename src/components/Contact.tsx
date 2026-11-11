"use client";

import { useState } from "react";
import { personalData } from "@/data/portfolioData";
import { 
  Terminal, 
  Send, 
  Copy, 
  Check, 
  Mail, 
  MapPin, 
  Github, 
  Linkedin, 
  ExternalLink, 
  Phone 
} from "lucide-react";

interface ContactProps {
  preselectedService?: string;
}

export default function Contact({ preselectedService }: ContactProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: preselectedService || "AI & Machine Learning Solutions",
    subject: "",
    message: "",
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoSubject = encodeURIComponent(
      `[Portfolio Inquiry - ${formData.service}] ${formData.subject || "Collaboration"}`
    );
    const mailtoBody = encodeURIComponent(
      `Hi Engr. Muhammad Nasarullah,\n\nName: ${formData.name}\nEmail: ${formData.email}\nService: ${formData.service}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${personalData.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="max-w-7xl mx-auto px-4 py-24">
      {/* Outer Hardware Chassis Frame */}
      <div className="relative group p-1 bg-[#1a1f26] border-[6px] sm:border-[8px] border-[#1f2933] rounded-xl shadow-2xl">
        
        {/* Hardware Status Header Tabs */}
        <div className="absolute top-[-20px] left-6 sm:left-10 flex gap-2 z-20">
          <div className="w-12 h-4 bg-[#1f2933] rounded-t-md flex items-center justify-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#00ff9c]" />
          </div>
          <div className="px-3 py-0.5 bg-[#1f2933] rounded-t-md font-mono text-[8px] text-[#00ff9c]/90 uppercase tracking-wider font-bold">
            Comm_Link_01 // SECURE_PORT_22
          </div>
        </div>

        {/* Inner Terminal Chassis */}
        <div className="relative bg-[#0d1117] border border-[#1f2933] rounded-sm p-6 sm:p-12 text-center overflow-hidden">
          
          {/* Scanline Grid Pattern */}
          <div
            className="absolute inset-0 pointer-events-none opacity-5"
            style={{
              backgroundImage: "linear-gradient(#00ff9c 1px, transparent 1px)",
              backgroundSize: "100% 4px",
            }}
          />

          {/* Circuit PCB Trace Overlay Vectors */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M0 40 H120 V120 M300 0 V60 H350 M700 80 H850 V180 M950 0 V110 H1100"
                stroke="#00ff9c"
                strokeWidth="1.5"
                fill="none"
              />
              <circle cx="120" cy="120" r="3" fill="#00ff9c" />
              <circle cx="350" cy="60" r="3" fill="#00ff9c" />
              <circle cx="850" cy="180" r="3" fill="#00ff9c" />
            </svg>
          </div>

          <div className="relative z-10 max-w-4xl mx-auto">
            
            {/* Glowing Terminal Icon */}
            <div className="relative inline-block mb-6">
              <div className="absolute inset-0 bg-[#00ff9c] blur-xl opacity-20" />
              <Terminal className="relative w-12 sm:w-14 h-12 sm:h-14 text-[#00ff9c] mx-auto" />
            </div>

            {/* Bold Headline */}
            <h2 className="font-header text-3xl sm:text-5xl md:text-6xl mb-4 tracking-tight text-white uppercase italic font-black">
              READY TO{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff9c] to-[#00b3ff] drop-shadow-[0_0_15px_rgba(0,255,156,0.4)]">
                BOOT
              </span>
              <br />
              YOUR NEXT PROJECT?
            </h2>

            {/* Subtitle */}
            <p className="max-w-xl mx-auto text-[#9da7b3] text-sm sm:text-base mb-8 font-mono tracking-tight leading-relaxed">
              // CURRENT_STATUS: <span className="text-[#00ff9c]">LISTENING_FOR_INPUT</span><br />
              AI, Computer Vision, Full-Stack, & Hardware challenges accepted.
            </p>

            {/* Quick Action Strip (Copy Email & Direct Actions) */}
            <div className="flex flex-wrap items-center justify-center gap-3 mb-10 font-mono text-xs">
              <button
                onClick={handleCopyEmail}
                className="px-4 py-2 border border-[#1f2933] bg-[#050505] text-[#9da7b3] hover:border-[#00ff9c] hover:text-[#00ff9c] transition-colors rounded-sm flex items-center gap-2"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[#00ff9c]" />
                    <span className="text-[#00ff9c]">COPIED_TO_CLIPBOARD</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>COPY_EMAIL: {personalData.email}</span>
                  </>
                )}
              </button>

              <span className="text-[#555] hidden sm:inline">|</span>

              <span className="text-[#9da7b3] flex items-center gap-1 text-xs">
                <MapPin className="w-3 h-3 text-[#00ff9c]" />
                Sargodha, Punjab, Pakistan
              </span>
            </div>

            {/* Interactive Form */}
            <div className="max-w-2xl mx-auto bg-[#050505]/90 border border-[#1f2933] p-6 sm:p-8 rounded-sm text-left">
              <form onSubmit={handleSubmit} className="space-y-4 font-mono text-xs">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[#9da7b3] mb-1.5 uppercase tracking-wider">
                      &gt; SENDER_NAME *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#0d1117] border border-[#1f2933] text-white focus:border-[#00ff9c] focus:outline-none transition rounded-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-[#9da7b3] mb-1.5 uppercase tracking-wider">
                      &gt; RETURN_EMAIL *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. client@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#0d1117] border border-[#1f2933] text-white focus:border-[#00ff9c] focus:outline-none transition rounded-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[#9da7b3] mb-1.5 uppercase tracking-wider">
                      &gt; SYSTEM_REQUIREMENT
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#0d1117] border border-[#1f2933] text-white focus:border-[#00ff9c] focus:outline-none transition rounded-sm"
                    >
                      <option value="AI & Machine Learning Solutions">AI & Computer Vision</option>
                      <option value="Full-Stack Web Development">Full-Stack Web Platform</option>
                      <option value="Web Scraping & Data Solutions">Automated Scraping & ETL</option>
                      <option value="Robotics & IoT Prototyping">Robotics & IoT Prototyping</option>
                      <option value="Full-Time Engineering Hire">Full-Time Hiring Offer</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[#9da7b3] mb-1.5 uppercase tracking-wider">
                      &gt; SUBJECT
                    </label>
                    <input
                      type="text"
                      placeholder="Project Scope..."
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#0d1117] border border-[#1f2933] text-white focus:border-[#00ff9c] focus:outline-none transition rounded-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[#9da7b3] mb-1.5 uppercase tracking-wider">
                    &gt; TRANSMISSION_PAYLOAD (MESSAGE) *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Provide functional specs, algorithm constraints, or engagement requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#0d1117] border border-[#1f2933] text-white focus:border-[#00ff9c] focus:outline-none transition rounded-sm resize-none font-sans"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#00ff9c] text-black font-header font-black text-sm uppercase tracking-widest hover:shadow-[0_0_30px_rgba(0,255,156,0.5)] transition-all duration-300 rounded-sm flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  <span>Initiate_Contact.exe</span>
                </button>
              </form>
            </div>

            {/* Telemetry Footer */}
            <div className="mt-14 pt-8 border-t border-[#1f2933] flex flex-wrap justify-center gap-6 sm:gap-8 text-[#555] font-mono text-[9px] uppercase tracking-[0.2em]">
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#00ff9c] rounded-full animate-ping" />
                <span className="text-[#9da7b3]">Status: Available</span>
              </span>
              <span>Link: <span className="text-[#00ff9c]">Encrypted</span></span>
              <span>Protocol: <span className="text-[#00ff9c]">AES-256</span></span>
              <span>Lat: <span className="text-[#00ff9c]">0ms</span></span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
