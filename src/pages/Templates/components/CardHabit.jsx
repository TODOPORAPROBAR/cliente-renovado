import React from 'react'
import { Link } from 'react-router-dom'

const CardHabit = ({ data }) => {
  const { title, description } = data

  return (
    <Link to={'/template'} state={data}>
      <div className="overflow-hidden border border-gray-500 rounded shadow-lg text-start">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base">{description}</p>
        </div>
      </div>
    </Link>
  )
}

export default CardHabit