import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address or username</Form.Label>
          <Form.Control type="email" placeholder="Who are you?" />
          <Form.Text className="text-white">
            Register <Link to="/register" onClick={() => localStorage.setItem("register", "true")}>here</Link>
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit" className='mt-6 w-full'>
          Login
        </Button>
      </Form>
    </>   
  )
}

export default Login