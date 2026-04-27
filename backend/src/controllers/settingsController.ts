import express from 'express';
import Settings from '../models/Settings.js';

// @desc    Get all settings
// @route   GET /api/settings
// @access  Private
export const getSettings = async (req: express.Request, res: express.Response) => {
  try {
    let settings = await Settings.findOne();
    if (!settings) {
      settings = await Settings.create({});
    }
    res.json(settings);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Update settings
// @route   PUT /api/settings
// @access  Private
export const updateSettings = async (req: express.Request, res: express.Response) => {
  try {
    let settings = await Settings.findOne();
    if (!settings) {
      settings = await Settings.create({ ...req.body, updatedBy: (req as any).user._id });
    } else {
      Object.assign(settings, req.body);
      settings.updatedBy = (req as any).user._id;
      await settings.save();
    }
    res.json(settings);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
