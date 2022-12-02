
// Styles
import './App.css'
// Hooks
import { useState } from 'react'
// Components
import Navbar       from './components/Navbar/Navbar'
import Home         from './components/Home/Home'

const App = () => {

  return (
    <div className="App">
      <Navbar></Navbar>
      <Home></Home>
    </div>
  )
}

export default App
