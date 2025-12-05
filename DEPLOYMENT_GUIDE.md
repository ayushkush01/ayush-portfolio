# Deployment Guide - Vercel (Free)

## Option 1: Deploy via Vercel Website (Easiest - Recommended)

### Step 1: Push to GitHub (if not already)
1. Create a new repository on GitHub (https://github.com/new)
2. Name it something like `portfolio` or `ayush-portfolio`
3. Don't initialize with README, .gitignore, or license

### Step 2: Push your code to GitHub
```bash
# Initialize git (if not done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - Portfolio with EmailJS"

# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Deploy to Vercel
1. Go to https://vercel.com/
2. Sign up/Login with your GitHub account
3. Click **"Add New Project"**
4. Import your GitHub repository
5. Vercel will auto-detect Next.js settings
6. **IMPORTANT**: Add Environment Variables before deploying:
   - Click **"Environment Variables"**
   - Add these 3 variables:
     - `NEXT_PUBLIC_EMAILJS_SERVICE_ID` = your_service_id
     - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` = template_epc9rnc
     - `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` = your_public_key
7. Click **"Deploy"**

### Step 4: Wait for deployment
- Vercel will build and deploy your site
- You'll get a URL like: `https://your-portfolio.vercel.app`
- It's FREE and includes SSL certificate!

---

## Option 2: Deploy via Vercel CLI (Alternative)

### Step 1: Install Vercel CLI
```bash
npm install -g vercel
```

### Step 2: Login to Vercel
```bash
vercel login
```

### Step 3: Deploy
```bash
vercel
```

### Step 4: Add Environment Variables
```bash
vercel env add NEXT_PUBLIC_EMAILJS_SERVICE_ID
vercel env add NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
vercel env add NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
```

### Step 5: Deploy to Production
```bash
vercel --prod
```

---

## Important Notes:

1. **Environment Variables**: Make sure to add all 3 EmailJS variables in Vercel dashboard
2. **Custom Domain**: You can add your own domain later (also free on Vercel)
3. **Automatic Deployments**: Every push to GitHub will auto-deploy
4. **Free Tier**: Includes:
   - Unlimited deployments
   - 100GB bandwidth/month
   - SSL certificate
   - Custom domains

---

## After Deployment:

1. Test your contact form
2. Check that emails are being received
3. Share your portfolio URL!

---

## Troubleshooting:

- If contact form doesn't work: Check environment variables in Vercel dashboard
- If build fails: Check the build logs in Vercel dashboard
- Need help? Check Vercel docs: https://vercel.com/docs

