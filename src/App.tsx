import React from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './components/header/Header'
import Menu from './components/menu/Menu'
import Home from './components/home/Home'
import Todo from './components/exercises/todo/Todo'
import CnpjValidator from './components/exercises/cnpj-validator/CnpjValidate'


function App() {
 

  return (
    <>
     <Header/>
     <Menu/>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/cnpj-validator' element={<CnpjValidator/>} />
      <Route path='/todo' element={<Todo/>} />
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
