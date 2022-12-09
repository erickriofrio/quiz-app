// Hooks
import { useContext, useId, useState }        from 'react'
// Components
import { Card, CardActionArea, CardActions }  from '@mui/material'
import { CardHeader, CardMedia, CardContent } from '@mui/material'
import { Typography }                         from '@mui/material'
// Data
import { Quizzes, triviaUri }                 from '../../data'
import { AppContext }                         from '../../context/AppContext'
// Styles
import './QuizCard.css';
import '../../index.css';

const selectedQuiz = {
  backgroundColor: '#1976d2'
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
    <Card className='quiz-card' style={{ ...(selected ? selectedQuiz : unselectedQuiz) }} onClick={selectQuiz}>
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
            <p>{ quiz.category }</p>
          </div>
        </CardActions>
      </CardActionArea>
    </Card>
  )
}

export default QuizCard
