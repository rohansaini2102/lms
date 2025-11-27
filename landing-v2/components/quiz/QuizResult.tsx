import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Target, Flame, Clock, Home, RotateCcw, ChevronRight, Star } from 'lucide-react';
import { UserStats } from '../../../src/data/types';

interface QuizResultProps {
  stats: UserStats;
  language: 'en' | 'hi';
  examName: string;
  examNameHi?: string;
  onRetry: () => void;
  onHome: () => void;
  onNextChapter?: () => void;
}

const QuizResult: React.FC<QuizResultProps> = ({
  stats,
  language,
  examName,
  examNameHi,
  onRetry,
  onHome,
  onNextChapter
}) => {
  const percentage = stats.totalQuestions > 0
    ? Math.round((stats.correctAnswers / stats.totalQuestions) * 100)
    : 0;

  // Determine grade and message
  const getGradeInfo = () => {
    if (percentage >= 90) {
      return {
        grade: 'S',
        color: 'text-yellow-500',
        bgColor: 'bg-yellow-50',
        borderColor: 'border-yellow-200',
        message: language === 'hi' ? 'उत्कृष्ट! रैंक 1 सामग्री।' : 'Outstanding! Rank 1 Material.',
        emoji: '🏆'
      };
    } else if (percentage >= 75) {
      return {
        grade: 'A',
        color: 'text-green-500',
        bgColor: 'bg-green-50',
        borderColor: 'border-green-200',
        message: language === 'hi' ? 'शानदार! अभ्यास जारी रखें।' : 'Great job! Keep practicing.',
        emoji: '🎯'
      };
    } else if (percentage >= 50) {
      return {
        grade: 'B',
        color: 'text-blue-500',
        bgColor: 'bg-blue-50',
        borderColor: 'border-blue-200',
        message: language === 'hi' ? 'अच्छा प्रयास! सुधार की गुंजाइश है।' : 'Good effort! Room for improvement.',
        emoji: '📚'
      };
    } else {
      return {
        grade: 'C',
        color: 'text-orange-500',
        bgColor: 'bg-orange-50',
        borderColor: 'border-orange-200',
        message: language === 'hi' ? 'और अभ्यास की जरूरत है।' : 'Needs more practice.',
        emoji: '💪'
      };
    }
  };

  const gradeInfo = getGradeInfo();

  // Format time
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}m ${secs}s`;
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="max-w-2xl mx-auto px-2 sm:px-0"
    >
      <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl overflow-hidden border border-gray-100">
        {/* Header */}
        <div className="bg-gradient-to-br from-primary to-blue-600 p-5 sm:p-8 text-white text-center relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-4 left-4 w-16 sm:w-20 h-16 sm:h-20 border-4 border-white rounded-full"></div>
            <div className="absolute bottom-4 right-4 w-24 sm:w-32 h-24 sm:h-32 border-4 border-white rounded-full"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 sm:w-40 h-32 sm:h-40 border-4 border-white rounded-full"></div>
          </div>

          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', delay: 0.2 }}
            className="relative"
          >
            <div className="text-5xl sm:text-6xl mb-3 sm:mb-4">{gradeInfo.emoji}</div>
            <h1 className="text-2xl sm:text-3xl font-bold font-grotesk mb-2">
              {language === 'hi' ? 'क्विज़ पूर्ण!' : 'Quiz Complete!'}
            </h1>
            <p className="text-white/80 text-sm sm:text-base line-clamp-1">
              {language === 'hi' && examNameHi ? examNameHi : examName}
            </p>
          </motion.div>
        </div>

        {/* Grade Badge */}
        <div className="flex justify-center -mt-8 relative z-10">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className={`w-16 h-16 rounded-2xl ${gradeInfo.bgColor} border-4 ${gradeInfo.borderColor} flex items-center justify-center shadow-lg`}
          >
            <span className={`text-3xl font-bold ${gradeInfo.color}`}>{gradeInfo.grade}</span>
          </motion.div>
        </div>

        {/* Message */}
        <div className="text-center pt-4 pb-2 px-6">
          <p className="text-gray-600 font-medium">{gradeInfo.message}</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4 p-4 sm:p-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-yellow-50 rounded-lg sm:rounded-xl p-3 sm:p-4 text-center border border-yellow-100"
          >
            <div className="flex justify-center mb-1 sm:mb-2">
              <Trophy className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-500" />
            </div>
            <p className="text-xl sm:text-2xl font-bold text-gray-900 font-grotesk">{stats.score}</p>
            <p className="text-[10px] sm:text-xs text-gray-500 font-medium uppercase">
              {language === 'hi' ? 'स्कोर' : 'Score'}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-blue-50 rounded-lg sm:rounded-xl p-3 sm:p-4 text-center border border-blue-100"
          >
            <div className="flex justify-center mb-1 sm:mb-2">
              <Target className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500" />
            </div>
            <p className="text-xl sm:text-2xl font-bold text-gray-900 font-grotesk">{percentage}%</p>
            <p className="text-[10px] sm:text-xs text-gray-500 font-medium uppercase">
              {language === 'hi' ? 'सटीकता' : 'Accuracy'}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-orange-50 rounded-lg sm:rounded-xl p-3 sm:p-4 text-center border border-orange-100"
          >
            <div className="flex justify-center mb-1 sm:mb-2">
              <Flame className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500" />
            </div>
            <p className="text-xl sm:text-2xl font-bold text-gray-900 font-grotesk">{stats.maxStreak}</p>
            <p className="text-[10px] sm:text-xs text-gray-500 font-medium uppercase">
              {language === 'hi' ? 'स्ट्रीक' : 'Streak'}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="bg-green-50 rounded-lg sm:rounded-xl p-3 sm:p-4 text-center border border-green-100"
          >
            <div className="flex justify-center mb-1 sm:mb-2">
              <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-green-500" />
            </div>
            <p className="text-xl sm:text-2xl font-bold text-gray-900 font-grotesk">{formatTime(stats.timeTaken)}</p>
            <p className="text-[10px] sm:text-xs text-gray-500 font-medium uppercase">
              {language === 'hi' ? 'समय' : 'Time'}
            </p>
          </motion.div>
        </div>

        {/* Detailed Stats */}
        <div className="px-4 sm:px-6 pb-4 sm:pb-6">
          <div className="bg-gray-50 rounded-lg sm:rounded-xl p-3 sm:p-4">
            <div className="flex items-center justify-between mb-2 sm:mb-3">
              <span className="text-xs sm:text-sm text-gray-600">
                {language === 'hi' ? 'सही उत्तर' : 'Correct Answers'}
              </span>
              <span className="font-semibold text-green-600 text-sm sm:text-base">
                {stats.correctAnswers}/{stats.totalQuestions}
              </span>
            </div>
            <div className="h-2 sm:h-3 bg-gray-200 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${percentage}%` }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="h-full bg-gradient-to-r from-green-400 to-green-500 rounded-full"
              />
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="p-4 sm:p-6 pt-0 flex flex-col sm:flex-row gap-2 sm:gap-3">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onHome}
            className="flex-1 flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg sm:rounded-xl bg-gray-100 text-gray-700 font-semibold hover:bg-gray-200 transition-colors text-sm sm:text-base"
          >
            <Home size={18} className="sm:w-5 sm:h-5" />
            {language === 'hi' ? 'होम' : 'Home'}
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onRetry}
            className="flex-1 flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg sm:rounded-xl bg-primary text-white font-semibold shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all text-sm sm:text-base"
          >
            <RotateCcw size={18} className="sm:w-5 sm:h-5" />
            {language === 'hi' ? 'पुनः प्रयास' : 'Retry'}
          </motion.button>
        </div>

        {/* Next Chapter */}
        {onNextChapter && (
          <div className="px-6 pb-6">
            <motion.button
              whileHover={{ x: 4 }}
              onClick={onNextChapter}
              className="w-full flex items-center justify-center gap-2 text-primary font-semibold hover:underline"
            >
              {language === 'hi' ? 'अगला पाठ' : 'Next Chapter'}
              <ChevronRight size={20} />
            </motion.button>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default QuizResult;
