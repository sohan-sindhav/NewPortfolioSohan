import React, { useState, useEffect } from "react";
import axios from "../axios";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get("/projects");
        setProjects(response.data); // Returns array of projects
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError("Failed to load projects");
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return <p className="text-center text-gray-300">Loading projects...</p>;
  }

  if (error) {
    return <p className="text-center text-red-400">{error}</p>;
  }

  return (
    <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-12 text-center text-gray-100">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project._id}
            className="bg-dark-800 rounded-lg p-6 border border-dark-700 hover:border-primary-500/30 transition-all relative"
            onMouseEnter={() => setActiveDropdown(project._id)}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <h3 className="text-xl font-semibold mb-3 text-gray-100">
              {project.projectName}
            </h3>
            <p className="text-gray-400 mb-4">{project.description}</p>

            {/* Dropdown Menu */}
            {activeDropdown === project._id && (
              <div className="absolute bottom-4 left-0 right-0 px-6">
                <div className="bg-dark-700 rounded-md shadow-lg overflow-hidden">
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-2 text-primary-300 hover:bg-dark-600 transition-colors text-center"
                    >
                      View Live
                    </a>
                  )}
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-2 text-gray-300 hover:bg-dark-600 transition-colors text-center border-t border-dark-600"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
