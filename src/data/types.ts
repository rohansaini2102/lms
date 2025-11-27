// Complete type definitions for the Quiz Platform

export interface Question {
  id: string;
  text: string;
  textHi?: string; // Hindi translation
  options: string[];
  optionsHi?: string[]; // Hindi options
  correctAnswer: number; // 0-3 index
  explanation: string;
  explanationHi?: string; // Hindi explanation
  difficulty?: 'easy' | 'medium' | 'hard';
  year?: string; // Previous year question tag (e.g., "RAS 2018")
}

export interface Chapter {
  id: string;
  name: string;
  nameHi?: string;
  difficulty: 'easy' | 'medium' | 'hard';
  questions: Question[];
}

export interface Topic {
  id: string;
  name: string;
  nameHi?: string;
  chapters: Chapter[];
}

export interface Subject {
  id: string;
  name: string;
  nameHi?: string;
  icon: string;
  color: string;
  topics: Topic[];
}

export interface ExamData {
  id: string;
  name: string;
  fullName: string;
  fullNameHi?: string;
  category: string;
  icon: string;
  color: string;
  description?: string;
  descriptionHi?: string;
  subjects: Subject[];
}

export interface ExamCategory {
  id: string;
  name: string;
  nameHi?: string;
  icon: string;
  color: string;
  logo?: string;
  exams: ExamData[];
}

// Quiz State Types
export type QuizScope = 'exam' | 'subject' | 'topic' | 'chapter';

export interface QuizConfig {
  scope: QuizScope;
  examId: string;
  subjectId?: string;
  topicId?: string;
  chapterId?: string;
  questionCount: number;
}

export interface UserStats {
  score: number;
  totalQuestions: number;
  correctAnswers: number;
  streak: number;
  maxStreak: number;
  timeTaken: number; // in seconds
}

export enum GameStatus {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  PLAYING = 'PLAYING',
  FINISHED = 'FINISHED',
  ERROR = 'ERROR'
}

// Navigation Types
export type Screen =
  | 'HOME'
  | 'EXAM_SELECT'
  | 'SUBJECT_SELECT'
  | 'TOPIC_SELECT'
  | 'CHAPTER_SELECT'
  | 'QUIZ'
  | 'RESULT';

export interface AppState {
  screen: Screen;
  selectedCategory: ExamCategory | null;
  selectedExam: ExamData | null;
  selectedSubject: Subject | null;
  selectedTopic: Topic | null;
  selectedChapter: Chapter | null;
  quizConfig: QuizConfig | null;
  language: 'en' | 'hi';
}
