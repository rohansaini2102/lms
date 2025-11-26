import React, { useState, useEffect, useCallback } from 'react';
import { Clock, CheckCircle, XCircle, Trophy, Flame, AlertCircle, ArrowRight, RotateCcw, Home } from 'lucide-react';
import { Question, UserStats } from '../types';
import { generateQuizQuestions } from '../services/geminiService';
import { DEMO_QUESTIONS } from '../constants';

interface QuizGameProps {
  examId: string;
  subjectId: string;
  topicId: string;
  onExit: () => void;
}

const QUESTION_TIMER_SECONDS = 30;

const SkeletonLoader = () => (
  <div className="max-w-3xl mx-auto w-full animate-pulse">
    {/* HUD Skeleton */}
    <div className="flex items-center justify-between mb-6 bg-white p-4 rounded-2xl border border-slate-100">
      <div className="h-8 w-32 bg-slate-200 rounded-lg"></div>
      <div className="h-8 w-24 bg-slate-200 rounded-lg"></div>
    </div>
    
    {/* Progress Bar Skeleton */}
    <div className="h-2 w-full bg-slate-200 rounded-full mb-8"></div>

    {/* Question Card Skeleton */}
    <div className="bg-white rounded-3xl border border-slate-100 p-8">
       <div className="h-6 bg-slate-200 rounded w-3/4 mb-4"></div>
       <div className="h-6 bg-slate-200 rounded w-1/2 mb-10"></div>

       <div className="space-y-4">
         {[1, 2, 3, 4].map((i) => (
           <div key={i} className="h-16 w-full bg-slate-100 rounded-xl"></div>
         ))}
       </div>
    </div>
  </div>
);

const QuizGame: React.FC<QuizGameProps> = ({ examId, subjectId, topicId, onExit }) => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [timer, setTimer] = useState(QUESTION_TIMER_SECONDS);
  const [stats, setStats] = useState<UserStats>({
    score: 0,
    totalQuestions: 0,
    correctAnswers: 0,
    streak: 0,
    maxStreak: 0,
    timeTaken: 0,
  });
  const [gameFinished, setGameFinished] = useState(false);

  // Fetch Questions
  useEffect(() => {
    let isMounted = true;
    const fetchQuestions = async () => {
      setLoading(true);
      try {
        // Safe access to process.env to prevent crashes in environments without process defined
        let apiKey = "";
        try {
          if (typeof process !== 'undefined' && process.env && process.env.API_KEY) {
            apiKey = process.env.API_KEY;
          }
        } catch (e) {
          // Fallback if process access fails
          console.warn("Could not access process.env");
        }
        
        const fetchedQuestions = await generateQuizQuestions(apiKey, examId, subjectId, topicId);
        
        if (isMounted) {
          setQuestions(fetchedQuestions);
          setStats(s => ({ ...s, totalQuestions: fetchedQuestions.length }));
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching quiz:", error);
        if (isMounted) {
          setQuestions(DEMO_QUESTIONS); 
          setLoading(false);
        }
      }
    };
    fetchQuestions();
    
    return () => { isMounted = false; };
  }, [examId, subjectId, topicId]);

  const handleTimeUp = useCallback(() => {
    setIsAnswered(true);
    setSelectedOption(-1); // -1 indicates timeout
    setStats(prev => ({ ...prev, streak: 0 }));
  }, []);

  // Timer Logic
  useEffect(() => {
    if (loading || gameFinished || isAnswered) return;

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
  }, [loading, gameFinished, isAnswered]);

  // Handle 0 separately to avoid interval recreation loop
  useEffect(() => {
    if (timer === 0 && !isAnswered && !loading && !gameFinished) {
      handleTimeUp();
    }
  }, [timer, isAnswered, loading, gameFinished, handleTimeUp]);

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
        score: isCorrect ? prev.score + (10 + prev.streak * 2) : prev.score, // Gamified scoring
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
      setGameFinished(true);
    }
  };

  if (loading) {
    return (
      <div className="w-full min-h-[60vh] flex flex-col justify-center">
        <SkeletonLoader />
        <div className="text-center mt-8 text-slate-400 font-medium animate-pulse">
          Generating your test paper...
        </div>
      </div>
    );
  }

  if (gameFinished) {
    const percentage = questions.length > 0 ? Math.round((stats.correctAnswers / questions.length) * 100) : 0;
    let grade = 'B';
    let message = 'Good effort!';
    if (percentage >= 90) { grade = 'S'; message = 'Outstanding! Rank 1 Material.'; }
    else if (percentage >= 75) { grade = 'A'; message = 'Great job! Keep practicing.'; }
    else if (percentage < 50) { grade = 'C'; message = 'Needs more revision.'; }

    return (
      <div className="max-w-2xl mx-auto animate-fadeIn">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
          <div className="bg-primary-600 p-8 text-white text-center">
            <Trophy className="w-16 h-16 mx-auto mb-4 text-primary-100" />
            <h2 className="text-3xl font-bold mb-2">Quiz Complete!</h2>
            <p className="text-primary-100 opacity-90">{message}</p>
          </div>
          
          <div className="p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="p-4 bg-slate-50 rounded-xl text-center">
                <p className="text-slate-500 text-sm mb-1">Score</p>
                <p className="text-2xl font-bold text-slate-800">{stats.score}</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl text-center">
                <p className="text-slate-500 text-sm mb-1">Accuracy</p>
                <p className="text-2xl font-bold text-slate-800">{percentage}%</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl text-center">
                <p className="text-slate-500 text-sm mb-1">Max Streak</p>
                <div className="flex items-center justify-center gap-1 text-orange-600">
                   <Flame size={20} fill="currentColor" />
                   <span className="text-2xl font-bold">{stats.maxStreak}</span>
                </div>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl text-center">
                <p className="text-slate-500 text-sm mb-1">Time</p>
                <p className="text-2xl font-bold text-slate-800">{Math.floor(stats.timeTaken / 60)}m {stats.timeTaken % 60}s</p>
              </div>
            </div>

            <div className="flex gap-4 justify-center">
              <button onClick={onExit} className="flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-100 text-slate-700 font-semibold hover:bg-slate-200 transition-colors">
                <Home size={20} /> Home
              </button>
              <button onClick={() => window.location.reload()} className="flex items-center gap-2 px-6 py-3 rounded-xl bg-primary-600 text-white font-semibold hover:bg-primary-700 transition-colors shadow-lg shadow-primary-500/30">
                <RotateCcw size={20} /> Retry
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Safety check if questions failed to load entirely
  if (questions.length === 0) {
    return (
       <div className="flex flex-col items-center justify-center min-h-[50vh] text-center p-8">
          <AlertCircle size={48} className="text-red-500 mb-4" />
          <h3 className="text-xl font-bold text-slate-900 mb-2">Unable to load quiz</h3>
          <p className="text-slate-500 mb-6">There was an issue loading the questions. Please try again.</p>
          <button onClick={onExit} className="px-6 py-2 bg-slate-900 text-white rounded-lg">Go Back</button>
       </div>
    );
  }

  const currentQuestion = questions[currentIndex];
  const progress = ((currentIndex) / questions.length) * 100;

  return (
    <div className="max-w-3xl mx-auto animate-fadeIn">
      {/* HUD */}
      <div className="flex items-center justify-between mb-6 bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
        <div className="flex items-center gap-4">
          <div className="flex flex-col">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Question</span>
            <span className="text-xl font-bold text-slate-800">{currentIndex + 1}<span className="text-slate-400 text-base font-normal">/{questions.length}</span></span>
          </div>
          <div className="h-8 w-[1px] bg-slate-200"></div>
          <div className="flex items-center gap-2 text-orange-500">
            <Flame size={20} fill={stats.streak > 1 ? "currentColor" : "none"} />
            <span className="font-bold">{stats.streak}</span>
          </div>
        </div>
        
        <div className="flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-xl">
          <Clock size={18} className={timer < 10 ? "text-red-500 animate-pulse" : "text-slate-400"} />
          <span className={`font-mono font-bold text-lg ${timer < 10 ? "text-red-500" : "text-slate-700"}`}>
            00:{timer.toString().padStart(2, '0')}
          </span>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="h-2 w-full bg-slate-100 rounded-full mb-8 overflow-hidden">
        <div 
          className="h-full bg-primary-500 transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      {/* Question Card */}
      <div className="bg-white rounded-3xl shadow-lg border border-slate-100 overflow-hidden mb-6">
        <div className="p-6 md:p-8">
          <h2 className="text-xl md:text-2xl font-bold text-slate-800 leading-relaxed mb-8">
            {currentQuestion.text}
          </h2>

          <div className="space-y-3">
            {currentQuestion.options.map((option, idx) => {
              let stateClass = "border-slate-200 hover:border-primary-300 hover:bg-slate-50";
              let icon = null;

              if (isAnswered) {
                if (idx === currentQuestion.correctAnswer) {
                  stateClass = "border-green-500 bg-green-50 text-green-700 font-medium";
                  icon = <CheckCircle size={20} className="text-green-500" />;
                } else if (selectedOption === idx) {
                  stateClass = "border-red-500 bg-red-50 text-red-700";
                  icon = <XCircle size={20} className="text-red-500" />;
                } else {
                  stateClass = "border-slate-100 opacity-50";
                }
              } else if (selectedOption === idx) {
                 stateClass = "border-primary-500 bg-primary-50 ring-2 ring-primary-200";
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleOptionSelect(idx)}
                  disabled={isAnswered}
                  className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-200 flex items-center justify-between group ${stateClass}`}
                >
                  <span className="flex-grow">{option}</span>
                  {icon}
                </button>
              );
            })}
          </div>
        </div>
        
        {/* Explanation Footer */}
        {isAnswered && (
          <div className="bg-slate-50 border-t border-slate-100 p-6 animate-fadeIn">
            <div className="flex gap-3">
              <AlertCircle className="text-primary-600 flex-shrink-0" size={24} />
              <div>
                <h4 className="font-semibold text-slate-800 mb-1">Explanation</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{currentQuestion.explanation}</p>
              </div>
            </div>
            <div className="mt-6 flex justify-end">
              <button 
                onClick={handleNext}
                className="flex items-center gap-2 bg-primary-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-primary-700 transition-colors shadow-lg shadow-primary-500/30"
              >
                {currentIndex === questions.length - 1 ? "Finish Quiz" : "Next Question"}
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizGame;