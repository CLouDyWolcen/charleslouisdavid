# Deployment Guide - GitHub Pages

This guide will help you deploy your portfolio website to GitHub Pages for free hosting.

## Prerequisites

- GitHub account
- Git installed on your computer
- EmailJS account (for contact form)

## Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com) and log in
2. Click the "+" icon in the top right and select "New repository"
3. Name it: `your-username.github.io` (replace `your-username` with your GitHub username)
   - Example: If your username is `charleslouis-david`, name it `charleslouis-david.github.io`
4. Make it **Public**
5. Do NOT initialize with README, .gitignore, or license
6. Click "Create repository"

## Step 2: Configure EmailJS

1. Go to [EmailJS](https://www.emailjs.com/) and create a free account
2. Add an email service (Gmail, Outlook, etc.)
3. Create an email template:
   - Go to Email Templates → Create New Template
   - Use these variables in your template:
     ```
     From: {{from_name}} ({{from_email}})
     
     Message:
     {{message}}
     ```
4. Save your template
5. Get your credentials:
   - **Service ID**: Found in Email Services
   - **Template ID**: Found in Email Templates
   - **Public Key**: Found in Account → API Keys

## Step 3: Add GitHub Secrets

1. Go to your repository on GitHub
2. Click Settings → Secrets and variables → Actions
3. Click "New repository secret" and add these three secrets:
   - Name: `VITE_EMAILJS_SERVICE_ID`
     Value: Your EmailJS Service ID
   - Name: `VITE_EMAILJS_TEMPLATE_ID`
     Value: Your EmailJS Template ID
   - Name: `VITE_EMAILJS_PUBLIC_KEY`
     Value: Your EmailJS Public Key

## Step 4: Push Your Code

Open terminal/command prompt in the portfolio-website folder and run:

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit: Portfolio website"

# Add your GitHub repository as remote
git remote add origin https://github.com/your-username/your-username.github.io.git

# Push to GitHub
git branch -M main
git push -u origin main
```

Replace `your-username` with your actual GitHub username.

## Step 5: Enable GitHub Pages

1. Go to your repository Settings → Pages
2. Under "Build and deployment":
   - Source: Select **"GitHub Actions"**
3. Wait 2-3 minutes for the first deployment

## Step 6: View Your Website

Your website will be live at: `https://your-username.github.io`

## Updating Your Website

After making changes:

```bash
git add .
git commit -m "Update: describe your changes"
git push
```

GitHub Actions will automatically rebuild and deploy your site in 2-3 minutes.

## Troubleshooting

### Build Fails in GitHub Actions

1. Check Actions tab in your repository for error details
2. Verify all three EmailJS secrets are set correctly
3. Make sure secret names match exactly (including VITE_ prefix)

### Contact Form Not Working

1. Verify EmailJS credentials in GitHub Secrets
2. Check EmailJS dashboard for usage limits
3. Test your EmailJS template manually

### Website Shows 404

1. Wait 5 minutes after first push (GitHub needs time to set up)
2. Verify repository name is exactly `your-username.github.io`
3. Check that GitHub Pages is enabled in Settings

### Images Not Showing

1. Add your project images to `public/images/projects/`
2. Commit and push the images:
   ```bash
   git add public/images/
   git commit -m "Add project images"
   git push
   ```

## Adding Project Screenshots

1. Take screenshots of your projects (600x400px recommended)
2. Optimize them (use tools like TinyPNG or Squoosh)
3. Name them:
   - `plant-inventory-thumb.jpg`
   - `scholarship-thumb.jpg`
4. Place in `public/images/projects/`
5. Commit and push

## Custom Domain (Optional)

If you want to use your own domain (e.g., `yourname.com`):

1. Buy a domain from a registrar (Namecheap, GoDaddy, etc.)
2. Add a `CNAME` file in `public/` folder with your domain:
   ```
   yourname.com
   ```
3. Configure DNS records at your domain registrar:
   - Type: A Record
   - Host: @
   - Value: 185.199.108.153
   - Add 3 more A records with: 185.199.109.153, 185.199.110.153, 185.199.111.153
   - Type: CNAME
   - Host: www
   - Value: your-username.github.io
4. Go to repository Settings → Pages
5. Enter your custom domain and click Save
6. Wait 24 hours for DNS propagation

## Support

Need help? Check:
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [EmailJS Documentation](https://www.emailjs.com/docs/)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)

---

Good luck with your portfolio! 🚀
