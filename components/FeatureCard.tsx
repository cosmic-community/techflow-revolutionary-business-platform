import type { FeatureCardProps } from '@/types';

export default function FeatureCard({ feature, className, ...props }: FeatureCardProps & React.HTMLAttributes<HTMLDivElement>) {
  const { metadata } = feature;
  
  return (
    <div className={`bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 ${className || ''}`} {...props}>
      {/* Icon */}
      {metadata?.icon && (
        <div className="text-4xl mb-4">
          {metadata.icon}
        </div>
      )}
      
      {/* Feature Image */}
      {metadata?.feature_image && (
        <div className="mb-6">
          <img
            src={`${metadata.feature_image.imgix_url}?w=400&h=200&fit=crop&auto=format,compress`}
            alt={metadata.feature_name || feature.title}
            className="w-full h-48 object-cover rounded-lg"
          />
        </div>
      )}
      
      {/* Content */}
      <h3 className="text-xl font-semibold text-gray-900 mb-3">
        {metadata?.feature_name || feature.title}
      </h3>
      
      {metadata?.description && (
        <p className="text-gray-600 leading-relaxed">
          {metadata.description}
        </p>
      )}
    </div>
  );
}