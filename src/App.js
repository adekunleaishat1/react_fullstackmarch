import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Signup from './Signup'
import Login from './Login'
import Profile from './Profile'

const App = () => {
  let token = localStorage.getItem("token")
  return (
    <div>
       <Routes>
         <Route path='/' element={<Signup/>} />
         <Route path='/login' element={<Login/>} />
         <Route path='/profile' element={token? <Profile/> : <Navigate to="/login"/>} />
       </Routes>
    </div>
  )
}

export default App