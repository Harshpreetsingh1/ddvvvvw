# Deployment Guide - Library Management System

This React application can be deployed to multiple platforms. All necessary configuration files are included.

---

## Option 1: Netlify (Easiest - Drag & Drop)

### Method A: Manual Deploy
1. Build the project:
   ```bash
   npm run build
   ```

2. Go to [netlify.com](https://www.netlify.com/) and sign up (free)

3. Drag and drop the `dist` folder onto the Netlify dashboard

### Method B: Netlify CLI
```bash
npm install -g netlify-cli
npm run build
netlify deploy --prod
```

**Configuration:** `netlify.toml` is already configured

---

## Option 2: Vercel (Best DX)

### Deploy with Vercel CLI
```bash
npm install -g vercel
vercel
```

Follow the prompts - Vercel automatically detects Vite projects.

**Configuration:** `vercel.json` is already configured

---

## Option 3: GitHub Pages

### Setup Steps

1. **Initialize Git repository** (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. **Create GitHub repository** and push:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git branch -M main
   git push -u origin main
   ```

3. **Update `vite.config.js`** - Add your repository name:
   ```javascript
   export default defineConfig({
     plugins: [react()],
     base: '/YOUR_REPO_NAME/'  // Replace with your actual repo name
   })
   ```

4. **Install dependencies and deploy**:
   ```bash
   npm install
   npm run deploy
   ```

5. **Enable GitHub Pages**:
   - Go to your repository on GitHub
   - Settings → Pages
   - Source: Deploy from branch
   - Branch: `gh-pages` → `/ (root)`
   - Save

Your site will be live at: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

---

## Option 4: Render

### Steps
1. Push your code to GitHub

2. Go to [render.com](https://render.com/) and create a **New Static Site**

3. Connect your GitHub repository

4. Configure:
   - **Build Command:** `npm run build`
   - **Publish Directory:** `dist`

5. Click "Create Static Site"

---

## Local Testing Before Deployment

Always test the production build locally before deploying:

```bash
npm run build
npm run preview
```

Open http://localhost:4173 to preview the production build.

---

## Quick Reference

| Platform | Cost | Best For | Deploy Command |
|----------|------|----------|----------------|
| **Netlify** | Free | Beginners, quick deploys | `netlify deploy` |
| **Vercel** | Free | Best DX, auto-previews | `vercel` |
| **GitHub Pages** | Free | Already using GitHub | `npm run deploy` |
| **Render** | Free | Alternative to Netlify | Manual setup |

---

## Troubleshooting

### Build fails
- Ensure all dependencies are installed: `npm install`
- Check for errors: `npm run build`

### Blank page after deployment
- Check browser console for errors
- Verify `base` path in `vite.config.js` matches your deployment URL
- Ensure routing is configured correctly

### 404 errors on refresh
- Configuration files (`netlify.toml`, `vercel.json`) handle this
- They redirect all routes to `index.html` for client-side routing

---

## Environment Variables (if needed later)

Create `.env` file in project root:
```
VITE_API_URL=your_api_url_here
```

Access in code: `import.meta.env.VITE_API_URL`

**Note:** Rebuild after changing environment variables!

---

Choose the platform that works best for you and follow the corresponding steps above. All configuration files are already set up!
