// Hooks
import { useContext, useState } from 'react'
// Components
import { Button, Card, CardContent, CardHeader, List } from '@mui/material'
import { Box }                                         from '@mui/system'
import Question                                        from '../Question/Question'
import { AppContext }                                  from '../../context/AppContext'
// Data
import { QuestionType, Quizzes }                       from '../../data'
// Styles
import './QuizForm.css';

const QuizForm = () => {

  const { currQuiz } : { currQuiz?: Quizzes }      = useContext(AppContext);
  const { questions }: { currQuiz?: QuestionType } = useContext(AppContext);
  const { questManager }                           = useContext(AppContext);
  const handleSubmit = (event) => {
    event.preventDefault();
  }

  return (
    <Card className="QuizForm card" sx={{ height: '100%', overflow: 'auto' }}>
      <CardHeader className='text' title={currQuiz?._id} titleTypographyProps={{ typography: { variant:'h5', component:'div' } }}></CardHeader>
      <CardContent>
        <Box maxHeight={600} height={'100%'} sx={{ width: '100%' }}>
          <form onSubmit={handleSubmit}>
            <List sx={{ width: '100%', overflow: 'auto', height: '100%', maxHeight: '660px' }}>
              { questions?.length ?
                questions?.map((question: QuestionType, i: number) => {
                  return (
                    <Question key={i} idx={i} question={question}></Question>
                  )}
                )
                : <span className='text'>Select a quiz</span> } 
            </List>
            { questions?.length > 0 && <Button type='submit' variant="contained">SUBMIT</Button>}
          </form>
        </Box>
      </CardContent>
    </Card>
  )
}

export default QuizForm