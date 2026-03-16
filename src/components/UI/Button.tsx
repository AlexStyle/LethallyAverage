import { type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface ButtonProps {
  variant?: 'primary' | 'ghost';
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
}

const Button = ({ variant = 'primary', children, className = '', onClick, href }: ButtonProps) => {
  const base = 'inline-flex items-center justify-center px-6 py-3 rounded font-body text-sm uppercase tracking-wider transition-colors duration-200';

  const variants = {
    primary: 'bg-la-red text-la-white hover:bg-red-700',
    ghost: 'border border-la-muted text-la-white hover:border-la-red',
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
        <Link to={href} className={classes} onClick={onClick}>
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      className={classes}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
};

export default Button;
