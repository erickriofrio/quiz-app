// Hooks
import { useState } from 'react'
// Components
import Grid         from '@mui/material/Grid';
import { Box }      from '@mui/material';
import QuizForm     from '../QuizForm/QuizForm';
import QuizList     from '../QuizList/QuizList';

const Home = () => {
  return (
    <Box marginX={0} sx={{ flexGrow: 1, marginTop: '64px' }}>
      <Grid container spacing={20} padding={0}>
        <Grid item xs={4} md={4} lg={4} xl={4}>
          <QuizList></QuizList>
        </Grid>
        <Grid item padding={0} xs={8} md={8} lg={8} xl={8}>
          <QuizForm></QuizForm>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Home
