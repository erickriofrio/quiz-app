// Hooks
import { useContext, useId, useState }        from 'react'
// Components
import { Card, CardActionArea, CardActions }  from '@mui/material'
import { CardHeader, CardMedia, CardContent } from '@mui/material'
import { Typography }                         from '@mui/material'
// Data
import { Quizzes }                            from '../../data'
import { AppContext }                         from '../../context/AppContext'
// Styles
import './QuizCard';
import '../../index.css';

const selectedQuiz = {
  backgroundColor: '#1976d2'
}

const unselectedQuiz = {
  backgroundColor: '#363636'
}

const QuizCard = ({ quiz }: { quiz: Quizzes }) => {

  const { currQuiz, setCurrQuiz } = useContext(AppContext);
  
  const selectQuiz = () => {
    setCurrQuiz(quiz)
  }
  const selected: boolean = currQuiz?._id === quiz?._id;

  return (
    <Card style={{ ...(selected ? selectedQuiz : unselectedQuiz) }} onClick={selectQuiz}>
      <CardActionArea>
        <CardHeader className='text' title={quiz._id}>
        </CardHeader>
        <CardContent>
          <Typography className='text' gutterBottom variant='h5' component='div'>
            { `${quiz.questions?.length} questions` }
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
