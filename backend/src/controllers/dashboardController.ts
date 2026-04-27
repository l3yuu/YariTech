import express from 'express';
import Project from '../models/Project.js';
import Inquiry from '../models/Inquiry.js';

export const getDashboardStats = async (req: express.Request, res: express.Response) => {
  try {
    const totalInquiries = await Inquiry.countDocuments();
    const activeProjects = await Project.countDocuments({ isVisible: true });
    
    // Recent inquiries for the table
    const recentInquiries = await Inquiry.find()
      .sort({ createdAt: -1 })
      .limit(5);

    res.json({
      totalInquiries,
      activeProjects,
      totalClients: 0, // Implement when Client model is ready
      revenue: '₱0', // Implement when Revenue logic is ready
      recentInquiries
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
