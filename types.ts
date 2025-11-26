
export interface Question {
  id: string;
  text: string;
  options: string[];
  correctAnswer: number; // 0-3 index
  explanation: string;
}

export interface QuizConfig {
  examId: string;
  subjectId: string;
  topicId: string;
  subtopicId: string;
  questionCount: number;
}

export enum GameStatus {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  PLAYING = 'PLAYING',
  FINISHED = 'FINISHED',
  ERROR = 'ERROR'
}

export interface ExamCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export interface Subject {
  id: string;
  name: string;
  topics: Topic[];
}

export interface Topic {
  id: string;
  name: string;
  subtopics: Subtopic[];
}

export interface Subtopic {
  id: string;
  name: string;
}

export interface UserStats {
  score: number;
  totalQuestions: number;
  correctAnswers: number;
  streak: number;
  maxStreak: number;
  timeTaken: number; // in seconds
}
