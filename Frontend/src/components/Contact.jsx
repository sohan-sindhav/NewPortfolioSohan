import React, { useState } from "react";

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("sindhavsohan710@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 max-w-3xl mx-auto relative">
      <div className="glass-card rounded-3xl p-8 sm:p-10 border border-white/[0.08] shadow-2xl relative overflow-hidden text-center bg-radial-gradient">
        {/* Glow ambient */}
        <div className="absolute -top-24 -right-24 w-60 h-60 bg-primary-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
          Get in <span className="gradient-text-emerald">Touch</span>
        </h2>

        <p className="text-gray-300 text-sm sm:text-base max-w-lg mx-auto mb-8 leading-relaxed">
          I'm actively seeking a Software Development Internship and would love to discuss opportunities, projects, or connect. Feel free to reach out!
        </p>

        {/* Action Connect Grid */}
        <div className="grid sm:grid-cols-2 gap-3.5 max-w-md mx-auto mb-8">
          {/* Email Direct */}
          <a
            href="mailto:sindhavsohan710@gmail.com"
            className="flex items-center justify-center gap-2.5 px-5 py-3 rounded-xl bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-400 hover:to-primary-500 text-obsidian-950 font-bold text-sm shadow-glow transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span>Send Email</span>
          </a>

          {/* Copy Email Button */}
          <button
            onClick={handleCopyEmail}
            className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl glass-panel text-gray-200 hover:text-white hover:border-primary-500/40 font-mono text-xs sm:text-sm font-semibold transition-all duration-300 hover:bg-white/[0.06] transform hover:-translate-y-0.5"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
            </svg>
            <span>{copied ? "Copied Email!" : "Copy Email"}</span>
          </button>
        </div>

        {/* Direct Social Links */}
        <div className="flex items-center justify-center gap-5 pt-6 border-t border-white/[0.06] text-xs font-medium text-gray-400">
          <a
            href="https://www.linkedin.com/in/sohansindhav"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary-300 transition-colors flex items-center gap-1"
          >
            LinkedIn ↗
          </a>
          <span>•</span>
          <a
            href="https://github.com/sohan-sindhav"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary-300 transition-colors flex items-center gap-1"
          >
            GitHub ↗
          </a>
          <span>•</span>
          <span className="font-mono text-gray-300">sindhavsohan710@gmail.com</span>
        </div>
      </div>
    </section>
  );
};

export default Contact;
