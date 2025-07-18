import type { TeamMemberCardProps } from '@/types';

export default function TeamMemberCard({ member, className, ...props }: TeamMemberCardProps & React.HTMLAttributes<HTMLDivElement>) {
  const { metadata } = member;
  
  return (
    <div className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ${className || ''}`} {...props}>
      {/* Photo */}
      {metadata?.photo && (
        <div className="aspect-square overflow-hidden">
          <img
            src={`${metadata.photo.imgix_url}?w=400&h=400&fit=crop&auto=format,compress`}
            alt={metadata.name || member.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      
      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          {metadata?.name || member.title}
        </h3>
        
        {metadata?.position && (
          <p className="text-primary font-medium mb-3">
            {metadata.position}
          </p>
        )}
        
        {metadata?.bio && (
          <p className="text-gray-600 text-sm mb-4">
            {metadata.bio}
          </p>
        )}
        
        {/* Social Links */}
        <div className="flex space-x-3">
          {metadata?.linkedin_url && (
            <a
              href={metadata.linkedin_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-600 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
              </svg>
            </a>
          )}
          
          {metadata?.twitter_url && (
            <a
              href={metadata.twitter_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}