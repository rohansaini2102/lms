import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Landmark, FileText, Train, Building2, Shield, GraduationCap,
  MapPin, BadgeCheck, ChevronRight, Sparkles
} from 'lucide-react';
import { EXAM_CATEGORIES, ExamCategory, Exam } from '../data/examCategories';

const iconMap: Record<string, React.ElementType> = {
  Landmark,
  FileText,
  Train,
  Building2,
  Shield,
  GraduationCap,
  MapPin,
  BadgeCheck,
};

const ExamCard: React.FC<{ exam: Exam; index: number; categoryLogo: string; onSelect?: () => void }> = ({ exam, index, categoryLogo, onSelect }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ y: -4, boxShadow: '0 12px 24px rgba(0,0,0,0.1)' }}
      onClick={onSelect}
      className="bg-white rounded-xl border border-gray-100 p-4 cursor-pointer transition-all group"
    >
      <div className="flex items-start gap-4">
        {/* Exam Logo - using category logo */}
        <div
          className="w-14 h-14 rounded-xl shrink-0 flex items-center justify-center p-2 bg-gray-50"
          style={{ backgroundColor: `${exam.color}10` }}
        >
          <img
            src={categoryLogo}
            alt={exam.name}
            className="w-full h-full object-contain"
            onError={(e) => {
              // Fallback to text if image fails to load
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              target.parentElement!.innerHTML = `<span class="font-bold text-sm" style="color: ${exam.color}">${exam.name.split(' ').map(w => w[0]).join('').slice(0, 3)}</span>`;
            }}
          />
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-gray-900 group-hover:text-primary transition-colors">
            {exam.name}
          </h3>
          {exam.fullName && (
            <p className="text-xs text-gray-500 truncate mt-0.5">{exam.fullName}</p>
          )}

          <div className="flex items-center gap-3 mt-2">
            <span className="text-xs text-gray-600">
              <span className="font-semibold text-gray-900">{exam.totalTests}</span> Tests
            </span>
            <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-success/10 text-success-dark text-xs font-medium rounded-full">
              <Sparkles className="w-3 h-3" />
              {exam.freeTests} Free
            </span>
          </div>
        </div>

        <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0" />
      </div>
    </motion.div>
  );
};

const CategoryButton: React.FC<{
  category: ExamCategory;
  isActive: boolean;
  onClick: () => void;
}> = ({ category, isActive, onClick }) => {
  const Icon = iconMap[category.icon] || FileText;

  return (
    <motion.button
      whileHover={{ x: 4 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all ${
        isActive
          ? `bg-${category.color}/10 border-l-4 border-${category.color} text-gray-900`
          : 'text-gray-600 hover:bg-gray-50'
      }`}
      style={isActive ? {
        backgroundColor: `${getCategoryBgColor(category.color)}`,
        borderLeftColor: getCategoryColor(category.color)
      } : {}}
    >
      <div
        className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
          isActive ? 'text-white' : 'bg-gray-100 text-gray-500'
        }`}
        style={isActive ? { backgroundColor: getCategoryColor(category.color) } : {}}
      >
        <Icon className="w-5 h-5" />
      </div>
      <div className="flex-1 min-w-0">
        <span className={`font-medium block truncate ${isActive ? 'font-semibold' : ''}`}>
          {category.name}
        </span>
        <span className="text-xs text-gray-400">{category.exams.length} exams</span>
      </div>
      {isActive && (
        <motion.div
          layoutId="activeIndicator"
          className="w-2 h-2 rounded-full"
          style={{ backgroundColor: getCategoryColor(category.color) }}
        />
      )}
    </motion.button>
  );
};

// Mobile Category Chip - compact horizontal scrollable version
const MobileCategoryChip: React.FC<{
  category: ExamCategory;
  isActive: boolean;
  onClick: () => void;
}> = ({ category, isActive, onClick }) => {
  const Icon = iconMap[category.icon] || FileText;

  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`flex items-center gap-2 px-4 py-2.5 rounded-full whitespace-nowrap transition-all shrink-0 ${
        isActive
          ? 'text-white shadow-md'
          : 'bg-white text-gray-600 border border-gray-200'
      }`}
      style={isActive ? { backgroundColor: getCategoryColor(category.color) } : {}}
    >
      <Icon className="w-4 h-4" />
      <span className="font-medium text-sm">{category.name}</span>
      <span className={`text-xs px-1.5 py-0.5 rounded-full ${
        isActive ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-500'
      }`}>
        {category.exams.length}
      </span>
    </motion.button>
  );
};

// Mobile Category Selector - horizontal scrollable container
const MobileCategorySelector: React.FC<{
  categories: ExamCategory[];
  activeCategory: string;
  onSelect: (id: string) => void;
}> = ({ categories, activeCategory, onSelect }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to active category
  useEffect(() => {
    const container = scrollContainerRef.current;
    const activeEl = container?.querySelector(`[data-category-id="${activeCategory}"]`) as HTMLElement;
    if (activeEl && container) {
      const containerRect = container.getBoundingClientRect();
      const activeRect = activeEl.getBoundingClientRect();
      const scrollLeft = activeRect.left - containerRect.left - 16 + container.scrollLeft;
      container.scrollTo({ left: scrollLeft, behavior: 'smooth' });
    }
  }, [activeCategory]);

  return (
    <div className="relative mb-4">
      {/* Fade gradients for scroll indication */}
      <div className="absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-gray-50/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-6 bg-gradient-to-l from-gray-50/80 to-transparent z-10 pointer-events-none" />

      {/* Scrollable container */}
      <div
        ref={scrollContainerRef}
        className="flex gap-2 overflow-x-auto py-2 -mx-4 px-4"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}
      >
        <style>{`.mobile-category-scroll::-webkit-scrollbar { display: none; }`}</style>
        {categories.map((category) => (
          <div key={category.id} data-category-id={category.id}>
            <MobileCategoryChip
              category={category}
              isActive={activeCategory === category.id}
              onClick={() => onSelect(category.id)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const getCategoryColor = (colorClass: string): string => {
  const colors: Record<string, string> = {
    'cat-banking': '#2563EB',
    'cat-ssc': '#DC2626',
    'cat-railways': '#059669',
    'cat-upsc': '#4F46E5',
    'cat-defence': '#7C3AED',
    'cat-teaching': '#F59E0B',
    'cat-psc': '#0891B2',
    'cat-police': '#64748B',
  };
  return colors[colorClass] || '#0085FF';
};

const getCategoryBgColor = (colorClass: string): string => {
  const colors: Record<string, string> = {
    'cat-banking': 'rgba(37, 99, 235, 0.08)',
    'cat-ssc': 'rgba(220, 38, 38, 0.08)',
    'cat-railways': 'rgba(5, 150, 105, 0.08)',
    'cat-upsc': 'rgba(79, 70, 229, 0.08)',
    'cat-defence': 'rgba(124, 58, 237, 0.08)',
    'cat-teaching': 'rgba(245, 158, 11, 0.08)',
    'cat-psc': 'rgba(8, 145, 178, 0.08)',
    'cat-police': 'rgba(100, 116, 139, 0.08)',
  };
  return colors[colorClass] || 'rgba(0, 133, 255, 0.08)';
};

interface ExamBrowserProps {
  onExamSelect?: (examId: string) => void;
}

const ExamBrowser: React.FC<ExamBrowserProps> = ({ onExamSelect }) => {
  const [activeCategory, setActiveCategory] = useState<string>(EXAM_CATEGORIES[0].id);

  const currentCategory = EXAM_CATEGORIES.find(c => c.id === activeCategory) || EXAM_CATEGORIES[0];

  return (
    <section className="py-16 lg:py-24 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Browse by Exam
          </span>
          <h2 className="font-grotesk font-bold text-3xl sm:text-4xl text-gray-900 mb-4">
            Choose Your Exam
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Select from 50+ government exams across Banking, SSC, Railways, UPSC, Defence, and more.
            Each exam comes with comprehensive test series and free practice tests.
          </p>
        </motion.div>

        {/* Browser Layout */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Mobile Category Selector - only visible on mobile/tablet */}
          <div className="lg:hidden">
            <MobileCategorySelector
              categories={EXAM_CATEGORIES}
              activeCategory={activeCategory}
              onSelect={setActiveCategory}
            />
          </div>

          {/* Desktop Sidebar - hidden on mobile */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="hidden lg:block lg:w-72 shrink-0"
          >
            <div className="bg-white rounded-2xl border border-gray-100 p-3 shadow-sm sticky top-24">
              <div className="space-y-1">
                {EXAM_CATEGORIES.map((category) => (
                  <CategoryButton
                    key={category.id}
                    category={category}
                    isActive={activeCategory === category.id}
                    onClick={() => setActiveCategory(category.id)}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Exam Grid */}
          <div className="flex-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                {/* Mobile Category Header - compact */}
                <div className="flex lg:hidden items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center p-1.5"
                      style={{ backgroundColor: `${getCategoryColor(currentCategory.color)}15` }}
                    >
                      <img
                        src={currentCategory.logo}
                        alt={currentCategory.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-base text-gray-900">{currentCategory.name}</h3>
                      <p className="text-xs text-gray-500">{currentCategory.exams.length} exams</p>
                    </div>
                  </div>
                  <motion.button
                    whileTap={{ scale: 0.98 }}
                    className="text-primary font-medium text-sm flex items-center gap-1"
                  >
                    View All
                    <ChevronRight className="w-4 h-4" />
                  </motion.button>
                </div>

                {/* Desktop Category Header */}
                <div className="hidden lg:flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center p-2"
                      style={{ backgroundColor: `${getCategoryColor(currentCategory.color)}15` }}
                    >
                      <img
                        src={currentCategory.logo}
                        alt={currentCategory.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-xl text-gray-900">{currentCategory.name}</h3>
                      <p className="text-sm text-gray-500">{currentCategory.exams.length} exams available</p>
                    </div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="text-primary font-medium text-sm hover:underline flex items-center gap-1"
                  >
                    View All
                    <ChevronRight className="w-4 h-4" />
                  </motion.button>
                </div>

                {/* Exams Grid */}
                <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
                  {currentCategory.exams.map((exam, index) => (
                    <ExamCard
                      key={exam.id}
                      exam={exam}
                      index={index}
                      categoryLogo={currentCategory.logo}
                      onSelect={() => onExamSelect?.(exam.id)}
                    />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExamBrowser;
