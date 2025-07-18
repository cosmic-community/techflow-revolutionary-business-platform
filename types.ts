// Base Cosmic object interface
interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
}

// Landing Page content
interface LandingPage extends CosmicObject {
  type: 'landing-page';
  metadata: {
    hero_headline?: string;
    hero_subheadline?: string;
    hero_image?: {
      url: string;
      imgix_url: string;
    };
    cta_button_text?: string;
    cta_button_link?: string;
    features_section_title?: string;
    features?: Feature[];
    testimonials_section_title?: string;
    testimonials?: Testimonial[];
    team_section_title?: string;
    team_members?: TeamMember[];
  };
}

// Feature content
interface Feature extends CosmicObject {
  type: 'features';
  metadata: {
    feature_name?: string;
    description?: string;
    icon?: string;
    feature_image?: {
      url: string;
      imgix_url: string;
    };
  };
}

// Team member content
interface TeamMember extends CosmicObject {
  type: 'team-members';
  metadata: {
    name?: string;
    position?: string;
    bio?: string;
    photo?: {
      url: string;
      imgix_url: string;
    };
    linkedin_url?: string;
    twitter_url?: string;
  };
}

// Testimonial content
interface Testimonial extends CosmicObject {
  type: 'testimonials';
  metadata: {
    customer_name?: string;
    customer_title?: string;
    company?: string;
    testimonial_text?: string;
    customer_photo?: {
      url: string;
      imgix_url: string;
    };
    rating?: {
      key: string;
      value: string;
    };
  };
}

// Newsletter content
interface Newsletter extends CosmicObject {
  type: 'newsletter';
  metadata: {
    newsletter_title?: string;
    newsletter_description?: string;
    button_text?: string;
    success_message?: string;
  };
}

// API response types
interface CosmicResponse<T> {
  objects: T[];
  total: number;
  limit?: number;
  skip?: number;
}

// Type guards
function isLandingPage(obj: CosmicObject): obj is LandingPage {
  return obj.type === 'landing-page';
}

function isFeature(obj: CosmicObject): obj is Feature {
  return obj.type === 'features';
}

function isTeamMember(obj: CosmicObject): obj is TeamMember {
  return obj.type === 'team-members';
}

function isTestimonial(obj: CosmicObject): obj is Testimonial {
  return obj.type === 'testimonials';
}

function isNewsletter(obj: CosmicObject): obj is Newsletter {
  return obj.type === 'newsletter';
}

// Component prop types
interface FeatureCardProps {
  feature: Feature;
  className?: string;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
  className?: string;
}

interface TeamMemberCardProps {
  member: TeamMember;
  className?: string;
}

interface NewsletterFormProps {
  newsletter: Newsletter;
  className?: string;
}

// Export all types
export type {
  CosmicObject,
  LandingPage,
  Feature,
  TeamMember,
  Testimonial,
  Newsletter,
  CosmicResponse,
  FeatureCardProps,
  TestimonialCardProps,
  TeamMemberCardProps,
  NewsletterFormProps,
};

export {
  isLandingPage,
  isFeature,
  isTeamMember,
  isTestimonial,
  isNewsletter,
};