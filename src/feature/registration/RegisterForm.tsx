import { ChangeEvent, FormEvent, useState } from 'react'
import { Button } from '@mui/material'

import { TextField } from '../../shared/form/TextField'
import { useAuth } from '../../shared/context/auth/AuthProvider'
import { NewUserProp } from '../../shared/types/type'

export function RegistrationForm() {
  const [data, setData] = useState<NewUserProp>({
    name: '',
    email: '',
    password: '',
  })
  const { signUp } = useAuth()

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setData((prev) => ({
      ...prev,
      [target.name]: target.value,
    }))
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    signUp(data)
  }
  return (
    <form className="loginFormText" onSubmit={handleSubmit}>
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
