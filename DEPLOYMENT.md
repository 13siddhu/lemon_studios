# 🚀 Deployment Guide for Planto E-Commerce

## Quick Start Guide

Follow these steps to deploy your project to GitHub and host it online.

---

## 📦 Step 1: Prepare Your Project

Make sure you're in the project directory:
```bash
cd planto-ecommerce
```

Install dependencies:
```bash
npm install
```

Test locally:
```bash
npm run dev
```

Build for production:
```bash
npm run build
```

---

## 🐙 Step 2: Push to GitHub

### Initialize Git Repository

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - Planto e-commerce website"
```

### Create GitHub Repository

1. Go to https://github.com
2. Click "New Repository" (+ icon in top right)
3. Name it: `planto-ecommerce`
4. Make it **PUBLIC** ✅
5. Do NOT initialize with README (we already have one)
6. Click "Create Repository"

### Push to GitHub

```bash
# Add remote (replace YOUR-USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR-USERNAME/planto-ecommerce.git

# Push to main branch
git branch -M main
git push -u origin main
```

---

## 🌐 Step 3: Deploy to Vercel (Recommended)

### Method 1: Using Vercel Dashboard (Easiest)

1. Go to https://vercel.com
2. Sign up/Login with GitHub
3. Click "New Project"
4. Import your `planto-ecommerce` repository
5. Configure:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
6. Click "Deploy"
7. Wait 1-2 minutes
8. Your site is live! 🎉

### Method 2: Using Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel

# Follow the prompts:
# - Set up and deploy? Yes
# - Which scope? (Select your account)
# - Link to existing project? No
# - What's your project's name? planto-ecommerce
# - In which directory is your code located? ./
# - Want to override settings? No

# Deploy to production
vercel --prod
```

---

## 🌍 Step 4: Deploy to Netlify (Alternative)

### Method 1: Using Netlify Dashboard (Easiest)

1. Go to https://netlify.com
2. Sign up/Login with GitHub
3. Click "Add new site" → "Import an existing project"
4. Choose GitHub and select your repository
5. Configure:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
6. Click "Deploy site"
7. Your site is live! 🎉

### Method 2: Using Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Initialize
netlify init

# Build
npm run build

# Deploy
netlify deploy --prod --dir=dist
```

### Method 3: Drag and Drop

1. Build your project:
```bash
npm run build
```

2. Go to https://app.netlify.com/drop
3. Drag and drop the `dist` folder
4. Your site is live instantly! 🎉

---

## 📋 Step 5: Submit Your Assignment

You'll need to provide:

1. **GitHub Repository URL**:
   - Example: `https://github.com/YOUR-USERNAME/planto-ecommerce`
   - Make sure it's PUBLIC ✅

2. **Live Deployment URL**:
   - Vercel: `https://planto-ecommerce.vercel.app`
   - Netlify: `https://planto-ecommerce.netlify.app`

### Submission Form
Fill out the form at:
https://docs.google.com/forms/d/e/1FAIpQLSfQkq7MnB2gnHmG-Q9WJYfO5eY4p5N0qIvIkl8-WgYd0J1G_Q/viewform

---

## ✅ Pre-Submission Checklist

Before submitting, verify:

- [ ] GitHub repository is PUBLIC
- [ ] All code is pushed to GitHub
- [ ] README.md is included
- [ ] Site builds without errors (`npm run build`)
- [ ] Deployment is live and working
- [ ] Site is fully responsive (test on mobile)
- [ ] All links work correctly
- [ ] No console errors in browser

---

## 🔧 Troubleshooting

### Build Fails

**Problem**: `npm run build` fails

**Solution**:
```bash
# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Deployment Shows Blank Page

**Problem**: Deployed site shows blank page

**Solutions**:
1. Check browser console for errors (F12)
2. Verify build command: `npm run build`
3. Verify output directory: `dist`
4. Clear cache and hard reload (Ctrl+Shift+R)

### GitHub Push Rejected

**Problem**: Cannot push to GitHub

**Solution**:
```bash
# Pull latest changes first
git pull origin main --rebase
git push origin main
```

### Port Already in Use

**Problem**: `npm run dev` fails - port in use

**Solution**:
```bash
# Kill the process
# On Mac/Linux:
killall node

# On Windows:
taskkill /F /IM node.exe
```

---

## 📞 Need Help?

If you encounter issues:
1. Check the error message carefully
2. Google the error message
3. Check Vite documentation: https://vitejs.dev
4. Check Vercel docs: https://vercel.com/docs
5. Check Netlify docs: https://docs.netlify.com
6. Reply to the Lemon Studios email

---

## 🎯 Tips for Success

1. **Test thoroughly** before submitting
2. **Check responsiveness** on different screen sizes
3. **Verify all links** work on the deployed site
4. **Clear browser cache** when testing
5. **Submit before deadline**: 14 February, 11:59 PM IST
6. **Keep repository public** until after selection process

---

## 📱 Testing Your Deployment

### Desktop
- Open deployed URL in browser
- Test all interactive elements
- Check console for errors (F12)

### Mobile
- Open deployed URL on phone
- Test navigation menu
- Verify layout adapts correctly
- Test all buttons and links

### Cross-Browser
- Chrome
- Firefox
- Safari
- Edge

---

Good luck with your submission! 🍀
