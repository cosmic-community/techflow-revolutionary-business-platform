import type { LandingPage } from '@/types';

interface HeroSectionProps {
  landingPage: LandingPage | null;
}

export default function HeroSection({ landingPage }: HeroSectionProps) {
  const hero = landingPage?.metadata;
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-bg opacity-90" />
      
      {/* Background Image */}
      {hero?.hero_image && (
        <div className="absolute inset-0">
          <img
            src={`${hero.hero_image.imgix_url}?w=1920&h=1080&fit=crop&auto=format,compress`}
            alt="Hero background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
      )}
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
          {hero?.hero_headline || 'Welcome to TechFlow'}
        </h1>
        
        {hero?.hero_subheadline && (
          <p className="text-xl md:text-2xl mb-8 opacity-90 animate-slide-up">
            {hero.hero_subheadline}
          </p>
        )}
        
        {hero?.cta_button_text && (
          <div className="animate-scale-in">
            <a
              href={hero.cta_button_link || '#'}
              className="inline-block bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg"
            >
              {hero.cta_button_text}
            </a>
          </div>
        )}
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}