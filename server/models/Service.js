import mongoose from 'mongoose';

const serviceSchema = new mongoose.Schema({
  provider: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  duration: {
    type: Number, // Duration in minutes
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  currency: {
    type: String,
    default: 'USD'
  },
  type: {
    type: String,
    enum: ['oneOnOne', 'consultation', 'mentorship', 'review', 'interview', 'custom'],
    required: true
  },
  categories: [String],
  isActive: {
    type: Boolean,
    default: true
  }
}, { timestamps: true });

const Service = mongoose.model('Service', serviceSchema);

export default Service;