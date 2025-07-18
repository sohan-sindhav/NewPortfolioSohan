import Project from "../models/ProjtectSchema.js";

// @desc    Create a new project (Admin only)
// @route   POST /api/projects
// @access  Protected
export const createProject = async (req, res) => {
  try {
    const { projectName, githubLink, liveLink, description } = req.body;

    if (!projectName || !githubLink || !description) {
      return res
        .status(400)
        .json({ message: "All required fields must be filled." });
    }

    const newProject = new Project({
      projectName,
      githubLink,
      liveLink,
      description,
    });

    const savedProject = await newProject.save();
    res.status(201).json(savedProject);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Server Error: Unable to create project." });
  }
};

// @desc    Get all projects (Public)
// @route   GET /api/projects
// @access  Public
export const getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.status(200).json(projects);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Server Error: Unable to fetch projects." });
  }
};

// @desc    Delete a project by ID (Admin only)
// @route   DELETE /api/projects/:id
// @access  Protected
export const deleteProject = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Project.findByIdAndDelete(id);

    if (!deleted) {
      return res.status(404).json({ message: "Project not found." });
    }

    res.status(200).json({ message: "Project deleted successfully." });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Server Error: Unable to delete project." });
  }
};

// @desc    Update a project by ID (Admin only)
// @route   PUT /api/projects/:id
// @access  Protected
export const updateProject = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedProject = await Project.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updatedProject) {
      return res.status(404).json({ message: "Project not found." });
    }

    res.status(200).json(updatedProject);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Server Error: Unable to update project." });
  }
};
