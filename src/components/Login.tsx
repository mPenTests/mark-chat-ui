import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import { login } from './api_requests';
import { motion } from 'framer-motion';
import { Spinner } from 'react-bootstrap';


function Login() {
  const [username, setUsername] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)
  const navigate = useNavigate()


  return (
    <>
      <Form as={motion.form} animate={error ? {x: [0, -10, 10, -10, 0 ]} : {x: 0}} transition={{duration: 0.4}} onSubmit={(event: React.ChangeEvent<HTMLFormElement>): void => {
        event.preventDefault()
        setLoading(true)
        setTimeout(() => {
          login(username, password)
          .then(response => {
            setLoading(false)
            localStorage.setItem("access", response.data.access)
            localStorage.setItem("refresh", response.data.refresh)
            navigate("/")
          })
          .catch((err) => {
            setError(true)
            setLoading(false)
            console.log(err.response.data)
          })
        }, 1000)

      }}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address or username</Form.Label>
          <Form.Control type={"username"} required onChange={(event: React.ChangeEvent<HTMLInputElement>): void => {setUsername(event.target.value)} } placeholder="Who are you?" />
          <Form.Text className="text-white">
            Register <Link to="/register" onClick={() => localStorage.setItem("register", "true")}>here</Link>
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={(event: React.ChangeEvent<HTMLInputElement>): void => {setPassword(event.target.value)} } required />
          <Form.Text className="text-white">
            Forgot the damn thing? Reset it <Link to={"/forgot-password"} onClick={() => localStorage.setItem("forgot", "true")}>here</Link>
          </Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit" onClick={() => setError(false)}  className='mt-6 w-full'>
          {loading ? <Spinner as={"span"} style={{ height: "20px", width: "20px" }} animation="border" variant="light" /> : "Login"}
        </Button>
      </Form>
    </>   
  )
}

export default Login