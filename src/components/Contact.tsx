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
  MessageCircle, 
  ArrowRight,
  Loader2,
  CheckCircle2,
  AlertCircle
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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${personalData.email}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          Name: formData.name,
          Email: formData.email,
          Service: formData.service,
          Subject: formData.subject || "Portfolio Inquiry",
          Message: formData.message,
          _subject: `[Portfolio Inquiry] ${formData.subject || formData.service} - from ${formData.name}`,
          _replyto: formData.email,
          _template: "table",
          _captcha: "false",
        }),
      });

      const data = await response.json().catch(() => ({}));

      if (response.ok || data.success === "true" || data.success === true) {
        setIsSuccess(true);
      } else {
        if (data.message && data.message.includes("Activation")) {
          setIsSuccess(true);
        } else {
          throw new Error(data.message || "Failed to deliver message directly.");
        }
      }
    } catch (err: any) {
      console.error("Form submission error:", err);
      setErrorMessage(
        err.message || "Network issue occurred while transmitting. You can also reach me directly via WhatsApp or Email."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative border-t border-slate-200/80 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800/80 text-indigo-600 dark:text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Get in Touch</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Let's Build Something Meaningful Together
          </h2>

          <p className="text-slate-600 dark:text-slate-400 max-w-2xl text-sm sm:text-base mt-3 leading-relaxed">
            Have a project idea, collaboration opportunity, or engineering challenge? I would love to connect and explore how we can build innovative solutions together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
          
          {/* Left Info Column */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Direct Email Card with 1-Click Copy */}
            <div className="p-7 rounded-3xl bg-white dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:border-indigo-300 dark:hover:border-indigo-500/50 transition">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                  <span>Direct Email</span>
                </span>
                
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 cursor-pointer"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                      <span className="text-emerald-600 dark:text-emerald-400">Copied!</span>
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
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${personalData.email}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-base sm:text-lg font-bold text-slate-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition break-all"
                title={`Email: ${personalData.email}`}
              >
                {personalData.email}
              </a>
              
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
                Usually responds within 12–24 hours for project inquiries.
              </p>
            </div>

            {/* Location & Presence */}
            <div className="p-7 rounded-3xl bg-white dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-indigo-50 dark:bg-slate-800 flex items-center justify-center shrink-0 border border-indigo-100 dark:border-slate-700">
                  <MapPin className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                    Location & Remote Availability
                  </span>
                  <span className="text-sm sm:text-base font-bold text-slate-900 dark:text-white block mt-0.5">
                    {personalData.location}
                  </span>
                  <span className="text-xs text-slate-500 dark:text-slate-400 block mt-1">
                    Available for Remote, Hybrid & On-Site Engineering roles
                  </span>
                </div>
              </div>
            </div>

            {/* Professional Channels */}
            <div className="p-7 rounded-3xl bg-white dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
                Professional Profiles
              </span>

              <a
                href={personalData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 hover:bg-indigo-50 dark:hover:bg-slate-800 border border-slate-200/60 dark:border-slate-700/80 text-xs font-semibold text-slate-800 dark:text-slate-200 hover:text-indigo-600 transition group"
              >
                <div className="flex items-center gap-3">
                  <Linkedin className="w-4 h-4 text-blue-600" />
                  <span>LinkedIn Profile</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-indigo-600" />
              </a>

              <a
                href={personalData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 hover:bg-indigo-50 dark:hover:bg-slate-800 border border-slate-200/60 dark:border-slate-700/80 text-xs font-semibold text-slate-800 dark:text-slate-200 hover:text-indigo-600 transition group"
              >
                <div className="flex items-center gap-3">
                  <Github className="w-4 h-4 text-slate-900 dark:text-white" />
                  <span>GitHub Repositories</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-indigo-600" />
              </a>

              <a
                href={personalData.fiverr}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 hover:bg-emerald-50 dark:hover:bg-slate-800 border border-slate-200/60 dark:border-slate-700/80 text-xs font-semibold text-slate-800 dark:text-slate-200 hover:text-emerald-600 transition group"
              >
                <div className="flex items-center gap-3">
                  <span className="w-4 h-4 rounded-full bg-emerald-600 text-white text-[9px] font-bold flex items-center justify-center">
                    fi
                  </span>
                  <span>Fiverr Client Services</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-emerald-600" />
              </a>

              <a
                href={personalData.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 hover:bg-emerald-50 dark:hover:bg-slate-800 border border-slate-200/60 dark:border-slate-700/80 text-xs font-semibold text-slate-800 dark:text-slate-200 hover:text-emerald-600 transition group"
                title={`Chat on WhatsApp: ${personalData.phone}`}
              >
                <div className="flex items-center gap-3">
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  <span>WhatsApp Direct Connect</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-emerald-600" />
              </a>
            </div>

          </div>

          {/* Right Message Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-9 rounded-3xl bg-white dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 shadow-sm">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                <span>Send a Message</span>
              </h3>
              
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-6">
                Feel free to reach out for project inquiries, collaborations, or engineering roles.
              </p>

              {isSuccess ? (
                <div className="py-8 px-4 text-center animate-in fade-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/80 border border-emerald-300 dark:border-emerald-700 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto mb-5 shadow-inner">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>
                  
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-3">
                    Message Sent
                  </span>

                  <h4 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-2">
                    Thank You, {formData.name || "there"}!
                  </h4>

                  <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto leading-relaxed mb-6">
                    Your message regarding <strong className="text-slate-900 dark:text-white">{formData.service}</strong> has been sent successfully. I will get back to you within <span className="font-semibold text-indigo-600 dark:text-indigo-400">12–24 hours</span>.
                  </p>

                  <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 max-w-sm mx-auto text-left text-xs space-y-1.5 mb-7">
                    <div className="text-slate-500"><strong>Sender:</strong> {formData.email}</div>
                    <div className="text-slate-500"><strong>Service:</strong> {formData.service}</div>
                    {formData.subject && (
                      <div className="text-slate-500"><strong>Subject:</strong> {formData.subject}</div>
                    )}
                  </div>

                  <button
                    onClick={() => {
                      setIsSuccess(false);
                      setFormData({
                        name: "",
                        email: "",
                        service: preselectedService || "AI & Machine Learning Solutions",
                        subject: "",
                        message: "",
                      });
                    }}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs font-bold hover:bg-indigo-600 dark:hover:bg-indigo-500 dark:hover:text-white transition shadow-sm cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {errorMessage && (
                    <div className="p-4 rounded-2xl bg-red-50 dark:bg-red-950/50 border border-red-200 dark:border-red-800 text-red-800 dark:text-red-300 text-xs flex items-start gap-2.5">
                      <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                      <div>
                        <span>{errorMessage}</span>
                        <div className="mt-2">
                          <a
                            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${personalData.email}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline font-bold text-indigo-600 dark:text-indigo-400"
                          >
                            Click here to send via Gmail
                          </a>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        disabled={isSubmitting}
                        placeholder="e.g. Alex Henderson"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-xs sm:text-sm focus:border-indigo-500 focus:outline-none transition shadow-sm disabled:opacity-60"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                        Your Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        disabled={isSubmitting}
                        placeholder="e.g. alex@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-xs sm:text-sm focus:border-indigo-500 focus:outline-none transition shadow-sm disabled:opacity-60"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                        Service / Project Type
                      </label>
                      <select
                        value={formData.service}
                        disabled={isSubmitting}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-xs sm:text-sm focus:border-indigo-500 focus:outline-none transition shadow-sm disabled:opacity-60"
                      >
                        <option value="AI & Machine Learning Solutions">AI & Computer Vision</option>
                        <option value="Full-Stack Web Development">Full-Stack Web Development</option>
                        <option value="Web Scraping & Data Solutions">Automated Data Scraping</option>
                        <option value="Robotics & IoT Prototyping">Robotics & IoT Prototyping</option>
                        <option value="Full-Time Hiring Offer">Full-Time Career Opportunity</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                        Subject
                      </label>
                      <input
                        type="text"
                        disabled={isSubmitting}
                        placeholder="e.g. Web Development Inquiry"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-xs sm:text-sm focus:border-indigo-500 focus:outline-none transition shadow-sm disabled:opacity-60"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                      Your Message / Requirements *
                    </label>
                    <textarea
                      required
                      disabled={isSubmitting}
                      rows={4}
                      placeholder="Provide details about your project goals, timelines, or role description..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-xs sm:text-sm focus:border-indigo-500 focus:outline-none transition resize-none shadow-sm font-sans disabled:opacity-60"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white font-bold text-sm shadow-md shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
