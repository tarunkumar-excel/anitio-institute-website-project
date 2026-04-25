'use client';
import { useEffect, useRef, useState } from 'react';
import { GraduationCap, BookOpen, Award, Users, Briefcase, Star } from 'lucide-react';

const STATS = [
  { icon: Users,        value: 5000,  suffix: '+',  label: 'Students Trained',   color: 'text-blue-400' },
  { icon: BookOpen,     value: 8,     suffix: '+',  label: 'Courses Offered',    color: 'text-gold-400' },
  { icon: Award,        value: 100,   suffix: '%',  label: 'Placement Support',  color: 'text-green-400' },
  { icon: GraduationCap,value: 10,    suffix: '+',  label: 'Years Experience',   color: 'text-purple-400' },
  { icon: Briefcase,    value: 200,   suffix: '+',  label: 'Placed Students',    color: 'text-red-400' },
  { icon: Star,         value: 4,     suffix: '.9', label: 'Student Rating',     color: 'text-yellow-400' },
];

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        let start = 0;
        const step = target / (2000 / 16);
        const timer = setInterval(() => {
          start += step;
          if (start >= target) { setCount(target); clearInterval(timer); }
          else setCount(Math.floor(start));
        }, 16);
      }
    }, { threshold: 0.5 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [target]);

  return <span ref={ref}>{count.toLocaleString('en-IN')}{suffix}</span>;
}

export default function StatsSection() {
  return (
    <section className="bg-gradient-to-r from-primary-950 via-primary-900 to-primary-950 py-16">
      <div className="container-custom">
        <div className="text-center mb-12">
          <div className="text-gold-400 font-semibold text-xs uppercase tracking-widest mb-2">Our Impact</div>
          <h2 className="font-display text-3xl md:text-4xl text-white font-bold">Numbers That Speak</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {STATS.map(({ icon: Icon, value, suffix, label, color }) => (
            <div key={label} className="text-center group">
              <div className="w-14 h-14 mx-auto mb-3 bg-white/10 rounded-2xl flex items-center justify-center group-hover:bg-white/20 transition-colors">
                <Icon size={26} className={color} />
              </div>
              <div className="text-3xl md:text-4xl font-display font-bold text-white mb-1">
                <CountUp target={value} suffix={suffix} />
              </div>
              <div className="text-xs text-gray-400 font-medium">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
