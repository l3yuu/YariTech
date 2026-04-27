import express from 'express';
import Inquiry from '../models/Inquiry.js';

// @desc    Get all inquiries
// @route   GET /api/inquiries
// @access  Private
export const getInquiries = async (req: express.Request, res: express.Response) => {
  try {
    const inquiries = await Inquiry.find().sort({ createdAt: -1 });
    res.json(inquiries);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Create new inquiry
// @route   POST /api/inquiries
// @access  Public
export const createInquiry = async (req: express.Request, res: express.Response) => {
  const { name, email, projectType, message } = req.body;

  try {
    const inquiry = await Inquiry.create({
      name,
      email,
      projectType,
      message
    });
    res.status(201).json(inquiry);
  } catch (error) {
    res.status(400).json({ message: 'Invalid data' });
  }
};

// @desc    Update inquiry status
// @route   PUT /api/inquiries/:id
// @access  Private
export const updateInquiryStatus = async (req: express.Request, res: express.Response) => {
  try {
    const inquiry = await Inquiry.findById(req.params.id);

    if (inquiry) {
      inquiry.status = req.body.status || inquiry.status;
      const updatedInquiry = await inquiry.save();
      res.json(updatedInquiry);
    } else {
      res.status(404).json({ message: 'Inquiry not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Delete inquiry
// @route   DELETE /api/inquiries/:id
// @access  Private
export const deleteInquiry = async (req: express.Request, res: express.Response) => {
  try {
    const inquiry = await Inquiry.findById(req.params.id);

    if (inquiry) {
      await inquiry.deleteOne();
      res.json({ message: 'Inquiry removed' });
    } else {
      res.status(404).json({ message: 'Inquiry not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
