import { Answer }              from './answers';
import QUESTIONS, { Question } from './questions';

export interface Quizzes {
  _id      : string;
  questions: Question[];
  category : QuizCategory;
  answers? : Answer[];
}

export enum QuizCategory {
  SCIENCE = 'SCIENCE',
  GENERAL = 'GENERAL'
}

const QUIZZES: Quizzes[] = [
  { _id: 'QUIZ-01', category: QuizCategory.GENERAL, questions: QUESTIONS.filter(qz => qz.quizId === 'QUIZ-01') },
  { _id: 'QUIZ-02', category: QuizCategory.GENERAL, questions: QUESTIONS.filter(qz => qz.quizId === 'QUIZ-02') },
  { _id: 'QUIZ-03', category: QuizCategory.GENERAL, questions: QUESTIONS.filter(qz => qz.quizId === 'QUIZ-03') },
  { _id: 'QUIZ-04', category: QuizCategory.GENERAL, questions: QUESTIONS.filter(qz => qz.quizId === 'QUIZ-04') }
];

export default QUIZZES