import { useState } from 'react'
import { useParams } from 'react-router-dom'
import Button from '@mui/material/Button'
import './style.css'
import { RegistrationForm } from '../registration/RegisterForm'
import { LoginForm } from '../registration/LoginForm'

export function Login() {
  const { type } = useParams()
  const [formType, setFormType] = useState(type === 'register' ? type : 'login')

  const handleChange = () => {
    setFormType((prev) => (prev === 'register' ? 'login' : 'register'))
  }
  return (
    <div className="container">
      <div className="loginForm">
        {formType === 'register' ? (
          <>
            <h3>Registration</h3>
            <RegistrationForm />
            <p>Already have account</p>
            <Button size="small" variant="outlined" onClick={handleChange}>
              Login
            </Button>
          </>
        ) : (
          <>
            <h3>Login</h3>
            <LoginForm />
            <p>Don't have account</p>
            <Button size="small" variant="outlined" onClick={handleChange}>
              Register
            </Button>
          </>
        )}
      </div>
    </div>
  )
}
