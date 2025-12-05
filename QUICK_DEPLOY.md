# 🚀 Quick Deploy to Vercel (FREE)

## Step-by-Step Instructions:

### 1. Push to GitHub (if you haven't already)

```bash
# Initialize git
git init

# Add all files
git add .

# Commit
git commit -m "Portfolio ready for deployment"

# Create a new repository on GitHub.com, then:
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

### 2. Deploy to Vercel

1. **Go to**: https://vercel.com/
2. **Sign up/Login** with GitHub
3. **Click**: "Add New Project"
4. **Import** your GitHub repository
5. **IMPORTANT - Add Environment Variables**:
   - Click "Environment Variables" section
   - Add these 3 variables:
     ```
     NEXT_PUBLIC_EMAILJS_SERVICE_ID = (your service ID)
     NEXT_PUBLIC_EMAILJS_TEMPLATE_ID = template_epc9rnc
     NEXT_PUBLIC_EMAILJS_PUBLIC_KEY = (your public key)
     ```
6. **Click**: "Deploy"
7. **Wait** 2-3 minutes for build to complete
8. **Done!** You'll get a URL like: `https://your-portfolio.vercel.app`

---

## ✅ That's it! Your portfolio is live!

**Features:**
- ✅ Free hosting
- ✅ SSL certificate (HTTPS)
- ✅ Custom domain support
- ✅ Auto-deploy on every GitHub push
- ✅ Fast global CDN

---

## 🔧 Need to update environment variables later?

1. Go to Vercel Dashboard
2. Select your project
3. Settings → Environment Variables
4. Edit/Add variables
5. Redeploy

