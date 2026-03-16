import { type ReactNode } from 'react';
import { type LucideIcon } from 'lucide-react';

interface DeviceCardProps {
  icon: LucideIcon;
  title: string;
  risk: string;
  children: ReactNode;
}

const riskColor: Record<string, string> = {
  HIGH: 'text-la-red',
  MEDIUM: 'text-la-gold',
  LOW: 'text-green-500',
};

const DeviceCard = ({ icon: Icon, title, risk, children }: DeviceCardProps) => {
  const color = riskColor[risk.toUpperCase()] || 'text-la-muted';

  return (
    <div className="bg-la-gray border border-la-gray/50 rounded-lg p-5">
      <div className="flex items-center gap-3 mb-3">
        <Icon size={24} className="text-la-muted" />
        <h4 className="font-display text-lg text-la-white flex-1">{title}</h4>
        <span className={`font-accent text-xs uppercase tracking-widest ${color}`}>
          {risk}
        </span>
      </div>
      <div className="font-body text-sm text-la-muted leading-relaxed">{children}</div>
    </div>
  );
};

export default DeviceCard;
