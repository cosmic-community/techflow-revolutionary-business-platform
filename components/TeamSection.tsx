import type { TeamMember } from '@/types';
import TeamMemberCard from '@/components/TeamMemberCard';

interface TeamSectionProps {
  teamMembers: TeamMember[];
  title: string;
}

export default function TeamSection({ teamMembers, title }: TeamSectionProps) {
  if (!teamMembers || teamMembers.length === 0) {
    return null;
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMemberCard 
              key={member.id} 
              member={member}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}