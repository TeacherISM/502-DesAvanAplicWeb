import { FC, InputHTMLAttributes } from 'react'

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {}

const InputField: FC<InputFieldProps> = (props) => {
  return (
    <input
      {...props}
      className="input"
    />
  )
}

export default InputField
