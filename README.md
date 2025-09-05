# RNZ Blog - Modern Astro Blog Starter

A fast, modern, and SEO-optimized blog built with Astro 4, featuring fluent design, dark mode, and PWA capabilities.

## ✨ Features

- **⚡ Fast Performance**: Built with Astro 4 for optimal loading speeds
- **🌙 Dark Mode**: Comprehensive dark mode with proper contrast ratios
- **📱 PWA Ready**: Progressive Web App with offline capabilities
- **🎨 Modern Design**: Fluent design system with glass morphism effects
- **📝 Content Management**: Type-safe content collections with frontmatter validation
- **🔍 Search & Filter**: Client-side search and category filtering
- **📊 Analytics**: Built-in view counters and reading time estimation
- **🚀 SEO Optimized**: Meta tags, Open Graph, sitemap, and RSS feed
- **📱 Mobile First**: Touch gestures, responsive design, and mobile optimization
- **♿ Accessible**: WCAG compliant with proper contrast and keyboard navigation

## 🛠️ Tech Stack

- **Framework**: [Astro 4](https://astro.build/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with Typography plugin
- **Content**: [Astro Content Collections](https://docs.astro.build/en/guides/content-collections/)
- **Search**: [Fuse.js](https://fusejs.io/) for fuzzy search
- **PWA**: Workbox for service worker and caching
- **Icons**: Lucide icons for consistent iconography

## 🚀 Quick Start

1. **Clone and install**:
```bash
git clone <your-repo-url>
cd rnzblog
npm install
```

2. **Start development**:
```bash
npm run dev
```

3. **Open**: [http://localhost:4321](http://localhost:4321)

## 📝 Content Management

### Adding Blog Posts

Create `.md` files in `src/content/blog/` with frontmatter:

```yaml
---
title: 'Your Post Title'
description: 'Brief description'
pubDate: 2024-01-15
heroImage: '/images/hero.jpg'
category: 'programming'
tags: ['astro', 'web-dev']
featured: false
---
```

### Categories

- **programming**: Code tutorials, development insights
- **automotive**: Car technology, EV content
- **networking**: Network configurations, IT infrastructure  
- **tech**: General technology trends
- **family**: Parenting tips, family experiences

## 🎨 Design System

### Color Scheme
- **Light Mode**: Clean whites and grays with blue accents
- **Dark Mode**: Rich dark grays with proper contrast ratios
- **Categories**: Color-coded badges for easy identification

### Components
- **Glass Morphism**: Subtle transparency effects
- **Smooth Animations**: CSS transitions and transforms
- **Responsive Grid**: Mobile-first layout system
- **Touch Friendly**: Optimized for mobile interactions

## 📱 PWA Features

- **Offline Support**: Service worker caching
- **Install Prompt**: Smart installation prompts
- **Touch Gestures**: Swipe navigation and pull-to-refresh
- **App-like Experience**: Native app feel on mobile devices

## 🔧 Development

### Commands
```bash
npm run dev      # Start dev server
npm run build    # Build for production
npm run preview  # Preview build locally
npm run build:pwa # Build with PWA features
```

### Project Structure
```
src/
├── components/     # Reusable UI components
├── content/        # Blog posts and content
├── layouts/        # Page layouts
├── pages/          # Route pages
└── styles/         # Global styles
```

## 🚀 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Connect to Vercel
3. Auto-deploy on push

### Netlify
- Build command: `npm run build`
- Publish directory: `dist`

### Other Platforms
Deploy the `dist` folder to any static hosting service.

## ⚡ Performance

- **Zero JS by default**: Astro Islands architecture
- **Image optimization**: Sharp for automatic image processing
- **CSS optimization**: Tailwind purging and minification
- **Lazy loading**: Progressive content loading
- **Skeleton loaders**: Improved perceived performance

## 🔒 SEO & Analytics

- **Meta tags**: Automatic generation for all pages
- **Open Graph**: Social media sharing optimization
- **Sitemap**: Auto-generated XML sitemap
- **RSS Feed**: Automatic feed generation
- **Reading time**: Estimated reading duration
- **View counters**: Track post popularity

## 🎯 Browser Support

- **Modern browsers**: Chrome, Firefox, Safari, Edge
- **Mobile browsers**: iOS Safari, Chrome Mobile
- **PWA support**: All modern browsers with service worker support

## 📄 License

MIT License - feel free to use for personal or commercial projects.

## 🙏 Acknowledgments

Built with modern web technologies and best practices for 2024-2025.