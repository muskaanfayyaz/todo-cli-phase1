# Update CORS Settings on Render

Your backend is deployed, but you need to update CORS to allow frontend requests.

## 🔧 Update CORS_ORIGINS on Render

1. **Go to Render Dashboard**
   - Visit: https://dashboard.render.com
   - Find your service: `todo-spec-driven-development`

2. **Update Environment Variables**

   Navigate to: **Environment** tab

   Find or add: `CORS_ORIGINS`

   **Current value (for local development):**
   ```
   ["http://localhost:3000"]
   ```

   **Updated value (after you deploy frontend):**
   ```
   ["http://localhost:3000", "https://your-frontend.vercel.app"]
   ```

3. **Save Changes**
   - Click "Save Changes"
   - Render will automatically redeploy (takes ~2 minutes)

## 🚀 Quick Test After Update

```bash
# Test CORS from your frontend
curl -X OPTIONS https://todo-spec-driven-development.onrender.com/api/test/tasks \
  -H "Origin: http://localhost:3000" \
  -H "Access-Control-Request-Method: GET" \
  -v
```

You should see:
```
Access-Control-Allow-Origin: http://localhost:3000
Access-Control-Allow-Credentials: true
```

## ✅ Verification Checklist

Check these environment variables are set on Render:

- [ ] `DATABASE_URL` - Your Neon PostgreSQL connection string
- [ ] `BETTER_AUTH_SECRET` - Must match: `heoOSxQGJEGeCxebsHmLVGOFo8Vn8lbVZDP7jb9p7ac=`
- [ ] `CORS_ORIGINS` - `["http://localhost:3000"]` (add frontend URL when deployed)
- [ ] `DEBUG` - `false`

## 🎯 Next Steps

1. Update CORS on Render (as described above)
2. Test frontend connection:
   ```bash
   cd frontend
   npm run dev
   # Visit http://localhost:3000
   # Try to register/login
   ```
3. Deploy frontend to Vercel
4. Update CORS to include Vercel URL
5. Done! 🎉
