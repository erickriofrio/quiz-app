// Hooks
import { useState } from 'react'
// Components
import Grid         from '@mui/material/Grid';
import { Box }      from '@mui/material';
import QuizForm     from '../QuizForm/QuizForm';
import QuizList     from '../QuizList/QuizList';

const Home = () => {
  return (
    <Box marginLeft={0} width={'100%'} sx={{ flexGrow: 1, marginTop: '64px' }}>
      <Grid container width={'100%'} height={'100%'} spacing={2}>
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
          <QuizList></QuizList>
        </Grid>
        <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
          <QuizForm></QuizForm>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Home
