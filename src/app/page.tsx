import HeroSection from '@/components/sections/HeroSection';
import CoursesSection from '@/components/sections/CoursesSection';
import StatsSection from '@/components/sections/StatsSection';
import WhyChooseSection from '@/components/sections/WhyChooseSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import NoticesSection from '@/components/sections/NoticesSection';
import WhatsAppButton from '@/components/ui/WhatsAppButton';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <NoticesSection />
      <CoursesSection />
      <StatsSection />
      <WhyChooseSection />
      <TestimonialsSection />
      <WhatsAppButton />
    </>
  );
}
