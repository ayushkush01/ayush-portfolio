# EmailJS Setup Instructions

## Step 1: Create EmailJS Account
1. Go to https://www.emailjs.com/
2. Sign up for a free account (200 emails/month free)

## Step 2: Create an Email Service
1. Go to **Email Services** in the dashboard
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions
5. Copy the **Service ID** (you'll need this)

## Step 3: Create an Email Template
1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Use this template structure:

**Subject:** New Contact Form Message from {{from_name}}

**Content:**
```
Hello,

You have received a new message from your portfolio contact form:

Name: {{from_name}}
Email: {{from_email}}
Reply To: {{reply_to}}

Message:
{{message}}

---
This email was sent from your portfolio website.
```

4. Save the template and copy the **Template ID**

## Step 4: Get Your Public Key
1. Go to **Account** > **General**
2. Find **API Keys** section
3. Copy your **Public Key**

## Step 5: Add Environment Variables
1. Create a file named `.env.local` in the root directory
2. Add these variables:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id_here
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
```

3. Replace the placeholder values with your actual EmailJS credentials

## Step 6: Test the Form
1. Run `npm run dev`
2. Navigate to the contact section
3. Fill out and submit the form
4. Check your email inbox!

## Important Notes:
- The `.env.local` file is already in `.gitignore`, so your keys won't be committed
- For production deployment (Vercel, Netlify, etc.), add these environment variables in your hosting platform's settings
- Free tier allows 200 emails per month

