import React, { useId } from 'react'
// Components
import { List } from '@mui/material'
import { Box }  from '@mui/system'
import QuizCard from '../QuizCard/QuizCard';
import Grid     from '@mui/material/Grid';
// Data
import QUIZZES  from '../../data/quizzes';

const QuizList = () => {
  return (
    <Grid container marginTop={2} maxWidth={400} spacing={8} sx={{ maxHeight: 700, overflow: 'auto' }}>
      {QUIZZES.map(quiz => {
        return (
          <Grid key={useId()} item xs={6} sm={6} md={6} lg={12} xl={12}>
            <QuizCard quiz={quiz}></QuizCard>
          </Grid>
        )}
      )}
    </Grid>
  )
}

export default QuizList