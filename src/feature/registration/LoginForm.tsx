import { useState, ChangeEvent } from 'react'
import { Button } from '@mui/material'
import { TextField } from '../../shared/form/TextField'
import { useNavigate } from 'react-router-dom'

interface userLocalStorageProp {
  [key: string]: string | null
}

const INITIALSTATELOGIN = { email: '', password: '' }
export const KEYUSER = 'user'

export function LoginForm() {
  const [data, setData] = useState(INITIALSTATELOGIN)
  const navigate = useNavigate()
  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setData((prev) => ({
      ...prev,
      [target.name]: target.value,
    }))
  }

  const userLocalStorage: userLocalStorageProp | null = JSON.parse(
    localStorage.getItem(KEYUSER) || 'null'
  )

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    if (
      userLocalStorage !== null &&
      userLocalStorage.email !== data.email &&
      userLocalStorage.password !== data.password
    )
      return navigate('/')
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
