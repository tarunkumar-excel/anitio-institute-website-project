'use client';
import { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const TESTIMONIALS = [
  { id: 1, name: 'Rahul Sharma',    course: 'Basic Computer & DCA',         location: 'Dwarka, Delhi',    rating: 5, text: 'ANITIO gave me a strong foundation in computers. The practical approach and patient teachers helped me get a job as a computer operator within 2 months of completing my course!' },
  { id: 2, name: 'Priya Gupta',     course: 'Advanced Excel & MIS',         location: 'Uttam Nagar',      rating: 5, text: 'The Excel & MIS course was exactly what I needed for my corporate job. The instructor taught everything from basics to advanced dashboards. Highly recommended!' },
  { id: 3, name: 'Amit Verma',      course: 'Web Development',              location: 'Dwarka More',      rating: 5, text: 'I completed the Web Development course and now work as a freelance developer. The hands-on projects and guidance from the faculty made all the difference.' },
  { id: 4, name: 'Sunita Devi',     course: 'Tally Prime + GST',            location: 'Janakpuri',        rating: 5, text: 'After completing Tally and GST course at ANITIO, I got placed as an accountant. The training was practical and the faculty was very supportive.' },
  { id: 5, name: 'Deepak Kumar',    course: 'Python Programming',           location: 'Uttam Nagar',      rating: 5, text: 'The Python course at ANITIO is well structured for beginners. I had no prior coding experience and now I can build real applications. Great learning experience!' },
  { id: 6, name: 'Anjali Sharma',   course: 'Graphic Designing',            location: 'Nawada, Delhi',    rating: 5, text: 'The graphic design course covered Photoshop and CorelDRAW in depth. I now do freelance design work and run my own creative studio. Thank you ANITIO!' },
];

export default function TestimonialsSection() {
  const [idx, setIdx] = useState(0);
  const prev = () => setIdx(i => (i === 0 ? TESTIMONIALS.length - 1 : i - 1));
  const next = () => setIdx(i => (i + 1) % TESTIMONIALS.length);
  const t = TESTIMONIALS[idx];

  return (
    <section className="section bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <div className="section-subtitle">Student Stories</div>
          <h2 className="section-title">What Our <span className="text-primary-600">Students Say</span></h2>
        </div>

        {/* Featured */}
        <div className="max-w-3xl mx-auto mb-10">
          <div className="card p-8 md:p-10 text-center relative">
            <Quote size={40} className="text-primary-100 absolute top-6 left-6" />
            <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-primary-900 rounded-2xl flex items-center justify-center text-white text-xl font-bold mx-auto mb-5">
              {t.name.split(' ').map(n => n[0]).join('')}
            </div>
            <div className="flex justify-center gap-1 mb-4">
              {Array.from({ length: t.rating }).map((_, i) => <Star key={i} size={16} className="text-gold-500 fill-gold-500" />)}
            </div>
            <p className="text-gray-700 text-base leading-relaxed mb-6 italic">"{t.text}"</p>
            <div className="font-display font-bold text-gray-900">{t.name}</div>
            <div className="text-sm text-primary-600 font-medium">{t.course}</div>
            <div className="text-xs text-gray-400 mt-1">{t.location}</div>

            <div className="flex items-center justify-center gap-4 mt-8">
              <button onClick={prev} className="w-10 h-10 bg-gray-100 hover:bg-primary-100 rounded-full flex items-center justify-center transition-colors">
                <ChevronLeft size={18} />
              </button>
              <div className="flex gap-1.5">
                {TESTIMONIALS.map((_, i) => (
                  <button key={i} onClick={() => setIdx(i)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${i === idx ? 'w-6 bg-primary-600' : 'w-2 bg-gray-300'}`} />
                ))}
              </div>
              <button onClick={next} className="w-10 h-10 bg-gray-100 hover:bg-primary-100 rounded-full flex items-center justify-center transition-colors">
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-5">
          {TESTIMONIALS.filter((_, i) => i !== idx).slice(0, 3).map((tm) => (
            <div key={tm.id} className="card p-5 cursor-pointer hover:-translate-y-1" onClick={() => setIdx(TESTIMONIALS.indexOf(tm))}>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-800 rounded-xl flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                  {tm.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm">{tm.name}</div>
                  <div className="text-xs text-primary-600">{tm.course}</div>
                </div>
              </div>
              <div className="flex gap-0.5 mb-2">
                {Array.from({ length: tm.rating }).map((_, i) => <Star key={i} size={11} className="text-gold-500 fill-gold-500" />)}
              </div>
              <p className="text-xs text-gray-600 leading-relaxed line-clamp-3">"{tm.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
