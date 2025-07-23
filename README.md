# Code Collective - Production-Ready Agency Website

A modern, high-performance web development agency website built with Next.js 15, TypeScript, and Tailwind CSS. Optimized for SEO, accessibility, and performance with 95+ Lighthouse scores.

## 🚀 Features

- **Performance Optimized**: 95+ Lighthouse scores across all metrics
- **SEO Ready**: Comprehensive meta tags, structured data, and sitemap
- **Mobile First**: Responsive design with PWA capabilities
- **Accessibility**: WCAG 2.1 AA compliant
- **Analytics**: Google Analytics 4 integration
- **Security**: Production-ready security headers
- **Type Safe**: Full TypeScript implementation
- **Environment Agnostic**: Automatically detects URLs across environments

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI + shadcn/ui
- **Icons**: Lucide React
- **Analytics**: Google Analytics 4
- **Deployment**: Vercel (recommended)

## 📦 Installation

1. Clone the repository:

```bash
git clone https://github.com/codecollectivedevs/codecollectivedevs.com.git
cd codecollectivedevs.com
```

2. Install dependencies:

```bash
pnpm install
```

3. (Optional) Set environment variables:

```bash
cp .env.example .env.local
```

4. Update environment variables in `.env.local` (all optional):

```env
# Site URL is auto-detected, but you can override if needed
# NEXT_PUBLIC_SITE_URL=https://yourdomain.com

# Analytics (optional)
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# Email service (if using)
RESEND_API_KEY=your_resend_api_key
CONTACT_EMAIL=your@email.com
```

## 🚀 Development

Run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 🏗️ Build & Deploy

### Production Build

```bash
pnpm build
pnpm start
```

### Deploy to Vercel

1. Push to GitHub
2. Connect repository to Vercel
3. Set optional environment variables in Vercel dashboard
4. Deploy

**Note**: No environment variables are required - the site will automatically detect the correct URLs for any deployment environment.

## 📁 Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── case-studies/      # Case study pages
│   ├── schedule/          # Contact/scheduling page
│   ├── layout.tsx         # Root layout with SEO
│   ├── page.tsx           # Homepage
│   ├── sitemap.ts         # Dynamic sitemap
│   ├── robots.ts          # Dynamic robots.txt
│   ├── not-found.tsx      # 404 page
│   └── global-error.tsx   # Error boundary
├── components/            # Reusable components
│   ├── ui/               # shadcn/ui components
│   ├── blocks/           # Page sections
│   └── analytics.tsx     # GA4 component
├── lib/                  # Utilities
│   └── base-url.ts       # Smart URL detection
├── public/               # Static assets
│   ├── robots.txt        # Static robots (fallback)
│   ├── manifest.json     # PWA manifest
│   └── favicon.ico       # Favicon
└── lib/                  # Utilities
```

## 🔧 Configuration

### Smart URL Detection

The site automatically detects the correct base URL for any environment:

- **Development**: Uses localhost with current port
- **Vercel**: Uses Vercel's deployment URLs
- **Production**: Uses configured environment variables or auto-detection
- **Client-side**: Uses window.location.origin

### SEO & Meta Tags

- Comprehensive meta tags in `app/layout.tsx`
- Page-specific metadata in each page component
- Structured data (JSON-LD) for better search visibility
- Open Graph and Twitter Card optimization
- Dynamic sitemap and robots.txt generation

### Performance

- Image optimization with Next.js Image component
- Font optimization with next/font
- Code splitting and lazy loading
- Production-ready caching headers

### Security

- Security headers configured in `next.config.mjs`
- Content Security Policy for images
- CORS and XSS protection

## 📊 Analytics

Google Analytics 4 is integrated for production tracking:

- Page view tracking
- Custom event tracking
- Conversion tracking
- Performance monitoring

## 🌟 Key Features

### Homepage

- Hero section with clear value proposition
- Performance metrics showcase
- Enterprise features highlighting
- Case studies carousel
- Transparent pricing
- Strong call-to-action sections

### Case Studies

- Individual pages for each project
- Structured data for articles
- Performance metrics and results
- Technology stack highlights

### SEO Optimization

- Perfect Lighthouse SEO scores
- Structured data markup
- Comprehensive meta tags
- Dynamic XML sitemap generation
- Dynamic robots.txt configuration

## 📞 Support

For questions or support, contact us at hello@codecollectivedevs.com

## 📄 License

This project is proprietary to Code Collective. All rights reserved.

---

Built with ❤️ by [Code Collective](https://codecollectivedevs.com)
