import { type ReactNode } from 'react';
import { motion } from 'framer-motion';

interface PageWrapperProps {
  children: ReactNode;
}

const PageWrapper = ({ children }: PageWrapperProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 12 }}
      transition={{ duration: 0.35, ease: 'easeOut' as const }}
      className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16"
    >
      {children}
    </motion.div>
  );
};

export default PageWrapper;
