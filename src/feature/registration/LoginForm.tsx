import { useState, ChangeEvent } from 'react'
import { Button } from '@mui/material'
import { TextField } from '../../shared/form/TextField'

import { useAuth } from '../../shared/context/auth/AuthProvider'
import { NewUserProp } from '../../shared/types/type'

const INITIALSTATELOGIN = { email: '', password: '' }

export function LoginForm() {
  const [data, setData] = useState<NewUserProp>(INITIALSTATELOGIN)

  const { signIn } = useAuth()

  if (!data) return 'Data is empty'
  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setData((prev) => ({
      ...prev,
      [target.name]: target.value,
    }))
  }
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    signIn(data)
  }
  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Введите Ваше email"
        name="email"
        value={data.email}
        type="email"
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
      <Button type="submit">Вход в систему</Button>
    </form>
  )
}
