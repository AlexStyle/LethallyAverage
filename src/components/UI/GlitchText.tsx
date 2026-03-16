import { type ElementType, type ReactNode } from 'react';

interface GlitchTextProps {
  children: ReactNode;
  as?: ElementType;
  className?: string;
}

const GlitchText = ({ children, as: Tag = 'h2', className = '' }: GlitchTextProps) => {
  return (
    <Tag className={`font-display glitch-hover ${className}`}>
      {children}
    </Tag>
  );
};

export default GlitchText;
