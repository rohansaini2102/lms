import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Layout from './components/Layout';
import QuizGame from './components/QuizGame';
import { EXAM_CATEGORIES, SUBJECTS } from './constants';
import { ExamCategory, Subject, Topic, Subtopic } from './types';
import { InfiniteMarquee, Sticker, GridBackground, StudentIllustration, AIBrainIllustration, BadgeIllustration, ExamIcon, SubjectIcon } from './components/VisualAssets';
import { ArrowRight, ChevronRight, CheckCircle2, Play, Star } from 'lucide-react';

type Screen = 'HOME' | 'SUBJECTS' | 'TOPICS' | 'SUBTOPICS' | 'QUIZ';

export default function App() {
  const [screen, setScreen] = useState<Screen>('HOME');
  const [selectedExam, setSelectedExam] = useState<ExamCategory | null>(null);
  const [selectedSubject, setSelectedSubject] = useState<Subject | null>(null);
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);
  const [selectedSubtopic, setSelectedSubtopic] = useState<Subtopic | null>(null);

  // Navigation Handlers
  const handleExamSelect = (exam: ExamCategory) => {
    setSelectedExam(exam);
    if (SUBJECTS[exam.id]) {
      setScreen('SUBJECTS');
      window.scrollTo(0, 0);
    } else {
      alert("Coming Soon! Please select RAS for the demo.");
    }
  };

  const handleSubjectSelect = (subject: Subject) => {
    setSelectedSubject(subject);
    setScreen('TOPICS');
    window.scrollTo(0, 0);
  };

  const handleTopicSelect = (topic: Topic) => {
    setSelectedTopic(topic);
    setScreen('SUBTOPICS');
    window.scrollTo(0, 0);
  };

  const handleSubtopicSelect = (subtopic: Subtopic) => {
    setSelectedSubtopic(subtopic);
    setScreen('QUIZ');
    window.scrollTo(0, 0);
  };

  const handleGoHome = () => {
    setScreen('HOME');
    setSelectedExam(null);
    setSelectedSubject(null);
    setSelectedTopic(null);
    setSelectedSubtopic(null);
    window.scrollTo(0, 0);
  };

  const handleBack = () => {
    if (screen === 'QUIZ') setScreen('SUBTOPICS');
    else if (screen === 'SUBTOPICS') setScreen('TOPICS');
    else if (screen === 'TOPICS') setScreen('SUBJECTS');
    else if (screen === 'SUBJECTS') setScreen('HOME');
  };

  // Horizontal Scroll Setup
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-65%"]);

  // Render Functions
  const renderHomeScreen = () => (
    <div className="relative">
      <GridBackground />
      
      {/* 1. HERO SECTION */}
      <section className="min-h-screen flex flex-col items-center justify-center pt-24 pb-12 px-4 text-center relative overflow-hidden">
        {/* Decorative Stickers */}
        <Sticker text="100% Free" color="bg-neon-green" className="top-[20%] left-[10%] hidden md:block" rotate="-12deg" />
        <Sticker text="AI Powered" color="bg-neon-pink text-white" className="top-[25%] right-[12%] hidden md:block" rotate="8deg" />
        <Sticker text="2025 Syllabus" color="bg-neon-blue text-white" className="bottom-[20%] left-[15%] hidden md:block" rotate="5deg" />

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 max-w-5xl mx-auto"
        >
          <div className="mb-6 inline-block bg-white border-2 border-dark rounded-full px-4 py-1 font-bold text-sm tracking-widest uppercase shadow-neubrutalism-sm">
             🚀 Rajasthan's #1 Learning Platform
          </div>
          <h1 className="font-grotesk font-bold text-[14vw] sm:text-[10vw] leading-[0.85] text-dark tracking-tighter mb-8">
            GET SCORED.<br/>
            <span className="text-neon-blue">GET SORTED.</span>
          </h1>
          <p className="text-xl md:text-2xl font-medium text-dark/70 max-w-2xl mx-auto mb-12 leading-relaxed">
            Stop guessing. Start dominating your <strong>RAS, REET & Patwar</strong> exams with AI-generated mock tests that adapt to you.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6">
             <button
                onClick={() => document.getElementById('exams')?.scrollIntoView({behavior: 'smooth'})}
                className="bg-neon-green text-dark text-xl font-bold px-10 py-5 rounded-full border-2 border-dark shadow-neubrutalism hover:translate-y-[2px] hover:shadow-none transition-all flex items-center gap-3"
             >
                Pick Your Exam <ArrowRight className="stroke-[3]" />
             </button>
             <button className="bg-white text-dark text-xl font-bold px-10 py-5 rounded-full border-2 border-dark shadow-neubrutalism hover:bg-gray-50 transition-all">
                View Syllabus
             </button>
          </div>

          {/* Happy Students Illustration */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-16"
          >
            <StudentIllustration className="w-full max-w-lg mx-auto h-auto" variant="duo" />
          </motion.div>
        </motion.div>
      </section>

      {/* 2. INFINITE MARQUEE */}
      <InfiniteMarquee />

      {/* 3. HORIZONTAL SCROLL EXAMS */}
      <section ref={targetRef} id="exams" className="relative h-[300vh] bg-dark">
        <div className="sticky top-0 h-screen flex items-center overflow-hidden">
          <motion.div style={{ x }} className="flex gap-16 px-24">

            {/* Intro Card for Scroll Section */}
            <div className="w-[600px] h-[70vh] flex flex-col justify-center text-cream shrink-0">
               <h2 className="font-grotesk font-bold text-8xl mb-6 leading-[0.9]">
                 CHOOSE <br/> <span className="text-neon-green">YOUR BATTLE.</span>
               </h2>
               <p className="text-2xl opacity-70 max-w-md">
                 Scroll to explore our specialized exam modules.
               </p>
               <ArrowRight size={64} className="mt-8 text-neon-green animate-pulse" />
            </div>

            {/* Exam Cards */}
            {EXAM_CATEGORIES.map((exam, index) => {
              const colors = [
                'bg-neon-yellow',
                'bg-neon-blue',
                'bg-neon-pink',
                'bg-neon-green'
              ];
              const cardColor = colors[index % colors.length];
              const textColor = index === 1 || index === 2 ? 'text-white' : 'text-dark';

              return (
                <div
                  key={exam.id}
                  onClick={() => handleExamSelect(exam)}
                  className={`relative w-[500px] h-[70vh] ${cardColor} ${textColor} rounded-[3rem] border-4 border-dark p-10 flex flex-col justify-between shrink-0 cursor-pointer group hover:scale-[1.02] transition-transform duration-300 shadow-neubrutalism-lg`}
                >
                  <div>
                    <div className="flex justify-between items-start mb-8">
                       <span className="font-mono text-xl font-bold border-2 border-current px-3 py-1 rounded-full">
                         0{index + 1}
                       </span>
                       <ArrowRight size={48} className="group-hover:-rotate-45 transition-transform duration-300" />
                    </div>

                    {/* Exam Icon */}
                    <div className="mb-6">
                      <ExamIcon type={exam.id as 'ras' | 'ias' | 'reet' | 'patwar'} className="w-20 h-20" />
                    </div>

                    <h3 className="font-grotesk font-bold text-6xl leading-tight mb-4">
                      {exam.name}
                    </h3>
                    <p className="text-xl font-medium opacity-80 border-t-2 border-current pt-4">
                      {exam.description}
                    </p>
                  </div>

                  <div className="bg-dark/10 backdrop-blur-sm rounded-3xl p-6">
                     <div className="flex items-center gap-3 font-bold text-lg mb-2">
                        <CheckCircle2 size={24} /> Daily Mock Tests
                     </div>
                     <div className="flex items-center gap-3 font-bold text-lg">
                        <Star size={24} /> 2025 Updated
                     </div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* 4. FEATURE CARDS (Service Cards) */}
      <section className="py-32 px-4 max-w-7xl mx-auto space-y-12">
        <h2 className="font-grotesk font-bold text-7xl md:text-8xl text-center mb-24">
           WHY WE <span className="text-neon-pink">RULE.</span>
        </h2>

        {/* Feature 1 - AI Quizzes */}
        <div className="grid grid-cols-1 md:grid-cols-2 bg-white rounded-[3rem] border-4 border-dark shadow-neubrutalism-lg overflow-hidden min-h-[500px]">
           <div className="p-12 md:p-16 flex flex-col justify-center">
              <h3 className="font-grotesk font-bold text-5xl md:text-6xl mb-6">AI-Generated Quizzes.</h3>
              <p className="text-xl md:text-2xl text-dark/70 font-medium">
                Our Gemini AI engine creates unique questions every time you practice. Never solve the same paper twice.
              </p>
           </div>
           <div className="bg-neon-blue flex items-center justify-center p-12 border-t-4 md:border-t-0 md:border-l-4 border-dark relative overflow-hidden">
              {/* AI Brain Illustration */}
              <AIBrainIllustration className="w-64 h-64 absolute opacity-20 -right-10 -bottom-10" />
              <div className="bg-white border-4 border-dark rounded-3xl p-8 w-full max-w-sm rotate-3 shadow-neubrutalism relative z-10">
                 <div className="h-4 bg-gray-200 rounded-full w-2/3 mb-6"></div>
                 <div className="space-y-4">
                    <div className="h-12 bg-neon-blue/20 rounded-xl border-2 border-neon-blue w-full flex items-center px-4">
                      <span className="text-neon-blue font-bold">A.</span>
                      <span className="ml-2 text-sm text-gray-600">AI Generated Option</span>
                    </div>
                    <div className="h-12 bg-gray-100 rounded-xl w-full flex items-center px-4">
                      <span className="text-gray-500 font-bold">B.</span>
                      <span className="ml-2 text-sm text-gray-400">Dynamic Content</span>
                    </div>
                    <div className="h-12 bg-gray-100 rounded-xl w-full flex items-center px-4">
                      <span className="text-gray-500 font-bold">C.</span>
                      <span className="ml-2 text-sm text-gray-400">Unique Questions</span>
                    </div>
                 </div>
              </div>
           </div>
        </div>

        {/* Feature 2 - Gamified */}
        <div className="grid grid-cols-1 md:grid-cols-2 bg-white rounded-[3rem] border-4 border-dark shadow-neubrutalism-lg overflow-hidden min-h-[500px]">
           <div className="bg-neon-pink flex items-center justify-center p-12 border-b-4 md:border-b-0 md:border-r-4 border-dark order-2 md:order-1 relative">
               {/* Badge Illustration */}
               <BadgeIllustration className="w-48 h-60" />
               <div className="absolute top-8 left-8">
                 <Sticker text="Streak: 12 Days" color="bg-white" rotate="-5deg" />
               </div>
               <div className="absolute bottom-8 right-8">
                 <Sticker text="Rank #1" color="bg-neon-yellow" rotate="5deg" />
               </div>
           </div>
           <div className="p-12 md:p-16 flex flex-col justify-center order-1 md:order-2">
              <h3 className="font-grotesk font-bold text-5xl md:text-6xl mb-6">Gamified Growth.</h3>
              <p className="text-xl md:text-2xl text-dark/70 font-medium">
                Earn badges, maintain streaks, and climb the leaderboard. Making government prep actually fun.
              </p>
           </div>
        </div>

        {/* Feature 3 - Community of Students */}
        <div className="grid grid-cols-1 md:grid-cols-2 bg-white rounded-[3rem] border-4 border-dark shadow-neubrutalism-lg overflow-hidden min-h-[500px]">
           <div className="p-12 md:p-16 flex flex-col justify-center">
              <h3 className="font-grotesk font-bold text-5xl md:text-6xl mb-6">Join 10,000+ Students.</h3>
              <p className="text-xl md:text-2xl text-dark/70 font-medium">
                Be part of Rajasthan's largest exam prep community. Learn together, grow together, succeed together.
              </p>
           </div>
           <div className="bg-neon-green flex items-center justify-center p-8 border-t-4 md:border-t-0 md:border-l-4 border-dark">
              <StudentIllustration className="w-full max-w-md h-auto" variant="group" />
           </div>
        </div>

      </section>
    </div>
  );

  const renderBreadcrumb = () => (
    <div className="bg-white border-b border-dark sticky top-[80px] z-40 py-4 px-6 mb-8 flex items-center gap-2 overflow-x-auto whitespace-nowrap">
      <button onClick={handleGoHome} className="font-bold hover:text-neon-blue">Home</button>
      <ChevronRight size={16} className="text-gray-400" />
      <span className={!selectedSubject ? "font-bold text-neon-pink" : "text-gray-600"}>{selectedExam?.name}</span>
      {selectedSubject && (
        <>
          <ChevronRight size={16} className="text-gray-400" />
          <span className={!selectedTopic ? "font-bold text-neon-pink" : "text-gray-600"}>{selectedSubject.name}</span>
        </>
      )}
      {selectedTopic && (
        <>
          <ChevronRight size={16} className="text-gray-400" />
          <span className={!selectedSubtopic ? "font-bold text-neon-pink" : "text-gray-600"}>{selectedTopic.name}</span>
        </>
      )}
      {selectedSubtopic && (
        <>
          <ChevronRight size={16} className="text-gray-400" />
          <span className="font-bold text-neon-green bg-dark text-white px-2 py-0.5 rounded-md">{selectedSubtopic.name}</span>
        </>
      )}
    </div>
  );

  // Sub-screens with Swiss Design
  const renderSelectionScreen = (title: string, subtitle: string, items: any[], onSelect: (item: any) => void, type: 'subject' | 'topic' | 'subtopic') => {
    const cardColors = ['bg-neon-yellow/10', 'bg-neon-blue/10', 'bg-neon-pink/10', 'bg-neon-green/10', 'bg-neon-purple/10'];
    const accentColors = ['bg-neon-yellow', 'bg-neon-blue', 'bg-neon-pink', 'bg-neon-green', 'bg-neon-purple'];

    return (
      <div className="min-h-screen pt-32 px-4 pb-20 max-w-7xl mx-auto">
        <div className="mb-12">
          <button onClick={handleBack} className="flex items-center gap-2 font-bold hover:underline mb-6 bg-white px-4 py-2 rounded-full border-2 border-dark shadow-neubrutalism-sm hover:shadow-none hover:translate-y-[1px] transition-all">
             ← Go Back
          </button>
          <h2 className="font-grotesk font-bold text-6xl md:text-7xl mb-4">{title}</h2>
          <p className="text-2xl font-medium text-dark/60 max-w-2xl">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => onSelect(item)}
              className={`group ${cardColors[idx % cardColors.length]} rounded-3xl border-4 border-dark p-8 hover:shadow-neubrutalism hover:-translate-y-2 transition-all cursor-pointer relative overflow-hidden`}
            >
              {type === 'subtopic' && (
                <div className="absolute top-4 right-4 w-12 h-12 bg-neon-green rounded-full flex items-center justify-center border-2 border-dark opacity-0 group-hover:opacity-100 transition-opacity shadow-neubrutalism-sm">
                  <Play size={24} fill="black" />
                </div>
              )}

              {/* Icon based on type */}
              <div className="mb-6 flex items-center gap-4">
                {type === 'subject' && (
                  <div className="w-16 h-16 flex items-center justify-center">
                    <SubjectIcon type={item.id || item.name.toLowerCase()} className="w-14 h-14" />
                  </div>
                )}
                {type !== 'subject' && (
                  <div className={`w-16 h-16 ${accentColors[idx % accentColors.length]} rounded-2xl border-2 border-dark flex items-center justify-center text-3xl font-bold font-grotesk shadow-neubrutalism-sm`}>
                    {idx + 1}
                  </div>
                )}
              </div>

              <h3 className="font-grotesk font-bold text-2xl md:text-3xl mb-3 leading-tight group-hover:underline decoration-4 decoration-neon-blue underline-offset-4">
                {item.name}
              </h3>

              <div className="flex items-center gap-2 font-bold text-dark/50 group-hover:text-dark transition-colors">
                {type === 'subject' && (
                  <span className="bg-white px-3 py-1 rounded-full border border-dark text-sm">
                    {item.topics?.length || 0} Topics
                  </span>
                )}
                {type === 'topic' && (
                  <span className="bg-white px-3 py-1 rounded-full border border-dark text-sm">
                    {item.subtopics?.length || 0} Chapters
                  </span>
                )}
                {type === 'subtopic' && (
                  <span className="bg-neon-green px-3 py-1 rounded-full border border-dark text-sm text-dark">
                    Start Quiz
                  </span>
                )}
                <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform ml-auto" />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <Layout activeScreen={screen === 'QUIZ' ? 'quiz' : 'home'} onGoHome={handleGoHome}>
      {screen !== 'HOME' && screen !== 'QUIZ' && renderBreadcrumb()}
      
      {screen === 'HOME' && renderHomeScreen()}
      
      {screen === 'SUBJECTS' && selectedExam && renderSelectionScreen(
        `${selectedExam.name} Subjects`,
        "Select a subject to drill down.",
        SUBJECTS[selectedExam.id] || [],
        handleSubjectSelect,
        'subject'
      )}

      {screen === 'TOPICS' && selectedSubject && renderSelectionScreen(
        selectedSubject.name,
        "Choose a topic area.",
        selectedSubject.topics,
        handleTopicSelect,
        'topic'
      )}

      {screen === 'SUBTOPICS' && selectedTopic && renderSelectionScreen(
        selectedTopic.name,
        "Select a chapter to start the quiz.",
        selectedTopic.subtopics,
        handleSubtopicSelect,
        'subtopic'
      )}

      {screen === 'QUIZ' && selectedExam && selectedSubject && selectedTopic && (
        <div className="pt-24 px-4 pb-20">
           <QuizGame 
             examId={selectedExam.id}
             subjectId={selectedSubject.id}
             topicId={selectedTopic.id}
             onExit={handleGoHome}
           />
        </div>
      )}
    </Layout>
  );
}