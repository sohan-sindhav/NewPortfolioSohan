import React from "react";

const Experience = () => {
  const milestones = [
    {
      period: "2025 — 2027 (ONGOING)",
      badge: "Semester 9 of 10",
      degree: "Master of Science in IT (Integrated BSc + MSc)",
      institution: "Postgraduate Studies",
      description:
        "Currently pursuing the final year of Integrated M.Sc. (IT). Building practical expertise in modern software engineering, cloud platforms, and automated deployment architectures.",
      highlights: "Relevant coursework: Cloud Infrastructure (AWS, Azure), DevOps Automation (Ansible), Networking & Systems Administration.",
      tags: ["Cloud (AWS, Azure)", "DevOps (Ansible)", "Networking", "Full-Stack Dev"],
    },
    {
      period: "2022 — 2025",
      badge: "Completed",
      degree: "Bachelor of Science in IT",
      institution: "Undergraduate Degree",
      description:
        "Completed 3-year undergraduate degree focusing on Software Development, Web Technologies (HTML, CSS, JavaScript, React), Database Management Systems (SQL & MongoDB), and Object-Oriented Programming.",
      highlights: "Built full-stack web applications and practiced Core CS principles including DBMS, Operating Systems, and Data Structures.",
      tags: ["React.js", "Node.js", "MongoDB", "DBMS", "OOPs", "Web Tech"],
    },
    {
      period: "HIGHER SECONDARY",
      badge: "Science Stream",
      degree: "11th & 12th Science (GSEB)",
      institution: "Arpan International School, Vastral, Ahmedabad",
      description:
        "Completed higher secondary schooling in the Science stream with intensive study in Mathematics, Physics, and analytical problem-solving.",
      highlights: "Developed analytical and logical foundations for Computer Science and algorithms.",
      tags: ["Mathematics", "Physics", "Analytical Problem Solving"],
    },
    {
      period: "SECONDARY SCHOOL",
      badge: "GSEB",
      degree: "10th Standard (Secondary Schooling)",
      institution: "Arpan Vidhyalaya, Vastral, Ahmedabad",
      description:
        "Completed secondary education with strong academic performance in science and mathematics.",
      highlights: "Early interest in technology, logic, and computing.",
      tags: ["Secondary Education", "Foundations"],
    },
  ];

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 max-w-5xl mx-auto relative">
      <div className="text-center mb-16">
        <span className="text-xs font-mono text-primary-400 uppercase tracking-widest bg-primary-950/60 border border-primary-500/20 px-3 py-1 rounded-full">
          Academic & Growth Path
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3 tracking-tight">
          Education & <span className="gradient-text-emerald">Journey</span>
        </h2>
        <p className="text-gray-400 mt-2 text-sm sm:text-base max-w-xl mx-auto">
          My educational milestones, technical coursework, and academic journey.
        </p>
      </div>

      <div className="relative border-l border-white/[0.1] ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-10">
        {milestones.map((item, index) => (
          <div key={index} className="relative group">
            {/* Glowing timeline dot */}
            <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-obsidian-950 border-2 border-primary-400 group-hover:border-primary-300 group-hover:shadow-[0_0_12px_rgba(16,185,129,0.8)] transition-all"></div>

            <div className="glass-card rounded-2xl p-6 sm:p-7 border border-white/[0.08] group-hover:border-primary-500/30 transition-all">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <span className="text-xs font-mono font-semibold text-primary-400">
                  {item.period}
                </span>
                <span className="text-[11px] font-mono text-emerald-300 bg-emerald-950/70 border border-emerald-500/30 px-2.5 py-0.5 rounded-full">
                  {item.badge}
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
                {item.degree}
              </h3>

              <p className="text-xs sm:text-sm font-medium text-gray-400 mb-3">
                {item.institution}
              </p>

              <p className="text-gray-300/80 text-sm leading-relaxed mb-3">
                {item.description}
              </p>

              {item.highlights && (
                <p className="text-xs text-primary-300/90 font-mono bg-white/[0.02] p-2.5 rounded-lg border border-white/[0.04] mb-4">
                  📘 {item.highlights}
                </p>
              )}

              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-obsidian-900 border border-white/[0.06] text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
