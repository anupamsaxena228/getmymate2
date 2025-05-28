# MentorConnect - Professional Mentorship Platform

MentorConnect is a full-stack MERN (MongoDB, Express.js, React, Node.js) application that connects mentees with professional mentors across various industries. Similar to platforms like TopMate, it facilitates booking mentorship sessions, consultations, and professional guidance.

## Features

- 🔐 User authentication (mentors and mentees)
- 👥 Professional profiles with customizable services
- 📅 Session booking and management
- 💰 Secure payment processing
- 📊 Dashboard for managing bookings and sessions
- 🔍 Search and filter mentors by expertise
- ⭐ Rating and review system

## Project Structure

### Frontend (`/src`)

- `/components` - Reusable React components
  - `/auth` - Authentication-related components
  - `/home` - Homepage components (Categories, Featured Mentors, etc.)
  - `/layout` - Layout components (Header, Footer)
  - `/utils` - Utility components (LoadingSpinner, ScrollToTop)

- `/contexts` - React Context providers
  - `AuthContext.tsx` - Authentication state management

- `/pages` - Main application pages
  - `HomePage.tsx` - Landing page
  - `LoginPage.tsx` - User login
  - `RegisterPage.tsx` - User registration
  - `ProfilePage.tsx` - User profiles
  - `DashboardPage.tsx` - User dashboard
  - `BookingPage.tsx` - Session booking
  - `NotFoundPage.tsx` - 404 page

### Backend (`/server`)

- `/models` - MongoDB schemas
  - `User.js` - User model
  - `Service.js` - Service offerings
  - `Booking.js` - Booking management

- `/routes` - API routes
  - `auth.js` - Authentication endpoints
  - `users.js` - User management
  - `services.js` - Service management
  - `bookings.js` - Booking operations

- `/middleware` - Express middleware
  - `auth.js` - Authentication middleware

## Technology Stack

### Frontend
- React 18
- TypeScript
- Vite
- Tailwind CSS
- React Router v6
- Axios
- React Hot Toast
- Lucide React (icons)

### Backend
- Node.js
- Express.js
- MongoDB
- JWT Authentication
- bcryptjs
- Cookie Parser
- CORS

## Setup Instructions (Ubuntu)

### Prerequisites
```bash
# Update package list
sudo apt update

# Install Node.js and npm
sudo apt install nodejs npm

# Install MongoDB
sudo apt install mongodb
sudo systemctl start mongodb
sudo systemctl enable mongodb
```

### Project Setup

1. Clone the repository
```bash
git clone <repository-url>
cd mentorconnect
```

2. Install dependencies
```bash
# Install frontend dependencies
npm install

# Install backend dependencies
cd server
npm install
```

3. Environment Setup
```bash
# Create .env file in project root
touch .env

# Add required environment variables
echo "VITE_API_URL=http://localhost:5000" >> .env
```

4. Start the development servers
```bash
# Start backend server (from /server directory)
npm run server

# Start frontend development server (from project root)
npm run dev
```

## Environment Variables

Create a `.env` file in the project root with the following variables:

```env
# Frontend
VITE_API_URL=http://localhost:5000

# Backend
PORT=5000
MONGODB_URI=mongodb://localhost:27017/mentorconnect
JWT_SECRET=your_jwt_secret
CLIENT_URL=http://localhost:5173
```

## Available Scripts

In the project directory:

```bash
# Start frontend development server
npm run dev

# Build frontend for production
npm run build

# Start backend server
npm run server

# Start backend server with nodemon
npm run dev:server

# Run ESLint
npm run lint
```

## Deployment

### Frontend
- Build the frontend: `npm run build`
- The build output will be in the `dist` directory
- Deploy the contents of `dist` to your hosting provider

### Backend
- Ensure MongoDB is properly configured in production
- Set up environment variables in your hosting environment
- Start the server using `npm run server`

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.