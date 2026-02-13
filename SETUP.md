# 🌿 Quick Setup Guide

## For First-Time Users

### Prerequisites

You need to have Node.js installed on your computer.

**Check if you have Node.js:**
```bash
node --version
```

If you don't have it, download from: https://nodejs.org (Download the LTS version)

---

## 🚀 Getting Started (3 Easy Steps)

### Step 1: Open Terminal/Command Prompt

**Windows:**
- Press `Win + R`
- Type `cmd` and press Enter

**Mac:**
- Press `Cmd + Space`
- Type `terminal` and press Enter

**Linux:**
- Press `Ctrl + Alt + T`

### Step 2: Navigate to Project

```bash
cd path/to/planto-ecommerce
```

### Step 3: Run Quick Start

**On Mac/Linux:**
```bash
./start.sh
```

**On Windows:**
```bash
start.bat
```

Or manually:
```bash
npm install
npm run dev
```

---

## 📱 View Your Site

After running `npm run dev`, open your browser and go to:
```
http://localhost:5173
```

---

## 🏗️ Build for Production

```bash
npm run build
```

This creates a `dist` folder with your production-ready files.

---

## 🐛 Common Issues

### "npm not found"
→ Install Node.js from https://nodejs.org

### Port 5173 already in use
→ Close other Vite instances or change port in vite.config.js

### Build errors
→ Delete `node_modules` and run `npm install` again

---

## 📚 Next Steps

1. ✅ Test locally (`npm run dev`)
2. ✅ Push to GitHub (see DEPLOYMENT.md)
3. ✅ Deploy to Vercel/Netlify (see DEPLOYMENT.md)
4. ✅ Submit your links before deadline

---

Need help? Check README.md and DEPLOYMENT.md for detailed instructions!
