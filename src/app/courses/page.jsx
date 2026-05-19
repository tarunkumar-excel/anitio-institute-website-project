import Link from 'next/link';
import { CourseHeader, CourseFooter } from '@/components/CourseLayout';

export const metadata = {
  title: 'All Courses | Anitio Institute — IT, Finance & Digital Marketing Training in Dwarka More Delhi',
  description: 'Explore 27+ professional courses at Anitio Institute, Dwarka More New Delhi. IT, Finance, Accounting, Digital Marketing courses with 100% practical training and placement assistance.',
  keywords: 'Courses Anitio Institute Delhi, IT Courses Dwarka, Finance Courses New Delhi, Digital Marketing Training Delhi, Professional Training Institute Delhi',
  robots: { index: true, follow: true },
  openGraph: {
    title: 'All Courses | Anitio Institute Dwarka More Delhi',
    description: 'Explore 27+ professional IT, Finance & Digital Marketing courses with placement assistance at Anitio Institute, Dwarka More, New Delhi.',
    type: 'website',
    url: 'https://anitio-institute-website-project.vercel.app/courses',
    siteName: 'Anitio Institute',
  },
  alternates: { canonical: 'https://anitio-institute-website-project.vercel.app/courses' },
};

const categories = [
  {
    name: 'IT & Technology',
    icon: '💻',
    gradient: 'from-indigo-600 to-purple-600',
    courses: [
      { name: 'Artificial Intelligence', slug: 'artificial-intelligence', icon: '🤖', tag: 'Most Popular' },
      { name: 'Python & Data Science', slug: 'python-data-science', icon: '🐍', tag: 'High Demand' },
      { name: 'Power BI', slug: 'power-bi', icon: '📊', tag: '' },
      { name: 'Tableau', slug: 'tableau', icon: '📈', tag: '' },
      { name: 'Prompt Engineering', slug: 'prompt-engineering', icon: '🧠', tag: 'New' },
      { name: 'Business Analytics', slug: 'business-analytics', icon: '📉', tag: '' },
      { name: 'SQL & Data Analytics', slug: 'sql-data-analytics', icon: '🗄️', tag: '' },
      { name: 'Data Analytics', slug: 'data-analytics', icon: '🔬', tag: '' },
      { name: 'SAP FICO', slug: 'sap-fico', icon: '⚙️', tag: 'High Salary' },
      { name: 'Technical Analysis', slug: 'technical-analysis', icon: '📉', tag: '' },
      { name: 'Full Stack Development', slug: 'full-stack-development', icon: '🌐', tag: 'Trending' },
    ],
  },
  {
    name: 'Finance & Accounting',
    icon: '💰',
    gradient: 'from-orange-500 to-red-600',
    courses: [
      { name: 'Financial Accounting', slug: 'financial-accounting', icon: '🧾', tag: 'Most Popular' },
      { name: 'Tally Prime & GST', slug: 'tally-prime-gst', icon: '🖥️', tag: 'Job Ready' },
      { name: 'Financial Modeling', slug: 'financial-modeling', icon: '📐', tag: '' },
      { name: 'Investment Banking', slug: 'investment-banking', icon: '🏦', tag: 'High Salary' },
      { name: 'Banking & Finance', slug: 'banking-finance', icon: '💳', tag: '' },
      { name: 'Cost Accounting', slug: 'cost-accounting', icon: '🧮', tag: '' },
      { name: 'International Accounting', slug: 'international-accounting', icon: '🌍', tag: '' },
      { name: 'Payroll Management', slug: 'payroll-management', icon: '👥', tag: '' },
      { name: 'Stock Market Trading', slug: 'stock-market-trading', icon: '📈', tag: 'Trending' },
    ],
  },
  {
    name: 'Digital Marketing',
    icon: '📱',
    gradient: 'from-pink-600 to-rose-600',
    courses: [
      { name: 'Digital Marketing Master Program', slug: 'digital-marketing', icon: '🎯', tag: 'Most Popular' },
      { name: 'SEO Course', slug: 'seo-course', icon: '🔍', tag: '' },
      { name: 'Social Media Marketing', slug: 'social-media-marketing', icon: '📲', tag: '' },
      { name: 'Google Ads Certification', slug: 'google-ads', icon: '🔵', tag: 'Certification' },
      { name: 'Content Marketing', slug: 'content-marketing', icon: '✍️', tag: '' },
      { name: 'Performance Marketing', slug: 'performance-marketing', icon: '🚀', tag: 'High Demand' },
      { name: 'Meta Ads Specialist', slug: 'meta-ads', icon: '📘', tag: '' },
    ],
  },
];

export default function CoursesPage() {
  return (
    <>
      <CourseHeader />
      <main className="bg-gray-50 min-h-screen">

        {/* Hero */}
        <section className="bg-gradient-to-r from-indigo-900 via-purple-900 to-blue-900 text-white py-20 px-6">
          <div className="max-w-5xl mx-auto text-center">
            <span className="bg-indigo-500 text-white px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest">
              27+ Professional Courses
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold mt-5 mb-5 leading-tight">
              All Courses at<br />
              <span className="text-yellow-400">Anitio Institute</span>
            </h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
              Professional IT, Finance & Digital Marketing training at Dwarka More, New Delhi. 100% practical training with placement assistance, online & offline batches.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              {['100% Practical Training', '27+ Courses', 'Placement Assistance', 'Online & Offline Batches', 'Expert Trainers', 'Industry Certifications'].map(f => (
                <span key={f} className="flex items-center gap-2 text-green-400 font-medium">
                  <span>✓</span> {f}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="bg-white py-10 px-6 border-b border-gray-100">
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '27+', label: 'Professional Courses' },
              { value: '15,000+', label: 'Students Trained' },
              { value: '100%', label: 'Practical Training' },
              { value: '500+', label: 'Companies Hiring' },
            ].map(s => (
              <div key={s.label}>
                <div className="text-3xl font-extrabold text-indigo-700 mb-1">{s.value}</div>
                <div className="text-gray-500 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Course Categories */}
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto space-y-16">
            {categories.map(cat => (
              <div key={cat.name}>
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${cat.gradient} flex items-center justify-center text-2xl shadow-lg`}>
                    {cat.icon}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">{cat.name}</h2>
                    <p className="text-gray-500 text-sm">{cat.courses.length} courses available</p>
                  </div>
                </div>

                {/* Course Cards */}
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                  {cat.courses.map(course => (
                    <Link
                      key={course.slug}
                      href={`/courses/${course.slug}`}
                      className="bg-white rounded-2xl border border-gray-100 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-6 group flex flex-col"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <span className="text-3xl">{course.icon}</span>
                        {course.tag && (
                          <span className="text-xs font-bold bg-indigo-50 text-indigo-700 px-2 py-1 rounded-full">
                            {course.tag}
                          </span>
                        )}
                      </div>
                      <h3 className="font-bold text-gray-900 text-sm leading-snug mb-3 flex-1 group-hover:text-indigo-700 transition">
                        {course.name}
                      </h3>
                      <div className="flex items-center justify-between text-xs text-gray-400 mt-2">
                        <span>📍 Dwarka More, Delhi</span>
                        <span className="text-indigo-600 font-semibold group-hover:underline">View →</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Why Anitio */}
        <section className="bg-white py-16 px-6">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Why Choose Anitio Institute?</h2>
            <p className="text-gray-500 max-w-2xl mx-auto mb-12">Trusted by 15,000+ students across Delhi NCR for quality training and real placement support.</p>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: '🏆', title: '100% Practical Training', desc: 'Every course is hands-on with real tools, live projects, and industry datasets — no theory-only classes.' },
                { icon: '🎯', title: 'Placement Assistance', desc: 'Resume preparation, mock interviews, and direct referrals to 500+ hiring companies across Delhi NCR.' },
                { icon: '👨‍🏫', title: 'Industry Expert Trainers', desc: 'Learn from working professionals with 10+ years of industry experience in their domain.' },
                { icon: '📜', title: 'Industry Certifications', desc: 'Earn recognised certifications including Google, Meta, Microsoft, and Anitio Institute credentials.' },
                { icon: '🕐', title: 'Flexible Batch Timings', desc: 'Morning, evening, weekend, and fast-track batches available. Online & offline options.' },
                { icon: '📍', title: 'Dwarka More, New Delhi', desc: 'Conveniently located near Dwarka More Metro Station — easy access from all parts of Delhi.' },
              ].map(f => (
                <div key={f.title} className="bg-gray-50 rounded-2xl p-7 text-left border border-gray-100 hover:border-indigo-200 hover:shadow-md transition">
                  <div className="text-4xl mb-4">{f.icon}</div>
                  <h3 className="font-bold text-gray-900 mb-2">{f.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-indigo-900 via-purple-900 to-blue-900 py-20 px-6 text-white text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-5">Not Sure Which Course to Choose?</h2>
            <p className="text-gray-300 text-lg mb-8">Talk to our career counsellors — we will guide you to the right course based on your background, goals, and budget. Free counselling, no obligation.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:9289438428" className="bg-white text-indigo-900 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-100 transition shadow-2xl">
                📞 Call Us — 9289438428
              </a>
              <a href="https://wa.me/919289438428" target="_blank" rel="noopener noreferrer"
                className="border border-white text-white hover:bg-white hover:text-indigo-900 px-8 py-4 rounded-2xl font-semibold transition">
                💬 WhatsApp Us
              </a>
            </div>
          </div>
        </section>

      </main>
      <CourseFooter />
    </>
  );
}
