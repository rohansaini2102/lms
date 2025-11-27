import React from 'react';
import { motion } from 'framer-motion';
import { Play, BookMarked, ChevronRight } from 'lucide-react';
import { Topic, Chapter } from '../../../src/data/types';
import { countTopicQuestions } from '../../../src/data';

interface TopicSelectorProps {
  topic: Topic;
  language: 'en' | 'hi';
  onChapterSelect: (chapter: Chapter) => void;
  onStartTopicQuiz: () => void;
}

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case 'easy':
      return { bg: 'bg-green-100', text: 'text-green-700', label: 'Easy', labelHi: 'आसान' };
    case 'medium':
      return { bg: 'bg-yellow-100', text: 'text-yellow-700', label: 'Medium', labelHi: 'मध्यम' };
    case 'hard':
      return { bg: 'bg-red-100', text: 'text-red-700', label: 'Hard', labelHi: 'कठिन' };
    default:
      return { bg: 'bg-gray-100', text: 'text-gray-700', label: 'Mixed', labelHi: 'मिश्रित' };
  }
};

const TopicSelector: React.FC<TopicSelectorProps> = ({
  topic,
  language,
  onChapterSelect,
  onStartTopicQuiz
}) => {
  const totalQuestions = countTopicQuestions(topic);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-4xl mx-auto"
    >
      {/* Topic Header */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
              <BookMarked className="w-7 h-7 text-primary" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900 font-grotesk">
                {language === 'hi' && topic.nameHi ? topic.nameHi : topic.name}
              </h1>
              <p className="text-gray-500 mt-1">
                {topic.chapters.length} {language === 'hi' ? 'पाठ' : 'Chapters'} • {totalQuestions} {language === 'hi' ? 'प्रश्न' : 'Questions'}
              </p>
            </div>
          </div>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onStartTopicQuiz}
            className="flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-semibold shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all"
          >
            <Play className="w-5 h-5" fill="white" />
            {language === 'hi' ? 'अध्याय क्विज़ शुरू करें' : 'Start Topic Quiz'}
          </motion.button>
        </div>
      </div>

      {/* Chapters List */}
      <div className="mb-4">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          {language === 'hi' ? 'पाठ चुनें' : 'Select Chapter'}
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {topic.chapters.map((chapter, index) => {
          const difficultyInfo = getDifficultyColor(chapter.difficulty);

          return (
            <motion.div
              key={chapter.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -4, boxShadow: '0 12px 24px rgba(0,0,0,0.1)' }}
              onClick={() => onChapterSelect(chapter)}
              className="bg-white rounded-xl border border-gray-100 p-5 cursor-pointer transition-all group"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-primary/10 group-hover:text-primary transition-colors font-bold">
                  {index + 1}
                </div>
                <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${difficultyInfo.bg} ${difficultyInfo.text}`}>
                  {language === 'hi' ? difficultyInfo.labelHi : difficultyInfo.label}
                </span>
              </div>

              <h3 className="font-semibold text-gray-900 group-hover:text-primary transition-colors mb-2">
                {language === 'hi' && chapter.nameHi ? chapter.nameHi : chapter.name}
              </h3>

              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-500">
                  {chapter.questions.length} {language === 'hi' ? 'प्रश्न' : 'Questions'}
                </p>
                <div className="flex items-center gap-1 text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-sm font-medium">{language === 'hi' ? 'क्विज़ शुरू करें' : 'Start Quiz'}</span>
                  <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default TopicSelector;
