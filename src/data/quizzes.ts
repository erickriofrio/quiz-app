import { TriviaCategoryAPI, TriviaDifficulty, TriviaLimitQuestions, TriviaQuestionType } from './trivia-api.enums';

export interface Quizzes {
  _id?        : string;
  limitQuests : TriviaLimitQuestions;
  type?       : TriviaQuestionType;
  category?   : TriviaCategoryAPI;
  tags?       : string[];
  difficulty? : TriviaDifficulty;
  regions?    : string[];
}

const QUIZZES: Quizzes[] = [
  { _id: 'QUIZ-01', limitQuests: TriviaLimitQuestions.L_10, category: TriviaCategoryAPI.ART_LITERATURE,    difficulty: TriviaDifficulty.MEDIUM, type: TriviaQuestionType.MULTIPLE_CHOICE },
  { _id: 'QUIZ-02', limitQuests: TriviaLimitQuestions.L_20, category: TriviaCategoryAPI.GEOGRAPHY,         difficulty: TriviaDifficulty.EASY,   type: TriviaQuestionType.MULTIPLE_CHOICE },
  { _id: 'QUIZ-03', limitQuests: TriviaLimitQuestions.L_15, category: TriviaCategoryAPI.MUSIC,             difficulty: TriviaDifficulty.HARD,   type: TriviaQuestionType.MULTIPLE_CHOICE },
  { _id: 'QUIZ-04', limitQuests: TriviaLimitQuestions.L_06, category: TriviaCategoryAPI.SCIENCE,           difficulty: TriviaDifficulty.EASY,   type: TriviaQuestionType.MULTIPLE_CHOICE },
  { _id: 'QUIZ-05', limitQuests: TriviaLimitQuestions.L_18, category: TriviaCategoryAPI.SOCIETY_CULTURE,   difficulty: TriviaDifficulty.EASY,   type: TriviaQuestionType.MULTIPLE_CHOICE },
  { _id: 'QUIZ-06', limitQuests: TriviaLimitQuestions.L_10, category: TriviaCategoryAPI.SPORT_LEISURE,     difficulty: TriviaDifficulty.MEDIUM, type: TriviaQuestionType.MULTIPLE_CHOICE },
  { _id: 'QUIZ-07', limitQuests: TriviaLimitQuestions.L_10, category: TriviaCategoryAPI.FILM_TV,           difficulty: TriviaDifficulty.EASY,   type: TriviaQuestionType.MULTIPLE_CHOICE },
  { _id: 'QUIZ-08', limitQuests: TriviaLimitQuestions.L_15, category: TriviaCategoryAPI.GENERAL_KNOWLEDGE, difficulty: TriviaDifficulty.EASY,   type: TriviaQuestionType.MULTIPLE_CHOICE },
  { _id: 'QUIZ-09', limitQuests: TriviaLimitQuestions.L_18, category: TriviaCategoryAPI.FOOD_DRINK,        difficulty: TriviaDifficulty.MEDIUM, type: TriviaQuestionType.MULTIPLE_CHOICE },
  { _id: 'QUIZ-10', limitQuests: TriviaLimitQuestions.L_10, category: TriviaCategoryAPI.GENERAL_KNOWLEDGE, difficulty: TriviaDifficulty.HARD,   type: TriviaQuestionType.MULTIPLE_CHOICE }
];

export default QUIZZES