import { TriviaCategory, TriviaDifficulty, TriviaQuestionType } from './trivia-api.enums';

export interface QuestionType {
  id?              : string;
  category?        : TriviaCategory;
  correctAnswer?   : string;
  incorrectAnswers?: string[];
  question?        : string;
  tags?            : string[];
  type?            : TriviaQuestionType;
  difficulty?      : TriviaDifficulty;
  regions?         : string[];
}