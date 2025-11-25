# 🚀 Quick Deploy Guide (15 Minutes)

**Status**: ✅ Application is production-ready. Follow these steps to deploy.

---

## Prerequisites

You need accounts for:

1. ✅ GitHub (free) - for version control
2. ✅ Vercel (free) - for frontend hosting
3. ✅ Railway.app (free tier available) - for backend hosting
4. ✅ MongoDB Atlas (free) - for database

---

## Step 1: Push Code to GitHub (2 min)

```powershell
# Navigate to project
cd c:\Users\Dell\.vscode\client-proj\hiranandani-clone-project

# Initialize git (if not done)
git init

# Add all files
git add .

# Commit
git commit -m "Production ready - v1.0.0"

# Create new repository on github.com and get the URL
# Then push:
git remote add origin <YOUR_GITHUB_REPO_URL>
git branch -M main
git push -u origin main
```

**Expected Output**:

```
Enumerating objects: 150, done.
...
* [new branch]      main -> main
Branch 'main' set up to track remote branch 'main' from 'origin'.
```

---

## Step 2: Deploy Frontend on Vercel (3 min)

### 2.1 Connect to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click **"New Project"**
3. Select **"Import Git Repository"**
4. Select your GitHub repository
5. Click **"Import"**

### 2.2 Configure Frontend

1. **Project Name**: Keep default or customize
2. **Framework**: Select **"Vite"**
3. **Root Directory**: Leave blank (or use `./` if it asks)
4. **Build Command**: `npm run build:client`
5. **Output Directory**: `dist`
6. **Environment Variables**: Click **"Add"**
   - Name: `VITE_API_URL`
   - Value: Will get from Railway backend (for now use `http://localhost:5000`)

### 2.3 Deploy

1. Click **"Deploy"**
2. Wait for deployment (3-5 minutes)
3. You'll get a URL like `https://your-domain.vercel.app`

**✅ Frontend Deployed!**

---

## Step 3: Deploy Backend on Railway.app (5 min)

### 3.1 Connect to Railway

1. Go to [railway.app](https://railway.app)
2. Click **"Start New Project"**
3. Select **"Deploy from GitHub"**
4. Connect your GitHub account
5. Select your repository

### 3.2 Configure Backend

1. Railway auto-detects monorepo
2. Click on **"server"** service
3. Go to **"Settings"** tab

### 3.3 Set Build Command

1. Under **"Build"** section:
   - **Build Command**: `cd server && npm install && npm run build`
   - **Start Command**: `cd server && node dist/index.js`

### 3.4 Add Environment Variables

Click **"Add Variable"** for each:

```
NODE_ENV = production
MONGODB_URI = mongodb+srv://... (from Step 4)
JWT_SECRET = (generate: node -e "console.log(require('crypto').randomBytes(32).toString('hex'))")
CORS_ORIGIN = https://your-domain.vercel.app
PORT = 5000
```

### 3.5 Deploy

1. Click **"Deploy"**
2. Wait 5-10 minutes
3. Get your backend URL from Railway dashboard

**✅ Backend Deployed!**

---

## Step 4: Set Up MongoDB Atlas (3 min)

### 4.1 Create Cluster

1. Go to [mongodb.com/cloud](https://mongodb.com/cloud)
2. Sign up or log in
3. Click **"Create"** (new project)
4. Click **"Build a Database"**
5. Select **"M0 Free"** tier
6. Click **"Create"**

### 4.2 Configure Cluster

1. Choose your region (closest to your users)
2. Keep defaults
3. Click **"Create Deployment"**

### 4.3 Create Database User

1. Go to **"Database Access"**
2. Click **"Add New Database User"**
3. Username: `appuser`
4. Password: Generate strong one
5. Built-in Role: **"Atlas Admin"**
6. Click **"Add User"**

### 4.4 Allow Network Access

1. Go to **"Network Access"**
2. Click **"Add IP Address"**
3. Select **"Allow Access from Anywhere"** (0.0.0.0/0)
4. Click **"Confirm"**

### 4.5 Get Connection String

1. Go to **"Databases"**
2. Click **"Connect"** on your cluster
3. Choose **"Drivers"**
4. Select **"Node.js"**
5. Copy the connection string
6. Replace `<username>` and `<password>` with credentials from Step 4.3

**Connection String Format**:

```
mongodb+srv://appuser:yourpassword@cluster0.abc123.mongodb.net/hiranandani?retryWrites=true&w=majority
```

**✅ Database Ready!**

---

## Step 5: Connect Everything (2 min)

### 5.1 Update Frontend with Backend URL

**On Vercel**:

1. Go to your Vercel project dashboard
2. Click **"Settings"** → **"Environment Variables"**
3. Find/Edit `VITE_API_URL`
4. Change value to your Railway backend URL
   - Example: `https://your-backend.railway.app`
5. Click **"Save"**
6. Go to **"Deployments"** → **"Redeploy"** latest

### 5.2 Update Backend with MongoDB URL

**On Railway**:

1. Go to your Railway project
2. Select **"server"** service
3. Go to **"Variables"** tab
4. Find `MONGODB_URI`
5. Update with MongoDB Atlas connection string from Step 4.5
6. Save
7. Railway will auto-redeploy

---

## Step 6: Test Everything (1 min)

### Test Frontend

```
Open: https://your-domain.vercel.app
```

Expected:

- ✅ Page loads
- ✅ Navigation works
- ✅ Images display

### Test Backend Connection

```
Open: https://your-backend.railway.app/api/health
```

Expected:

```json
{
  "status": "ok",
  "environment": "production",
  "database": "connected"
}
```

### Test API Endpoints

Frontend should now be able to:

- ✅ Fetch projects from backend
- ✅ Submit enquiry forms
- ✅ Register/login (if implemented)

---

## 🎉 Deployment Complete!

| Component | Status  | URL                                |
| --------- | ------- | ---------------------------------- |
| Frontend  | ✅ Live | `https://your-domain.vercel.app`   |
| Backend   | ✅ Live | `https://your-backend.railway.app` |
| Database  | ✅ Live | MongoDB Atlas                      |

---

## ⚠️ Common Issues & Fixes

### Frontend Shows Blank Page

**Solution:**

1. Open browser console (F12)
2. Check if API URL is correct in environment variables
3. Redeploy from Vercel dashboard

### Backend Returns 500 Error

**Solution:**

1. Check Railway logs: Select service → "Logs" tab
2. Verify MongoDB connection string (no typos)
3. Check environment variables are set

### "Cannot POST /api/..." Error

**Solution:**

1. Verify backend is running: `https://backend.railway.app/api/health`
2. Check CORS_ORIGIN matches frontend URL
3. Redeploy backend

### Database Connection Failed

**Solution:**

1. Check MongoDB Atlas cluster is running
2. Verify IP whitelist includes Railway server IP
3. Use "Allow Anywhere" (0.0.0.0/0) temporarily for testing

---

## 📚 Additional Resources

- **Deployment Guide**: [VERCEL_DEPLOYMENT.md](./VERCEL_DEPLOYMENT.md)
- **Pre-Launch Checklist**: [DEPLOYMENT_CHECKLIST.md](./DEPLOYMENT_CHECKLIST.md)
- **Main README**: [README.md](./README.md)

---

## 🔧 Update Deployment

### Push Code Changes

```powershell
git add .
git commit -m "Your changes description"
git push origin main
```

### Auto-Deploy

- **Vercel**: Auto-deploys on push to main
- **Railway**: Auto-deploys on push to main

No manual redeploy needed! 🚀

---

## 📞 Support

- **Vercel Docs**: https://vercel.com/docs
- **Railway Docs**: https://docs.railway.app
- **MongoDB Docs**: https://docs.mongodb.com

---

**Status**: ✅ Production Ready  
**Total Deploy Time**: ~15 minutes  
**Difficulty**: Beginner-Friendly ⭐⭐
