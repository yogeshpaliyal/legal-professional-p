# Ghuman Law Associates Website

Professional law firm website for Ghuman Law Associates, serving clients across Punjab, Haryana, and Chandigarh with over three decades of legal excellence.

## 🌐 Live Site

- **Main Website:** [ghumanlawassociates.com](https://ghumanlawassociates.com)
- **NRI Legal Solutions:** [nrilegalsolutions.ghumanlawassociates.com](https://nrilegalsolutions.ghumanlawassociates.com)

## 🚀 Quick Start

### Development

```bash
npm install
npm run dev
```

### Build

```bash
npm run build
```

### Preview Build

```bash
npm run preview
```

## 📦 Deployment

This site is configured for GitHub Pages deployment. See detailed instructions in [DEPLOYMENT.md](./DEPLOYMENT.md).

### Quick Deploy

```bash
git add .
git commit -m "Deploy updates"
git push origin main
```

The GitHub Actions workflow will automatically build and deploy your site.

### Configuration Files

- `.github/workflows/deploy.yml` - Automated deployment workflow
- `vite.config.ts` - Build configuration with base path
- `public/CNAME` - Custom domain configuration
- `DEPLOYMENT.md` - Comprehensive deployment guide
- `GITHUB_PAGES_CONFIG.md` - Configuration reference

## 📋 Features

- 🏛️ Practice areas showcase
- 👨‍⚖️ Professional team profiles
- 📝 Contact form with detailed query submission
- 📱 QR codes for easy mobile access
- ⚖️ Legal disclaimer modal
- 📍 Interactive contact information
- 🎨 Professional legal aesthetic with Crimson Pro and Inter fonts
- 📱 Fully responsive design

## 🛠️ Tech Stack

- **Framework:** React 19 with TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS v4
- **UI Components:** Shadcn UI
- **Icons:** Phosphor Icons
- **Forms:** React Hook Form with Zod validation
- **Animations:** Framer Motion
- **Notifications:** Sonner
- **Hosting:** GitHub Pages

## 📁 Project Structure

```
.
├── .github/workflows/    # GitHub Actions deployment workflow
├── public/              # Static assets and CNAME
├── src/
│   ├── components/      # React components
│   │   ├── ui/         # Shadcn UI components
│   │   ├── Hero.tsx
│   │   ├── Navigation.tsx
│   │   ├── PracticeAreas.tsx
│   │   └── ...
│   ├── hooks/          # Custom React hooks
│   ├── lib/            # Utility functions
│   ├── styles/         # CSS files
│   ├── App.tsx         # Main application component
│   └── index.css       # Global styles and theme
├── DEPLOYMENT.md       # Deployment instructions
├── GITHUB_PAGES_CONFIG.md  # Configuration reference
└── vite.config.ts      # Vite configuration
```

## 🔧 Configuration

### Update Repository Name

Before deploying, update the base path in `vite.config.ts`:

```typescript
base: process.env.NODE_ENV === 'production' ? '/your-repo-name/' : '/',
```

For custom domain deployment, use:

```typescript
base: process.env.NODE_ENV === 'production' ? '/' : '/',
```

### Custom Domain Setup

1. Update `public/CNAME` with your domain
2. Configure DNS records (see DEPLOYMENT.md)
3. Enable GitHub Pages in repository settings
4. Enable "Enforce HTTPS"

## 📝 License

The Spark Template files and resources from GitHub are licensed under the terms of the MIT license, Copyright GitHub, Inc.
