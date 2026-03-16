import { type ReactNode } from 'react';
import Badge from '../UI/Badge';

interface TipCardProps {
  title: string;
  children: ReactNode;
  badge?: 'critical' | 'important' | 'advanced' | 'free' | 'warning';
}

const TipCard = ({ title, children, badge }: TipCardProps) => {
  return (
    <div className="relative bg-la-gray border border-la-gray/50 rounded-lg p-5">
      {badge && (
        <div className="absolute top-3 right-3">
          <Badge type={badge} />
        </div>
      )}
      <h4 className="font-display text-lg text-la-white mb-2">{title}</h4>
      <div className="font-body text-sm text-la-muted leading-relaxed">{children}</div>
    </div>
  );
};

export default TipCard;
