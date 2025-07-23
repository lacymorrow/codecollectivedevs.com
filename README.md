# Code Collective - Elite Web Development Agency

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg)](https://github.com/codecollective/codecollectivedevs.com)
[![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)](https://github.com/codecollective/codecollectivedevs.com)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](https://opensource.org/licenses/MIT)

A high-performance, SEO-optimized agency website built with Next.js 15, TypeScript, and Tailwind CSS. Showcasing enterprise web development solutions with cutting-edge technology stack.

## 🚀 Features

- **🔥 Performance First**: 95+ Lighthouse scores across all metrics
- **📱 Mobile Responsive**: Optimized for all devices and screen sizes
- **🔍 SEO Optimized**: Complete meta tags, structured data, and sitemap
- **♿ Accessible**: WCAG 2.1 AA compliant with screen reader support
- **⚡ Fast Loading**: Sub-second load times with optimized assets
- **🤖 AI-Friendly**: Structured data and semantic HTML for AI/LLM understanding
- **🎨 Modern UI**: Clean, professional design with smooth animations
- **📊 Analytics Ready**: Google Analytics and performance monitoring setup

## 🛠️ Tech Stack

- **Frontend**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI + Custom Components
- **Animations**: Framer Motion + GSAP
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/codecollective/codecollectivedevs.com.git
   cd codecollectivedevs.com
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   Fill in your environment variables in `.env.local`

4. **Run the development server**
   ```bash
   npm run dev
   # or
   pnpm dev
   # or
   yarn dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Build & Deploy

### Development Build
```bash
npm run dev
```

### Production Build
```bash
npm run build
npm start
```

### Deploy to Vercel
```bash
vercel --prod
```

## 📁 Project Structure

```
codecollectivedevs.com/
├── app/                    # Next.js 15 App Router
│   ├── globals.css        # Global styles and animations
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Homepage (server component)
│   ├── loading.tsx        # Loading UI
│   ├── not-found.tsx      # 404 page
│   ├── sitemap.ts         # Dynamic sitemap
│   └── schedule/          # Schedule page
├── components/            # Reusable components
│   ├── sections/          # Page sections
│   ├── blocks/            # Content blocks
│   ├── ui/                # Base UI components
│   └── providers/         # Context providers
├── lib/                   # Utilities and helpers
├── public/                # Static assets
│   ├── logos/            # Technology logos
│   ├── robots.txt        # SEO robots file
│   └── site.webmanifest  # PWA manifest
└── styles/               # Additional stylesheets
```

## 🎨 Key Components

### Section Components
- `HeroSection` - Landing page hero with animations
- `PartnersSection` - Technology showcase with marquee
- `PerformanceSection` - Lighthouse metrics display
- `SolutionsSection` - Service offerings
- `EnterpriseSection` - Enterprise features
- `PricingSection` - Pricing tiers
- `CTASection` - Call-to-action
- `Footer` - Site footer

### UI Components
- Fully accessible Radix UI components
- Custom animated components
- Mobile-responsive design
- Dark mode support (ready)

## 📈 Performance Optimizations

- **Image Optimization**: Next.js Image component with lazy loading
- **Code Splitting**: Automatic route-based code splitting
- **Static Generation**: Pre-rendered pages where possible
- **Font Optimization**: Local font loading with font-display: swap
- **CSS Optimization**: Tailwind CSS purging and minification
- **JavaScript Minification**: Production bundle optimization

## 🔍 SEO Features

- **Comprehensive Meta Tags**: Title, description, keywords, author
- **Open Graph**: Social media sharing optimization
- **Twitter Cards**: Enhanced Twitter sharing
- **Structured Data**: JSON-LD for rich search results
- **Canonical URLs**: Proper canonical link structure
- **Sitemap**: Dynamic XML sitemap generation
- **Robots.txt**: Search engine crawling directives

## ♿ Accessibility

- **WCAG 2.1 AA Compliant**: Meets accessibility standards
- **Semantic HTML**: Proper heading hierarchy and landmarks
- **Keyboard Navigation**: Full keyboard accessibility
- **Screen Reader Support**: ARIA labels and descriptions
- **Color Contrast**: Sufficient contrast ratios
- **Focus Management**: Visible focus indicators

## 🔧 Configuration

### Environment Variables
See `.env.example` for all available environment variables:
- `GOOGLE_SITE_VERIFICATION` - Google Search Console verification
- `GOOGLE_ANALYTICS_ID` - Google Analytics tracking ID
- `CONTACT_EMAIL` - Contact form email destination
- `NEXT_PUBLIC_SITE_URL` - Site URL for absolute links

### Customization
- **Colors**: Update `tailwind.config.ts` for brand colors
- **Fonts**: Modify font imports in `app/layout.tsx`
- **Content**: Update section components with your content
- **Images**: Replace placeholder images in `public/`

## 📊 Analytics & Monitoring

Ready for integration with:
- Google Analytics 4
- Google Search Console
- Vercel Analytics
- Performance monitoring tools

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Other Platforms
- Netlify
- AWS Amplify
- Railway
- Any Node.js hosting platform

## 🧪 Testing

```bash
# Type checking
npm run type-check

# Linting
npm run lint

# Build verification
npm run build
```

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Contact

**Lacy Morrow** - Lead Developer  
- Website: [lacymorrow.com](https://lacymorrow.com)
- Email: hello@codecollective.dev

**Code Collective**
- Website: [codecollective.dev](https://codecollective.dev)
- Email: hello@codecollective.dev

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org) for the amazing React framework
- [Tailwind CSS](https://tailwindcss.com) for utility-first styling
- [Radix UI](https://radix-ui.com) for accessible components
- [Vercel](https://vercel.com) for seamless deployment platform

---

**Built with ❤️ by Code Collective**
