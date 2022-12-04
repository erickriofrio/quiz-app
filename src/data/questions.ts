export interface Question {
  _id     : string
  question: string
  quizId  : string
}

const QUESTIONS: Question[] = [
  { _id: 'QUEST-01', question: 'Question test 1?', quizId: 'QUIZ-01' },
  { _id: 'QUEST-02', question: 'Question test 1?', quizId: 'QUIZ-02' },
  { _id: 'QUEST-03', question: 'Question test 1?', quizId: 'QUIZ-03' },
  { _id: 'QUEST-04', question: 'Question test 1?', quizId: 'QUIZ-04' },
  // q2
  { _id: 'QUEST-05', question: 'Question test 2?', quizId: 'QUIZ-01' },
  { _id: 'QUEST-06', question: 'Question test 2?', quizId: 'QUIZ-02' },
  { _id: 'QUEST-07', question: 'Question test 2?', quizId: 'QUIZ-03' },
  { _id: 'QUEST-08', question: 'Question test 2?', quizId: 'QUIZ-04' },
  // q3
  { _id: 'QUEST-09', question: 'Question test 3?', quizId: 'QUIZ-01' },
  { _id: 'QUEST-10', question: 'Question test 3?', quizId: 'QUIZ-02' },
  { _id: 'QUEST-11', question: 'Question test 3?', quizId: 'QUIZ-03' },
  { _id: 'QUEST-12', question: 'Question test 3?', quizId: 'QUIZ-04' },
  // q4
  { _id: 'QUEST-13', question: 'Question test 4?', quizId: 'QUIZ-01' },
  { _id: 'QUEST-14', question: 'Question test 4?', quizId: 'QUIZ-02' },
  { _id: 'QUEST-15', question: 'Question test 4?', quizId: 'QUIZ-03' },
  { _id: 'QUEST-16', question: 'Question test 4?', quizId: 'QUIZ-04' },
  // q5
  { _id: 'QUEST-17', question: 'Question test 5?', quizId: 'QUIZ-01' },
  { _id: 'QUEST-18', question: 'Question test 5?', quizId: 'QUIZ-02' },
  { _id: 'QUEST-19', question: 'Question test 5?', quizId: 'QUIZ-03' },
  { _id: 'QUEST-20', question: 'Question test 5?', quizId: 'QUIZ-04' },
  // q6
  { _id: 'QUEST-21', question: 'Question test 6?', quizId: 'QUIZ-01' },
  { _id: 'QUEST-22', question: 'Question test 6?', quizId: 'QUIZ-02' },
  { _id: 'QUEST-23', question: 'Question test 6?', quizId: 'QUIZ-03' },
  { _id: 'QUEST-24', question: 'Question test 6?', quizId: 'QUIZ-04' },
  // q7
  { _id: 'QUEST-25', question: 'Question test 7?', quizId: 'QUIZ-01' },
  { _id: 'QUEST-26', question: 'Question test 7?', quizId: 'QUIZ-02' },
  { _id: 'QUEST-27', question: 'Question test 7?', quizId: 'QUIZ-03' },
  { _id: 'QUEST-28', question: 'Question test 7?', quizId: 'QUIZ-04' },
  // q8
  { _id: 'QUEST-29', question: 'Question test 8?', quizId: 'QUIZ-01' },
  { _id: 'QUEST-30', question: 'Question test 8?', quizId: 'QUIZ-02' },
  { _id: 'QUEST-31', question: 'Question test 8?', quizId: 'QUIZ-03' },
  { _id: 'QUEST-32', question: 'Question test 8?', quizId: 'QUIZ-04' },
  // q9
  { _id: 'QUEST-33', question: 'Question test 9?', quizId: 'QUIZ-01' },
  { _id: 'QUEST-34', question: 'Question test 9?', quizId: 'QUIZ-02' },
  { _id: 'QUEST-35', question: 'Question test 9?', quizId: 'QUIZ-03' },
  { _id: 'QUEST-36', question: 'Question test 9?', quizId: 'QUIZ-04' },
  // q10
  { _id: 'QUEST-37', question: 'Question test 10?', quizId: 'QUIZ-01' },
  { _id: 'QUEST-38', question: 'Question test 10?', quizId: 'QUIZ-02' },
  { _id: 'QUEST-39', question: 'Question test 10?', quizId: 'QUIZ-03' },
  { _id: 'QUEST-40', question: 'Question test 10?', quizId: 'QUIZ-04' }
];

export default QUESTIONS