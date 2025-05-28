import express from 'express';
import User from '../models/User.js';
import Service from '../models/Service.js';
import { authMiddleware } from '../middleware/auth.js';

const router = express.Router();

// Get user profile by username
router.get('/profile/:username', async (req, res) => {
  try {
    const { username } = req.params;
    
    const user = await User.findOne({ username }).select('-password');
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    
    // Get user's services if they are a professional
    let services = [];
    if (user.isProfessional) {
      services = await Service.find({ provider: user._id, isActive: true });
    }
    
    res.json({ user, services });
  } catch (error) {
    console.error('Get profile error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Update current user profile
router.put('/profile', authMiddleware, async (req, res) => {
  try {
    const {
      name,
      bio,
      title,
      avatar,
      socialLinks,
      skills,
      categories,
      availability
    } = req.body;
    
    const userId = req.user.id;
    
    // Find and update user
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    
    // Update fields if provided
    if (name) user.name = name;
    if (bio !== undefined) user.bio = bio;
    if (title !== undefined) user.title = title;
    if (avatar) user.avatar = avatar;
    if (socialLinks) user.socialLinks = { ...user.socialLinks, ...socialLinks };
    if (skills) user.skills = skills;
    if (categories) user.categories = categories;
    if (availability) user.availability = { ...user.availability, ...availability };
    
    await user.save();
    
    // Return updated user
    res.json(user);
  } catch (error) {
    console.error('Update profile error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Search users (professionals/mentors)
router.get('/search', async (req, res) => {
  try {
    const { q, category, skills, page = 1, limit = 10 } = req.query;
    
    // Build query
    const query = { isProfessional: true };
    
    if (q) {
      query.$or = [
        { name: { $regex: q, $options: 'i' } },
        { username: { $regex: q, $options: 'i' } },
        { bio: { $regex: q, $options: 'i' } },
        { title: { $regex: q, $options: 'i' } }
      ];
    }
    
    if (category) {
      query.categories = category;
    }
    
    if (skills) {
      const skillsArray = Array.isArray(skills) ? skills : [skills];
      query.skills = { $in: skillsArray };
    }
    
    // Pagination
    const skip = (parseInt(page) - 1) * parseInt(limit);
    
    // Execute query
    const users = await User.find(query)
      .select('-password')
      .skip(skip)
      .limit(parseInt(limit));
    
    const total = await User.countDocuments(query);
    
    res.json({
      users,
      pagination: {
        total,
        page: parseInt(page),
        pages: Math.ceil(total / parseInt(limit))
      }
    });
  } catch (error) {
    console.error('Search users error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;