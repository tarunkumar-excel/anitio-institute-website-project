import { Shield, Wifi, Clock, HeadphonesIcon, Trophy, GraduationCap, BookOpen, MapPin } from 'lucide-react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const FEATURES = [
  { icon: GraduationCap, title: 'Expert Industry Faculty',      desc: 'Learn from experienced trainers with real-world IT and corporate backgrounds.' },
  { icon: Wifi,          title: 'Practical Hands-On Training',  desc: 'Every course includes live projects, lab sessions, and real-world exercises.' },
  { icon: Trophy,        title: 'Placement Assistance',         desc: '100% placement support with resume building, mock interviews, and company tie-ups.' },
  { icon: Clock,         title: 'Flexible Batch Timings',       desc: 'Morning, afternoon and evening batches — designed for students and working professionals.' },
  { icon: Shield,        title: 'Recognized Certification',     desc: 'Get a certificate on course completion, valued by employers across industries.' },
  { icon: HeadphonesIcon,title: 'Dedicated Student Support',    desc: 'Our team is available to help with queries, guidance, and academic support.' },
  { icon: BookOpen,      title: 'Job-Oriented Curriculum',      desc: 'Courses designed with industry requirements to make you job-ready from day one.' },
  { icon: MapPin,        title: 'Conveniently Located',         desc: 'H-20, Sewak Park, Dwarka More — easily accessible near Metro Pillar 772, New Delhi.' },
];

export default function WhyChooseSection() {
  return (
    <section className="section bg-white">
      <div className="container-custom">
        <div className="text-center mb-14">
          <div className="section-subtitle">Why Choose Us</div>
          <h2 className="section-title">The <span className="text-primary-600">ANITIO Advantage</span></h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto text-sm leading-relaxed">
            We combine practical training with industry exposure to produce job-ready graduates who excel in their careers.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group p-6 rounded-2xl border border-gray-100 hover:border-primary-200 hover:bg-primary-50/50 transition-all duration-300 hover:shadow-card">
              <div className="w-12 h-12 bg-primary-100 group-hover:bg-primary-700 rounded-xl flex items-center justify-center mb-4 transition-colors">
                <Icon size={22} className="text-primary-700 group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-display font-bold text-gray-900 text-sm mb-2">{title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link href="/contact" className="btn-primary text-sm py-3 px-8">
            Start Your Journey <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}
