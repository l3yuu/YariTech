import type { Request, Response } from 'express';
import Project from '../models/Project.js';

// @desc    Get all projects
// @route   GET /api/projects
// @access  Public
export const getProjects = async (req: Request, res: Response) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// @desc    Create a project
// @route   POST /api/projects
// @access  Private (Admin only - to be implemented)
export const createProject = async (req: Request, res: Response) => {
  try {
    const { title, description, badge, tags, isVisible, gradient } = req.body;
    const project = await Project.create({
      title,
      description,
      badge,
      tags,
      isVisible,
      gradient,
    });
    res.status(201).json(project);
  } catch (error) {
    res.status(400).json({ message: 'Invalid project data' });
  }
};
