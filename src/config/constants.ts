// API URL - Change this to your server URL
export const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

// Time slot duration in minutes
export const TIME_SLOT_DURATION = 30;

// Available hours for booking (24-hour format)
export const AVAILABLE_HOURS = {
  start: 9, // 9 AM
  end: 18, // 6 PM
};

// Maximum days in advance for booking
export const MAX_DAYS_IN_ADVANCE = 30;

// Default currency
export const DEFAULT_CURRENCY = 'USD';

// Service Types
export const SERVICE_TYPES = [
  { value: 'oneOnOne', label: '1:1 Call' },
  { value: 'consultation', label: 'Consultation' },
  { value: 'mentorship', label: 'Mentorship' },
  { value: 'review', label: 'Portfolio/Work Review' },
  { value: 'interview', label: 'Mock Interview' },
  { value: 'custom', label: 'Custom Service' },
];