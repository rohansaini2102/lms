import React from 'react';
import { motion } from 'framer-motion';
import { Play, FolderOpen, ChevronRight } from 'lucide-react';
import { Subject, Topic } from '../../../src/data/types';
import { countSubjectQuestions, countTopicQuestions } from '../../../src/data';

interface SubjectSelectorProps {
  subject: Subject;
  language: 'en' | 'hi';
  onTopicSelect: (topic: Topic) => void;
  onStartSubjectQuiz: () => void;
}

const SubjectSelector: React.FC<SubjectSelectorProps> = ({
  subject,
  language,
  onTopicSelect,
  onStartSubjectQuiz
}) => {
  const totalQuestions = countSubjectQuestions(subject);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-4xl mx-auto"
    >
      {/* Subject Header */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div
              className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0"
              style={{ backgroundColor: `${subject.color}15` }}
            >
              <FolderOpen className="w-7 h-7" style={{ color: subject.color }} />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900 font-grotesk">
                {language === 'hi' && subject.nameHi ? subject.nameHi : subject.name}
              </h1>
              <p className="text-gray-500 mt-1">
                {subject.topics.length} {language === 'hi' ? 'अध्याय' : 'Topics'} • {totalQuestions} {language === 'hi' ? 'प्रश्न' : 'Questions'}
              </p>
            </div>
          </div>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onStartSubjectQuiz}
            className="flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-semibold shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all"
          >
            <Play className="w-5 h-5" fill="white" />
            {language === 'hi' ? 'विषय क्विज़ शुरू करें' : 'Start Subject Quiz'}
          </motion.button>
        </div>
      </div>

      {/* Topics List */}
      <div className="mb-4">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          {language === 'hi' ? 'अध्याय चुनें' : 'Select Topic'}
        </h2>
      </div>

      <div className="space-y-3">
        {subject.topics.map((topic, index) => {
          const questionCount = countTopicQuestions(topic);
          const chapterCount = topic.chapters.length;

          return (
            <motion.div
              key={topic.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ x: 4, boxShadow: '0 8px 20px rgba(0,0,0,0.08)' }}
              onClick={() => onTopicSelect(topic)}
              className="bg-white rounded-xl border border-gray-100 p-4 cursor-pointer transition-all group"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                    <span className="font-bold">{index + 1}</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 group-hover:text-primary transition-colors">
                      {language === 'hi' && topic.nameHi ? topic.nameHi : topic.name}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {chapterCount} {language === 'hi' ? 'पाठ' : 'Chapters'} • {questionCount} {language === 'hi' ? 'प्रश्न' : 'Questions'}
                    </p>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default SubjectSelector;
