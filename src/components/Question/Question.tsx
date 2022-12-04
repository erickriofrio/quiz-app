import React, { useContext }            from 'react'
// Hooks
import useId                            from '@mui/material/utils/useId'
// Components
import { List, ListItem, ListItemText } from '@mui/material'
// Context
import { AppContext }                   from '../../context/AppContext'
// Data
import { Quizzes }                      from '../../data'


const Question = ({ idx }: { idx: number }) => {
  
  const { currQuiz }: { currQuiz?: Quizzes } = useContext(AppContext)

  return (
    <ListItem sx={{ paddingX: '2rem' }}>
      <ListItemText>
        <span className='text'>{ (idx + 1 + ' - ') + currQuiz?.questions[idx].question }</span>
      </ListItemText>
    </ListItem>
  )
}

export default Question