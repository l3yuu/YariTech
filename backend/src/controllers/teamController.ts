import express from 'express';
import TeamMember from '../models/TeamMember.js';

// @desc    Get all team members
// @route   GET /api/team
// @access  Public
export const getTeamMembers = async (req: express.Request, res: express.Response) => {
  try {
    const team = await TeamMember.find().sort({ order: 1, createdAt: -1 });
    res.json(team);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Create team member
// @route   POST /api/team
// @access  Private
export const createTeamMember = async (req: express.Request, res: express.Response) => {
  try {
    const member = await TeamMember.create(req.body);
    res.status(201).json(member);
  } catch (error) {
    res.status(400).json({ message: 'Invalid data' });
  }
};

// @desc    Update team member
// @route   PUT /api/team/:id
// @access  Private
export const updateTeamMember = async (req: express.Request, res: express.Response) => {
  try {
    const member = await TeamMember.findById(req.params.id);
    if (member) {
      Object.assign(member, req.body);
      const updatedMember = await member.save();
      res.json(updatedMember);
    } else {
      res.status(404).json({ message: 'Member not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Delete team member
// @route   DELETE /api/team/:id
// @access  Private
export const deleteTeamMember = async (req: express.Request, res: express.Response) => {
  try {
    const member = await TeamMember.findById(req.params.id);
    if (member) {
      await member.deleteOne();
      res.json({ message: 'Member removed' });
    } else {
      res.status(404).json({ message: 'Member not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
