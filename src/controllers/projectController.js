const { Project } = require('../models');

const getAllProjects = async (req, res) => {
  try {
    const projects = await Project.findMany();
    res.status(200).json({ projects });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getProjectById = async (req, res) => {
  try {
    const { id } = req.params;
    const project = await Project.findOne({ where: { id: parseInt(id) } });

    if (!project) {
      return res.status(404).json({ error: 'Project not found' });
    }

    res.status(200).json({ project });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const createProject = async (req, res) => {
  try {
    const { name } = req.body;
    const project = await Project.create({ name });
    res.status(201).json({ project });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const updateProject = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const updatedProject = await Project.update({
      where: { id: parseInt(id) },
      data: { name },
    });

    if (!updatedProject) {
      return res.status(404).json({ error: 'Project not found' });
    }

    res.status(200).json({ project: updatedProject });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const deleteProject = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedProject = await Project.delete({ where: { id: parseInt(id) } });

    if (!deletedProject) {
      return res.status(404).json({ error: 'Project not found' });
    }

    res.status(200).json({ message: 'Project deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = { getAllProjects, getProjectById, createProject, updateProject, deleteProject };
