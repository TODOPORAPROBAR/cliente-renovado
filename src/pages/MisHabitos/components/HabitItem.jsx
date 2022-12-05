import React, { useEffect, useState } from 'react'
import { Accordion, AccordionBody, AccordionHeader, Button, Checkbox, IconButton, Input } from '@material-tailwind/react'
import TaskItem from './TaskItem'
import getRandomId from '@/helpers/getRandomId'

const HabitItem = ({ indexHabit, data, onChangeTasks }) => {
  const { title, description } = data
  const [open, setOpen] = useState(true)
  const [tasks, setTasks] = useState(data.tasks)
  const [newItem, setNewItem] = useState()

  console.log(tasks)
  const handleOnDeleteItem = (id) => {
    const newTasks = tasks.filter((_, index) => index !== id)
    setTasks(newTasks)
  }

  const handleAddNewItem = () => {
    setTasks(prev => [...prev, { description: newItem, checked: false }])
    setNewItem('')
  }

  useEffect(() => {
    onChangeTasks(indexHabit, tasks)
  }, [tasks])

  return (
    <div className='w-full'>
      <div className='grid grid-cols-1 divide-y'>
        <div className='mb-2 text-xl font-bold'>{title}</div>
        <div>
          <div className='mt-2 text-md'>{description}</div>
          {
            tasks.map(
              (task, index) =>
                <div key={'task-check-' + getRandomId(4)}>
                  <TaskItem data={task} onDelete={() => handleOnDeleteItem(index)} />
                  {/* <Checkbox
                      id={"task-check-" + getRandomId(4)}
                      disabled={task.disabled}
                      labelProps={{
                        style: {
                          textDecoration: task.disabled ? 'line-through' : 'none'
                        }
                      }}
                      label={task.description}
                      checked={task.checked}
                      onChange={() => handleCheckTask(index)}
                    /> */}
                </div>
            )
          }
          <div className='flex gap-2'>
            <Input type="text" value={newItem || ''} onChange={(e) => setNewItem(e.target.value)} />
            <IconButton onClick={handleAddNewItem} ><i className="fas fa-plus" /></IconButton>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HabitItem