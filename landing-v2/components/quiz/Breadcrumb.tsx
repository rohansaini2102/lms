import React from 'react';
import { ChevronRight, Home } from 'lucide-react';
import { motion } from 'framer-motion';

interface BreadcrumbItem {
  label: string;
  labelHi?: string;
  onClick?: () => void;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  language: 'en' | 'hi';
  onHomeClick: () => void;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, language, onHomeClick }) => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex items-center gap-2 text-sm mb-6 flex-wrap"
    >
      <button
        onClick={onHomeClick}
        className="flex items-center gap-1 text-gray-500 hover:text-primary transition-colors"
      >
        <Home className="w-4 h-4" />
        <span>{language === 'hi' ? 'होम' : 'Home'}</span>
      </button>

      {items.map((item, index) => (
        <React.Fragment key={index}>
          <ChevronRight className="w-4 h-4 text-gray-300" />
          {item.onClick ? (
            <button
              onClick={item.onClick}
              className="text-gray-500 hover:text-primary transition-colors truncate max-w-[150px]"
            >
              {language === 'hi' && item.labelHi ? item.labelHi : item.label}
            </button>
          ) : (
            <span className="text-gray-900 font-medium truncate max-w-[150px]">
              {language === 'hi' && item.labelHi ? item.labelHi : item.label}
            </span>
          )}
        </React.Fragment>
      ))}
    </motion.nav>
  );
};

export default Breadcrumb;
