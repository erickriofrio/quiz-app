import QUESTIONS, { Question } from './questions';

export interface Quizzes {
  _id      : string
  questions: Question[]
  category : QuizCategory
}

export enum QuizCategory {
  SCIENCE = 'SCIENCE',
  GENERAL = 'GENERAL'
}

const QUIZZES: Quizzes[] = [
  { _id: 'QUIZ-01',  category: QuizCategory.GENERAL, questions: QUESTIONS.filter(qz => qz.quizId === 'QUIZ-01') }
];

export default QUIZZES