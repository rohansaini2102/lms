// Data exports
export * from './types';
export { RAS_EXAM } from './exams/rajasthan/ras';
export { REET_EXAM } from './exams/rajasthan/reet';
export { SSC_CGL_EXAM } from './exams/national/ssc-cgl';

import { ExamData, ExamCategory, Question, Subject, Topic, Chapter } from './types';
import { RAS_EXAM } from './exams/rajasthan/ras';
import { REET_EXAM } from './exams/rajasthan/reet';
import { SSC_CGL_EXAM } from './exams/national/ssc-cgl';

// All exams data
export const ALL_EXAMS: ExamData[] = [
  RAS_EXAM,
  REET_EXAM,
  SSC_CGL_EXAM,
];

// Group exams by category
export const EXAM_CATEGORIES_DATA: ExamCategory[] = [
  {
    id: 'state-psc',
    name: 'State PSC',
    nameHi: 'राज्य लोक सेवा आयोग',
    icon: 'MapPin',
    color: '#0891B2',
    exams: [RAS_EXAM]
  },
  {
    id: 'ssc',
    name: 'SSC',
    nameHi: 'कर्मचारी चयन आयोग',
    icon: 'Building2',
    color: '#DC2626',
    exams: [SSC_CGL_EXAM]
  },
  {
    id: 'teaching',
    name: 'Teaching',
    nameHi: 'शिक्षण',
    icon: 'GraduationCap',
    color: '#F59E0B',
    exams: [REET_EXAM]
  }
];

// Utility functions for quiz
export function getExamById(examId: string): ExamData | undefined {
  return ALL_EXAMS.find(exam => exam.id === examId);
}

export function getSubjectById(exam: ExamData, subjectId: string): Subject | undefined {
  return exam.subjects.find(subject => subject.id === subjectId);
}

export function getTopicById(subject: Subject, topicId: string): Topic | undefined {
  return subject.topics.find(topic => topic.id === topicId);
}

export function getChapterById(topic: Topic, chapterId: string): Chapter | undefined {
  return topic.chapters.find(chapter => chapter.id === chapterId);
}

// Get all questions from an exam
export function getExamQuestions(exam: ExamData): Question[] {
  const questions: Question[] = [];
  exam.subjects.forEach(subject => {
    subject.topics.forEach(topic => {
      topic.chapters.forEach(chapter => {
        questions.push(...chapter.questions);
      });
    });
  });
  return questions;
}

// Get all questions from a subject
export function getSubjectQuestions(subject: Subject): Question[] {
  const questions: Question[] = [];
  subject.topics.forEach(topic => {
    topic.chapters.forEach(chapter => {
      questions.push(...chapter.questions);
    });
  });
  return questions;
}

// Get all questions from a topic
export function getTopicQuestions(topic: Topic): Question[] {
  const questions: Question[] = [];
  topic.chapters.forEach(chapter => {
    questions.push(...chapter.questions);
  });
  return questions;
}

// Get questions from a chapter
export function getChapterQuestions(chapter: Chapter): Question[] {
  return chapter.questions;
}

// Shuffle array (Fisher-Yates algorithm)
export function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Get random questions for quiz
export function getQuizQuestions(
  questions: Question[],
  count: number = 20
): Question[] {
  const shuffled = shuffleArray(questions);
  return shuffled.slice(0, Math.min(count, shuffled.length));
}

// Count total questions in various scopes
export function countExamQuestions(exam: ExamData): number {
  return getExamQuestions(exam).length;
}

export function countSubjectQuestions(subject: Subject): number {
  return getSubjectQuestions(subject).length;
}

export function countTopicQuestions(topic: Topic): number {
  return getTopicQuestions(topic).length;
}
