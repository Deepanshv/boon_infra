// @ts-nocheck
const { Project } = require("../models/Project");
const { sendResponse, sendError } = require("../utils/response");

const getAllProjects = async (req, res) => {
  try {
    const { category, status } = req.query;
    const filter: any = {};

    if (category) filter.category = category;
    if (status) filter.status = status;

    const projects = await Project.find(filter).sort({ createdAt: -1 });
    sendResponse(res, 200, "Projects fetched successfully", projects);
  } catch (error) {
    sendError(res, 500, "Error fetching projects");
  }
};

const getProjectById = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) {
      return sendError(res, 404, "Project not found");
    }

    sendResponse(res, 200, "Project fetched successfully", project);
  } catch (error) {
    sendError(res, 500, "Error fetching project");
  }
};

const createProject = async (req, res) => {
  try {
    const {
      title,
      subtitle,
      description,
      location,
      category,
      features,
      status,
      startDate,
    } = req.body;

    const project = new Project({
      title,
      subtitle,
      description,
      location,
      category,
      features,
      status,
      startDate,
    });

    await project.save();
    sendResponse(res, 201, "Project created successfully", project);
  } catch (error) {
    sendError(res, 500, "Error creating project");
  }
};

const updateProject = async (req, res) => {
  try {
    const project = await Project.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!project) {
      return sendError(res, 404, "Project not found");
    }

    sendResponse(res, 200, "Project updated successfully", project);
  } catch (error) {
    sendError(res, 500, "Error updating project");
  }
};

const deleteProject = async (req, res) => {
  try {
    const project = await Project.findByIdAndDelete(req.params.id);
    if (!project) {
      return sendError(res, 404, "Project not found");
    }

    sendResponse(res, 200, "Project deleted successfully", {});
  } catch (error) {
    sendError(res, 500, "Error deleting project");
  }
};

module.exports = {
  getAllProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject,
};
