import React, { FC, ChangeEvent } from 'react'

interface InputFieldProps {
  type: string
  placeholder?: string
  value: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

const InputField: FC<InputFieldProps> = ({ type, placeholder, value, onChange }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      style={{ padding: '10px', margin: '10px 0' }}
      className = "input"
    />
  )
}

export default InputField
