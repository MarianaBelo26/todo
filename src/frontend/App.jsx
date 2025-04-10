import React, { useEffect, useState } from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import {useTranslation} from 'react-i18next'
import './i18n'
import Nav from './pages/HomePage/Nav'
import GetStarted from './pages/HomePage/GetStarted'
import Clients from './pages/HomePage/Clients'
import Plans from './pages/HomePage/Plans'
import Contacts from './pages/HomePage/Contact'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Payment from './pages/Payment'
import Todo from './pages/Todo/Todo'


function App() {
  
  const {i18n} = useTranslation()
  const [isUserConected, setIsUserConected] = useState(false)

  const changeLanguage = (lng) =>{
    i18n.changeLanguage(lng)
  }

  

  return (
    <Router basename='/todo'>
      <Nav isUserConected={isUserConected} setIsUserConected={setIsUserConected} changeLanguage={changeLanguage} />
      <Routes>
        <Route path='/' element={
          <>
            <GetStarted />
            <Clients />
            <Plans />
            <Contacts />
          </>
        } />
        <Route path='/login' element={<Login setIsUserConected={setIsUserConected} />} />
        <Route path='/signup' element={<SignUp setIsUserConected={setIsUserConected} />}  />
        <Route path='/payment' element={<Payment setIsUserConected={setIsUserConected} />} />
        <Route path='/tasks' element={<Todo  />} />
      </Routes>
    </Router>
  )
}

export default App
