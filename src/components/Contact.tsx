"use client";

import { useState } from "react";
import { personalData } from "@/data/portfolioData";
import { 
  Mail, 
  MapPin, 
  Send, 
  Check, 
  Copy, 
  Github, 
  Linkedin, 
  ExternalLink, 
  Sparkles, 
  MessageSquare, 
  Phone 
} from "lucide-react";

interface ContactProps {
  preselectedService?: string;
}

export default function Contact({ preselectedService }: ContactProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: preselectedService || "AI/ML Solutions",
    subject: "",
    message: ""
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
    // Generate mailto link
    const mailtoSubject = encodeURIComponent(
      `[Portfolio Inquiry - ${formData.service}] ${formData.subject || "Collaboration Opportunity"}`
    );
    const mailtoBody = encodeURIComponent(
      `Hi Muhammad Nasarullah,\n\nName: ${formData.name}\nEmail: ${formData.email}\nService Interest: ${formData.service}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${personalData.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-24 relative border-t border-slate-900 bg-slate-950/80">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono uppercase tracking-wider mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            Start A Conversation
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Let's Connect & Build Together
          </h2>
          <p className="text-slate-400 max-w-xl text-sm sm:text-base mt-2">
            Have a project idea, collaboration opportunity, or an interesting technical challenge? Let's explore how we can engineer meaningful solutions together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Info Column */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Email Card with 1-Click Copy */}
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-emerald-500/30 transition-all">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-emerald-400" />
                  Direct Email
                </span>
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1 text-xs font-mono text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>
              <a
                href={`mailto:${personalData.email}`}
                className="text-base sm:text-lg font-bold text-white hover:text-emerald-400 transition-colors break-all"
              >
                {personalData.email}
              </a>
              <p className="text-xs text-slate-400 mt-2">
                Usually responds within 12–24 hours for project inquiries.
              </p>
            </div>

            {/* Location & Presence */}
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-400 block uppercase">Location</span>
                    <span className="text-sm font-semibold text-white">
                      {personalData.location}
                    </span>
                    <span className="text-xs text-slate-500 block mt-0.5">
                      Available for remote, hybrid, & on-site engagements
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social & Platform Channels */}
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block">
                Professional Channels
              </span>

              <div className="space-y-2.5">
                <a
                  href={personalData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-950/70 hover:bg-slate-800 border border-slate-800 hover:border-cyan-500/40 transition-all text-xs group"
                >
                  <div className="flex items-center gap-2.5">
                    <Linkedin className="w-4 h-4 text-cyan-400" />
                    <span className="font-semibold text-white group-hover:text-cyan-300">
                      LinkedIn Profile
                    </span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-400" />
                </a>

                <a
                  href={personalData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-950/70 hover:bg-slate-800 border border-slate-800 hover:border-emerald-500/40 transition-all text-xs group"
                >
                  <div className="flex items-center gap-2.5">
                    <Github className="w-4 h-4 text-emerald-400" />
                    <span className="font-semibold text-white group-hover:text-emerald-300">
                      GitHub Repositories
                    </span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-emerald-400" />
                </a>

                <a
                  href={personalData.fiverr}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-950/70 hover:bg-slate-800 border border-slate-800 hover:border-emerald-500/40 transition-all text-xs group"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-bold flex items-center justify-center">
                      fi
                    </span>
                    <span className="font-semibold text-white group-hover:text-emerald-300">
                      Fiverr Profile
                    </span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-emerald-400" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-emerald-400" />
                Send a Message
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-6">
                Fill out the details below to dispatch an email inquiry directly to my inbox.
              </p>

              {submitted && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Email client opened! You can review and hit send directly to reach me.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 focus:border-emerald-500 focus:outline-none text-xs sm:text-sm text-white placeholder-slate-600 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 focus:border-emerald-500 focus:outline-none text-xs sm:text-sm text-white placeholder-slate-600 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Service / Project Type
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 focus:border-emerald-500 focus:outline-none text-xs sm:text-sm text-white transition-colors"
                    >
                      <option value="AI & Machine Learning Solutions">AI & Machine Learning</option>
                      <option value="Full-Stack Web Development">Full-Stack Web Development</option>
                      <option value="Web Scraping & Data Solutions">Web Scraping & Data Solutions</option>
                      <option value="Robotics & IoT Prototyping">Robotics & IoT Prototyping</option>
                      <option value="Full-Time Hiring / Contract Opportunity">Full-Time / Contract Role</option>
                      <option value="General Technical Consultation">General Consultation</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. New Project Discussion"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 focus:border-emerald-500 focus:outline-none text-xs sm:text-sm text-white placeholder-slate-600 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Your Message / Requirements *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell me about your project goals, timelines, or technology requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 focus:border-emerald-500 focus:outline-none text-xs sm:text-sm text-white placeholder-slate-600 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-slate-950 font-bold text-sm transition-all duration-200 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/35 hover:-translate-y-0.5"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message via Email</span>
                </button>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

