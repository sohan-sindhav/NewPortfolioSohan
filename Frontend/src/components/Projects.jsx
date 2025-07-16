import React, { useState } from "react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "User Authentication system",
      description: "user auth system with encryption and cookies support",
      github: "https://github.com/sohan-sindhav/UserAuth01",
      live: "https://authapp.sohan.codes",
    },
    {
      id: 2,
      title: "Competitive Programming Solutions",
      description: "Optimized solutions to coding problems",
      github: "https://github.com/yourusername/cp-solutions",
      live: null, // No live demo available
    },
    {
      id: 3,
      title: "E-Commerce Platform",
      description: "Full-stack online store",
      github: "https://github.com/yourusername/ecommerce",
      live: "https://ecommerce-demo.example.com",
    },
  ];

  const [activeDropdown, setActiveDropdown] = useState(null);

  return (
    <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-12 text-center text-gray-100">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-dark-800 rounded-lg p-6 border border-dark-700 hover:border-primary-500/30 transition-all relative"
            onMouseEnter={() => setActiveDropdown(project.id)}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <h3 className="text-xl font-semibold mb-3 text-gray-100">
              {project.title}
            </h3>
            <p className="text-gray-400 mb-4">{project.description}</p>

            {/* Dropdown Menu */}
            {activeDropdown === project.id && (
              <div className="absolute bottom-4 left-0 right-0 px-6">
                <div className="bg-dark-700 rounded-md shadow-lg overflow-hidden">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-2 text-primary-300 hover:bg-dark-600 transition-colors text-center"
                    >
                      View Live
                    </a>
                  )}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2 text-gray-300 hover:bg-dark-600 transition-colors text-center border-t border-dark-600"
                  >
                    GitHub
                  </a>
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
