# Complete Deployment Guide - Step by Step

## 🎯 Current Status

✅ Backend deployed on Render: `https://todo-spec-driven-development.onrender.com/`
⏳ CORS needs configuration
⏳ Frontend needs deployment

---

## Step 1: Configure CORS on Render (5 minutes)

### Why?
Your frontend (running on localhost:3000) needs permission to call your backend API. Without CORS configuration, browser will block requests.

### Instructions:

1. **Open Render Dashboard**
   - Go to: https://dashboard.render.com
   - Sign in with your account

2. **Find Your Service**
   - Look for: `todo-spec-driven-development` (or similar name)
   - Click on it

3. **Navigate to Environment**
   - On the left sidebar, click **Environment**
   - You'll see a list of environment variables

4. **Check/Add These Variables**

   **Required variables:**

   | Variable Name | Value | Notes |
   |--------------|-------|-------|
   | `DATABASE_URL` | `postgresql://user:pass@...neon.tech/db?sslmode=require` | Your Neon PostgreSQL URL |
   | `BETTER_AUTH_SECRET` | `heoOSxQGJEGeCxebsHmLVGOFo8Vn8lbVZDP7jb9p7ac=` | MUST match frontend |
   | `CORS_ORIGINS` | `["http://localhost:3000"]` | Allow local frontend |
   | `DEBUG` | `false` | Production mode |

   **To add CORS_ORIGINS:**
   - Click **Add Environment Variable**
   - Key: `CORS_ORIGINS`
   - Value: `["http://localhost:3000"]`
   - Click **Save Changes**

5. **Wait for Redeploy**
   - Render automatically redeploys (takes ~2 minutes)
   - Watch the **Logs** tab to see deployment progress
   - Wait for "Application startup complete"

6. **Verify CORS is Working**
   ```bash
   curl -I https://todo-spec-driven-development.onrender.com/health \
     -H "Origin: http://localhost:3000"
   ```

   Look for this header in response:
   ```
   Access-Control-Allow-Origin: http://localhost:3000
   ```

---

## Step 2: Test Frontend Locally (5 minutes)

### Start Frontend

```bash
# Navigate to frontend directory
cd /mnt/d/todo-cli-phase1/frontend

# Install dependencies (if not done)
npm install

# Start development server
npm run dev
```

### Test the Application

1. **Open Browser**
   - Visit: http://localhost:3000
   - You should see the landing page

2. **Register New Account**
   - Click "Get Started" or "Sign Up"
   - Enter email: `test@example.com`
   - Enter password: `Test123!@#`
   - Enter name: `Test User`
   - Click "Create Account"

3. **Check Console for Errors**
   - Open browser DevTools (F12)
   - Check Console tab
   - Look for any CORS errors or API errors

4. **Create a Task**
   - After registration, you should be on `/tasks` page
   - Try creating a task: "Test Task 1"
   - It should appear in the list

5. **Test Task Operations**
   - Mark task as complete (checkbox)
   - Edit task (if available)
   - Delete task

### Common Issues

**Issue: CORS Error**
```
Access to fetch at 'https://todo-spec-driven-development.onrender.com/api/...'
from origin 'http://localhost:3000' has been blocked by CORS policy
```

**Solution:**
- CORS_ORIGINS not set on Render
- Go back to Step 1 and add CORS_ORIGINS
- Wait for redeploy

**Issue: 401 Unauthorized**
```
{"detail": "Invalid token"}
```

**Solution:**
- BETTER_AUTH_SECRET mismatch
- Check Render environment variables
- Secret must be: `heoOSxQGJEGeCxebsHmLVGOFo8Vn8lbVZDP7jb9p7ac=`

**Issue: Network Error**
```
Failed to fetch
```

**Solution:**
- Backend might be sleeping (Render free tier)
- Visit backend URL first to wake it up
- Try again after 30 seconds

---

## Step 3: Prepare Frontend for Vercel (2 minutes)

### Create Production Environment File

Create `frontend/.env.production`:

```bash
cd /mnt/d/todo-cli-phase1/frontend

cat > .env.production << 'EOF'
# Production Environment Variables for Vercel

# Backend API (Render deployment)
NEXT_PUBLIC_API_URL=https://todo-spec-driven-development.onrender.com

# Better Auth Secret (MUST match backend)
BETTER_AUTH_SECRET=heoOSxQGJEGeCxebsHmLVGOFo8Vn8lbVZDP7jb9p7ac=

# Better Auth URL (will be your Vercel URL)
BETTER_AUTH_URL=https://your-app.vercel.app

# Database URL (same Neon database as backend)
DATABASE_URL=postgresql://neondb_owner:npg_xTGORHo47KsW@ep-hidden-night-ah5dqnpc.c-3.us-east-1.aws.neon.tech/neondb?sslmode=require
EOF
```

### Verify package.json

```bash
cat package.json | grep -A 3 '"scripts"'
```

Should include:
```json
"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start"
}
```

---

## Step 4: Deploy Frontend to Vercel (10 minutes)

### Option A: Deploy via Vercel CLI (Fastest)

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Navigate to frontend
cd /mnt/d/todo-cli-phase1/frontend

# Deploy to production
vercel --prod
```

**Follow the prompts:**
- Set up and deploy? **Y**
- Which scope? (Select your account)
- Link to existing project? **N**
- Project name? **todo-app-frontend** (or your choice)
- Directory? **./** (press Enter)
- Override settings? **N**

**Wait for deployment (~2 minutes)**

Vercel will output your production URL:
```
✅ Production: https://todo-app-frontend.vercel.app
```

### Option B: Deploy via Vercel Dashboard (Easier)

1. **Push to GitHub First**
   ```bash
   cd /mnt/d/todo-cli-phase1
   git add .
   git commit -m "Prepare for Vercel deployment"
   git push origin master
   ```

2. **Go to Vercel**
   - Visit: https://vercel.com
   - Click "Add New..." → "Project"
   - Click "Import Git Repository"

3. **Select Repository**
   - Authorize GitHub if needed
   - Find your repo: `todo-cli-phase1`
   - Click "Import"

4. **Configure Project**
   - **Framework Preset**: Next.js (auto-detected)
   - **Root Directory**: `frontend`
   - **Build Command**: `npm run build` (default)
   - **Output Directory**: `.next` (default)

5. **Add Environment Variables**

   Click "Environment Variables" and add:

   | Key | Value |
   |-----|-------|
   | `NEXT_PUBLIC_API_URL` | `https://todo-spec-driven-development.onrender.com` |
   | `BETTER_AUTH_SECRET` | `heoOSxQGJEGeCxebsHmLVGOFo8Vn8lbVZDP7jb9p7ac=` |
   | `DATABASE_URL` | Your Neon PostgreSQL URL |

6. **Deploy**
   - Click "Deploy"
   - Wait 2-3 minutes
   - Vercel will show your production URL

---

## Step 5: Update CORS with Frontend URL (2 minutes)

After frontend is deployed, update backend CORS:

1. **Get Your Frontend URL**
   - From Vercel: `https://your-app.vercel.app`

2. **Update Render CORS_ORIGINS**
   - Go to Render Dashboard
   - Find: `todo-spec-driven-development`
   - Environment tab
   - Edit `CORS_ORIGINS`:
   ```
   ["http://localhost:3000", "https://your-app.vercel.app"]
   ```
   - Save Changes (auto-redeploys)

3. **Wait for Redeploy** (~2 minutes)

---

## Step 6: Test Production Deployment (5 minutes)

### Test Frontend on Vercel

1. **Visit Your Frontend**
   - Go to: `https://your-app.vercel.app`

2. **Register New User**
   - Click "Sign Up"
   - Create account with different email

3. **Test Full Flow**
   - ✅ Registration works
   - ✅ Login works
   - ✅ Tasks page loads
   - ✅ Create task works
   - ✅ Mark complete works
   - ✅ Delete task works
   - ✅ Logout works

### Check for Issues

**Open Browser Console (F12):**
- No CORS errors
- No 401/403 errors
- No network errors

**Backend Logs (Render):**
- Go to Render Dashboard → Logs
- Check for successful API calls
- No error messages

---

## ✅ Deployment Complete!

### Your URLs:

| Service | URL |
|---------|-----|
| **Backend API** | https://todo-spec-driven-development.onrender.com |
| **Frontend App** | https://your-app.vercel.app |
| **API Docs** | https://todo-spec-driven-development.onrender.com/docs |
| **Database** | Neon PostgreSQL (connected) |

### Architecture:

```
User Browser
    ↓
Frontend (Vercel - Next.js 16)
    ↓
Backend (Render - FastAPI)
    ↓
Database (Neon - PostgreSQL)
```

---

## 🎯 Next Steps

### Optional Enhancements:

1. **Custom Domain**
   - Vercel: Settings → Domains → Add domain
   - Update CORS_ORIGINS on Render

2. **Environment Monitoring**
   - Vercel: Built-in analytics
   - Render: Metrics tab

3. **Performance Optimization**
   - Enable Vercel Edge Functions
   - Add Redis caching (optional)

4. **CI/CD**
   - Already set up!
   - Push to GitHub → Auto-deploys to both platforms

---

## 📊 Deployment Checklist

- [ ] Backend deployed on Render
- [ ] CORS_ORIGINS configured on Render
- [ ] Database connected (Neon PostgreSQL)
- [ ] Frontend deployed on Vercel
- [ ] Environment variables set on Vercel
- [ ] CORS updated with Vercel URL
- [ ] Registration/Login tested
- [ ] Tasks CRUD tested
- [ ] No console errors
- [ ] Multi-user isolation verified

---

## 🆘 Troubleshooting

### Backend Issues

**Backend sleeping (Render free tier)**
- First request takes 30-60 seconds to wake up
- Solution: Upgrade to paid plan or accept cold starts

**Database connection errors**
- Check DATABASE_URL is correct
- Verify Neon database is active
- Check firewall rules

### Frontend Issues

**Build fails on Vercel**
- Check Node version (need 20+)
- Verify all dependencies in package.json
- Check build logs for specific errors

**CORS errors in production**
- Verify CORS_ORIGINS includes Vercel URL
- Check format: `["url1", "url2"]` (JSON array)
- Wait for Render redeploy after changes

### Authentication Issues

**JWT errors**
- BETTER_AUTH_SECRET must match exactly
- Check no extra spaces or line breaks
- Verify on both Render and Vercel

**Session not persisting**
- Check cookies enabled
- Verify HTTPS (required for secure cookies)
- Check Better Auth configuration

---

## 📚 Resources

- **Render Docs**: https://render.com/docs
- **Vercel Docs**: https://vercel.com/docs
- **Neon Docs**: https://neon.tech/docs
- **FastAPI Docs**: https://fastapi.tiangolo.com
- **Next.js Docs**: https://nextjs.org/docs

---

**Need help?** Check the logs:
- Render: Dashboard → Logs
- Vercel: Dashboard → Deployments → View Function Logs
- Browser: DevTools (F12) → Console

🎉 **Your full-stack Todo app is now live!**
