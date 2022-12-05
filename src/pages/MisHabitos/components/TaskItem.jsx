import React from 'react'
import { IconButton } from '@material-tailwind/react'

const TaskItem = ({data, onDelete}) => {
  const { description } = data
  return (
    <div className='flex gap-5 mb-3 items-center'>
      <IconButton size="sm" color='red' onClick={onDelete}>
        <i className="fas fa-trash" />
      </IconButton>
      { description }
    </div>
  )
}

export default TaskItem