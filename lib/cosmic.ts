import { createBucketClient } from '@cosmicjs/sdk';
import type { 
  LandingPage, 
  Feature, 
  TeamMember, 
  Testimonial, 
  Newsletter 
} from '@/types';

export const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG as string,
  readKey: process.env.COSMIC_READ_KEY as string,
  writeKey: process.env.COSMIC_WRITE_KEY as string,
  apiEnvironment: "staging"
});

// Simple error helper for Cosmic SDK
function hasStatus(error: unknown): error is { status: number } {
  return typeof error === 'object' && error !== null && 'status' in error;
}

// Get landing page content
export async function getLandingPage(): Promise<LandingPage | null> {
  try {
    const response = await cosmic.objects
      .findOne({ type: 'landing-page' })
      .depth(1);
    
    return response.object as LandingPage;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null;
    }
    throw new Error('Failed to fetch landing page');
  }
}

// Get all features
export async function getFeatures(): Promise<Feature[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'features' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    return response.objects as Feature[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch features');
  }
}

// Get all team members
export async function getTeamMembers(): Promise<TeamMember[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'team-members' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    return response.objects as TeamMember[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch team members');
  }
}

// Get all testimonials
export async function getTestimonials(): Promise<Testimonial[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'testimonials' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    return response.objects as Testimonial[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch testimonials');
  }
}

// Get newsletter configuration
export async function getNewsletter(): Promise<Newsletter | null> {
  try {
    const response = await cosmic.objects
      .findOne({ type: 'newsletter' })
      .props(['id', 'title', 'slug', 'metadata']);
    
    return response.object as Newsletter;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null;
    }
    throw new Error('Failed to fetch newsletter');
  }
}