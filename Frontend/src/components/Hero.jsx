import React, { useState, useEffect } from "react";

const Hero = () => {
  const taglines = [
    "React.FloydWarshall.Segfault",
    "Hooks.Dijkstra.Nullptr",
    "JS.Map.STL",
    "Console.Log.CoreDump",
    "NPM.Valgrind.Tears",
    "Async.BFS.Segv",
    "Promise.DP.SIGABRT",
    "Frontend.Backend.Segfault",
    "HTML.LeetCode.Segv",
  ];

  const [currentTagline, setCurrentTagline] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentTagline((prev) => (prev + 1) % taglines.length);
        setFade(true);
      }, 300);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-dark-900 to-dark-800 pt-16">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="mb-8 flex justify-center"></div>

        <h1 className="text-3xl md:text-5xl font-semibold mb-6 leading-snug tracking-tight text-gray-100">
          Bridging the gap between <br />
          <span className="text-primary-300">user interfaces</span> and{" "}
          <span className="text-accent-400">algorithmic complexity</span>.
        </h1>

        {/* Compact Tagline Display */}
        <div className="min-h-[60px] mb-6 flex items-center justify-center">
          <div
            className={`transition-opacity duration-300 ${
              fade ? "opacity-100" : "opacity-0"
            }`}
          >
            <p className="text-xl md:text-2xl font-mono text-accent-400">
              {taglines[currentTagline]}
            </p>
          </div>
        </div>

        <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
          Full-stack development experience in MERN stack, currently Exploring
          <span className="text-accent-300">
            {" "}
            DataStructures and Algorithms
          </span>{" "}
          through programming in <span className="text-accent-300">C++</span>
        </p>

        <div className="flex gap-4 justify-center">
          <a
            href="#projects"
            className="inline-block px-8 py-3 rounded-md bg-primary-500 text-dark-900 hover:bg-primary-400 shadow-lg hover:shadow-primary-500/30 transition-all duration-300 font-medium"
          >
            View Projects
          </a>
          <a
            href="/SohanCV.pdf"
            className="inline-block px-8 py-3 rounded-md border border-primary-500 text-primary-300 hover:bg-primary-500/10 transition-all duration-300 font-medium"
          >
            Download resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
