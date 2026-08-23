import React, { useState, useEffect } from "react";
import axios from "../axios";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get("/projects");
        setProjects(response.data || []);
      } catch (err) {
        console.error("Failed to load projects:", err);
        setError("Unable to connect to the projects service right now.");
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 max-w-6xl mx-auto relative">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-primary-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="text-center mb-16">
        <span className="text-xs font-mono text-primary-400 uppercase tracking-widest bg-primary-950/60 border border-primary-500/20 px-3 py-1 rounded-full">
          Featured Work
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3 tracking-tight">
          Selected <span className="gradient-text-emerald">Projects</span>
        </h2>
        <p className="text-gray-400 mt-2 text-sm sm:text-base max-w-xl mx-auto">
          Full-stack applications, developer tooling, and algorithmic projects.
        </p>
      </div>

      {loading ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((n) => (
            <div
              key={n}
              className="glass-card rounded-2xl p-6 border border-white/[0.06] animate-pulse space-y-4"
            >
              <div className="h-6 bg-white/[0.08] rounded w-3/4"></div>
              <div className="space-y-2">
                <div className="h-4 bg-white/[0.04] rounded w-full"></div>
                <div className="h-4 bg-white/[0.04] rounded w-5/6"></div>
              </div>
              <div className="h-8 bg-white/[0.04] rounded-lg mt-6"></div>
            </div>
          ))}
        </div>
      ) : error ? (
        <div className="glass-panel text-center py-12 px-6 rounded-2xl border border-red-500/20 max-w-md mx-auto">
          <p className="text-red-400 font-medium text-sm mb-1">{error}</p>
          <p className="text-xs text-gray-500">Please try refreshing or check back soon.</p>
        </div>
      ) : projects.length === 0 ? (
        <div className="glass-panel text-center py-16 px-6 rounded-2xl border border-white/[0.06] max-w-md mx-auto">
          <div className="w-12 h-12 rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center justify-center mx-auto mb-4 text-primary-400">
            📁
          </div>
          <h3 className="text-lg font-bold text-gray-200 mb-1">No Projects Found</h3>
          <p className="text-gray-400 text-xs sm:text-sm">
            Projects are managed via the dashboard. Log in as admin to publish your work!
          </p>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project._id}
              className="group relative flex flex-col justify-between glass-card rounded-2xl p-6 sm:p-7 border border-white/[0.08] hover:border-primary-500/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-glow"
            >
              <div>
                {/* Header info */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-primary-300 transition-colors">
                    {project.projectName}
                  </h3>
                  <span className="shrink-0 text-[10px] font-mono text-emerald-400 bg-emerald-950/70 border border-emerald-500/30 px-2 py-0.5 rounded-full">
                    Live Project
                  </span>
                </div>

                {/* Description */}
                <p className="text-gray-300/80 text-sm leading-relaxed mb-6 font-normal">
                  {project.description}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/[0.06]">
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-primary-500/20 text-primary-300 hover:bg-primary-500/30 border border-primary-500/40 transition-all"
                  >
                    <span>View Demo</span>
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )}

                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-lg glass-panel text-gray-300 hover:text-white hover:border-white/[0.2] transition-all"
                  >
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                    </svg>
                    <span>Code</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Projects;
