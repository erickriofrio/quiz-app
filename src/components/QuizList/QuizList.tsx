import React, { useId }                       from 'react'
// Components
import { List }                               from '@mui/material'
import { Box }                                from '@mui/system'
import { CardHeader, CardMedia, CardContent } from '@mui/material'
import Card                                   from '@mui/material/Card';
import QuizCard                               from '../QuizCard/QuizCard';
import Grid                                   from '@mui/material/Grid';
// Data
import QUIZZES                                from '../../data/quizzes';
// Style
import './QuizList.css';

const QuizList = () => {
  return (
    <Card className='QuizList card' sx={{ maxHeight: 700, height: '100%', overflow: 'auto' }}>
      <CardHeader className='text' title={'Quiz List'}></CardHeader>
      <CardContent>
        <Grid container maxWidth={800} sx={{ maxHeight: 700, height: '100%', overflow: 'auto' }}>
          {QUIZZES.map(quiz => {
            return (
              <Grid key={useId()} item xs={12} sm={12} md={12} lg={6} xl={6} padding={2}>
                <QuizCard quiz={quiz}></QuizCard>
              </Grid>
            )}
          )}
        </Grid>
      </CardContent>
    </Card>
  )
}

export default QuizList