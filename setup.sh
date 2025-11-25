#!/bin/bash

# Hiranandani Clone - Setup Script
# This script helps you get started with the project

echo "🏗️  Hiranandani Clone - Full Stack Setup"
echo "========================================"
echo ""

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check Node.js
echo "Checking Node.js installation..."
if ! command -v node &> /dev/null; then
    echo -e "${RED}✗ Node.js is not installed${NC}"
    echo "Please install Node.js 18+ from https://nodejs.org/"
    exit 1
fi
echo -e "${GREEN}✓ Node.js $(node -v) found${NC}"

# Check npm
echo "Checking npm installation..."
if ! command -v npm &> /dev/null; then
    echo -e "${RED}✗ npm is not installed${NC}"
    exit 1
fi
echo -e "${GREEN}✓ npm $(npm -v) found${NC}"
echo ""

# Install dependencies
echo "Installing dependencies..."
echo "Installing frontend dependencies..."
npm install

echo ""
echo "Installing backend dependencies..."
cd server
npm install
cd ..
echo -e "${GREEN}✓ All dependencies installed${NC}"
echo ""

# Create .env files
echo "Creating environment configuration files..."

if [ ! -f .env ]; then
    echo "VITE_API_URL=http://localhost:5000/api" > .env
    echo -e "${GREEN}✓ Created .env${NC}"
else
    echo -e "${YELLOW}⊗ .env already exists${NC}"
fi

if [ ! -f server/.env ]; then
    cat > server/.env << EOF
PORT=5000
MONGODB_URI=mongodb://localhost:27017/hiranandani-db
NODE_ENV=development
JWT_SECRET=dev-secret-change-in-production-$(openssl rand -base64 32)
JWT_EXPIRE=7d
CORS_ORIGIN=http://localhost:8080
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
EOF
    echo -e "${GREEN}✓ Created server/.env${NC}"
else
    echo -e "${YELLOW}⊗ server/.env already exists${NC}"
fi

echo ""
echo -e "${GREEN}✓ Setup Complete!${NC}"
echo ""
echo "Next steps:"
echo "1. Make sure MongoDB is running:"
echo "   - Local: mongod"
echo "   - Atlas: Check connection string in server/.env"
echo ""
echo "2. Start development servers:"
echo "   npm run dev"
echo ""
echo "3. Open browser:"
echo "   Frontend: http://localhost:8080"
echo "   Backend: http://localhost:5000/api/health"
echo ""
echo "For more info, check README.md"
