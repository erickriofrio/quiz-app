// Hooks
import { useContext, useState } from 'react'
// Components
import Question                 from '../Question/Question'
import { List }                 from '@mui/material'
import { Box }                  from '@mui/system'
import {AppContext}               from '../../context/AppContext'
import { Quizzes } from '../../data'

const QuizForm = () => {

  const { currQuiz }: { currQuiz?: Quizzes } = useContext(AppContext);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <List sx={{ width: '100%', maxWidth: 600, overflow: 'auto', maxHeight: 700, height: 700 }}>
      { currQuiz?.questions?.length ?
        currQuiz?.questions?.map((_, i) => {
          return (
            <Question key={i} idx={i}></Question>
          )}
        )
        : 'Select a quiz'} 
      </List>
    </Box>
  )
}

export default QuizForm