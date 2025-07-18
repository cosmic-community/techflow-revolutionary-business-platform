import { getLandingPage, getFeatures, getTeamMembers, getTestimonials, getNewsletter } from '@/lib/cosmic';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import TeamSection from '@/components/TeamSection';
import NewsletterSection from '@/components/NewsletterSection';
import Footer from '@/components/Footer';

export default async function HomePage() {
  const [landingPage, features, teamMembers, testimonials, newsletter] = await Promise.all([
    getLandingPage(),
    getFeatures(),
    getTeamMembers(),
    getTestimonials(),
    getNewsletter(),
  ]);

  return (
    <main className="min-h-screen">
      <HeroSection landingPage={landingPage} />
      <FeaturesSection 
        features={features} 
        title={landingPage?.metadata?.features_section_title || 'Features'}
      />
      <TestimonialsSection 
        testimonials={testimonials}
        title={landingPage?.metadata?.testimonials_section_title || 'Testimonials'}
      />
      <TeamSection 
        teamMembers={teamMembers}
        title={landingPage?.metadata?.team_section_title || 'Our Team'}
      />
      {newsletter && <NewsletterSection newsletter={newsletter} />}
      <Footer />
    </main>
  );
}