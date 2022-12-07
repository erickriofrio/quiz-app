import { TriviaCategoryAPI, TriviaDifficulty, TriviaLimitQuestions } from './trivia-api.enums';

/**
 * 
 * @param category 
 * @param limit 
 * @param difficulty 
 * @returns 
 */
export const triviaUri = (category: TriviaCategoryAPI = TriviaCategoryAPI.ART_LITERATURE, limit: TriviaLimitQuestions = TriviaLimitQuestions.L_05, difficulty: TriviaDifficulty = TriviaDifficulty.EASY) => {

  return `https://the-trivia-api.com/api/questions?categories=${category}&limit=${limit}&difficulty=${difficulty}`;
}