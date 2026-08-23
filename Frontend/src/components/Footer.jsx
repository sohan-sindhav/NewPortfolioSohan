import React from "react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 border-t border-white/[0.06] bg-obsidian-950/80 backdrop-blur-xl relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
        {/* Brand */}
        <div>
          <a
            href="#"
            className="text-base font-mono font-bold text-gray-200 hover:text-white transition-colors"
          >
            <span className="text-primary-400">&lt;</span>
            SOHANN.CODES
            <span className="text-primary-400">/&gt;</span>
          </a>
          <p className="text-xs text-gray-400 mt-1 font-sans">
            Designed & Built with modern React 19, Node.js & Tailwind CSS.
          </p>
        </div>

        {/* Links & Back to Top */}
        <div className="flex items-center gap-4 text-xs font-mono text-gray-400">
          <span>© {new Date().getFullYear()} Sohan Sindhav</span>
          <span>•</span>
          <button
            onClick={scrollToTop}
            className="text-primary-400 hover:text-primary-300 transition-colors flex items-center gap-1"
          >
            <span>Back to top</span>
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
