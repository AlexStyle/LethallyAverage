interface BadgeProps {
  type: 'critical' | 'important' | 'advanced' | 'free' | 'warning';
}

const badgeStyles: Record<BadgeProps['type'], string> = {
  critical: 'bg-la-red text-white',
  important: 'bg-la-gold text-la-black',
  advanced: 'bg-blue-600 text-white',
  free: 'bg-green-600 text-white',
  warning: 'bg-orange-500 text-white',
};

const Badge = ({ type }: BadgeProps) => {
  return (
    <span
      className={`inline-block px-2 py-0.5 rounded-full text-[10px] font-accent uppercase tracking-widest ${badgeStyles[type]}`}
    >
      {type}
    </span>
  );
};

export default Badge;
