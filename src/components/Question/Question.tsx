import React, { useContext }            from 'react';
import { shuffle }                      from 'lodash';
// Hooks
import useId                            from '@mui/material/utils/useId';
// Components
import { List, ListItem, ListItemText } from '@mui/material';
import Radio                            from '@mui/material/Radio';
import RadioGroup                       from '@mui/material/RadioGroup';
import FormControlLabel                 from '@mui/material/FormControlLabel';
import FormControl                      from '@mui/material/FormControl';
import FormLabel                        from '@mui/material/FormLabel';
// Context
import { AppContext }                   from '../../context/AppContext';
// Data
import { QuestionType, Quizzes }        from '../../data';
// Styles
import './Question';


const Question = ({ idx, question }: { idx: number; question: QuestionType }) => {
  
  const { currQuiz }: { currQuiz?: Quizzes } = useContext(AppContext);

  return (
    <ListItem sx={{ paddingX: '2rem' }}>
      <FormControl>
        <FormLabel>
          <h3 className='text'>{ (idx + 1 + ' - ') + question.question }</h3>
        </FormLabel>
        <RadioGroup name="radio-buttons-group">
          { shuffle([question.correctAnswer, ...question.incorrectAnswers || []]).map((answer, i) => {
              return <FormControlLabel
              sx={{
                ':hover'       : { color: '#1976d2' },
                '&.Mui-checked': { color: '#1976d2' }
              }}
              className='text' color='#ffffff' key={i} value={answer} control={<Radio sx={{
                color          : '#ffffff',
                ':hover'       : { color: '#1976d2' },
                '&.Mui-checked': { color: '#1976d2' }
              }} className='radio-answers' />} label={answer} />
            })
          }
        </RadioGroup>
      </FormControl>
    </ListItem>
  )
}

export default Question