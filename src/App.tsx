import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import AuthContainer from './components/AuthContainer'
import { get_tokens } from './components/api_requests'


function App() {
  const [auth, setAuth] = useState<boolean>(false)
  const [register, setRegister] = useState<boolean>(false)
  const [forgotPass, setForgotPass] = useState<boolean>(false)

  useEffect(() => {
    if (localStorage.getItem("access") === null || localStorage.getItem("refresh") === null) {
      setAuth(true)
    }

    else if (localStorage.getItem("register") === "true") {
      setRegister(true) 
    }

    else if (localStorage.getItem("forgotPass") === "true") {
      setForgotPass(true)
    }

    else {
      get_tokens()
      .then(res => {
        localStorage.setItem("access", res.data.access)
      })
      .catch(() => setAuth(true))
    }
  }, [])

  return (
    <BrowserRouter>
        {auth && <Navigate to='/login' /> || register && <Navigate to='/register' />  
        || forgotPass && <Navigate to='/forgot-password' /> || <Navigate to='/' />}
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path='/login' element={<AuthContainer type='login' />} />
          <Route path='/register' element={<AuthContainer type='register' />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
