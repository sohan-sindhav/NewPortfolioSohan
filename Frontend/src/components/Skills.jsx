import React from "react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Engineering",
      icon: (
        <svg className="w-5 h-5 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      skills: [
        { name: "React 19", level: "Advanced" },
        { name: "JavaScript (ES6+)", level: "Advanced" },
        { name: "Tailwind CSS", level: "Advanced" },
        { name: "HTML5 / CSS3", level: "Expert" },
        { name: "Vite", level: "Advanced" },
        { name: "Responsive Design", level: "Expert" },
      ],
    },
    {
      title: "Backend & Databases",
      icon: (
        <svg className="w-5 h-5 text-cyber-violet" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      ),
      skills: [
        { name: "Node.js", level: "Advanced" },
        { name: "Express 5", level: "Advanced" },
        { name: "MongoDB", level: "Intermediate" },
        { name: "Mongoose ODM", level: "Advanced" },
        { name: "RESTful APIs", level: "Advanced" },
        { name: "JWT & Cookies Auth", level: "Advanced" },
      ],
    },
    {
      title: "Core CS & Algorithms",
      icon: (
        <svg className="w-5 h-5 text-cyber-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      skills: [
        { name: "C++ (Modern)", level: "Advanced" },
        { name: "Data Structures (Trees, Graphs, DP)", level: "Advanced" },
        { name: "C++ STL Library", level: "Expert" },
        { name: "OOP Principles", level: "Advanced" },
        { name: "Time/Space Complexity", level: "Advanced" },
        { name: "Problem Solving", level: "Active LeetCode" },
      ],
    },
    {
      title: "Dev Tools & Infrastructure",
      icon: (
        <svg className="w-5 h-5 text-cyber-amber" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      skills: [
        { name: "Git & GitHub", level: "Advanced" },
        { name: "Postman API Client", level: "Advanced" },
        { name: "Render & Vercel", level: "Advanced" },
        { name: "Linux / Bash", level: "Intermediate" },
        { name: "npm / node tooling", level: "Advanced" },
        { name: "VS Code", level: "Power User" },
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 max-w-6xl mx-auto relative">
      <div className="text-center mb-16">
       
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3 tracking-tight">
          Skills & <span className="gradient-text-emerald">Technologies</span>
        </h2>
        <p className="text-gray-400 mt-2 text-sm sm:text-base max-w-xl mx-auto">
          The languages, tools, and paradigms I leverage daily to engineer fast, resilient applications.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {skillCategories.map((category, idx) => (
          <div
            key={category.title}
            className="glass-card rounded-2xl p-6 sm:p-7 border border-white/[0.08] hover:border-primary-500/30 transition-all duration-300 group"
          >
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/[0.06]">
              <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.06] group-hover:scale-110 transition-transform">
                {category.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-100 group-hover:text-white transition-colors">
                {category.title}
              </h3>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="px-3 py-2 rounded-lg bg-obsidian-900/80 border border-white/[0.05] hover:border-primary-500/30 hover:bg-obsidian-850 transition-all text-left"
                >
                  <p className="text-xs sm:text-sm font-medium text-gray-200 truncate">
                    {skill.name}
                  </p>
                  <p className="text-[10px] font-mono text-gray-400 mt-0.5">
                    {skill.level}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
