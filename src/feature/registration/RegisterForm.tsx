import { ChangeEvent, useState } from 'react'
import { Button } from '@mui/material'

import { useNavigate } from 'react-router-dom'
import { TextField } from '../../shared/form/TextField'
import { useAuth } from '../../shared/context/auth/AuthProvider'
import { AuthProp, RegistrationFormDataProp } from '../type/type'

export function RegistrationForm() {
  const [data, setData] = useState<RegistrationFormDataProp>({
    name: '',
    email: '',
    password: '',
  })

  const navigate = useNavigate()
  const auth: null | AuthProp = useAuth()

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setData((prev) => ({
      ...prev,
      [target.name]: target.value,
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (auth === null) {
      navigate('/signIn')
    } else {
      auth.signIn(JSON.stringify(data), () => {
        navigate('/notes')
      })
    }
    console.log('SendReg', data)
  }
  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Введите Ваше имя "
        name="name"
        value={data.name}
        type="text"
        onChange={handleChange}
        id={data.name}
      />
      <TextField
        label="Введите Ваш email "
        name="email"
        value={data.email}
        type="text"
        onChange={handleChange}
        id={data.email}
      />
      <TextField
        label="Введите Ваш пароль "
        name="password"
        value={data.password}
        type="password"
        onChange={handleChange}
        id={data.password}
      />
      <Button type="submit">Регистрация в системе</Button>
    </form>
  )
}
