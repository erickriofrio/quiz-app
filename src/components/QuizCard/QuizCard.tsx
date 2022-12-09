// Hooks
import { useContext, useId, useState }        from 'react'
// Components
import { Card, CardActionArea, CardActions }  from '@mui/material'
import { CardHeader, CardMedia, CardContent } from '@mui/material'
import { Typography, Icon }                   from '@mui/material'
// Data
import { Quizzes, triviaUri }                 from '../../data'
import { AppContext }                         from '../../context/AppContext'
import { CATEGORIES_ICONS, CATEGORIES_MAP, DIFFICULTY_COLORS }                     from '../../data/constants'
// Styles
import './QuizCard.css';
import '../../index.css';

const selectedQuiz = {
  backgroundColor: '#1976d2',
  transform      : 'scale(1.1)',
  borderColor    : '#1976d2',
  borderWidth    : '4px',
  borderStyle    : 'solid'
}

const unselectedQuiz = {
  backgroundColor: '#363636'
}

const QuizCard = ({ quiz }: { quiz: Quizzes }) => {

  const { currQuiz, setCurrQuiz }   = useContext(AppContext);
  const { questions, setQuestions } = useContext(AppContext);
  
  const selectQuiz = () => {

    const { category, limitQuests, difficulty } = quiz;
    fetch(triviaUri(category, limitQuests, difficulty), { method: 'GET' })
    .then(async (res) => {
      const quests = await res.json();
      setQuestions(quests);
    })
    
    setCurrQuiz(quiz)
  }
  const selected: boolean = currQuiz?._id === quiz?._id;

  return (
    <Card className='quiz-card' style={{ ...(selected ? selectedQuiz : unselectedQuiz), backgroundColor: DIFFICULTY_COLORS[quiz.difficulty!], maxHeight: '225px' }} onClick={selectQuiz}>
      <CardActionArea>
        <CardHeader className='text' title={quiz._id}>
        </CardHeader>
        <CardContent>
          <Typography className='text' gutterBottom variant='h5' component='div'>
            { `${quiz.limitQuests} questions` }
          </Typography>
        </CardContent>
        <CardActions>
          <div className='category text'>
            <Icon component={CATEGORIES_ICONS[quiz.category!]}></Icon>
            <p>{ CATEGORIES_MAP[quiz?.category!] }</p>
          </div>
        </CardActions>
      </CardActionArea>
    </Card>
  )
}

export default QuizCard
