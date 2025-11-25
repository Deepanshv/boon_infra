@echo off
REM Hiranandani Clone - Setup Script for Windows
REM This script helps you get started with the project

echo.
echo 🏗️  Hiranandani Clone - Full Stack Setup
echo ========================================
echo.

REM Check Node.js
echo Checking Node.js installation...
node -v >nul 2>&1
if errorlevel 1 (
    echo ✗ Node.js is not installed
    echo Please install Node.js 18+ from https://nodejs.org/
    pause
    exit /b 1
)
for /f "tokens=*" %%i in ('node -v') do set NODE_VERSION=%%i
echo ✓ Node.js %NODE_VERSION% found
echo.

REM Check npm
echo Checking npm installation...
npm -v >nul 2>&1
if errorlevel 1 (
    echo ✗ npm is not installed
    pause
    exit /b 1
)
for /f "tokens=*" %%i in ('npm -v') do set NPM_VERSION=%%i
echo ✓ npm %NPM_VERSION% found
echo.

REM Install dependencies
echo Installing dependencies...
echo Installing frontend dependencies...
call npm install
if errorlevel 1 (
    echo ✗ Failed to install frontend dependencies
    pause
    exit /b 1
)

echo.
echo Installing backend dependencies...
cd server
call npm install
if errorlevel 1 (
    echo ✗ Failed to install backend dependencies
    cd ..
    pause
    exit /b 1
)
cd ..
echo ✓ All dependencies installed
echo.

REM Create .env files
echo Creating environment configuration files...

if not exist .env (
    (
        echo VITE_API_URL=http://localhost:5000/api
    ) > .env
    echo ✓ Created .env
) else (
    echo ⊗ .env already exists
)

if not exist server\.env (
    (
        echo PORT=5000
        echo MONGODB_URI=mongodb://localhost:27017/hiranandani-db
        echo NODE_ENV=development
        echo JWT_SECRET=dev-secret-change-in-production
        echo JWT_EXPIRE=7d
        echo CORS_ORIGIN=http://localhost:8080
        echo CLOUDINARY_CLOUD_NAME=your_cloud_name
        echo CLOUDINARY_API_KEY=your_api_key
        echo CLOUDINARY_API_SECRET=your_api_secret
    ) > server\.env
    echo ✓ Created server/.env
) else (
    echo ⊗ server/.env already exists
)

echo.
echo ✓ Setup Complete!
echo.
echo Next steps:
echo 1. Make sure MongoDB is running
echo.
echo 2. Start development servers:
echo    npm run dev
echo.
echo 3. Open browser:
echo    Frontend: http://localhost:8080
echo    Backend: http://localhost:5000/api/health
echo.
echo For more info, check README.md
echo.
pause
