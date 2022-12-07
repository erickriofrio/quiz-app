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


const Question = ({ idx, question }: { idx: number; question: QuestionType }) => {
  
  const { currQuiz }: { currQuiz?: Quizzes } = useContext(AppContext);

  return (
    <ListItem sx={{ paddingX: '2rem' }}>
      {/* <ListItemText> */}
        {/* <span className='text'>{ (idx + 1 + ' - ') + question.question }</span> */}
      {/* </ListItemText> */}
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">
          <span className='text'>{ (idx + 1 + ' - ') + question.question }</span>
        </FormLabel>
        <RadioGroup name="radio-buttons-group">
          { shuffle([question.correctAnswer, ...question.incorrectAnswers || []]).map((answer, i) => {
              return <FormControlLabel className='text' color='#ffffff' key={i} value={answer} control={<Radio />} label={answer} />
            })
          }
        </RadioGroup>
      </FormControl>
    </ListItem>
  )
}

export default Question