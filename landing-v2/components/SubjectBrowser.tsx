import React from 'react';
import { motion } from 'framer-motion';
import {
  BookOpen, Calculator, Brain, Globe, Newspaper, Monitor,
  ChevronRight, ArrowRight, ChevronDown
} from 'lucide-react';
import { SUBJECTS } from '../data/examCategories';

const iconMap: Record<string, React.ElementType> = {
  BookOpen,
  Calculator,
  Brain,
  Globe,
  Newspaper,
  Monitor,
};

const SubjectCard: React.FC<{
  subject: typeof SUBJECTS[0];
  index: number;
  onSelect?: () => void;
}> = ({ subject, index, onSelect }) => {
  const Icon = iconMap[subject.icon] || BookOpen;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
      onClick={onSelect}
      className="bg-white rounded-2xl border border-gray-100 p-6 cursor-pointer transition-all group relative overflow-hidden"
    >
      {/* Background gradient on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity"
        style={{ backgroundColor: subject.color }}
      />

      {/* Icon */}
      <div
        className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
        style={{ backgroundColor: `${subject.color}15` }}
      >
        <Icon className="w-7 h-7" style={{ color: subject.color }} />
      </div>

      {/* Title */}
      <h3 className="font-semibold text-lg text-gray-900 mb-2 group-hover:text-primary transition-colors">
        {subject.name}
      </h3>

      {/* Topics */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {subject.topics.slice(0, 4).map((topic) => (
          <span
            key={topic}
            className="px-2 py-1 bg-gray-50 text-gray-600 text-xs rounded-md"
          >
            {topic}
          </span>
        ))}
        {subject.topics.length > 4 && (
          <span className="px-2 py-1 text-gray-400 text-xs">
            +{subject.topics.length - 4} more
          </span>
        )}
      </div>

      {/* CTA */}
      <div className="flex items-center text-sm font-medium group-hover:text-primary transition-colors" style={{ color: subject.color }}>
        Practice Now
        <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
      </div>
    </motion.div>
  );
};

const ExamHierarchy: React.FC = () => {
  const steps = [
    { name: 'Exam', example: 'SBI PO', color: '#2563EB' },
    { name: 'Subject', example: 'Quantitative Aptitude', color: '#DC2626' },
    { name: 'Topic', example: 'Arithmetic', color: '#059669' },
    { name: 'Chapter', example: 'Percentage', color: '#7C3AED' },
    { name: 'Quiz', example: '20 Questions', color: '#F59E0B' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 sm:p-8 lg:p-10 text-white mt-12"
    >
      <div className="text-center mb-6 lg:mb-8">
        <h3 className="font-grotesk font-bold text-xl sm:text-2xl mb-2">Structured Learning Path</h3>
        <p className="text-gray-400 text-sm sm:text-base">Master any exam with our systematic approach</p>
      </div>

      {/* Desktop Layout - Horizontal with arrows */}
      <div className="hidden lg:flex items-center justify-center gap-2">
        {steps.map((step, index) => (
          <React.Fragment key={step.name}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center min-w-[120px]"
            >
              <div
                className="w-10 h-10 rounded-lg mx-auto mb-2 flex items-center justify-center text-white font-bold text-sm"
                style={{ backgroundColor: step.color }}
              >
                {index + 1}
              </div>
              <p className="font-semibold text-sm">{step.name}</p>
              <p className="text-xs text-gray-400 mt-1">{step.example}</p>
            </motion.div>
            {index < steps.length - 1 && (
              <ArrowRight className="w-5 h-5 text-gray-500" />
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Mobile Layout - Vertical stepper with connecting line */}
      <div className="lg:hidden relative">
        {/* Central connecting line */}
        <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-gradient-to-b from-gray-600 via-gray-500 to-gray-600" />

        <div className="space-y-3">
          {steps.map((step, index) => (
            <motion.div
              key={step.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-4 relative"
            >
              {/* Step number bubble - positioned on the line */}
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg shrink-0 z-10 shadow-lg"
                style={{ backgroundColor: step.color }}
              >
                {index + 1}
              </div>

              {/* Step content card */}
              <div className="flex-1 bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-sm sm:text-base">{step.name}</p>
                    <p className="text-xs text-gray-400 mt-0.5">{step.example}</p>
                  </div>
                  {index < steps.length - 1 && (
                    <ChevronDown className="w-4 h-4 text-gray-500" />
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

interface SubjectBrowserProps {
  onStartQuiz?: () => void;
}

const SubjectBrowser: React.FC<SubjectBrowserProps> = ({ onStartQuiz }) => {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 bg-cat-railways/10 text-cat-railways rounded-full text-sm font-medium mb-4">
            Browse by Subject
          </span>
          <h2 className="font-grotesk font-bold text-3xl sm:text-4xl text-gray-900 mb-4">
            Practice Subject-wise
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Strengthen your weak areas with topic-wise practice. Each subject is broken down
            into topics and chapters for focused preparation.
          </p>
        </motion.div>

        {/* Subject Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SUBJECTS.map((subject, index) => (
            <SubjectCard key={subject.id} subject={subject} index={index} onSelect={onStartQuiz} />
          ))}
        </div>

        {/* Exam Hierarchy */}
        <ExamHierarchy />
      </div>
    </section>
  );
};

export default SubjectBrowser;
