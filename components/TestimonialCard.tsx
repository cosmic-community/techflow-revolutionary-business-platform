import type { TestimonialCardProps } from '@/types';

export default function TestimonialCard({ testimonial, className, ...props }: TestimonialCardProps & React.HTMLAttributes<HTMLDivElement>) {
  const { metadata } = testimonial;
  
  return (
    <div className={`bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300 ${className || ''}`} {...props}>
      {/* Rating */}
      {metadata?.rating && (
        <div className="flex items-center mb-4">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
            ))}
          </div>
          <span className="ml-2 text-sm text-gray-600">{metadata.rating.value}</span>
        </div>
      )}
      
      {/* Testimonial Text */}
      {metadata?.testimonial_text && (
        <blockquote className="text-gray-700 mb-6 italic">
          "{metadata.testimonial_text}"
        </blockquote>
      )}
      
      {/* Customer Info */}
      <div className="flex items-center">
        {metadata?.customer_photo && (
          <img
            src={`${metadata.customer_photo.imgix_url}?w=80&h=80&fit=crop&auto=format,compress`}
            alt={metadata.customer_name || 'Customer'}
            className="w-12 h-12 rounded-full object-cover mr-4"
          />
        )}
        <div>
          <div className="font-semibold text-gray-900">
            {metadata?.customer_name}
          </div>
          {metadata?.customer_title && metadata?.company && (
            <div className="text-sm text-gray-600">
              {metadata.customer_title} at {metadata.company}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}