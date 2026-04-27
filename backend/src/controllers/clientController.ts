import express from 'express';
import Client from '../models/Client.js';

// @desc    Get all clients
// @route   GET /api/clients
// @access  Private
export const getClients = async (req: express.Request, res: express.Response) => {
  try {
    const clients = await Client.find().sort({ createdAt: -1 });
    res.json(clients);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Create a client
// @route   POST /api/clients
// @access  Private
export const createClient = async (req: express.Request, res: express.Response) => {
  try {
    const client = await Client.create(req.body);
    res.status(201).json(client);
  } catch (error) {
    res.status(400).json({ message: 'Invalid data' });
  }
};

// @desc    Update a client
// @route   PUT /api/clients/:id
// @access  Private
export const updateClient = async (req: express.Request, res: express.Response) => {
  try {
    const client = await Client.findById(req.params.id);
    if (client) {
      Object.assign(client, req.body);
      const updatedClient = await client.save();
      res.json(updatedClient);
    } else {
      res.status(404).json({ message: 'Client not found' });
    }
  } catch (error) {
    res.status(400).json({ message: 'Invalid data' });
  }
};

// @desc    Delete a client
// @route   DELETE /api/clients/:id
// @access  Private
export const deleteClient = async (req: express.Request, res: express.Response) => {
  try {
    const client = await Client.findById(req.params.id);
    if (client) {
      await client.deleteOne();
      res.json({ message: 'Client removed' });
    } else {
      res.status(404).json({ message: 'Client not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
