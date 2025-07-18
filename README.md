# TechFlow - Revolutionary Business Platform

![App Preview](https://imgix.cosmicjs.com/31b59d70-63e2-11f0-a051-23c10f41277a-photo-1451187580459-43490279c0fa-1752848357940.jpg?w=1200&h=300&fit=crop&auto=format,compress)

A sleek, modern business website showcasing TechFlow's revolutionary development platform. Built with Next.js 15 and powered by [Cosmic](https://www.cosmicjs.com) headless CMS, this application dynamically displays your business features, testimonials, and team information.

## Features

- **Dynamic Hero Section** - Compelling headlines and CTAs powered by your Cosmic content
- **Interactive Features Showcase** - Beautiful cards displaying your platform capabilities with icons and images
- **Customer Testimonials** - Social proof with star ratings and customer photos
- **Team Member Profiles** - Professional team showcase with social media links
- **Newsletter Signup** - Integrated subscription form with success messaging
- **Responsive Design** - Optimized for all devices with smooth animations
- **TypeScript Support** - Full type safety with comprehensive error handling

## Clone this Bucket and Code Repository

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Bucket and Code Repository](https://img.shields.io/badge/Clone%20this%20Bucket-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmic-staging.com/projects/new?clone_bucket=687a56857ce43d105ef5eb7d&clone_repository=687a59f47ce43d105ef5eb9e)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "add a blog"

### Code Generation Prompt

> "I want to build a slick website for my new tech business"

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies Used

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Cosmic** - Headless CMS for content management
- **Bun** - Fast JavaScript runtime and package manager

## Getting Started

### Prerequisites

- Node.js 18+ or Bun
- A Cosmic account and bucket

### Installation

1. Clone this repository
2. Install dependencies:
   ```bash
   bun install
   ```

3. Set up your environment variables:
   ```bash
   cp .env.example .env.local
   ```

4. Add your Cosmic credentials to `.env.local`:
   ```env
   COSMIC_BUCKET_SLUG=your-bucket-slug
   COSMIC_READ_KEY=your-read-key
   COSMIC_WRITE_KEY=your-write-key
   ```

5. Run the development server:
   ```bash
   bun run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

## Cosmic SDK Examples

### Fetching Landing Page Content
```typescript
import { cosmic } from '@/lib/cosmic'

const landingPage = await cosmic.objects
  .findOne({ type: 'landing-page' })
  .depth(1)
```

### Getting Features with Images
```typescript
const features = await cosmic.objects
  .find({ type: 'features' })
  .props(['title', 'slug', 'metadata'])
  .depth(1)
```

### Fetching Team Members
```typescript
const teamMembers = await cosmic.objects
  .find({ type: 'team-members' })
  .props(['title', 'slug', 'metadata'])
  .depth(1)
```

## Cosmic CMS Integration

This application integrates with the following Cosmic object types:

- **Landing Page** - Hero content, section titles, and featured content
- **Features** - Product/service features with icons and descriptions
- **Team Members** - Team profiles with photos and social links
- **Testimonials** - Customer reviews with ratings and photos
- **Newsletter** - Subscription form configuration

Content is fetched server-side for optimal performance and SEO. The application handles empty states gracefully when content is not available.

## Deployment Options

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically

### Netlify
1. Push your code to GitHub
2. Connect your repository to Netlify
3. Add environment variables in Netlify dashboard
4. Deploy automatically

### Environment Variables
Make sure to set these in your deployment platform:
- `COSMIC_BUCKET_SLUG`
- `COSMIC_READ_KEY`
- `COSMIC_WRITE_KEY`

Visit the [Cosmic docs](https://www.cosmicjs.com/docs) for more information on content management and API usage.

<!-- README_END -->