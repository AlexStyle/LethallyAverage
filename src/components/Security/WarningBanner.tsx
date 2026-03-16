import { type ReactNode } from 'react';
import { AlertTriangle } from 'lucide-react';

interface WarningBannerProps {
  children: ReactNode;
}

const WarningBanner = ({ children }: WarningBannerProps) => {
  return (
    <div className="flex items-start gap-3 border-l-4 border-la-red bg-red-950/30 rounded-r-lg px-4 py-3 my-4">
      <AlertTriangle size={20} className="text-la-red shrink-0 mt-0.5" />
      <div className="font-body text-sm text-la-white/90 leading-relaxed">{children}</div>
    </div>
  );
};

export default WarningBanner;
