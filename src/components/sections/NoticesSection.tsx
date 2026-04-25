'use client';
import { Bell, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const NOTICES = [
  { tag: 'Admissions',   text: 'New batches starting soon for all courses — Basic Computer, Excel, Web Dev, Python, Tally & more.' },
  { tag: 'New Course',   text: 'Full Stack Web Development course launched — HTML, CSS, JS, React, Node.js with placement support.' },
  { tag: 'Offer',        text: 'Special discount on course fees for early enrollments. Limited seats per batch. Enroll today!' },
  { tag: 'Info',         text: 'Classes available in morning, afternoon & evening batches to suit working professionals & students.' },
];

export default function NoticesSection() {
  return (
    <section className="bg-primary-50 py-10 border-b border-primary-100">
      <div className="container-custom">
        <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary-700 rounded-lg flex items-center justify-center">
              <Bell size={16} className="text-gold-400" />
            </div>
            <h2 className="font-display font-bold text-lg text-primary-900">Latest Updates</h2>
          </div>
          <Link href="/contact" className="text-sm text-primary-600 font-semibold hover:text-primary-800 flex items-center gap-1 transition-colors">
            Inquire Now <ArrowRight size={14} />
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {NOTICES.map(({ tag, text }) => (
            <div key={tag} className="bg-white rounded-xl p-4 border border-primary-100 hover:border-primary-300 hover:shadow-card transition-all">
              <span className="badge-gold text-[10px] mb-2 block w-fit">{tag}</span>
              <p className="text-sm text-gray-700 leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
