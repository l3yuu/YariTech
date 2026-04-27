import express from 'express';
import Testimonial from '../models/Testimonial.js';

// @desc    Get all testimonials
// @route   GET /api/testimonials
// @access  Public
export const getTestimonials = async (req: express.Request, res: express.Response) => {
  try {
    const testimonials = await Testimonial.find().sort({ createdAt: -1 });
    res.json(testimonials);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Create a testimonial
// @route   POST /api/testimonials
// @access  Private
export const createTestimonial = async (req: express.Request, res: express.Response) => {
  try {
    const testimonial = await Testimonial.create(req.body);
    res.status(201).json(testimonial);
  } catch (error) {
    res.status(400).json({ message: 'Invalid data' });
  }
};

// @desc    Update a testimonial
// @route   PUT /api/testimonials/:id
// @access  Private
export const updateTestimonial = async (req: express.Request, res: express.Response) => {
  try {
    const testimonial = await Testimonial.findById(req.params.id);

    if (testimonial) {
      Object.assign(testimonial, req.body);
      const updatedTestimonial = await testimonial.save();
      res.json(updatedTestimonial);
    } else {
      res.status(404).json({ message: 'Testimonial not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Delete a testimonial
// @route   DELETE /api/testimonials/:id
// @access  Private
export const deleteTestimonial = async (req: express.Request, res: express.Response) => {
  try {
    const testimonial = await Testimonial.findById(req.params.id);

    if (testimonial) {
      await testimonial.deleteOne();
      res.json({ message: 'Testimonial removed' });
    } else {
      res.status(404).json({ message: 'Testimonial not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
