'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import LogoImage from '@/components/ui/LogoImage';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, GraduationCap, BookOpen, Code2, BarChart2, Calculator, Palette, Award, Laptop } from 'lucide-react';

const COURSES_MENU = [
  { href: '/courses?category=basic',       icon: Laptop,       label: 'Basic Computer / DCA',      desc: 'Computer fundamentals & office skills' },
  { href: '/courses?category=excel',       icon: BarChart2,    label: 'Advanced Excel & MIS',       desc: 'Excel, Pivot, MIS reports' },
  { href: '/courses?category=web',         icon: Code2,        label: 'Web Development',            desc: 'HTML, CSS, JS, React, Node.js' },
  { href: '/courses?category=programming', icon: BookOpen,     label: 'Programming (C/C++/Python)', desc: 'Core programming languages' },
  { href: '/courses?category=data',        icon: BarChart2,    label: 'Data Analysis',              desc: 'Python, Pandas, Power BI' },
  { href: '/courses?category=tally',       icon: Calculator,   label: 'Tally & Accounting',         desc: 'Tally Prime + GST filing' },
  { href: '/courses?category=design',      icon: Palette,      label: 'Graphic Designing',          desc: 'Photoshop, CorelDRAW, Illustrator' },
  { href: '/courses?category=skill',       icon: Award,        label: 'Skill Development',          desc: 'Job-oriented training & placement' },
  { href: '/courses',                      icon: GraduationCap,label: 'View All Courses →',         desc: 'Browse all programs' },
];

const NAV = [
  { href: '/', label: 'Home' },
  { href: '/courses', label: 'Courses', children: true },
  { href: '/about', label: 'About Us' },
  { href: '/contact', label: 'Contact' },
];

const WA_ICON = 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', h);
    return () => window.removeEventListener('scroll', h);
  }, []);
  useEffect(() => { setOpen(false); setMegaOpen(false); }, [pathname]);

  return (
    <nav className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${scrolled ? 'shadow-md' : 'border-b border-gray-100'}`}>
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0 group">
            <div className="w-11 h-11 rounded-xl overflow-hidden bg-primary-900 flex-shrink-0 flex items-center justify-center">
              <LogoImage width={44} height={44} className="object-contain w-full h-full" />
            </div>
            <div className="hidden sm:block leading-none">
              <div className="font-display font-bold text-xl text-primary-900">ANITIO</div>
              <div className="text-[9px] text-gray-500 font-semibold tracking-widest uppercase mt-0.5">IT & Skill Development LLP</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden xl:flex items-center gap-1">
            {NAV.map((item) =>
              item.children ? (
                <div key={item.href} className="relative group"
                  onMouseEnter={() => setMegaOpen(true)} onMouseLeave={() => setMegaOpen(false)}>
                  <button className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${pathname.startsWith('/courses') ? 'text-primary-700 bg-primary-50' : 'text-gray-700 hover:text-primary-700 hover:bg-gray-50'}`}>
                    {item.label} <ChevronDown size={13} className={`transition-transform ${megaOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {megaOpen && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50">
                      <div className="bg-white rounded-2xl shadow-card-lg border border-gray-100 p-3 w-[640px] grid grid-cols-3 gap-1">
                        {COURSES_MENU.map((c) => (
                          <Link key={c.href} href={c.href}
                            className="flex items-start gap-3 p-3 rounded-xl hover:bg-primary-50 transition-colors group/item">
                            <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover/item:bg-primary-700 transition-colors">
                              <c.icon size={15} className="text-primary-700 group-hover/item:text-white transition-colors" />
                            </div>
                            <div>
                              <div className="text-sm font-semibold text-gray-900 leading-tight">{c.label}</div>
                              <div className="text-xs text-gray-500 mt-0.5">{c.desc}</div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link key={item.href} href={item.href}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${pathname === item.href ? 'text-primary-700 bg-primary-50' : 'text-gray-700 hover:text-primary-700 hover:bg-gray-50'}`}>
                  {item.label}
                </Link>
              )
            )}
          </div>

          {/* CTAs */}
          <div className="hidden lg:flex items-center gap-2">
            <a href="https://wa.me/919289438428" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d={WA_ICON} /></svg>
              WhatsApp
            </a>
            <Link href="/contact" className="btn-primary text-sm py-2">Enroll Now</Link>
          </div>

          {/* Mobile toggle */}
          <button className="xl:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100" onClick={() => setOpen(!open)}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="xl:hidden bg-white border-t border-gray-100 max-h-[80vh] overflow-y-auto">
          <div className="container-custom py-4 space-y-1">
            {NAV.map((item) => (
              <div key={item.href}>
                <Link href={item.href} className={`block px-4 py-3 rounded-lg font-medium text-sm transition-colors ${pathname === item.href ? 'bg-primary-50 text-primary-700' : 'text-gray-700 hover:bg-gray-50'}`}>
                  {item.label}
                </Link>
                {item.children && (
                  <div className="ml-4 mt-1 space-y-0.5">
                    {COURSES_MENU.map((c) => (
                      <Link key={c.href} href={c.href}
                        className="block px-4 py-2 text-xs text-gray-600 hover:text-primary-700 hover:bg-primary-50 rounded-lg transition-colors">
                        → {c.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4 border-t border-gray-100 flex flex-col gap-2">
              <a href="https://wa.me/919289438428" target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-green-500 text-white text-sm font-semibold px-4 py-3 rounded-lg">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d={WA_ICON} /></svg>
                Chat on WhatsApp
              </a>
              <Link href="/contact" className="btn-primary justify-center">Enroll Now</Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
