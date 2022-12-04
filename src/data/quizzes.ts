import { TriviaCategory, TriviaDifficulty, TriviaLimitQuestions, TriviaQuestionType } from './trivia-api.enums';

export interface Quizzes {
  _id?        : string;
  limitQuests : TriviaLimitQuestions;
  type        : TriviaQuestionType;
  category?   : TriviaCategory;
  tags?       : string[];
  difficulty? : TriviaDifficulty;
  regions?    : string[];
}

const QUIZZES: Quizzes[] = [
  { _id: 'QUIZ-01', limitQuests: TriviaLimitQuestions.L_10, category: TriviaCategory.ART_LITERATURE,    difficulty: TriviaDifficulty.MEDIUM, type: TriviaQuestionType.MULTIPLE_CHOICE },
  { _id: 'QUIZ-02', limitQuests: TriviaLimitQuestions.L_20, category: TriviaCategory.GEOGRAPHY,         difficulty: TriviaDifficulty.EASY,   type: TriviaQuestionType.MULTIPLE_CHOICE },
  { _id: 'QUIZ-03', limitQuests: TriviaLimitQuestions.L_15, category: TriviaCategory.MUSIC,             difficulty: TriviaDifficulty.HARD,   type: TriviaQuestionType.MULTIPLE_CHOICE },
  { _id: 'QUIZ-04', limitQuests: TriviaLimitQuestions.L_06, category: TriviaCategory.SCIENCE,           difficulty: TriviaDifficulty.EASY,   type: TriviaQuestionType.MULTIPLE_CHOICE },
  { _id: 'QUIZ-05', limitQuests: TriviaLimitQuestions.L_18, category: TriviaCategory.SCOCIETY_CULTURE,  difficulty: TriviaDifficulty.EASY,   type: TriviaQuestionType.MULTIPLE_CHOICE },
  { _id: 'QUIZ-06', limitQuests: TriviaLimitQuestions.L_10, category: TriviaCategory.SPORT_LEISURE,     difficulty: TriviaDifficulty.MEDIUM, type: TriviaQuestionType.MULTIPLE_CHOICE },
  { _id: 'QUIZ-07', limitQuests: TriviaLimitQuestions.L_10, category: TriviaCategory.FILM_TV,           difficulty: TriviaDifficulty.EASY,   type: TriviaQuestionType.MULTIPLE_CHOICE },
  { _id: 'QUIZ-08', limitQuests: TriviaLimitQuestions.L_15, category: TriviaCategory.GENERAL_KNOWLEDGE, difficulty: TriviaDifficulty.EASY,   type: TriviaQuestionType.MULTIPLE_CHOICE },
  { _id: 'QUIZ-09', limitQuests: TriviaLimitQuestions.L_18, category: TriviaCategory.FOOD_DRINK,        difficulty: TriviaDifficulty.MEDIUM, type: TriviaQuestionType.MULTIPLE_CHOICE },
  { _id: 'QUIZ-10', limitQuests: TriviaLimitQuestions.L_10, category: TriviaCategory.GENERAL_KNOWLEDGE, difficulty: TriviaDifficulty.HARD,   type: TriviaQuestionType.MULTIPLE_CHOICE }
];

export default QUIZZES