import { useEffect, useState } from "react";
import axios from "../axios";
import { useNavigate, Link } from "react-router-dom";

export default function AdminDashboard() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    projectName: "",
    githubLink: "",
    liveLink: "",
    description: "",
  });

  const [projects, setProjects] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState({ text: "", type: "" });

  // Fetch all projects on mount
  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      setLoading(true);
      const res = await axios.get("/projects");
      setProjects(res.data || []);
    } catch (error) {
      console.error("Error fetching projects:", error);
      showMessage("Failed to fetch projects from server", "error");
    } finally {
      setLoading(false);
    }
  };

  const showMessage = (text, type = "success") => {
    setMessage({ text, type });
    setTimeout(() => setMessage({ text: "", type: "" }), 4000);
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      if (editingId) {
        await axios.put(`/projects/${editingId}`, formData);
        showMessage("Project updated successfully!", "success");
        setEditingId(null);
      } else {
        await axios.post("/projects", formData);
        showMessage("New project published successfully!", "success");
      }

      setFormData({
        projectName: "",
        githubLink: "",
        liveLink: "",
        description: "",
      });
      fetchProjects();
    } catch (error) {
      console.error("Error submitting project:", error);
      showMessage(
        error.response?.data?.message || "Failed to save project. Please check fields.",
        "error"
      );
    } finally {
      setSubmitting(false);
    }
  };

  const handleEdit = (project) => {
    setEditingId(project._id);
    setFormData({
      projectName: project.projectName || "",
      githubLink: project.githubLink || "",
      liveLink: project.liveLink || "",
      description: project.description || "",
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setFormData({
      projectName: "",
      githubLink: "",
      liveLink: "",
      description: "",
    });
  };

  const handleDelete = async (id, name) => {
    if (window.confirm(`Are you sure you want to delete "${name}"?`)) {
      try {
        await axios.delete(`/projects/${id}`);
        showMessage("Project removed successfully!", "success");
        fetchProjects();
      } catch (error) {
        console.error("Delete failed", error);
        showMessage("Could not delete project", "error");
      }
    }
  };

  const logout = async () => {
    try {
      await axios.post("/auth/logout");
    } catch (err) {
      console.error(err);
    }
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-obsidian-950 bg-radial-gradient text-gray-200 p-4 sm:p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Top Header */}
        <div className="glass-panel p-6 rounded-2xl border border-white/[0.08] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-primary-400 bg-primary-950/60 border border-primary-500/30 px-2.5 py-0.5 rounded-full">
                SOHANN.CODES ADMIN
              </span>
              <span className="text-xs text-gray-400">• CMS Portal</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white mt-1 tracking-tight">
              Project Management Cockpit
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <Link
              to="/"
              className="px-4 py-2 text-xs font-semibold rounded-xl glass-panel text-gray-200 hover:text-white hover:border-primary-500/40 transition-all"
            >
              View Live Portfolio ↗
            </Link>
            <button
              onClick={logout}
              className="px-4 py-2 text-xs font-semibold rounded-xl bg-red-500/10 text-red-300 hover:bg-red-500/20 border border-red-500/30 transition-all"
            >
              Logout
            </button>
          </div>
        </div>

        {/* Status Toast */}
        {message.text && (
          <div
            className={`p-4 rounded-xl text-sm font-medium border flex items-center gap-2 ${
              message.type === "error"
                ? "bg-red-500/10 text-red-300 border-red-500/30"
                : "bg-emerald-500/10 text-emerald-300 border-emerald-500/30"
            }`}
          >
            <span>{message.type === "error" ? "⚠️" : "✅"}</span>
            <span>{message.text}</span>
          </div>
        )}

        {/* Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          <div className="glass-card rounded-xl p-5 border border-white/[0.06]">
            <p className="text-xs font-mono text-gray-400 uppercase">Total Projects</p>
            <p className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              {projects.length}
            </p>
          </div>
          <div className="glass-card rounded-xl p-5 border border-white/[0.06]">
            <p className="text-xs font-mono text-gray-400 uppercase">Database</p>
            <p className="text-sm font-semibold text-emerald-400 mt-2 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              MongoDB Active
            </p>
          </div>
          <div className="glass-card rounded-xl p-5 border border-white/[0.06] col-span-2 sm:col-span-1">
            <p className="text-xs font-mono text-gray-400 uppercase">Domain</p>
            <p className="text-sm font-mono text-gray-200 mt-2 truncate">
              sohann.codes
            </p>
          </div>
        </div>

        {/* Create / Edit Project Form */}
        <div className="glass-card rounded-2xl p-6 sm:p-8 border border-white/[0.08]">
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/[0.06]">
            <div>
              <h2 className="text-xl font-bold text-white">
                {editingId ? "Edit Existing Project" : "Add New Showcase Project"}
              </h2>
              <p className="text-xs text-gray-400 mt-0.5">
                Fill in the details below to publish live to your portfolio
              </p>
            </div>
            {editingId && (
              <span className="text-xs font-mono bg-amber-500/20 text-amber-300 border border-amber-500/30 px-2.5 py-1 rounded-full">
                Editing Mode
              </span>
            )}
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5 max-w-3xl">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono text-gray-300 mb-1.5">
                  Project Title *
                </label>
                <input
                  type="text"
                  name="projectName"
                  value={formData.projectName}
                  onChange={handleChange}
                  placeholder="e.g. AlgoVisualizer Pro"
                  required
                  className="w-full bg-obsidian-900/90 border border-white/[0.08] rounded-xl p-3 text-white text-sm focus:outline-none focus:border-primary-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-gray-300 mb-1.5">
                  GitHub Repository Link *
                </label>
                <input
                  type="url"
                  name="githubLink"
                  value={formData.githubLink}
                  onChange={handleChange}
                  placeholder="https://github.com/sohan-sindhav/..."
                  required
                  className="w-full bg-obsidian-900/90 border border-white/[0.08] rounded-xl p-3 text-white text-sm focus:outline-none focus:border-primary-500 transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono text-gray-300 mb-1.5">
                Live Deployment URL (Optional)
              </label>
              <input
                type="url"
                name="liveLink"
                value={formData.liveLink}
                onChange={handleChange}
                placeholder="https://myproject.sohann.codes or vercel link"
                className="w-full bg-obsidian-900/90 border border-white/[0.08] rounded-xl p-3 text-white text-sm focus:outline-none focus:border-primary-500 transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-gray-300 mb-1.5">
                Project Description & Tech Overview *
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Highlight core features, architecture decisions, and technologies used (e.g. Built with React 19, Express, MongoDB)..."
                rows="4"
                required
                className="w-full bg-obsidian-900/90 border border-white/[0.08] rounded-xl p-3 text-white text-sm focus:outline-none focus:border-primary-500 transition-colors resize-y"
              ></textarea>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <button
                type="submit"
                disabled={submitting}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-400 hover:to-primary-500 text-obsidian-950 font-bold text-sm shadow-glow transition-all disabled:opacity-50"
              >
                {submitting
                  ? "Saving..."
                  : editingId
                  ? "Update Project"
                  : "Publish to Portfolio"}
              </button>

              {editingId && (
                <button
                  type="button"
                  onClick={handleCancelEdit}
                  className="px-5 py-3 rounded-xl glass-panel text-gray-300 hover:text-white text-sm font-semibold transition-colors"
                >
                  Cancel Edit
                </button>
              )}
            </div>
          </form>
        </div>

        {/* Project List Table */}
        <div className="glass-card rounded-2xl p-6 sm:p-8 border border-white/[0.08]">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-white">
              Published Projects ({projects.length})
            </h2>
            <button
              onClick={fetchProjects}
              className="text-xs font-mono text-primary-400 hover:text-primary-300 transition-colors"
            >
              ↻ Refresh
            </button>
          </div>

          {loading ? (
            <p className="text-gray-400 text-sm py-8 text-center">Loading projects from MongoDB...</p>
          ) : projects.length === 0 ? (
            <div className="text-center py-12 text-gray-400">
              <p className="text-sm">No projects currently published.</p>
              <p className="text-xs text-gray-500 mt-1">Use the form above to add your first project.</p>
            </div>
          ) : (
            <div className="overflow-x-auto rounded-xl border border-white/[0.06]">
              <table className="w-full text-left text-sm">
                <thead className="bg-obsidian-900 text-gray-400 uppercase text-[11px] font-mono">
                  <tr>
                    <th className="p-4 border-b border-white/[0.06]">Project Name</th>
                    <th className="p-4 border-b border-white/[0.06]">Links</th>
                    <th className="p-4 border-b border-white/[0.06]">Description</th>
                    <th className="p-4 border-b border-white/[0.06] text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/[0.06] bg-obsidian-950/60">
                  {projects.map((project) => (
                    <tr key={project._id} className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-4 font-semibold text-white whitespace-nowrap">
                        {project.projectName}
                      </td>
                      <td className="p-4 whitespace-nowrap space-x-2">
                        {project.githubLink && (
                          <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-primary-400 hover:underline"
                          >
                            GitHub ↗
                          </a>
                        )}
                        {project.liveLink && (
                          <a
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-cyber-cyan hover:underline"
                          >
                            Live ↗
                          </a>
                        )}
                      </td>
                      <td className="p-4 text-gray-300/80 text-xs max-w-sm truncate">
                        {project.description}
                      </td>
                      <td className="p-4 text-right whitespace-nowrap space-x-2">
                        <button
                          onClick={() => handleEdit(project)}
                          className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-amber-500/10 text-amber-300 hover:bg-amber-500/20 border border-amber-500/30 transition-colors"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(project._id, project.projectName)}
                          className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-red-500/10 text-red-300 hover:bg-red-500/20 border border-red-500/30 transition-colors"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
