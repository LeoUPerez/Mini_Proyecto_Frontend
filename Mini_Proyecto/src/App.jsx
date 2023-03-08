import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Components/Home/Home.jsx'
import Log_in from './Components/Login/Log_in.jsx'
import Mail_verifications from './Components/Mail Verification/Mail_verifications.jsx'
import Register from './Components/Register/Register.jsx'
import CodeVerification from './Components/Code Verification/Code_verification.jsx'
import Update_password from './Components/Update Password/Update_password.jsx'


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
