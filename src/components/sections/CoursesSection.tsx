'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Clock, ArrowRight, BookOpen, Laptop, BarChart2, Code2, Calculator, Palette, Award, GraduationCap } from 'lucide-react';
import { courses } from '@/data/courses';

const CATS = [
  { id: 'all',         label: 'All Courses',           icon: GraduationCap },
  { id: 'basic',       label: 'Basic Computer',         icon: Laptop },
  { id: 'excel',       label: 'Excel & MIS',            icon: BarChart2 },
  { id: 'web',         label: 'Web Development',        icon: Code2 },
  { id: 'programming', label: 'Programming',            icon: BookOpen },
  { id: 'data',        label: 'Data Analysis',          icon: BarChart2 },
  { id: 'tally',       label: 'Tally & Accounting',     icon: Calculator },
  { id: 'design',      label: 'Graphic Design',         icon: Palette },
  { id: 'skill',       label: 'Skill Development',      icon: Award },
];

const COURSE_ICONS: Record<string, React.ElementType> = {
  basic: Laptop, excel: BarChart2, web: Code2, programming: BookOpen,
  data: BarChart2, tally: Calculator, design: Palette, skill: Award,
};

export default function CoursesSection() {
  const [cat, setCat] = useState('all');
  const filtered = cat === 'all' ? courses.slice(0, 9) : courses.filter(c => c.category === cat);

  return (
    <section className="section bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-10">
          <div className="section-subtitle">Our Programs</div>
          <h2 className="section-title">Explore Our <span className="text-primary-600">Courses</span></h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto text-sm">
            Job-oriented IT and skill development courses with hands-on training, expert faculty, and placement support.
          </p>
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {CATS.map(({ id, label, icon: Icon }) => (
            <button key={id} onClick={() => setCat(id)}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                cat === id ? 'bg-primary-700 text-white shadow-blue' : 'bg-white text-gray-700 border border-gray-200 hover:border-primary-300 hover:text-primary-700'
              }`}>
              <Icon size={13} /> {label}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((course) => {
            const Icon = COURSE_ICONS[course.category] || BookOpen;
            return (
              <div key={course.id} className="card group hover:-translate-y-1">
                <div className="relative h-36 bg-gradient-to-br from-primary-800 to-primary-950 flex items-center justify-center overflow-hidden">
                  <Icon size={52} className="text-white/15" />
                  {course.badge && (
                    <span className="absolute top-3 left-3 badge-gold text-[10px] font-bold uppercase">{course.badge}</span>
                  )}
                  <div className="absolute bottom-3 right-3 bg-black/30 text-white text-[10px] px-2 py-0.5 rounded-full">{course.duration}</div>
                </div>
                <div className="p-5">
                  <div className="badge-blue text-[10px] mb-2 capitalize">{course.category.replace('-', ' ')}</div>
                  <h3 className="font-display font-bold text-gray-900 text-sm leading-snug mb-2 group-hover:text-primary-700 transition-colors line-clamp-2">
                    {course.title}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed mb-4 line-clamp-2">{course.shortDesc}</p>

                  <div className="flex items-center gap-3 text-xs text-gray-400 mb-4">
                    <span className="flex items-center gap-1"><Clock size={11} className="text-primary-500" />{course.duration}</span>
                    <span className="text-gray-300">·</span>
                    <span>{course.eligibility}</span>
                  </div>

                  <div className="flex items-center justify-between border-t border-gray-100 pt-3">
                    <div>
                      <div className="text-base font-bold text-primary-700">
                        ₹{course.fees.toLocaleString('en-IN')}
                      </div>
                      {course.originalFees && (
                        <div className="text-[10px] text-gray-400 line-through">₹{course.originalFees.toLocaleString('en-IN')}</div>
                      )}
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

        <div className="text-center mt-10">
          <Link href="/courses" className="btn-primary">
            View All Courses <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
