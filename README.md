# ANITIO – Information Technology & Skill Development LLP
## Next.js + Tailwind CSS Website

### 📁 Project Structure
```
src/
├── app/
│   ├── page.tsx              # Home page
│   ├── layout.tsx            # Root layout (navbar, footer, WhatsApp button)
│   ├── about/page.tsx        # About Us page
│   ├── courses/
│   │   ├── page.tsx          # All courses listing with category filter
│   │   └── [slug]/page.tsx   # Individual course detail page
│   ├── contact/page.tsx      # Contact page with form, map, socials
│   ├── results/page.tsx      # Exam results search portal
│   ├── schedule/page.tsx     # Batch schedule page
│   ├── privacy/page.tsx      # Privacy policy
│   ├── terms/page.tsx        # Terms & conditions
│   ├── sitemap.ts            # Auto-generated sitemap
│   └── robots.ts             # SEO robots.txt
├── components/
│   ├── layout/
│   │   ├── TopBar.tsx        # Contact info + social icons strip
│   │   ├── Navbar.tsx        # Sticky navbar with mega menu
│   │   ├── Footer.tsx        # Footer with map, socials, WhatsApp CTA
│   │   └── NewsTicker.tsx    # Scrolling news ticker
│   ├── sections/
│   │   ├── HeroSection.tsx       # Auto-sliding hero with 3 slides
│   │   ├── NoticesSection.tsx    # Notices/updates cards
│   │   ├── CoursesSection.tsx    # Course cards with category filter
│   │   ├── StatsSection.tsx      # Animated counter stats
│   │   ├── WhyChooseSection.tsx  # Features/benefits grid
│   │   └── TestimonialsSection.tsx # Student testimonials slider
│   └── ui/
│       └── WhatsAppButton.tsx    # Floating WhatsApp chat button
├── data/
│   └── courses.ts            # All 9 course definitions
├── lib/
│   └── utils.ts              # cn(), formatCurrency(), getGrade()
├── types/
│   └── index.ts              # TypeScript interfaces
└── styles/
    └── globals.css           # Tailwind + custom components
```

### 🚀 Getting Started
```bash
npm install
npm run dev
# Visit http://localhost:3000
```

### 📞 Contact Details Configured
- Phone 1: +91 92894 38428
- Phone 2: +91 99719 69158
- Email: anitioinstitute@gmail.com
- Address: H-20, Sewak Park, Dwarka More, Uttam Nagar, Near Metro Pillar 772, New Delhi
- WhatsApp: https://wa.me/919289438428

### 🖼️ Logo
Place your logo at: `public/images/logo.png`
The logo file from WhatsApp is already placed there.

### 🎨 Color Theme
- Primary (Blue): #0f1f4a to #3b82f6
- Gold (Orange/Amber): #f59e0b to #d97706
- Matches ANITIO branding exactly

### ✅ Features Implemented
- [x] Home page with hero, courses, stats, why choose us, testimonials
- [x] About Us page with full company description, mission, vision
- [x] All 8 course categories with detailed pages
- [x] Contact page with inquiry form, Google Maps, WhatsApp, all socials
- [x] Results search portal
- [x] Batch schedule page
- [x] Floating WhatsApp button (all pages)
- [x] News ticker with real updates
- [x] Social media links (WhatsApp, Telegram, Facebook, Instagram, Twitter)
- [x] Fully mobile responsive
- [x] SEO optimized (metadata, sitemap, robots.txt)
- [x] Google Maps embedded (Contact + Footer)
- [x] Real phone/email/address throughout
