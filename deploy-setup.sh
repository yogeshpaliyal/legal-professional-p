#!/bin/bash

echo "🚀 Ghuman Law Associates - Deployment Setup"
echo "==========================================="
echo ""

echo "📋 Pre-deployment Checklist:"
echo ""
echo "1. Update vite.config.ts base path"
echo "   Current: '/spark-template/'"
echo "   Change to: '/your-repository-name/'"
echo "   Or for custom domain: '/'"
echo ""

echo "2. Update public/CNAME (if using custom domain)"
echo "   Current: ghumanlawassociates.com"
echo ""

echo "3. Configure GitHub repository:"
echo "   - Go to Settings → Pages"
echo "   - Set Source to 'GitHub Actions'"
echo ""

echo "4. Set up DNS (if using custom domain):"
echo "   Add A records:"
echo "   - 185.199.108.153"
echo "   - 185.199.109.153"
echo "   - 185.199.110.153"
echo "   - 185.199.111.153"
echo ""

echo "📦 Building project..."
npm run build

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Build successful!"
    echo ""
    echo "🌐 Next steps:"
    echo "1. Commit and push to main branch:"
    echo "   git add ."
    echo "   git commit -m 'Deploy to GitHub Pages'"
    echo "   git push origin main"
    echo ""
    echo "2. Check deployment status in GitHub Actions tab"
    echo ""
    echo "📚 Read DEPLOYMENT.md for detailed instructions"
else
    echo ""
    echo "❌ Build failed. Please fix errors and try again."
    exit 1
fi
