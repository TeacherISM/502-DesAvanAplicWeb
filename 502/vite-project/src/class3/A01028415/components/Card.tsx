import React, { FC } from 'react'


interface CardProps {
  title: string
  description: string
  date: string
}

const Card: FC<CardProps> = ({ title, description, date }) => {
  return (
    <div className="card">
      <h2 className="card-title">{title}</h2>
      <p className="card-description">{description}</p>
      <p className="card-date"> {date}</p>
    </div>
  )
}

export default Card
