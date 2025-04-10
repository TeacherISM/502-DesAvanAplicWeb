import React, { FC } from 'react'

interface ButtonProps {
  label: string
  onClick: () => void
}

const Button: FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="button"
    >
      {label}
    </button>
  )
}

export default Button
