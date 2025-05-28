import express from 'express';
import Service from '../models/Service.js';
import { authMiddleware } from '../middleware/auth.js';

const router = express.Router();

// Get all services for a provider
router.get('/provider/:providerId', async (req, res) => {
  try {
    const { providerId } = req.params;
    
    const services = await Service.find({ 
      provider: providerId,
      isActive: true 
    });
    
    res.json(services);
  } catch (error) {
    console.error('Get services error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Create a new service
router.post('/', authMiddleware, async (req, res) => {
  try {
    const {
      title,
      description,
      duration,
      price,
      currency,
      type,
      categories
    } = req.body;
    
    const service = new Service({
      provider: req.user.id,
      title,
      description,
      duration,
      price,
      currency,
      type,
      categories
    });
    
    await service.save();
    
    res.status(201).json(service);
  } catch (error) {
    console.error('Create service error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Update a service
router.put('/:serviceId', authMiddleware, async (req, res) => {
  try {
    const { serviceId } = req.params;
    const {
      title,
      description,
      duration,
      price,
      currency,
      type,
      categories,
      isActive
    } = req.body;
    
    // Find service
    const service = await Service.findById(serviceId);
    
    // Check if service exists
    if (!service) {
      return res.status(404).json({ message: 'Service not found' });
    }
    
    // Check if user owns the service
    if (service.provider.toString() !== req.user.id) {
      return res.status(403).json({ message: 'Not authorized' });
    }
    
    // Update fields
    if (title) service.title = title;
    if (description) service.description = description;
    if (duration) service.duration = duration;
    if (price) service.price = price;
    if (currency) service.currency = currency;
    if (type) service.type = type;
    if (categories) service.categories = categories;
    if (isActive !== undefined) service.isActive = isActive;
    
    await service.save();
    
    res.json(service);
  } catch (error) {
    console.error('Update service error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Delete a service
router.delete('/:serviceId', authMiddleware, async (req, res) => {
  try {
    const { serviceId } = req.params;
    
    // Find service
    const service = await Service.findById(serviceId);
    
    // Check if service exists
    if (!service) {
      return res.status(404).json({ message: 'Service not found' });
    }
    
    // Check if user owns the service
    if (service.provider.toString() !== req.user.id) {
      return res.status(403).json({ message: 'Not authorized' });
    }
    
    // Set as inactive instead of deleting
    service.isActive = false;
    await service.save();
    
    res.json({ message: 'Service deactivated successfully' });
  } catch (error) {
    console.error('Delete service error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;