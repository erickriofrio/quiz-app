// Hooks
import { useContext, useState } from 'react'
// Components
import { Card, CardContent, CardHeader, List }                 from '@mui/material'
import { Box }                  from '@mui/system'
import Typography               from '@mui/material/Typography'
import Question                 from '../Question/Question'
import { AppContext }           from '../../context/AppContext'
// Data
import { Quizzes }              from '../../data'
// Styles
import './QuizForm.css';

const QuizForm = () => {

  const { currQuiz }: { currQuiz?: Quizzes } = useContext(AppContext);

  return (
    <Card className="QuizForm card" sx={{ maxHeight: 700, height: '100%', overflow: 'auto' }}>
      <CardHeader className='text' title={currQuiz?._id} titleTypographyProps={{ typography: { variant:'h5', component:'div' } }}></CardHeader>
      <CardContent>
        <Box maxHeight={700} height={'100%'} sx={{ width: '100%' }}>
          <List sx={{ width: '100%', overflow: 'auto', height: '100%', maxHeight: '500px' }}>
            { currQuiz?.questions?.length ?
              currQuiz?.questions?.map((_, i) => {
                return (
                  <Question key={i} idx={i}></Question>
                )}
              )
              : <span className='text'>Select a quiz</span> } 
          </List>
        </Box>
      </CardContent>
    </Card>
  )
}

export default QuizForm