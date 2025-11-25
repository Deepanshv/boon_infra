# Hiranandani Clone - Full Stack Real Estate Application

**Status**: ✅ **PRODUCTION READY** | **Version**: 1.0.0 | **Updated**: November 25, 2024

A production-ready full-stack real estate management platform built with React, Node.js, Express, and MongoDB.

### 🎯 Quick Links

📱 [Setup](#quick-start-guide) • 🚀 [Deploy](./VERCEL_DEPLOYMENT.md) • 📚 [API Docs](#-api-documentation) • 🛠️ [Tech Stack](#-technology-stack)

---

## 🏗️ Project Structure

```
hiranandani-clone-project/
├── src/                      # Frontend (React + TypeScript + Vite)
│   ├── components/          # Reusable React components
│   ├── pages/               # Page components for routing
│   ├── lib/                 # API services & utilities
│   │   ├── api.ts           # Axios instance with interceptors
│   │   ├── authService.ts   # Authentication API calls
│   │   ├── projectService.ts# Project CRUD operations
│   │   └── enquiryService.ts# Enquiry submissions
│   └── App.tsx
├── server/                  # Backend (Node.js + Express + TypeScript)
│   ├── src/
│   │   ├── config/
│   │   │   └── database.ts  # MongoDB connection
│   │   ├── controllers/     # Business logic
│   │   │   ├── authController.ts
│   │   │   ├── projectController.ts
│   │   │   └── enquiryController.ts
│   │   ├── models/          # Mongoose schemas
│   │   │   ├── User.ts
│   │   │   ├── Project.ts
│   │   │   └── Enquiry.ts
│   │   ├── routes/          # API route definitions
│   │   ├── middleware/      # Express middleware
│   │   │   └── auth.ts      # JWT authentication
│   │   ├── utils/           # Utility functions
│   │   └── index.ts         # Express server entry point
│   ├── package.json
│   ├── tsconfig.json
│   └── .env.example
├── docker-compose.yml       # Docker container orchestration
├── Dockerfile.client        # Frontend Docker image
├── Dockerfile.server        # Backend Docker image
├── package.json             # Root workspace package.json
├── vite.config.ts           # Vite configuration with API proxy
└── README.md               # This file
```

## 🚀 Quick Start Guide

### Prerequisites

- **Node.js** 18.0 or higher
- **npm** 9.0 or higher (or yarn/bun)
- **MongoDB** (local instance or MongoDB Atlas account)
- **Docker & Docker Compose** (optional, for containerized deployment)

### Step 1: Clone & Install Dependencies

```bash
# Clone repository
git clone <YOUR_REPO_URL>
cd hiranandani-clone-project

# Install all dependencies (both frontend and backend)
npm run install:all
```

### Step 2: Configure Environment Variables

**Create `.env` in root directory:**

```env
VITE_API_URL=http://localhost:5000/api
```

**Create `server/.env` in server directory:**

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/hiranandani-db
NODE_ENV=development
JWT_SECRET=your_super_secret_jwt_key_change_this_in_production
JWT_EXPIRE=7d
CORS_ORIGIN=http://localhost:8080
CLOUDINARY_CLOUD_NAME=optional_for_images
CLOUDINARY_API_KEY=optional_for_images
CLOUDINARY_API_SECRET=optional_for_images
```

### Step 3: Start Development Servers

```bash
# Start both frontend and backend concurrently
npm run dev
```

This starts:

- **Frontend**: http://localhost:8080 (Vite dev server)
- **Backend API**: http://localhost:5000 (Express server)
- **API Proxy**: Requests to `/api/*` forward to backend

### Step 4: Test the Application

1. Open http://localhost:8080 in your browser
2. Navigate through pages
3. Try submitting an enquiry
4. Backend API should respond at http://localhost:5000/api/health

## 📚 API Documentation

### Health Check

```http
GET /api/health
```

### Authentication Endpoints

**Register User**

```http
POST /api/auth/register
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "securePassword123",
  "phone": "+919876543210"
}

Response: { token, user }
```

**Login User**

```http
POST /api/auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "securePassword123"
}

Response: { token, user }
```

**Get Profile**

```http
GET /api/auth/profile
Authorization: Bearer <token>

Response: { user }
```

### Projects Endpoints

**Get All Projects**

```http
GET /api/projects?category=residential&status=ongoing
Response: [{ id, title, description, ... }]
```

**Get Single Project**

```http
GET /api/projects/:id
Response: { project }
```

**Create Project** (Admin only)

```http
POST /api/projects
Authorization: Bearer <admin-token>
Content-Type: application/json

{
  "title": "Project Name",
  "subtitle": "Subtitle",
  "description": "Description",
  "location": "City, State",
  "category": "residential|commercial|hospitality|infrastructure",
  "features": ["Feature 1", "Feature 2"],
  "status": "ongoing|completed|planned",
  "startDate": "2024-01-01"
}
```

**Update Project** (Admin only)

```http
PUT /api/projects/:id
Authorization: Bearer <admin-token>
Content-Type: application/json

{ /* Updated fields */ }
```

**Delete Project** (Admin only)

```http
DELETE /api/projects/:id
Authorization: Bearer <admin-token>
```

### Enquiry Endpoints

**Submit Enquiry** (Public)

```http
POST /api/enquiries
Content-Type: application/json

{
  "name": "Customer Name",
  "email": "customer@example.com",
  "phone": "+919876543210",
  "subject": "Enquiry Subject",
  "message": "Enquiry message",
  "projectId": "optional-project-id"
}

Response: { enquiry }
```

**Get All Enquiries** (Admin only)

```http
GET /api/enquiries
Authorization: Bearer <admin-token>
Response: [{ enquiries }]
```

**Get Single Enquiry** (Admin only)

```http
GET /api/enquiries/:id
Authorization: Bearer <admin-token>
Response: { enquiry }
```

**Update Enquiry** (Admin only)

```http
PUT /api/enquiries/:id
Authorization: Bearer <admin-token>
Content-Type: application/json

{
  "status": "new|contacted|resolved"
}
```

## 🛠️ Technology Stack

### Frontend Technologies

| Technology      | Version | Purpose                 |
| --------------- | ------- | ----------------------- |
| React           | 18.3.1  | UI Library              |
| TypeScript      | 5.8.3   | Type Safety             |
| Vite            | 5.4.19  | Build Tool & Dev Server |
| React Router    | 6.30.1  | Client-side Routing     |
| React Query     | 5.83.0  | Server State Management |
| React Hook Form | 7.61.1  | Form State Management   |
| Axios           | 1.6.0   | HTTP Client             |
| Tailwind CSS    | 3.4.17  | Utility-First CSS       |
| shadcn/ui       | Latest  | Component Library       |
| Recharts        | 2.15.4  | Chart Library           |

### Backend Technologies

| Technology | Version | Purpose              |
| ---------- | ------- | -------------------- |
| Node.js    | 18+     | Runtime              |
| Express    | 4.18.2  | Web Framework        |
| TypeScript | 5.3.3   | Type Safety          |
| MongoDB    | 7+      | NoSQL Database       |
| Mongoose   | 8.0.0   | MongoDB ODM          |
| JWT        | 9.1.0   | Authentication       |
| bcryptjs   | 2.4.3   | Password Hashing     |
| CORS       | 2.8.5   | Cross-Origin Support |
| Multer     | 1.4.5   | File Uploads         |
| Cloudinary | 1.41.0  | Image Storage        |

## 📝 Available Scripts

### Root Level (Frontend + Backend)

```bash
npm run dev              # Run both frontend & backend in dev mode
npm run dev:client      # Run frontend only
npm run dev:server      # Run backend only
npm run build           # Build both frontend & backend
npm run build:client    # Build frontend only
npm run build:server    # Build backend only
npm start               # Start production server
npm run install:all     # Install dependencies for both
npm run lint            # Run ESLint
npm run preview         # Preview production build
```

### Server Level (cd server && npm run ...)

```bash
npm run dev             # Start with ts-node (hot reload)
npm run build           # Compile TypeScript to JavaScript
npm start               # Run compiled JavaScript
npm run lint            # Lint TypeScript files
```

## 🐳 Docker Deployment

### Using Docker Compose (Recommended)

```bash
# Build all images
docker-compose build

# Start all services
docker-compose up -d

# View logs
docker-compose logs -f

# Stop all services
docker-compose down -v

# Stop and remove volumes
docker-compose down -v
```

**Services Started:**

- **MongoDB**: mongodb://localhost:27017
- **Backend**: http://localhost:5000
- **Frontend**: http://localhost:8080

### Docker Compose Environment

The `docker-compose.yml` includes:

- **MongoDB 7**: NoSQL database
- **Backend Service**: Express API on port 5000
- **Frontend Service**: Vite preview on port 8080
- **Volumes**: MongoDB data persistence
- **Networks**: All services on same network

## 🔐 Authentication Flow

1. **User Registration/Login**

   - User submits credentials to `/api/auth/register` or `/api/auth/login`
   - Backend hashes password with bcryptjs (10 salt rounds)
   - Backend generates JWT token (expires in 7 days)
   - Token returned to frontend

2. **Token Storage**

   - Token stored in browser localStorage as `authToken`
   - Axios interceptor auto-adds token to all requests

3. **Protected Routes**

   - Backend middleware checks token validity
   - Routes check user role (admin/user)
   - Invalid tokens return 401 Unauthorized
   - Insufficient permissions return 403 Forbidden

4. **Logout**
   - Token removed from localStorage
   - User redirected to login

## 📦 Database Schema

### User Model

```typescript
{
  _id: ObjectId,
  name: String,
  email: String (unique),
  password: String (hashed),
  phone: String,
  role: 'user' | 'admin',
  createdAt: Date,
  updatedAt: Date
}
```

### Project Model

```typescript
{
  _id: ObjectId,
  title: String,
  subtitle: String,
  description: String,
  location: String,
  category: 'residential' | 'commercial' | 'hospitality' | 'infrastructure',
  features: [String],
  imagePath: String,
  imageUrl: String,
  status: 'ongoing' | 'completed' | 'planned',
  startDate: Date,
  expectedEndDate: Date,
  completionDate: Date,
  createdAt: Date,
  updatedAt: Date
}
```

### Enquiry Model

```typescript
{
  _id: ObjectId,
  name: String,
  email: String,
  phone: String,
  subject: String,
  message: String,
  projectId: ObjectId (optional),
  status: 'new' | 'contacted' | 'resolved',
  createdAt: Date,
  updatedAt: Date
}
```

## 🚀 Deployment Guide

### Quick Deployment (Vercel + Railway + MongoDB Atlas)

**⏱️ Time: ~15 minutes**

See detailed guide: **[VERCEL_DEPLOYMENT.md](./VERCEL_DEPLOYMENT.md)**

**Quick Steps:**

1. Push to GitHub
2. Connect Vercel to GitHub repo
3. Deploy backend to Railway.app
4. Connect MongoDB Atlas
5. Set environment variables
6. Done! ✅

### Frontend Deployment Options

**✅ Recommended: Vercel**

- Free tier with unlimited bandwidth
- Auto-deploys on git push
- Built-in analytics
- Custom domain support
- One-click GitHub integration

```bash
# Simple deploy
npm run build:client
# Then connect GitHub to Vercel dashboard
```

**Alternative: Netlify**

```bash
npm run build:client
# Drag & drop dist/ or connect GitHub
```

### Backend Deployment Options

**✅ Recommended: Railway.app (FREE)**

- $5/month credit (covers most apps)
- Node.js optimized
- Easy MongoDB integration
- One-click GitHub deploy
- Built-in monitoring

**Alternative: Render.com**

- Free tier available
- Auto-deploys on git push
- PostgreSQL/MongoDB ready

**Alternative: DigitalOcean**

- $5-12/month
- Full control over server
- Better for scaling

### Database Setup

**✅ Recommended: MongoDB Atlas (FREE)**

1. Create account at [mongodb.com/atlas](https://mongodb.com/atlas)
2. Create free M0 cluster
3. Get connection string
4. Add to backend `.env`:
   ```
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/hiranandani
   ```

**Local Development:**

```bash
# MacOS
brew install mongodb-community
brew services start mongodb-community

# Windows
# Download from mongodb.com & run mongod

# Linux
sudo apt-get install mongodb
sudo systemctl start mongodb
```

## 🎯 Production Checklist

- [ ] Update JWT_SECRET with random 32+ character string
- [ ] Update CORS_ORIGIN to your production domain
- [ ] Configure MongoDB Atlas or production DB
- [ ] Set NODE_ENV to 'production'
- [ ] Enable HTTPS on production
- [ ] Set up error logging (e.g., Sentry)
- [ ] Configure email service for enquiries
- [ ] Set up monitoring (e.g., New Relic, DataDog)
- [ ] Configure backups for MongoDB
- [ ] Set up CI/CD pipeline
- [ ] Test all API endpoints
- [ ] Load test the application
- [ ] Security audit

## 📊 Project Features

### Core Features

- ✅ User Authentication (JWT-based)
- ✅ Role-based Access Control (User/Admin)
- ✅ Project Management (CRUD)
- ✅ Property Showcase with Filtering
- ✅ Enquiry Management System
- ✅ Responsive Design
- ✅ Mobile-First Approach

### Technical Features

- ✅ Type-Safe with TypeScript
- ✅ Modular Architecture
- ✅ API Error Handling
- ✅ CORS Support
- ✅ Docker Containerization
- ✅ Environment-Based Configuration
- ✅ Database Indexing
- ✅ Password Hashing (bcryptjs)
- ✅ Token Expiration Handling
- ✅ Request/Response Interceptors

## 🔧 Troubleshooting

### Port Already in Use

```bash
# Find and kill process on port 5000
# Windows
netstat -ano | findstr :5000
taskkill /PID <PID> /F

# Mac/Linux
lsof -ti:5000 | xargs kill -9
```

### MongoDB Connection Error

```bash
# Check if MongoDB is running
# Windows: Check Services
# Mac: brew services list
# Linux: sudo systemctl status mongodb
# Cloud: Check MongoDB Atlas network access
```

### Dependencies Not Installing

```bash
# Clear npm cache
npm cache clean --force

# Remove node_modules
rm -rf node_modules package-lock.json

# Reinstall
npm install
```

### CORS Error

- Check CORS_ORIGIN in `server/.env`
- Verify frontend URL matches CORS_ORIGIN
- Check API_BASE_URL in frontend config

## 📞 Support

For issues or questions, refer to the documentation or contact the development team.

---

## 📄 License

This project is proprietary and belongs to the client. All rights reserved.

## 👨‍💻 Development Team

Built with ❤️ using modern web technologies.

**Last Updated**: November 2025  
**Version**: 1.0.0
