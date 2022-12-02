export interface Question {
  _id     : string
  question: string
  quizId  : string
}

const QUESTIONS: Question[] = [
  { _id: 'QUEST-01', question: 'Question test 1?', quizId: 'QUIZ-01' }
];

export default QUESTIONS