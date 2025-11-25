# 🚀 Complete Vercel Deployment Guide

This guide covers deploying the Hiranandani Clone full-stack application to production using Vercel (Frontend) and Railway/Render (Backend).

## 📋 Pre-Deployment Checklist

- [ ] Push all code to GitHub (public or private repo)
- [ ] MongoDB Atlas account with cluster created
- [ ] Vercel account (free)
- [ ] Railway.app or Render.com account (for backend)
- [ ] Custom domain (optional but recommended)

---

## 🎯 Part 1: Frontend Deployment on Vercel

### Step 1: Prepare Frontend for Production

1. **Update environment configuration**

```bash
# In vite.config.ts, ensure API URL is correctly set
export default defineConfig({
  define: {
    __API_URL__: JSON.stringify(process.env.VITE_API_URL || 'https://your-backend-api.com')
  }
})
```

2. **Update src/lib/api.ts for production**

```typescript
const API_BASE_URL = process.env.VITE_API_URL || "http://localhost:5000";

export const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
});
```

3. **Build locally to test**

```bash
npm run build:client
npm run preview
```

### Step 2: Connect to Vercel

1. **Go to [vercel.com](https://vercel.com)**
2. **Click "Add New" → "Project"**
3. **Select "Import Git Repository"**
4. **Connect GitHub** (authorize Vercel to access repositories)
5. **Search for `hiranandani-clone-project`**
6. **Click "Import"**

### Step 3: Configure Vercel Project

**Project Settings:**

- **Project Name**: `hiranandani-clone` (or your choice)
- **Framework Preset**: Vite
- **Root Directory**: `.` (leave default)
- **Build Command**: `npm run build:client`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

### Step 4: Add Environment Variables

1. **In Vercel Dashboard**, go to **Settings** → **Environment Variables**

2. **Add the following variables**:

```
VITE_API_URL=https://your-backend-api-railway.com
```

**Example for different deployment stages:**

- **Production**: `https://hiranandani-api.railway.app`
- **Staging**: `https://hiranandani-api-staging.railway.app`
- **Development**: `http://localhost:5000`

3. **Click "Save"**

### Step 5: Deploy Frontend

1. **Click "Deploy"** button
2. **Wait for build to complete** (usually 2-3 minutes)
3. **Get your Frontend URL**: `https://your-project.vercel.app`

**Test the deployment:**

```bash
curl https://your-project.vercel.app
```

### Step 6: Set Custom Domain (Optional)

1. **Go to Settings → Domains**
2. **Click "Add Domain"**
3. **Enter your domain** (e.g., `hiranandani.com`)
4. **Add DNS records** (Vercel provides instructions)
5. **Wait for SSL certificate** (usually instant)

---

## 🎯 Part 2: Backend Deployment on Railway.app

### Why Railway?

- Free tier with $5/month credit
- Easy MongoDB integration
- 1-click deployment from GitHub
- Perfect for Node.js apps

### Step 1: Prepare Backend for Production

1. **Create production environment file** (`server/.env.production`)

```env
# Database
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/hiranandani
NODE_ENV=production
PORT=5000

# Security
JWT_SECRET=your-super-secret-random-string-min-32-chars
JWT_EXPIRE=7d

# CORS - Update with your Vercel URL
CORS_ORIGIN=https://your-project.vercel.app,https://your-domain.com

# Optional - Email Service
SENDGRID_API_KEY=optional_for_emails
```

2. **Update server/package.json start script**

```json
{
  "scripts": {
    "start": "node dist/index.js",
    "dev": "node dist/index.js",
    "build": "tsc"
  }
}
```

3. **Build the backend**

```bash
cd server
npm run build
cd ..
```

### Step 2: Push to GitHub

```bash
git add .
git commit -m "Production ready - ready for deployment"
git push origin main
```

### Step 3: Deploy on Railway.app

1. **Go to [railway.app](https://railway.app)**
2. **Sign up with GitHub** (simplest method)
3. **Click "Create New Project"**
4. **Select "Deploy from GitHub repo"**
5. **Select `hiranandani-clone-project` repository**
6. **Select `main` branch**
7. **Add MongoDB service** (Railway provides free MongoDB)

### Step 4: Configure Railway Environment

1. **In Railway Dashboard, go to your Project**
2. **Click "Variables"**
3. **Add environment variables**:

```
MONGODB_URI=mongodb+srv://user:password@railway-cluster.mongodb.net/hiranandani
NODE_ENV=production
JWT_SECRET=your-secret-key-here
CORS_ORIGIN=https://your-project.vercel.app
PORT=5000
```

### Step 5: Configure Build & Deploy

1. **Go to "Settings"**
2. **Set Build Command**: `cd server && npm install && npm run build`
3. **Set Start Command**: `cd server && npm start`
4. **Set "Watch Paths"**: `server/**`
5. **Enable "Auto Deploy"** (optional)

### Step 6: Deploy

1. **Railway auto-deploys** on push to GitHub
2. **Monitor deployment** in Railway dashboard
3. **Get your Backend URL** from Railway (e.g., `https://hiranandani-api.railway.app`)

---

## 🔗 Part 3: Connect Frontend to Backend

### Update Vercel Environment Variable

1. **Go to Vercel Dashboard**
2. **Project Settings → Environment Variables**
3. **Update VITE_API_URL** with your Railway backend URL:

```
VITE_API_URL=https://hiranandani-api.railway.app
```

4. **Redeploy Frontend**:
   - Go to "Deployments"
   - Click "..." on latest deployment
   - Select "Redeploy"

### Test Connection

```bash
# Test backend health
curl https://hiranandani-api.railway.app/api/health

# Should return:
# {"status": "Server is running", "timestamp": "..."}
```

---

## 🗄️ Part 4: MongoDB Atlas Setup

### Create Free Cluster

1. **Go to [mongodb.com/atlas](https://mongodb.com/atlas)**
2. **Create Account** → Sign in
3. **Click "Create"** → **Build a Cluster**
4. **Select Tier**: Free (M0)
5. **Choose Region**: Closest to your target users
6. **Click "Create Cluster"** (takes ~3 mins)

### Configure Access

1. **Go to "Network Access"**
2. **Click "Add IP Address"**
3. **Select "Allow Access from Anywhere"** (or add specific IPs)
4. **Confirm**

### Get Connection String

1. **Go to "Clusters"**
2. **Click "Connect"**
3. **Choose "Connect Your Application"**
4. **Copy connection string**:

```
mongodb+srv://username:password@cluster.mongodb.net/hiranandani
```

5. **Replace `<password>` with your database password**

### Add to Backend

**In Railway Environment Variables:**

```
MONGODB_URI=mongodb+srv://your-username:your-password@cluster.mongodb.net/hiranandani
```

---

## ✅ Verification Checklist

### Frontend (Vercel)

- [ ] Build succeeds
- [ ] Website loads on `https://your-project.vercel.app`
- [ ] Images load correctly
- [ ] Navigation works
- [ ] No console errors
- [ ] Environment variables are set

### Backend (Railway)

- [ ] Build succeeds
- [ ] Server starts without errors
- [ ] Health check works: `curl https://your-api.railway.app/api/health`
- [ ] MongoDB connection successful
- [ ] Environment variables are set

### Integration

- [ ] Frontend can call backend API
- [ ] Login/registration works
- [ ] Projects load from database
- [ ] Enquiry submissions work
- [ ] All API endpoints respond

---

## 🧪 Production Testing

### 1. Test Health Endpoint

```bash
curl https://your-api.railway.app/api/health
```

### 2. Test Project Listing

```bash
curl https://your-api.railway.app/api/projects
```

### 3. Test User Registration

```bash
curl -X POST https://your-api.railway.app/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "password": "TestPassword123",
    "phone": "+919876543210"
  }'
```

### 4. Full Browser Test

1. Open `https://your-project.vercel.app` in browser
2. Navigate through pages
3. Test all features:
   - View projects
   - Submit enquiry
   - Try login/register (if implemented)

---

## 🚨 Troubleshooting

### Frontend Won't Deploy

**Error: "Build failed"**

- Check `npm run build:client` runs locally
- Verify environment variables are set in Vercel
- Check for TypeScript errors: `npm run lint`

**Error: "CORS error in console"**

- Update `CORS_ORIGIN` in backend .env
- Redeploy backend
- Wait 5 minutes for DNS propagation

### Backend Won't Start

**Error: "Cannot find module"**

- Run `npm run build` locally first
- Ensure all dependencies are in `package.json`
- Check `npm install` is successful

**Error: "MongoDB connection failed"**

- Verify `MONGODB_URI` is correct
- Check MongoDB Atlas IP whitelist
- Test connection string locally: `mongosh "your-connection-string"`

**Error: "Port already in use"**

- Railway auto-assigns ports, not needed to configure

### API Not Responding

**Error: "Failed to fetch from API"**

- Check `VITE_API_URL` in Vercel settings
- Verify backend URL is correct
- Test with `curl` command
- Check backend logs in Railway

**Error: "401 Unauthorized"**

- Verify JWT_SECRET matches frontend
- Check token expiration
- Clear browser localStorage: `localStorage.clear()`

---

## 📊 Monitoring & Logs

### Vercel Logs

1. **Go to Vercel Dashboard**
2. **Select Project**
3. **Go to "Functions"** or **"Deployments"**
4. **View real-time logs**

### Railway Logs

1. **Go to Railway Dashboard**
2. **Select Project**
3. **View logs** in terminal

### MongoDB Logs

1. **Go to MongoDB Atlas**
2. **Select Cluster**
3. **Go to "Monitoring"**
4. **View query performance**

---

## 🔐 Security Best Practices

1. **Never commit .env files**

   ```bash
   echo ".env" >> .gitignore
   echo ".env.production" >> .gitignore
   ```

2. **Use strong JWT_SECRET**

   ```bash
   node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
   ```

3. **Rotate secrets regularly**

   - Change JWT_SECRET monthly
   - Rotate MongoDB passwords
   - Update API keys

4. **Enable HTTPS**

   - Vercel auto-enables
   - Railway auto-enables
   - Use custom domain for branding

5. **API Rate Limiting** (optional enhancement)
   ```bash
   npm install express-rate-limit
   ```

---

## 📈 Performance Optimization

### Frontend (Vercel)

- Images are automatically optimized
- Code splitting enabled
- Gzip compression applied
- CDN distribution included

### Backend (Railway)

- Database indexing recommended
- Implement caching headers
- Enable compression: `app.use(compression())`

### Monitoring

- Set up error tracking (Sentry)
- Monitor API response times
- Track user analytics (Vercel Analytics)

---

## 🔄 Continuous Deployment Setup

### Auto-Deploy on Git Push

**Vercel**: Already enabled by default
**Railway**: Enable in Settings → Auto Deploy

### GitHub Actions (Optional CI/CD)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
      - run: npm install
      - run: npm run build
      - run: npm run lint
```

---

## 📞 Support & Resources

- **Vercel Docs**: https://vercel.com/docs
- **Railway Docs**: https://docs.railway.app
- **MongoDB Docs**: https://docs.mongodb.com
- **Express.js**: https://expressjs.com
- **React**: https://react.dev

---

## ✨ Summary

**You now have:**

- ✅ Frontend deployed on Vercel (global CDN)
- ✅ Backend deployed on Railway.app
- ✅ Database on MongoDB Atlas
- ✅ Automatic CI/CD
- ✅ SSL/HTTPS enabled
- ✅ Custom domain support
- ✅ Production monitoring

**Next Steps:**

1. Set up custom email notifications
2. Configure error tracking (Sentry)
3. Implement analytics
4. Set up automated backups
5. Plan for scaling

---

**Last Updated**: November 25, 2024
**Status**: ✅ Production Ready
