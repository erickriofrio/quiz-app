import { TriviaCategoryAPI, TriviaCategory, TriviaDifficulty } from './trivia-api.enums';
// Icons
import MusicNoteIcon                                           from '@mui/icons-material/MusicNote';
import BrushIcon                                               from '@mui/icons-material/Brush';
import TheatersIcon                                            from '@mui/icons-material/Theaters';
import FastfoodIcon                                            from '@mui/icons-material/Fastfood';
import SchoolIcon                                              from '@mui/icons-material/School';
import TerrainIcon                                             from '@mui/icons-material/Terrain';
import ScienceIcon                                             from '@mui/icons-material/Science';
import AccountBalanceIcon                                      from '@mui/icons-material/AccountBalance';
import SportsBasketballIcon                                    from '@mui/icons-material/SportsBasketball';
import MenuBookIcon                                            from '@mui/icons-material/MenuBook';

export const CATEGORIES_MAP = {
  [TriviaCategoryAPI.ART_LITERATURE]   : [TriviaCategory.ART_LITERATURE],
  [TriviaCategoryAPI.FILM_TV]          : [TriviaCategory.FILM_TV],
  [TriviaCategoryAPI.FOOD_DRINK]       : [TriviaCategory.FOOD_DRINK],
  [TriviaCategoryAPI.GENERAL_KNOWLEDGE]: [TriviaCategory.GENERAL_KNOWLEDGE],
  [TriviaCategoryAPI.GEOGRAPHY]        : [TriviaCategory.GEOGRAPHY],
  [TriviaCategoryAPI.HISTORY]          : [TriviaCategory.HISTORY],
  [TriviaCategoryAPI.MUSIC]            : [TriviaCategory.MUSIC],
  [TriviaCategoryAPI.SCIENCE]          : [TriviaCategory.SCIENCE],
  [TriviaCategoryAPI.SOCIETY_CULTURE]  : [TriviaCategory.SOCIETY_CULTURE],
  [TriviaCategoryAPI.SPORT_LEISURE]    : [TriviaCategory.SPORT_LEISURE]
};

export const DIFFICULTY_COLORS = {
  [TriviaDifficulty.EASY]  : '#11b382',
  [TriviaDifficulty.MEDIUM]: '#fac863',
  [TriviaDifficulty.HARD]  : '#e16875'
};

export const CATEGORIES_ICONS = {
  [TriviaCategoryAPI.ART_LITERATURE]   : BrushIcon,
  [TriviaCategoryAPI.FILM_TV]          : TheatersIcon,
  [TriviaCategoryAPI.FOOD_DRINK]       : FastfoodIcon,
  [TriviaCategoryAPI.GENERAL_KNOWLEDGE]: SchoolIcon,
  [TriviaCategoryAPI.GEOGRAPHY]        : TerrainIcon,
  [TriviaCategoryAPI.HISTORY]          : AccountBalanceIcon,
  [TriviaCategoryAPI.MUSIC]            : MusicNoteIcon,
  [TriviaCategoryAPI.SCIENCE]          : ScienceIcon,
  [TriviaCategoryAPI.SOCIETY_CULTURE]  : MenuBookIcon,
  [TriviaCategoryAPI.SPORT_LEISURE]    : SportsBasketballIcon,
};