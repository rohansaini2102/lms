import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Languages } from 'lucide-react';
import {
  ExamData,
  Subject,
  Topic,
  Chapter,
  Question,
  UserStats,
  Screen
} from '../../../src/data/types';
import {
  ALL_EXAMS,
  getExamQuestions,
  getSubjectQuestions,
  getTopicQuestions,
  getChapterQuestions,
  getQuizQuestions
} from '../../../src/data';

import Breadcrumb from './Breadcrumb';
import ExamSelector from './ExamSelector';
import SubjectSelector from './SubjectSelector';
import TopicSelector from './TopicSelector';
import ChapterQuiz from './ChapterQuiz';
import QuizGame from './QuizGame';
import QuizResult from './QuizResult';

interface QuizAppProps {
  initialExam?: ExamData;
  onClose: () => void;
}

const QuizApp: React.FC<QuizAppProps> = ({ initialExam, onClose }) => {
  const [screen, setScreen] = useState<Screen>(initialExam ? 'SUBJECT_SELECT' : 'EXAM_SELECT');
  const [selectedExam, setSelectedExam] = useState<ExamData | null>(initialExam || null);
  const [selectedSubject, setSelectedSubject] = useState<Subject | null>(null);
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);
  const [selectedChapter, setSelectedChapter] = useState<Chapter | null>(null);
  const [language, setLanguage] = useState<'en' | 'hi'>('en');
  const [quizQuestions, setQuizQuestions] = useState<Question[]>([]);
  const [quizStats, setQuizStats] = useState<UserStats | null>(null);
  const [quizContext, setQuizContext] = useState<string>('');
  const [quizContextHi, setQuizContextHi] = useState<string>('');

  // Navigation handlers
  const handleExamSelect = useCallback((exam: ExamData) => {
    setSelectedExam(exam);
    setScreen('SUBJECT_SELECT');
  }, []);

  const handleSubjectSelect = useCallback((subject: Subject) => {
    setSelectedSubject(subject);
    setScreen('TOPIC_SELECT');
  }, []);

  const handleTopicSelect = useCallback((topic: Topic) => {
    setSelectedTopic(topic);
    setScreen('CHAPTER_SELECT');
  }, []);

  const handleChapterSelect = useCallback((chapter: Chapter) => {
    setSelectedChapter(chapter);
    // Start quiz immediately from chapter
    const questions = getQuizQuestions(getChapterQuestions(chapter), 20);
    setQuizQuestions(questions);
    setQuizContext(chapter.name);
    setQuizContextHi(chapter.nameHi || chapter.name);
    setScreen('QUIZ');
  }, []);

  // Quiz start handlers for different scopes
  const handleStartExamQuiz = useCallback(() => {
    if (!selectedExam) return;
    const questions = getQuizQuestions(getExamQuestions(selectedExam), 20);
    setQuizQuestions(questions);
    setQuizContext(selectedExam.fullName);
    setQuizContextHi(selectedExam.fullNameHi || selectedExam.fullName);
    setScreen('QUIZ');
  }, [selectedExam]);

  const handleStartSubjectQuiz = useCallback(() => {
    if (!selectedSubject) return;
    const questions = getQuizQuestions(getSubjectQuestions(selectedSubject), 20);
    setQuizQuestions(questions);
    setQuizContext(selectedSubject.name);
    setQuizContextHi(selectedSubject.nameHi || selectedSubject.name);
    setScreen('QUIZ');
  }, [selectedSubject]);

  const handleStartTopicQuiz = useCallback(() => {
    if (!selectedTopic) return;
    const questions = getQuizQuestions(getTopicQuestions(selectedTopic), 20);
    setQuizQuestions(questions);
    setQuizContext(selectedTopic.name);
    setQuizContextHi(selectedTopic.nameHi || selectedTopic.name);
    setScreen('QUIZ');
  }, [selectedTopic]);

  const handleStartChapterQuiz = useCallback(() => {
    if (!selectedChapter) return;
    const questions = getQuizQuestions(getChapterQuestions(selectedChapter), 20);
    setQuizQuestions(questions);
    setQuizContext(selectedChapter.name);
    setQuizContextHi(selectedChapter.nameHi || selectedChapter.name);
    setScreen('QUIZ');
  }, [selectedChapter]);

  // Quiz completion
  const handleQuizFinish = useCallback((stats: UserStats) => {
    setQuizStats(stats);
    setScreen('RESULT');
  }, []);

  // Navigation
  const handleBack = useCallback(() => {
    switch (screen) {
      case 'SUBJECT_SELECT':
        if (initialExam) {
          onClose();
        } else {
          setSelectedExam(null);
          setScreen('EXAM_SELECT');
        }
        break;
      case 'TOPIC_SELECT':
        setSelectedSubject(null);
        setScreen('SUBJECT_SELECT');
        break;
      case 'CHAPTER_SELECT':
        setSelectedTopic(null);
        setScreen('TOPIC_SELECT');
        break;
      case 'QUIZ':
        if (selectedChapter) {
          setScreen('CHAPTER_SELECT');
        } else if (selectedTopic) {
          setScreen('TOPIC_SELECT');
        } else if (selectedSubject) {
          setScreen('SUBJECT_SELECT');
        } else {
          setScreen('EXAM_SELECT');
        }
        break;
      case 'RESULT':
        setQuizStats(null);
        if (selectedChapter) {
          setScreen('CHAPTER_SELECT');
        } else {
          setScreen('EXAM_SELECT');
        }
        break;
      default:
        onClose();
    }
  }, [screen, selectedChapter, selectedTopic, selectedSubject, initialExam, onClose]);

  const handleHome = useCallback(() => {
    setSelectedExam(initialExam || null);
    setSelectedSubject(null);
    setSelectedTopic(null);
    setSelectedChapter(null);
    setQuizStats(null);
    setScreen(initialExam ? 'SUBJECT_SELECT' : 'EXAM_SELECT');
  }, [initialExam]);

  const handleRetry = useCallback(() => {
    setQuizStats(null);
    setScreen('QUIZ');
  }, []);

  // Build breadcrumb items
  const getBreadcrumbItems = () => {
    const items: { label: string; labelHi?: string; onClick?: () => void }[] = [];

    if (selectedExam) {
      items.push({
        label: selectedExam.name,
        labelHi: selectedExam.fullNameHi,
        onClick: screen !== 'SUBJECT_SELECT' ? () => {
          setSelectedSubject(null);
          setSelectedTopic(null);
          setSelectedChapter(null);
          setScreen('SUBJECT_SELECT');
        } : undefined
      });
    }

    if (selectedSubject) {
      items.push({
        label: selectedSubject.name,
        labelHi: selectedSubject.nameHi,
        onClick: screen !== 'TOPIC_SELECT' ? () => {
          setSelectedTopic(null);
          setSelectedChapter(null);
          setScreen('TOPIC_SELECT');
        } : undefined
      });
    }

    if (selectedTopic) {
      items.push({
        label: selectedTopic.name,
        labelHi: selectedTopic.nameHi,
        onClick: screen !== 'CHAPTER_SELECT' ? () => {
          setSelectedChapter(null);
          setScreen('CHAPTER_SELECT');
        } : undefined
      });
    }

    if (selectedChapter && (screen === 'QUIZ' || screen === 'RESULT')) {
      items.push({
        label: selectedChapter.name,
        labelHi: selectedChapter.nameHi
      });
    }

    return items;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <button
                onClick={screen === 'EXAM_SELECT' ? onClose : handleBack}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <ArrowLeft className="w-5 h-5 text-gray-600" />
              </button>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">RP</span>
                </div>
                <span className="font-bold text-gray-900 hidden sm:block">
                  {language === 'hi' ? 'राजपरीक्षा' : 'RajPariksha'}
                </span>
              </div>
            </div>

            {/* Language Toggle */}
            <button
              onClick={() => setLanguage(language === 'en' ? 'hi' : 'en')}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors text-sm font-medium text-gray-700"
            >
              <Languages size={18} />
              {language === 'hi' ? 'English' : 'हिंदी'}
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        {screen !== 'EXAM_SELECT' && screen !== 'QUIZ' && screen !== 'RESULT' && (
          <Breadcrumb
            items={getBreadcrumbItems()}
            language={language}
            onHomeClick={handleHome}
          />
        )}

        {/* Screen Content */}
        <AnimatePresence mode="wait">
          {screen === 'EXAM_SELECT' && (
            <motion.div
              key="exam-select"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <div className="mb-8 text-center">
                <h1 className="text-3xl font-bold text-gray-900 font-grotesk mb-2">
                  {language === 'hi' ? 'परीक्षा चुनें' : 'Select Your Exam'}
                </h1>
                <p className="text-gray-500">
                  {language === 'hi' ? 'अभ्यास शुरू करने के लिए एक परीक्षा चुनें' : 'Choose an exam to start practicing'}
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {ALL_EXAMS.map((exam, index) => (
                  <motion.div
                    key={exam.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -4, boxShadow: '0 12px 24px rgba(0,0,0,0.1)' }}
                    onClick={() => handleExamSelect(exam)}
                    className="bg-white rounded-2xl border border-gray-100 p-6 cursor-pointer transition-all group"
                  >
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
                      style={{ backgroundColor: `${exam.color}15` }}
                    >
                      <span className="text-2xl font-bold" style={{ color: exam.color }}>
                        {exam.name.charAt(0)}
                      </span>
                    </div>
                    <h3 className="font-bold text-gray-900 text-lg group-hover:text-primary transition-colors">
                      {exam.name}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">
                      {language === 'hi' && exam.fullNameHi ? exam.fullNameHi : exam.fullName}
                    </p>
                    <p className="text-sm text-gray-400 mt-2">
                      {exam.subjects.length} {language === 'hi' ? 'विषय' : 'Subjects'}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {screen === 'SUBJECT_SELECT' && selectedExam && (
            <motion.div
              key="subject-select"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <ExamSelector
                exam={selectedExam}
                language={language}
                onSubjectSelect={handleSubjectSelect}
                onStartExamQuiz={handleStartExamQuiz}
              />
            </motion.div>
          )}

          {screen === 'TOPIC_SELECT' && selectedSubject && (
            <motion.div
              key="topic-select"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <SubjectSelector
                subject={selectedSubject}
                language={language}
                onTopicSelect={handleTopicSelect}
                onStartSubjectQuiz={handleStartSubjectQuiz}
              />
            </motion.div>
          )}

          {screen === 'CHAPTER_SELECT' && selectedTopic && (
            <motion.div
              key="chapter-select"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <TopicSelector
                topic={selectedTopic}
                language={language}
                onChapterSelect={handleChapterSelect}
                onStartTopicQuiz={handleStartTopicQuiz}
              />
            </motion.div>
          )}

          {screen === 'QUIZ' && quizQuestions.length > 0 && (
            <motion.div
              key="quiz"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
            >
              <QuizGame
                questions={quizQuestions}
                language={language}
                onLanguageChange={setLanguage}
                onFinish={handleQuizFinish}
                onExit={handleBack}
              />
            </motion.div>
          )}

          {screen === 'RESULT' && quizStats && (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
            >
              <QuizResult
                stats={quizStats}
                language={language}
                examName={quizContext}
                examNameHi={quizContextHi}
                onRetry={handleRetry}
                onHome={handleHome}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
};

export default QuizApp;
