'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle, Play, GraduationCap, Laptop, Users, Award } from 'lucide-react';

const SLIDES = [
  {
    tag: 'Admissions Open – New Batches Starting',
    heading: 'Empowering Skills,\nBuilding Careers in IT',
    sub: 'ANITIO Information Technology & Skill Development LLP — professional training institute in Dwarka More, New Delhi. Practical learning, expert faculty, job-oriented programs.',
    cta: { label: 'Enroll Now', href: '/contact' },
    ctaSecondary: { label: 'Explore Courses', href: '/courses' },
    pills: ['Job-Oriented Programs', 'Expert Faculty', 'Placement Support'],
  },
  {
    tag: 'Skill Development Courses Available',
    heading: 'Learn In-Demand\nIT Skills Today',
    sub: 'From Basic Computer to Web Development, Python, Data Analysis, Tally, Graphic Design — all courses with hands-on practical training and real-world projects.',
    cta: { label: 'View All Courses', href: '/courses' },
    ctaSecondary: { label: 'Contact Us', href: '/contact' },
    pills: ['8+ Courses', 'Flexible Batches', 'Certificate on Completion'],
  },
  {
    tag: 'Located at Dwarka More, New Delhi',
    heading: 'Industry-Ready\nEducation Near You',
    sub: 'Visit us at H-20, Sewak Park, Dwarka More, Uttam Nagar, Near Metro Pillar 772, New Delhi. Offline and online classes available for all programs.',
    cta: { label: 'Get Directions', href: '/contact' },
    ctaSecondary: { label: 'WhatsApp Us', href: 'https://wa.me/919289438428' },
    pills: ['Dwarka More, New Delhi', 'Online + Offline', 'Mon–Sat 9AM–6PM'],
  },
];

const STATS = [
  { icon: Users,        value: '5,000+', label: 'Students Trained' },
  { icon: GraduationCap,value: '8+',     label: 'Courses' },
  { icon: Award,        value: '100%',   label: 'Placement Support' },
  { icon: Laptop,       value: '10+',    label: 'Years Experience' },
];

export default function HeroSection() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActive(p => (p + 1) % SLIDES.length), 6000);
    return () => clearInterval(t);
  }, []);

  const slide = SLIDES[active];

  return (
    <section className="relative overflow-hidden">
      <div className="bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800 transition-all duration-1000">
        {/* dot grid bg */}
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
        {/* glow blobs */}
        <div className="absolute top-16 right-16 w-80 h-80 bg-gold-500/8 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-primary-400/8 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />

        <div className="container-custom relative z-10 pt-14 pb-10 lg:pt-20 lg:pb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left */}
            <div key={active} className="animate-slide-in-left">
              <div className="inline-flex items-center gap-2 bg-gold-500/20 border border-gold-500/30 text-gold-400 text-xs font-semibold px-4 py-1.5 rounded-full mb-6">
                <span className="w-1.5 h-1.5 bg-gold-400 rounded-full animate-pulse" />
                {slide.tag}
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight mb-5">
                {slide.heading.split('\n').map((line, i) => (
                  <span key={i}>
                    {i === 1 ? <span className="text-gold-400">{line}</span> : line}
                    {i === 0 && <br />}
                  </span>
                ))}
              </h1>
              <p className="text-gray-300 text-base lg:text-lg leading-relaxed mb-7 max-w-lg">{slide.sub}</p>
              <div className="flex flex-wrap gap-2 mb-8">
                {slide.pills.map(p => (
                  <span key={p} className="flex items-center gap-1.5 bg-white/10 border border-white/15 rounded-full px-3 py-1.5 text-xs font-medium text-white">
                    <CheckCircle size={11} className="text-gold-400" /> {p}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href={slide.cta.href} className="btn-primary text-base px-7 py-3.5 shadow-gold">
                  {slide.cta.label} <ArrowRight size={17} />
                </Link>
                <Link href={slide.ctaSecondary.href} className="flex items-center gap-2 text-white hover:text-gold-400 font-semibold transition-colors group">
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-gold-500/20 transition-colors">
                    <Play size={15} className="ml-0.5" />
                  </div>
                  {slide.ctaSecondary.label}
                </Link>
              </div>
            </div>

            {/* Right – stats */}
            <div key={`r-${active}`} className="hidden lg:block animate-slide-in-right">
              <div className="grid grid-cols-2 gap-4">
                {/* Address card */}
                <div className="col-span-2 bg-white/10 backdrop-blur border border-white/15 rounded-2xl p-6 flex items-start gap-4">
                  <div className="w-14 h-14 bg-gold-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <GraduationCap size={28} className="text-primary-900" />
                  </div>
                  <div>
                    <div className="text-white font-display font-bold text-xl mb-1">ANITIO Institute</div>
                    <div className="text-gray-300 text-sm leading-relaxed">H-20, Sewak Park, Dwarka More, Uttam Nagar, Near Metro Pillar 772, New Delhi</div>
                    <a href="tel:+919289438428" className="text-gold-400 text-sm font-semibold mt-2 inline-block hover:text-gold-300 transition-colors">
                      📞 +91 92894 38428
                    </a>
                  </div>
                </div>
                {/* stat cards */}
                {STATS.map(({ icon: Icon, value, label }) => (
                  <div key={label} className="bg-primary-600/30 backdrop-blur border border-white/10 rounded-2xl p-5 text-center">
                    <Icon size={22} className="text-gold-400 mx-auto mb-2" />
                    <div className="text-3xl font-display font-bold text-white">{value}</div>
                    <div className="text-xs text-gray-300 mt-1">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Slide dots */}
          <div className="flex items-center gap-2 mt-10">
            {SLIDES.map((_, i) => (
              <button key={i} onClick={() => setActive(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${i === active ? 'w-8 bg-gold-500' : 'w-3 bg-white/30'}`} />
            ))}
          </div>
        </div>
      </div>

      {/* Highlights strip */}
      <div className="bg-white border-b border-gray-100 shadow-sm">
        <div className="container-custom py-3">
          <div className="flex items-center gap-6 overflow-x-auto scrollbar-hide text-sm font-medium text-gray-700 whitespace-nowrap">
            {['💻 Basic Computer & DCA', '📊 Advanced Excel & MIS', '🌐 Web Development', '🐍 Python Programming', '📈 Data Analysis', '🖥️ Tally & GST', '🎨 Graphic Designing', '🧑‍💼 Skill Development'].map(item => (
              <span key={item} className="flex-shrink-0">{item}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
