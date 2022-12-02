// Hooks
import { useContext, useId, useState }        from 'react'
// Components
import { Card, CardActionArea, CardActions }  from '@mui/material'
import { CardHeader, CardMedia, CardContent } from '@mui/material'
import { Typography }                         from '@mui/material'
// Data
import { Quizzes }                            from '../../data'
import { AppContext }                         from '../../context/AppContext'

const QuizCard = ({ quiz }: { quiz: Quizzes }) => {

  const { currQuiz, setCurrQuiz } = useContext(AppContext);
  
  const selectQuiz = () => {
    setCurrQuiz(quiz)
  }

  return (
    <Card sx={{ maxWidth: 345 }} onClick={selectQuiz}>
      <CardActionArea>
        <CardHeader title={quiz._id}>
        </CardHeader>
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            { `${quiz.questions?.length} questions` }
          </Typography>
        </CardContent>
        <CardActions sx={{ paddingLeft: '6.5rem' }}>
          { quiz.category }
        </CardActions>
      </CardActionArea>
    </Card>
  )
}

export default QuizCard
