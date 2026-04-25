import type { Metadata, Viewport } from 'next';
import { Toaster } from 'react-hot-toast';
import '@/styles/globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import TopBar from '@/components/layout/TopBar';
import NewsTicker from '@/components/layout/NewsTicker';
import WhatsAppButton from '@/components/ui/WhatsAppButton';

export const metadata: Metadata = {
  title: {
    default: 'ANITIO – Information Technology & Skill Development LLP | Dwarka More, New Delhi',
    template: '%s | ANITIO IT & Skill Development',
  },
  description: 'ANITIO Information Technology and Skill Development LLP — professional IT training institute at Dwarka More, New Delhi. Courses: Basic Computer, DCA, Advanced Excel, Web Development, Python, Tally, Graphic Design, Data Analysis & Skill Development.',
  keywords: ['computer institute Dwarka More', 'IT training New Delhi', 'DCA course', 'basic computer course', 'web development course Delhi', 'python course', 'tally course', 'graphic design course', 'ANITIO', 'skill development', 'computer classes Uttam Nagar'],
  metadataBase: new URL('https://anitio.in'),
  authors: [{ name: 'ANITIO Information Technology and Skill Development LLP' }],
  creator: 'ANITIO',
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://anitio.in',
    siteName: 'ANITIO IT & Skill Development',
    title: 'ANITIO – IT Training Institute | Dwarka More, New Delhi',
    description: 'Professional IT training institute offering computer courses, web development, Python, Tally, graphic design, data analysis and skill development programs.',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630 }],
  },
  icons: { icon: '/favicon.ico' },
};

export const viewport: Viewport = {
  themeColor: '#0f1f4a',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600;9..40,700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <Toaster position="top-right" toastOptions={{ duration: 4000, style: { fontFamily: 'DM Sans, sans-serif', fontSize: '14px' } }} />
        <TopBar />
        <Navbar />
        <NewsTicker />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
