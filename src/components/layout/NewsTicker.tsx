'use client';
import { Bell } from 'lucide-react';

const ITEMS = [
  '🔔 Admissions Open – New Batches Starting Soon | All IT & Skill Courses | Enroll Now!',
  '📢 New Courses: Web Development · Python · Data Analysis · Graphic Design | Limited Seats!',
  '🏆 Placed Students in Top Companies – 100% Placement Assistance Available',
  '🎓 Basic Computer, DCA, Excel, Tally, Programming & More – Join ANITIO Today',
  '📍 H-20 Sewak Park, Dwarka More, Uttam Nagar, New Delhi | Near Metro Pillar 772',
  '📞 Call Us: +91 92894 38428 | +91 99719 69158 | anitioinstitute@gmail.com',
  '💬 WhatsApp for Instant Inquiry: +91 92894 38428 | Mon–Sat 9AM–6PM',
  '🌟 Skill Development & Job Training Programs – Industry Expert Faculty',
];

export default function NewsTicker() {
  const items = [...ITEMS, ...ITEMS];
  return (
    <div className="bg-primary-700 text-white py-2 overflow-hidden">
      <div className="flex items-center">
        <div className="flex-shrink-0 bg-gold-500 text-primary-900 font-bold text-xs px-4 py-0.5 flex items-center gap-1.5 z-10">
          <Bell size={12} className="animate-pulse" />
          <span className="uppercase tracking-wide">Updates</span>
        </div>
        <div className="ticker-wrap flex-1 ml-3">
          <div className="ticker-content text-xs font-medium">
            {items.map((item, i) => (
              <span key={i} className="mx-8 text-white/90">{item}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
