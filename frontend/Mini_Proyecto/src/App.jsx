import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Components/Home'
import Log_in from './Components/Log_in'
import Mail_verifications from './Components/Mail_verifications'
import Register from './Components/Register'
import CodeVerification from './Components/Code_verification.jsx'
import Update_password from './Components/Update_password'


function App() {

  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/login' element={<Log_in/>} />
            <Route path='/register' element={<Register/>} />
            <Route path='/Mailverification' element={<Mail_verifications/>} />
            <Route path='/CodeVerification' element={<CodeVerification/>} />
            <Route path='/Update_password' element={<Update_password/>} />
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
