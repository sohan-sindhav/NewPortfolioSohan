import React, { useState } from "react";

const Hero = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("sindhavsohan710@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const techBadges = [
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "TypeScript",
    "C++ / DSA",
    "REST APIs",
    "Tailwind CSS",
  ];

  return (
    <section
      id="about"
      className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 overflow-hidden bg-radial-gradient"
    >
      {/* Background Grid & Ambient Glows */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none"></div>
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 sm:w-[550px] h-96 sm:h-[550px] bg-primary-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border border-primary-500/30 text-xs sm:text-sm font-mono text-primary-300 mb-6 shadow-glow">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
          </span>
          <span>Actively Seeking Software Development Internship</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
          Hi, I’m <span className="gradient-text-emerald">Sohan Sindhav</span>
          <br />
          <span className="gradient-text-cyber text-3xl sm:text-4xl md:text-5xl font-bold">
            Full-Stack Developer
          </span>
        </h1>

        {/* Bio Summary */}
        <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8 sm:mb-10 font-normal leading-relaxed">
          Full-stack developer with hands-on <span className="text-primary-300 font-medium">MERN</span> and <span className="text-cyber-cyan font-medium">TypeScript</span> experience, seeking a development internship. Built and deployed full-stack applications with secure authentication, REST APIs, and database design. Currently pursuing MSc in IT and practicing Data Structures & Algorithms in C++.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-10">
          <a
            href="#projects"
            className="px-6 sm:px-8 py-3 rounded-xl bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-400 hover:to-primary-500 text-obsidian-950 font-bold text-sm sm:text-base shadow-glow hover:shadow-primary-400/40 transition-all duration-300 transform hover:-translate-y-0.5"
          >
            View Projects
          </a>

          <a
            href="/SohanCV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 sm:px-8 py-3 rounded-xl glass-panel text-gray-200 hover:text-white hover:border-primary-500/40 font-semibold text-sm sm:text-base transition-all duration-300 hover:bg-white/[0.06] transform hover:-translate-y-0.5"
          >
            Download Resume ↗
          </a>

          <button
            onClick={handleCopyEmail}
            className="px-5 py-3 rounded-xl glass-panel text-gray-300 hover:text-primary-300 hover:border-primary-500/40 font-mono text-xs sm:text-sm font-semibold transition-all duration-300 hover:bg-white/[0.06] flex items-center gap-2"
            title="Copy email to clipboard"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
              />
            </svg>
            <span>{copied ? "Copied Email!" : "Copy Email"}</span>
          </button>
        </div>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
          {techBadges.map((tech) => (
            <span
              key={tech}
              className="text-xs font-mono px-3 py-1 rounded-full bg-obsidian-900/90 border border-white/[0.06] text-gray-300 hover:border-primary-500/30 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
