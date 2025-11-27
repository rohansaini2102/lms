import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, CheckCircle, XCircle, Flame, AlertCircle, ArrowRight, Languages } from 'lucide-react';
import { Question, UserStats } from '../../../src/data/types';

interface QuizGameProps {
  questions: Question[];
  language: 'en' | 'hi';
  onLanguageChange: (lang: 'en' | 'hi') => void;
  onFinish: (stats: UserStats) => void;
  onExit: () => void;
}

const QUESTION_TIMER_SECONDS = 30;

const QuizGame: React.FC<QuizGameProps> = ({
  questions,
  language,
  onLanguageChange,
  onFinish,
  onExit
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [timer, setTimer] = useState(QUESTION_TIMER_SECONDS);
  const [stats, setStats] = useState<UserStats>({
    score: 0,
    totalQuestions: questions.length,
    correctAnswers: 0,
    streak: 0,
    maxStreak: 0,
    timeTaken: 0,
  });

  const handleTimeUp = useCallback(() => {
    setIsAnswered(true);
    setSelectedOption(-1);
    setStats(prev => ({ ...prev, streak: 0 }));
  }, []);

  // Timer Logic
  useEffect(() => {
    if (isAnswered) return;

    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          return 0;
        }
        return prev - 1;
      });
      setStats(prev => ({ ...prev, timeTaken: prev.timeTaken + 1 }));
    }, 1000);

    return () => clearInterval(interval);
  }, [isAnswered]);

  // Handle timer reaching 0
  useEffect(() => {
    if (timer === 0 && !isAnswered) {
      handleTimeUp();
    }
  }, [timer, isAnswered, handleTimeUp]);

  const handleOptionSelect = (index: number) => {
    if (isAnswered) return;

    setSelectedOption(index);
    setIsAnswered(true);

    const currentQuestion = questions[currentIndex];
    const isCorrect = index === currentQuestion.correctAnswer;

    setStats((prev) => {
      const newStreak = isCorrect ? prev.streak + 1 : 0;
      return {
        ...prev,
        score: isCorrect ? prev.score + (10 + prev.streak * 2) : prev.score,
        correctAnswers: isCorrect ? prev.correctAnswers + 1 : prev.correctAnswers,
        streak: newStreak,
        maxStreak: Math.max(prev.maxStreak, newStreak),
      };
    });
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
      setTimer(QUESTION_TIMER_SECONDS);
    } else {
      onFinish(stats);
    }
  };

  const currentQuestion = questions[currentIndex];
  const progress = ((currentIndex) / questions.length) * 100;

  // Get text based on language
  const getQuestionText = () => {
    return language === 'hi' && currentQuestion.textHi ? currentQuestion.textHi : currentQuestion.text;
  };

  const getOptions = () => {
    return language === 'hi' && currentQuestion.optionsHi ? currentQuestion.optionsHi : currentQuestion.options;
  };

  const getExplanation = () => {
    return language === 'hi' && currentQuestion.explanationHi ? currentQuestion.explanationHi : currentQuestion.explanation;
  };

  return (
    <div className="max-w-3xl mx-auto px-2 sm:px-0">
      {/* HUD */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between mb-4 sm:mb-6 bg-white p-3 sm:p-4 rounded-xl sm:rounded-2xl shadow-sm border border-gray-100"
      >
        <div className="flex items-center gap-2 sm:gap-4">
          <div className="flex flex-col">
            <span className="text-[10px] sm:text-xs font-bold text-gray-400 uppercase tracking-wider">
              {language === 'hi' ? 'प्रश्न' : 'Q'}
            </span>
            <span className="text-lg sm:text-xl font-bold text-gray-800">
              {currentIndex + 1}
              <span className="text-gray-400 text-sm sm:text-base font-normal">/{questions.length}</span>
            </span>
          </div>
          <div className="h-6 sm:h-8 w-[1px] bg-gray-200"></div>
          <div className="flex items-center gap-1 sm:gap-2 text-orange-500">
            <Flame size={18} className="sm:w-5 sm:h-5" fill={stats.streak > 1 ? "currentColor" : "none"} />
            <span className="font-bold text-sm sm:text-base">{stats.streak}</span>
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          {/* Language Toggle */}
          <button
            onClick={() => onLanguageChange(language === 'en' ? 'hi' : 'en')}
            className="flex items-center gap-1 px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors text-xs sm:text-sm font-medium text-gray-600"
          >
            <Languages size={14} className="sm:w-4 sm:h-4" />
            <span className="hidden xs:inline">{language === 'hi' ? 'EN' : 'हिं'}</span>
          </button>

          {/* Timer */}
          <div className={`flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-1.5 sm:py-2 rounded-lg sm:rounded-xl ${timer < 10 ? 'bg-red-50' : 'bg-gray-50'}`}>
            <Clock size={16} className={`sm:w-[18px] sm:h-[18px] ${timer < 10 ? "text-red-500 animate-pulse" : "text-gray-400"}`} />
            <span className={`font-mono font-bold text-base sm:text-lg ${timer < 10 ? "text-red-500" : "text-gray-700"}`}>
              {timer.toString().padStart(2, '0')}
            </span>
          </div>
        </div>
      </motion.div>

      {/* Progress Bar */}
      <div className="h-1.5 sm:h-2 w-full bg-gray-100 rounded-full mb-4 sm:mb-8 overflow-hidden">
        <motion.div
          className="h-full bg-primary"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Question Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className="bg-white rounded-xl sm:rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
        >
          <div className="p-4 sm:p-6 md:p-8">
            <h2 className="text-base sm:text-xl md:text-2xl font-bold text-gray-800 leading-relaxed mb-4 sm:mb-8">
              {getQuestionText()}
            </h2>

            <div className="space-y-2 sm:space-y-3">
              {getOptions().map((option, idx) => {
                let stateClass = "border-gray-200 hover:border-primary/50 hover:bg-gray-50";
                let icon = null;

                if (isAnswered) {
                  if (idx === currentQuestion.correctAnswer) {
                    stateClass = "border-green-500 bg-green-50 text-green-700 font-medium";
                    icon = <CheckCircle size={18} className="text-green-500 flex-shrink-0" />;
                  } else if (selectedOption === idx) {
                    stateClass = "border-red-500 bg-red-50 text-red-700";
                    icon = <XCircle size={18} className="text-red-500 flex-shrink-0" />;
                  } else {
                    stateClass = "border-gray-100 opacity-50";
                  }
                } else if (selectedOption === idx) {
                  stateClass = "border-primary bg-primary/5 ring-2 ring-primary/20";
                }

                return (
                  <motion.button
                    key={idx}
                    whileHover={!isAnswered ? { scale: 1.01 } : {}}
                    whileTap={!isAnswered ? { scale: 0.98 } : {}}
                    onClick={() => handleOptionSelect(idx)}
                    disabled={isAnswered}
                    className={`w-full text-left p-3 sm:p-4 rounded-lg sm:rounded-xl border-2 transition-all duration-200 flex items-center justify-between group ${stateClass}`}
                  >
                    <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                      <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-gray-100 flex items-center justify-center text-xs sm:text-sm font-bold text-gray-500 group-hover:bg-primary/10 group-hover:text-primary transition-colors flex-shrink-0">
                        {String.fromCharCode(65 + idx)}
                      </span>
                      <span className="flex-grow text-sm sm:text-base">{option}</span>
                    </div>
                    {icon}
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* Explanation Footer */}
          <AnimatePresence>
            {isAnswered && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="bg-gray-50 border-t border-gray-100 p-4 sm:p-6"
              >
                <div className="flex gap-2 sm:gap-3">
                  <AlertCircle className="text-primary flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6" />
                  <div className="min-w-0">
                    <h4 className="font-semibold text-gray-800 mb-1 text-sm sm:text-base">
                      {language === 'hi' ? 'व्याख्या' : 'Explanation'}
                    </h4>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{getExplanation()}</p>
                  </div>
                </div>
                <div className="mt-4 sm:mt-6 flex justify-end">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleNext}
                    className="flex items-center gap-2 bg-primary text-white px-4 sm:px-8 py-2.5 sm:py-3 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all"
                  >
                    {currentIndex === questions.length - 1
                      ? (language === 'hi' ? 'समाप्त' : 'Finish')
                      : (language === 'hi' ? 'अगला' : 'Next')}
                    <ArrowRight size={18} className="sm:w-5 sm:h-5" />
                  </motion.button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </AnimatePresence>

      {/* Exit Button */}
      <div className="mt-4 sm:mt-6 text-center">
        <button
          onClick={onExit}
          className="text-gray-400 hover:text-gray-600 text-xs sm:text-sm font-medium transition-colors"
        >
          {language === 'hi' ? 'क्विज़ छोड़ें' : 'Exit Quiz'}
        </button>
      </div>
    </div>
  );
};

export default QuizGame;
