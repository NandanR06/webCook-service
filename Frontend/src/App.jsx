import React from 'react'
import Login from './Components/Script/Login'
import SingUp from './Components/Script/SignUp'
import { Route, Routes } from 'react-router-dom'
import Android from './Components/Script/Android'
import FrontPage from './Components/main/FrontPage'


export default function App() {
  return (
    <div>

     <Routes>
    <Route path='/signup' element={<SingUp/>} />
    <Route  path='/login' element={<Login/>}/>
    <Route path='/android' element={<Android/>}/> 
    <Route path='/' element={<FrontPage/>}/> 
   </Routes> 
    </div>
  )
}
 