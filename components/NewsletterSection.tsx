import type { Newsletter } from '@/types';
import NewsletterForm from '@/components/NewsletterForm';

interface NewsletterSectionProps {
  newsletter: Newsletter;
}

export default function NewsletterSection({ newsletter }: NewsletterSectionProps) {
  if (!newsletter) {
    return null;
  }

  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="text-white mb-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {newsletter.metadata?.newsletter_title || 'Stay Updated'}
          </h2>
          
          {newsletter.metadata?.newsletter_description && (
            <p className="text-xl opacity-90 mb-8">
              {newsletter.metadata.newsletter_description}
            </p>
          )}
        </div>
        
        <NewsletterForm newsletter={newsletter} />
      </div>
    </section>
  );
}