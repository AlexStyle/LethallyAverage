import { type ReactNode } from 'react';
import Badge from '../UI/Badge';

interface ScenarioCardProps {
  title: string;
  platform: string;
  badge?: 'critical' | 'important' | 'advanced' | 'free' | 'warning';
  setup: ReactNode;
  hook: ReactNode;
  tells: string[];
  move: string[];
  receipt?: ReactNode;
}

const SectionLabel = ({ color, children }: { color: string; children: ReactNode }) => (
  <p className={`font-accent text-[10px] uppercase tracking-widest mb-1.5 ${color}`}>
    {children}
  </p>
);

const ScenarioCard = ({ title, platform, badge, setup, hook, tells, move, receipt }: ScenarioCardProps) => {
  return (
    <div className="relative bg-la-gray border border-la-gray/50 rounded-lg p-5">
      {badge && (
        <div className="absolute top-3 right-3">
          <Badge type={badge} />
        </div>
      )}
      <p className="font-accent text-[10px] text-la-muted uppercase tracking-widest mb-1">
        {platform}
      </p>
      <h4 className="font-display text-lg text-la-white mb-4 pr-20">{title}</h4>

      <div className="space-y-4 font-body text-sm text-la-muted leading-relaxed">
        <div>
          <SectionLabel color="text-la-gold">The Setup</SectionLabel>
          <div>{setup}</div>
        </div>

        <div>
          <SectionLabel color="text-la-red">The Hook</SectionLabel>
          <div>{hook}</div>
        </div>

        <div>
          <SectionLabel color="text-la-red">The Tells</SectionLabel>
          <ul className="list-disc list-inside space-y-1">
            {tells.map((tell, i) => (
              <li key={i}>{tell}</li>
            ))}
          </ul>
        </div>

        <div className="p-3 bg-la-black rounded-lg border-l-2 border-green-500">
          <SectionLabel color="text-green-400">The Move</SectionLabel>
          <ol className="space-y-1.5">
            {move.map((step, i) => (
              <li key={i} className="flex gap-2 items-start">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-la-gray flex items-center justify-center font-display text-[10px] text-la-white mt-0.5">
                  {i + 1}
                </span>
                <span className="text-la-white/90">{step}</span>
              </li>
            ))}
          </ol>
        </div>

        {receipt && (
          <div className="p-3 bg-la-black/60 rounded-lg border border-la-gray">
            <SectionLabel color="text-la-muted">Receipts — This Really Happened</SectionLabel>
            <div className="text-xs">{receipt}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ScenarioCard;
