import express from 'express';
import Booking from '../models/Booking.js';
import Service from '../models/Service.js';
import User from '../models/User.js';
import { authMiddleware } from '../middleware/auth.js';

const router = express.Router();

// Get all bookings for the current user (as client or provider)
router.get('/', authMiddleware, async (req, res) => {
  try {
    const userId = req.user.id;
    
    // Find bookings where user is either client or provider
    const bookings = await Booking.find({
      $or: [
        { client: userId },
        { provider: userId }
      ]
    })
      .populate('service')
      .populate('provider', 'name username avatar')
      .populate('client', 'name username avatar')
      .sort({ startTime: -1 });
    
    res.json(bookings);
  } catch (error) {
    console.error('Get bookings error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get a specific booking
router.get('/:bookingId', authMiddleware, async (req, res) => {
  try {
    const { bookingId } = req.params;
    const userId = req.user.id;
    
    // Find booking
    const booking = await Booking.findById(bookingId)
      .populate('service')
      .populate('provider', 'name username avatar bio title')
      .populate('client', 'name username avatar');
    
    // Check if booking exists
    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }
    
    // Check if user is authorized to view this booking
    if (booking.client.toString() !== userId && booking.provider.toString() !== userId) {
      return res.status(403).json({ message: 'Not authorized' });
    }
    
    res.json(booking);
  } catch (error) {
    console.error('Get booking error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Create a new booking
router.post('/', authMiddleware, async (req, res) => {
  try {
    const {
      serviceId,
      startTime,
      endTime,
      clientNotes
    } = req.body;
    
    const clientId = req.user.id;
    
    // Find service
    const service = await Service.findById(serviceId);
    if (!service) {
      return res.status(404).json({ message: 'Service not found' });
    }
    
    // Check if the service is active
    if (!service.isActive) {
      return res.status(400).json({ message: 'This service is not currently available' });
    }
    
    // Check if client is trying to book themselves
    if (service.provider.toString() === clientId) {
      return res.status(400).json({ message: 'You cannot book your own service' });
    }
    
    // Check if the time slot is available
    const conflictingBooking = await Booking.findOne({
      provider: service.provider,
      $or: [
        {
          startTime: { $lt: new Date(endTime) },
          endTime: { $gt: new Date(startTime) }
        }
      ],
      status: { $in: ['pending', 'confirmed'] }
    });
    
    if (conflictingBooking) {
      return res.status(400).json({ message: 'This time slot is not available' });
    }
    
    // Create the booking
    const booking = new Booking({
      service: serviceId,
      provider: service.provider,
      client: clientId,
      startTime: new Date(startTime),
      endTime: new Date(endTime),
      clientNotes
    });
    
    await booking.save();
    
    // Populate booking with service and user details
    await booking.populate('service');
    await booking.populate('provider', 'name username avatar');
    await booking.populate('client', 'name username avatar');
    
    res.status(201).json(booking);
  } catch (error) {
    console.error('Create booking error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Update booking status
router.put('/:bookingId/status', authMiddleware, async (req, res) => {
  try {
    const { bookingId } = req.params;
    const { status } = req.body;
    const userId = req.user.id;
    
    // Find booking
    const booking = await Booking.findById(bookingId);
    
    // Check if booking exists
    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }
    
    // Check permissions based on the status change
    if (status === 'confirmed' || status === 'cancelled') {
      // Only the provider can confirm or cancel
      if (booking.provider.toString() !== userId) {
        return res.status(403).json({ message: 'Not authorized' });
      }
    } else if (status === 'completed') {
      // Only the provider can mark as completed
      if (booking.provider.toString() !== userId) {
        return res.status(403).json({ message: 'Not authorized' });
      }
    } else {
      return res.status(400).json({ message: 'Invalid status' });
    }
    
    // Update booking status
    booking.status = status;
    await booking.save();
    
    // Populate booking with service and user details
    await booking.populate('service');
    await booking.populate('provider', 'name username avatar');
    await booking.populate('client', 'name username avatar');
    
    res.json(booking);
  } catch (error) {
    console.error('Update booking status error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Add meeting link to booking
router.put('/:bookingId/meeting-link', authMiddleware, async (req, res) => {
  try {
    const { bookingId } = req.params;
    const { meetingLink } = req.body;
    const userId = req.user.id;
    
    // Find booking
    const booking = await Booking.findById(bookingId);
    
    // Check if booking exists
    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }
    
    // Only the provider can add a meeting link
    if (booking.provider.toString() !== userId) {
      return res.status(403).json({ message: 'Not authorized' });
    }
    
    // Update booking
    booking.meetingLink = meetingLink;
    await booking.save();
    
    res.json(booking);
  } catch (error) {
    console.error('Add meeting link error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Add rating and review to a booking
router.put('/:bookingId/review', authMiddleware, async (req, res) => {
  try {
    const { bookingId } = req.params;
    const { score, review } = req.body;
    const userId = req.user.id;
    
    // Find booking
    const booking = await Booking.findById(bookingId);
    
    // Check if booking exists
    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }
    
    // Only the client can add a review
    if (booking.client.toString() !== userId) {
      return res.status(403).json({ message: 'Not authorized' });
    }
    
    // Check if booking is completed
    if (booking.status !== 'completed') {
      return res.status(400).json({ message: 'Cannot review a booking that is not completed' });
    }
    
    // Add rating
    booking.rating = {
      score,
      review,
      createdAt: new Date()
    };
    
    await booking.save();
    
    res.json(booking);
  } catch (error) {
    console.error('Add review error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;