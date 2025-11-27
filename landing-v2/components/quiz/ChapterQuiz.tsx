import React from 'react';
import { motion } from 'framer-motion';
import { Play, FileText, Clock, Target, Zap } from 'lucide-react';
import { Chapter } from '../../../src/data/types';

interface ChapterQuizProps {
  chapter: Chapter;
  language: 'en' | 'hi';
  onStartQuiz: () => void;
}

const getDifficultyInfo = (difficulty: string) => {
  switch (difficulty) {
    case 'easy':
      return { bg: 'bg-green-100', text: 'text-green-700', label: 'Easy', labelHi: 'आसान', color: '#10B981' };
    case 'medium':
      return { bg: 'bg-yellow-100', text: 'text-yellow-700', label: 'Medium', labelHi: 'मध्यम', color: '#F59E0B' };
    case 'hard':
      return { bg: 'bg-red-100', text: 'text-red-700', label: 'Hard', labelHi: 'कठिन', color: '#EF4444' };
    default:
      return { bg: 'bg-gray-100', text: 'text-gray-700', label: 'Mixed', labelHi: 'मिश्रित', color: '#6B7280' };
  }
};

const ChapterQuiz: React.FC<ChapterQuizProps> = ({
  chapter,
  language,
  onStartQuiz
}) => {
  const difficultyInfo = getDifficultyInfo(chapter.difficulty);
  const questionCount = Math.min(chapter.questions.length, 20);
  const estimatedTime = questionCount * 0.5; // 30 seconds per question

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-2xl mx-auto"
    >
      {/* Quiz Card */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-br from-primary to-blue-600 p-8 text-white">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
              <FileText className="w-6 h-6" />
            </div>
            <span className={`px-3 py-1 rounded-full text-xs font-medium bg-white/20`}>
              {language === 'hi' ? difficultyInfo.labelHi : difficultyInfo.label}
            </span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold font-grotesk mb-2">
            {language === 'hi' && chapter.nameHi ? chapter.nameHi : chapter.name}
          </h1>
          <p className="text-white/80">
            {language === 'hi' ? 'इस पाठ की क्विज़ शुरू करें' : 'Start this chapter quiz'}
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 p-6 bg-gray-50 border-b border-gray-100">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 text-gray-400 mb-1">
              <Target className="w-4 h-4" />
            </div>
            <p className="text-2xl font-bold text-gray-900">{questionCount}</p>
            <p className="text-xs text-gray-500">{language === 'hi' ? 'प्रश्न' : 'Questions'}</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 text-gray-400 mb-1">
              <Clock className="w-4 h-4" />
            </div>
            <p className="text-2xl font-bold text-gray-900">{Math.ceil(estimatedTime)}</p>
            <p className="text-xs text-gray-500">{language === 'hi' ? 'मिनट' : 'Minutes'}</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 text-gray-400 mb-1">
              <Zap className="w-4 h-4" />
            </div>
            <p className="text-2xl font-bold text-gray-900">30s</p>
            <p className="text-xs text-gray-500">{language === 'hi' ? 'प्रति प्रश्न' : 'Per Question'}</p>
          </div>
        </div>

        {/* Features */}
        <div className="p-6">
          <h3 className="font-semibold text-gray-900 mb-4">
            {language === 'hi' ? 'क्विज़ विशेषताएं' : 'Quiz Features'}
          </h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-3 text-gray-600">
              <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              {language === 'hi' ? 'तत्काल प्रतिक्रिया और स्पष्टीकरण' : 'Instant feedback with explanations'}
            </li>
            <li className="flex items-center gap-3 text-gray-600">
              <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              {language === 'hi' ? 'स्ट्रीक बोनस के साथ गेमिफाइड स्कोरिंग' : 'Gamified scoring with streak bonus'}
            </li>
            <li className="flex items-center gap-3 text-gray-600">
              <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              {language === 'hi' ? 'द्विभाषी समर्थन (हिंदी/अंग्रेजी)' : 'Bilingual support (Hindi/English)'}
            </li>
            <li className="flex items-center gap-3 text-gray-600">
              <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              {language === 'hi' ? 'विस्तृत परिणाम विश्लेषण' : 'Detailed result analysis'}
            </li>
          </ul>
        </div>

        {/* CTA */}
        <div className="p-6 pt-0">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onStartQuiz}
            className="w-full flex items-center justify-center gap-3 bg-primary text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all"
          >
            <Play className="w-6 h-6" fill="white" />
            {language === 'hi' ? 'क्विज़ शुरू करें' : 'Start Quiz'}
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default ChapterQuiz;
