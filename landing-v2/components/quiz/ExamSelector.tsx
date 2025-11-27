import React from 'react';
import { motion } from 'framer-motion';
import { Play, BookOpen, ChevronRight } from 'lucide-react';
import { ExamData, Subject } from '../../../src/data/types';
import { countExamQuestions, countSubjectQuestions } from '../../../src/data';

interface ExamSelectorProps {
  exam: ExamData;
  language: 'en' | 'hi';
  onSubjectSelect: (subject: Subject) => void;
  onStartExamQuiz: () => void;
}

const ExamSelector: React.FC<ExamSelectorProps> = ({
  exam,
  language,
  onSubjectSelect,
  onStartExamQuiz
}) => {
  const totalQuestions = countExamQuestions(exam);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-4xl mx-auto"
    >
      {/* Exam Header */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 font-grotesk">
              {language === 'hi' && exam.fullNameHi ? exam.fullNameHi : exam.fullName}
            </h1>
            <p className="text-gray-500 mt-1">
              {exam.subjects.length} {language === 'hi' ? 'विषय' : 'Subjects'} • {totalQuestions} {language === 'hi' ? 'प्रश्न' : 'Questions'}
            </p>
          </div>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onStartExamQuiz}
            className="flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-semibold shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all"
          >
            <Play className="w-5 h-5" fill="white" />
            {language === 'hi' ? 'पूरी परीक्षा शुरू करें' : 'Start Full Exam Quiz'}
          </motion.button>
        </div>
      </div>

      {/* Subjects Grid */}
      <div className="mb-4">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          {language === 'hi' ? 'विषय चुनें' : 'Select Subject'}
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {exam.subjects.map((subject, index) => {
          const questionCount = countSubjectQuestions(subject);
          const topicCount = subject.topics.length;

          return (
            <motion.div
              key={subject.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -4, boxShadow: '0 12px 24px rgba(0,0,0,0.1)' }}
              onClick={() => onSubjectSelect(subject)}
              className="bg-white rounded-2xl border border-gray-100 p-5 cursor-pointer transition-all group"
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                  style={{ backgroundColor: `${subject.color}15` }}
                >
                  <BookOpen className="w-6 h-6" style={{ color: subject.color }} />
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-gray-900 group-hover:text-primary transition-colors">
                    {language === 'hi' && subject.nameHi ? subject.nameHi : subject.name}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    {topicCount} {language === 'hi' ? 'अध्याय' : 'Topics'} • {questionCount} {language === 'hi' ? 'प्रश्न' : 'Questions'}
                  </p>
                </div>

                <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0" />
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default ExamSelector;
