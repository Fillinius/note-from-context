import { ChangeEvent } from 'react'

interface Prop {
  name: string
  value: string
  onChange: ({ target }: ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  label: string
  type: string
  id?: string
}

export const TextField = ({
  name,
  value,
  onChange,
  placeholder,
  label,
  type,
}: Prop) => {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        value={value}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
      />
    </>
  )
}
