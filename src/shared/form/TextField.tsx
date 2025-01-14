interface Prop {
  name: string
  value: string
  onChange: () => EventTarget
  placeholder: string
  label: string
  type: string
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
