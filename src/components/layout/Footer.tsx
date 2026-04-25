import Link from 'next/link';
import LogoImage from '@/components/ui/LogoImage';
import LazyMap from '@/components/ui/LazyMap';
import { GraduationCap, Phone, Mail, MapPin, Users, Award, Shield, BookOpen } from 'lucide-react';

const PROGRAMS = [
  { href: '/courses?category=basic',       label: 'Basic Computer / DCA' },
  { href: '/courses?category=excel',       label: 'Advanced Excel & MIS' },
  { href: '/courses?category=web',         label: 'Web Development' },
  { href: '/courses?category=programming', label: 'Python / C / C++' },
  { href: '/courses?category=data',        label: 'Data Analysis' },
  { href: '/courses?category=tally',       label: 'Tally Prime + GST' },
  { href: '/courses?category=design',      label: 'Graphic Designing' },
  { href: '/courses?category=skill',       label: 'Skill Development' },
  { href: '/courses',                      label: 'All Courses →' },
];

const QUICK = [
  { href: '/',        label: 'Home' },
  { href: '/about',   label: 'About ANITIO' },
  { href: '/courses', label: 'All Courses' },
  { href: '/results', label: 'Check Results' },
  { href: '/contact', label: 'Contact Us' },
  { href: '/privacy', label: 'Privacy Policy' },
  { href: '/terms',   label: 'Terms & Conditions' },
];

const SOCIALS = [
  { label: 'WhatsApp', href: 'https://wa.me/919289438428', color: 'hover:bg-green-500', path: 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z' },
  { label: 'Telegram', href: 'https://t.me/anitio', color: 'hover:bg-sky-500', path: 'M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.96 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z' },
  { label: 'Facebook', href: 'https://facebook.com/anitio', color: 'hover:bg-blue-600', path: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' },
  { label: 'Instagram', href: 'https://instagram.com/anitio', color: 'hover:bg-pink-500', path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z' },
  { label: 'Twitter', href: 'https://twitter.com/anitio', color: 'hover:bg-gray-800', path: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' },
];

const STATS = [
  { icon: Users,       value: '5,000+',  label: 'Students Trained' },
  { icon: BookOpen,    value: '8+',      label: 'Courses Offered' },
  { icon: Award,       value: '100%',    label: 'Placement Support' },
  { icon: Shield,      value: '10+',     label: 'Years Experience' },
];

export default function Footer() {
  return (
    <footer className="bg-primary-950 text-white">
      {/* Stats strip */}
      <div className="bg-primary-900 border-b border-primary-800">
        <div className="container-custom py-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {STATS.map(({ icon: Icon, value, label }) => (
              <div key={label} className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gold-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon size={20} className="text-gold-400" />
                </div>
                <div>
                  <div className="text-xl font-bold text-gold-400 font-display">{value}</div>
                  <div className="text-xs text-gray-400">{label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main */}
      <div className="container-custom py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-xl overflow-hidden bg-primary-800 flex items-center justify-center flex-shrink-0">
                <LogoImage width={48} height={48} className="object-contain" />
              </div>
              <div>
                <div className="font-display font-bold text-xl text-white">ANITIO</div>
                <div className="text-[9px] text-gray-400 tracking-widest font-semibold uppercase">IT & Skill Development LLP</div>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              Empowering students with practical IT skills and career-oriented education. Bridging the gap between knowledge and industry.
            </p>
            <div className="space-y-2.5 mb-5 text-sm">
              <a href="tel:+919289438428" className="flex items-center gap-2.5 text-gray-400 hover:text-gold-400 transition-colors">
                <Phone size={13} className="text-gold-500 flex-shrink-0" /> +91 92894 38428
              </a>
              <a href="tel:+919971969158" className="flex items-center gap-2.5 text-gray-400 hover:text-gold-400 transition-colors">
                <Phone size={13} className="text-gold-500 flex-shrink-0" /> +91 99719 69158
              </a>
              <a href="mailto:anitioinstitute@gmail.com" className="flex items-center gap-2.5 text-gray-400 hover:text-gold-400 transition-colors">
                <Mail size={13} className="text-gold-500 flex-shrink-0" /> anitioinstitute@gmail.com
              </a>
              <div className="flex items-start gap-2.5 text-gray-400">
                <MapPin size={13} className="text-gold-500 flex-shrink-0 mt-0.5" />
                <span>H-20, Sewak Park, Dwarka More, Uttam Nagar, Near Metro Pillar 772, New Delhi</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              {SOCIALS.map(({ label, href, color, path }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                  className={`w-8 h-8 bg-primary-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all ${color}`}>
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5"><path d={path} /></svg>
                </a>
              ))}
            </div>
          </div>

          {/* Programs */}
          <div>
            <h3 className="font-display font-bold text-base text-white mb-4 pb-2 border-b border-primary-800">Our Courses</h3>
            <ul className="space-y-2">
              {PROGRAMS.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-gray-400 hover:text-gold-400 transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-bold text-base text-white mb-4 pb-2 border-b border-primary-800">Quick Links</h3>
            <ul className="space-y-2">
              {QUICK.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-gray-400 hover:text-gold-400 transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Location & WhatsApp */}
          <div>
            <h3 className="font-display font-bold text-base text-white mb-4 pb-2 border-b border-primary-800">Find Us</h3>
            <div className="rounded-xl overflow-hidden mb-4 border border-primary-800">
              <LazyMap height={140} title="ANITIO Location" />
            </div>
            <a href="https://maps.app.goo.gl/YourGoogleMapsLink" target="_blank" rel="noopener noreferrer"
              className="text-xs text-gold-400 hover:underline mb-4 block">📍 Open in Google Maps →</a>
            <a href="https://wa.me/919289438428?text=Hello%2C%20I%20want%20to%20know%20about%20courses%20at%20ANITIO."
              target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-green-500 hover:bg-green-600 text-white font-semibold text-sm py-3 rounded-xl transition-colors">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
              </svg>
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-primary-800">
        <div className="container-custom py-4 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <div>© {new Date().getFullYear()} ANITIO Information Technology and Skill Development LLP. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-gold-400 transition-colors">Privacy Policy</Link>
            <Link href="/terms"   className="hover:text-gold-400 transition-colors">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
