# GitHub Pages Deployment Guide

This document explains how to deploy your Ghuman Law Associates website to GitHub Pages.

## Prerequisites

- A GitHub account
- Your code pushed to a GitHub repository
- GitHub Pages enabled in your repository settings

## Setup Instructions

### 1. Repository Configuration

1. Go to your GitHub repository
2. Click on **Settings** → **Pages** (in the left sidebar)
3. Under **Build and deployment**:
   - **Source**: Select "GitHub Actions"
   - This allows the automated workflow to deploy your site

### 2. Base Path Configuration

The `vite.config.ts` file is configured to use the repository name as the base path in production:

```typescript
base: process.env.NODE_ENV === 'production' ? '/spark-template/' : '/',
```

**Important:** Update `/spark-template/` to match your actual repository name:
- If your repository is `https://github.com/username/my-repo`, use `/my-repo/`
- If deploying to a custom domain, you can set `base: '/'`

### 3. Custom Domain (Optional)

To use your custom domain (`ghumanlawassociates.com`):

1. In your repository, go to **Settings** → **Pages**
2. Under **Custom domain**, enter: `ghumanlawassociates.com`
3. Check **Enforce HTTPS**
4. Add a `CNAME` file to the `public` folder with your domain:
   ```
   ghumanlawassociates.com
   ```
5. Configure your DNS provider:
   - For apex domain (ghumanlawassociates.com):
     - Add A records pointing to GitHub's IPs:
       ```
       185.199.108.153
       185.199.109.153
       185.199.110.153
       185.199.111.153
       ```
   - For subdomain (www.ghumanlawassociates.com):
     - Add CNAME record pointing to: `username.github.io`

### 4. Subdomain for NRI Legal Solutions

For the subdomain `nrilegalsolutions.ghumanlawassociates.com`:

**Option A: Separate Repository**
1. Create a new repository for the NRI site
2. Follow the same deployment steps
3. In DNS, add CNAME record: `nrilegalsolutions` → `username.github.io`

**Option B: Same Repository with Routing**
1. Use client-side routing within the same app
2. Link between sections using React Router or similar

## Deployment Methods

### Method 1: Automatic Deployment (Recommended)

The GitHub Actions workflow (`.github/workflows/deploy.yml`) automatically deploys when you push to the `main` branch:

```bash
git add .
git commit -m "Update website"
git push origin main
```

The workflow will:
1. Install dependencies
2. Build the project
3. Deploy to GitHub Pages

View deployment status: **Actions** tab in your repository

### Method 2: Manual Deployment

If you prefer manual control:

```bash
npm run deploy
```

This requires the `gh-pages` package (already configured).

## Accessing Your Site

After successful deployment:

### Without Custom Domain
Your site will be available at:
```
https://username.github.io/repository-name/
```

### With Custom Domain
Your site will be available at:
```
https://ghumanlawassociates.com
```

## Troubleshooting

### Assets Not Loading
- Verify the `base` path in `vite.config.ts` matches your repository name
- Check that all asset imports use the `@/assets/` alias

### 404 Errors
- Ensure the repository name in the `base` path is correct
- For custom domains, verify DNS records are properly configured

### Build Failures
- Check the **Actions** tab for detailed error logs
- Ensure all dependencies are listed in `package.json`
- Run `npm run build` locally to test

### DNS Propagation (Custom Domain)
- DNS changes can take 24-48 hours to propagate
- Use [DNS Checker](https://dnschecker.org) to verify records

## Monitoring

- **Build Status**: Check the **Actions** tab
- **Site Status**: Visit your URL
- **Analytics**: Consider adding Google Analytics to track visitors

## Security

The site uses HTTPS by default when deployed to GitHub Pages. For custom domains:
1. Enable "Enforce HTTPS" in repository settings
2. Wait for SSL certificate provisioning (automatic)

## Updates and Maintenance

To update the site:
1. Make changes locally
2. Test with `npm run dev`
3. Commit and push to `main` branch
4. GitHub Actions will automatically deploy

## Support Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
- [Custom Domain Setup](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)

## Notes

- The `.nojekyll` file (automatically created by `gh-pages`) ensures proper deployment
- Build artifacts are stored in the `dist` folder (ignored by git)
- The workflow uses Node.js 20 for compatibility
