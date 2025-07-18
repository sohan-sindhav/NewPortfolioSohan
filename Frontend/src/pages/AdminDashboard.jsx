import { useEffect, useState } from "react";
import axios from "../axios";
import { useNavigate } from "react-router-dom";

export default function AdminDashboard() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    github: "",
    live: "",
    description: "",
  });

  const [projects, setProjects] = useState([]);
  const [editingId, setEditingId] = useState(null);

  // Fetch all projects on mount
  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const res = await axios.get("/projects");
      setProjects(res.data);
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId) {
        await axios.put(`/projects/${editingId}`, formData);
        alert("✅ Project updated!");
        setEditingId(null);
      } else {
        await axios.post("/projects/create", formData);
        alert("✅ Project created!");
      }

      setFormData({ name: "", github: "", live: "", description: "" });
      fetchProjects();
    } catch (error) {
      console.error(error);
      alert("❌ Failed to submit project");
    }
  };

  const handleEdit = (project) => {
    setEditingId(project._id);
    setFormData({
      name: project.projectName,
      github: project.githubLink,
      live: project.liveLink,
      description: project.description,
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = async (id) => {
    if (confirm("Are you sure you want to delete this project?")) {
      try {
        await axios.delete(`/projects/${id}`);
        fetchProjects();
      } catch (error) {
        console.error("Delete failed", error);
        alert("❌ Could not delete");
      }
    }
  };

  const logout = async () => {
    await axios.post("/auth/logout");
    navigate("/login");
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">Welcome, Admin!</h1>
      <button
        className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
        onClick={logout}
      >
        Logout
      </button>

      {/* Create / Edit Project Form */}
      <div className="mt-8 max-w-xl text-black">
        <h2 className="text-xl font-semibold mb-2 text-white">
          {editingId ? "Edit Project" : "Create New Project"}
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Project Name"
            required
            className="border p-2 rounded"
          />
          <input
            type="url"
            name="github"
            value={formData.github}
            onChange={handleChange}
            placeholder="GitHub Link"
            className="border p-2 rounded"
          />
          <input
            type="url"
            name="live"
            value={formData.live}
            onChange={handleChange}
            placeholder="Live Link"
            className="border p-2 rounded"
          />
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Description"
            rows="3"
            className="border p-2 rounded"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-4 rounded"
          >
            {editingId ? "Update Project" : "Create Project"}
          </button>
        </form>
      </div>

      {/* Projects Table */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">All Projects</h2>
        {projects.length === 0 ? (
          <p>No projects yet.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-300 text-left">
              <thead className="bg-gray-100">
                <tr className="text-black">
                  <th className="p-2 border">Name</th>
                  <th className="p-2 border">GitHub</th>
                  <th className="p-2 border">Live</th>
                  <th className="p-2 border">Description</th>
                  <th className="p-2 border">Actions</th>
                </tr>
              </thead>
              <tbody>
                {projects.map((project) => (
                  <tr key={project._id}>
                    <td className="p-2 border">{project.projectName}</td>
                    <td className="p-2 border">
                      <a
                        href={project.githubLink}
                        target="_blank"
                        className="text-blue-600 underline"
                      >
                        GitHub
                      </a>
                    </td>
                    <td className="p-2 border">
                      <a
                        href={project.liveLink}
                        target="_blank"
                        className="text-green-600 underline"
                      >
                        Live
                      </a>
                    </td>
                    <td className="p-2 border">{project.description}</td>
                    <td className="p-2 border flex gap-2">
                      <button
                        onClick={() => handleEdit(project)}
                        className="bg-yellow-400 text-white px-3 py-1 rounded"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(project._id)}
                        className="bg-red-500 text-white px-3 py-1 rounded"
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
  );
}
