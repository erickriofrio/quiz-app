
// Styles
import './App.css'
// Hooks
import { useState }  from 'react'
// Components
import Navbar        from './components/Navbar/Navbar'
import Home          from './components/Home/Home'
import { Container } from '@mui/material'
import AppContext    from './context/AppContext'
// Data
import QUIZZES       from './data/quizzes'

const App = () => {

  return (
    <div className='App'>
      <Navbar></Navbar>
      <Container fixed>
        <Home></Home>
      </Container>
    </div>  
  )
}

export default App
