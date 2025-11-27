import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ExamBrowser from './components/ExamBrowser';
import SubjectBrowser from './components/SubjectBrowser';
import Features from './components/Features';
import TestSeries from './components/TestSeries';
import Footer from './components/Footer';

const LandingApp: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <ExamBrowser />
        <SubjectBrowser />
        <Features />
        <TestSeries />
      </main>
      <Footer />
    </div>
  );
};

export default LandingApp;
