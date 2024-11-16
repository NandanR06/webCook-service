import React from 'react'
import Login from './Components/Script/Login'
import SingUp from './Components/Script/SignUp'
import { Route, Routes } from 'react-router-dom'
import Android from './Components/Script/Android'


export default function App() {
  return (
    <div>

    <Routes>
    <Route path='/signup' element={<SingUp/>} />
    <Route  path='/' element={<Login/>}/>
    <Route path='/android' element={<Android/>}/>
   
    </Routes>
    </div>
  )
}
