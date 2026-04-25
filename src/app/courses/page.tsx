import type { Metadata } from 'next';
import Link from 'next/link';
import { BookOpen, Clock, ArrowRight, Laptop, BarChart2, Code2, Calculator, Palette, Award, GraduationCap, CheckCircle } from 'lucide-react';
import { courses } from '@/data/courses';

export const metadata: Metadata = {
  title: 'All Courses – Basic Computer, Excel, Web Dev, Python, Tally, Graphic Design | ANITIO',
  description: 'Explore IT and skill development courses at ANITIO Dwarka More, New Delhi — Basic Computer, DCA, Advanced Excel, Web Development, Python, Tally, Graphic Design, Data Analysis.',
};

const CATEGORIES = [
  { id: 'basic',       label: 'Basic Computer Courses',      icon: Laptop,       desc: 'Computer fundamentals, DCA, MS Office for beginners' },
  { id: 'excel',       label: 'Advanced Excel & MIS',         icon: BarChart2,    desc: 'Excel, Pivot Tables, VLOOKUP, MIS dashboards' },
  { id: 'web',         label: 'Web Development',              icon: Code2,        desc: 'HTML, CSS, JavaScript, React, Node.js' },
  { id: 'programming', label: 'Programming',                  icon: BookOpen,     desc: 'C, C++, Python from basics to advanced' },
  { id: 'data',        label: 'Data Analysis',                icon: BarChart2,    desc: 'Python, Pandas, Power BI, analytics' },
  { id: 'tally',       label: 'Tally & Accounting',           icon: Calculator,   desc: 'Tally Prime, GST filing, payroll management' },
  { id: 'design',      label: 'Graphic Designing',            icon: Palette,      desc: 'Photoshop, CorelDRAW, Illustrator' },
  { id: 'skill',       label: 'Skill Development & Job Training', icon: Award,   desc: 'Placement-focused soft skills and career training' },
];

const ICON_MAP: Record<string, React.ElementType> = {
  basic: Laptop, excel: BarChart2, web: Code2, programming: BookOpen,
  data: BarChart2, tally: Calculator, design: Palette, skill: Award,
};

export default async function CoursesPage({ searchParams }: { searchParams: Promise<{ category?: string }> }) {
  const { category } = await searchParams;
  const filtered = category ? courses.filter(c => c.category === category) : courses;
  const grouped = CATEGORIES.map(cat => ({
    ...cat,
    courses: (category ? filtered : courses).filter(c => c.category === cat.id),
  })).filter(g => g.courses.length > 0);

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800 text-white py-14">
        <div className="container-custom">
          <div className="text-gold-400 font-semibold text-xs uppercase tracking-widest mb-2">All Programs</div>
          <h1 className="font-display font-bold text-4xl md:text-5xl mb-3">
            Explore Our <span className="text-gold-400">Courses</span>
          </h1>
          <p className="text-gray-300 text-sm max-w-xl mb-8">
            Job-oriented IT and skill development courses with hands-on training and expert faculty at ANITIO, Dwarka More, New Delhi.
          </p>
          <div className="flex flex-wrap gap-2">
            <Link href="/courses" className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${!category ? 'bg-gold-500 text-primary-950' : 'bg-white/10 text-gray-300 hover:bg-white/20'}`}>
              All Courses
            </Link>
            {CATEGORIES.map(cat => (
              <Link key={cat.id} href={`/courses?category=${cat.id}`}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold transition-all ${category === cat.id ? 'bg-gold-500 text-primary-950' : 'bg-white/10 text-gray-300 hover:bg-white/20'}`}>
                <cat.icon size={12} /> {cat.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="container-custom py-12 space-y-14">
        {grouped.map(({ id, label, icon: CatIcon, desc, courses: catCourses }) => (
          <div key={id}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
                <CatIcon size={20} className="text-primary-700" />
              </div>
              <div>
                <h2 className="font-display font-bold text-2xl text-primary-900">{label}</h2>
                <p className="text-sm text-gray-500">{desc}</p>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {catCourses.map((course) => {
                const Icon = ICON_MAP[course.category] || BookOpen;
                return (
                  <div key={course.id} className="card group hover:-translate-y-1">
                    <div className="h-32 bg-gradient-to-br from-primary-800 to-primary-950 relative flex items-center justify-center">
                      <Icon size={48} className="text-white/15" />
                      {course.badge && <span className="absolute top-3 left-3 badge-gold text-[10px] uppercase font-bold">{course.badge}</span>}
                    </div>
                    <div className="p-5">
                      <h3 className="font-display font-bold text-gray-900 text-sm mb-2 group-hover:text-primary-700 transition-colors">{course.title}</h3>
                      <p className="text-xs text-gray-500 mb-3 line-clamp-2">{course.shortDesc}</p>
                      <div className="flex items-center gap-2 text-xs text-gray-400 mb-3">
                        <Clock size={11} className="text-primary-500" />{course.duration}
                        <span className="text-gray-200">·</span>
                        <span>{course.eligibility}</span>
                      </div>
                      <div className="text-xs text-gray-600 mb-4 space-y-1">
                        {course.careerOpportunities.slice(0, 2).map(c => (
                          <div key={c} className="flex items-center gap-1.5"><CheckCircle size={10} className="text-green-500" />{c}</div>
                        ))}
                      </div>
                      <div className="flex items-center justify-between border-t border-gray-100 pt-3">
                        <div>
                          <div className="font-bold text-primary-700">₹{course.fees.toLocaleString('en-IN')}</div>
                          {course.originalFees && <div className="text-[10px] text-gray-400 line-through">₹{course.originalFees.toLocaleString('en-IN')}</div>}
                        </div>
                        <Link href={`/courses/${course.slug}`} className="btn-primary text-xs py-1.5 px-3">
                          Details <ArrowRight size={11} />
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-br from-primary-900 to-primary-800 py-12">
        <div className="container-custom text-center">
          <h2 className="font-display font-bold text-2xl text-white mb-3">Not Sure Which Course to Choose?</h2>
          <p className="text-gray-300 text-sm mb-6">Contact us for free career counselling and course guidance.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/contact" className="btn-primary">Inquire Now <ArrowRight size={15} /></Link>
            <a href="https://wa.me/919289438428" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm">
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
