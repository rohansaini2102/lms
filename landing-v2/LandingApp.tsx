import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ExamBrowser from './components/ExamBrowser';
import SubjectBrowser from './components/SubjectBrowser';
import Features from './components/Features';
import TestSeries from './components/TestSeries';
import Footer from './components/Footer';
import { QuizApp } from './components/quiz';
import { ExamData } from '../src/data/types';
import { getExamById } from '../src/data';

const LandingApp: React.FC = () => {
  const [showQuiz, setShowQuiz] = useState(false);
  const [selectedExam, setSelectedExam] = useState<ExamData | undefined>(undefined);

  const handleStartQuiz = (examId?: string) => {
    if (examId) {
      const exam = getExamById(examId);
      setSelectedExam(exam);
    } else {
      setSelectedExam(undefined);
    }
    setShowQuiz(true);
  };

  const handleCloseQuiz = () => {
    setShowQuiz(false);
    setSelectedExam(undefined);
  };

  if (showQuiz) {
    return (
      <QuizApp
        initialExam={selectedExam}
        onClose={handleCloseQuiz}
      />
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header onStartQuiz={() => handleStartQuiz()} />
      <main>
        <Hero onStartQuiz={() => handleStartQuiz()} />
        <ExamBrowser onExamSelect={(examId) => handleStartQuiz(examId)} />
        <SubjectBrowser onStartQuiz={() => handleStartQuiz()} />
        <Features />
        <TestSeries />
      </main>
      <Footer />
    </div>
  );
};

export default LandingApp;
