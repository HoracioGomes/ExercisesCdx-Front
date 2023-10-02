import React from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './components/header/Header'
import Menu from './components/menu/Menu'
import Home from './components/home/Home'
import ExerciseB from './components/exercises/exerciseB/ExerciseB'


function App() {
 

  return (
    <>
     <Header/>
     <Menu/>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/exercise2' element={<ExerciseB/>} />
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
