import React, { useEffect, useState } from 'react'
import { Accordion, AccordionBody, AccordionHeader, Button, Checkbox, Input } from '@material-tailwind/react'
import TaskItem from './TaskItem'
import getRandomId from '@/helpers/getRandomId'

const HabitAccordion = ({ indexHabit, data, onChangeTasks }) => {
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
    <Accordion open={open}>
      <AccordionHeader onClick={() => setOpen(!open)}>
        {title}
      </AccordionHeader>
      <AccordionBody >
        <div>{description}</div>
        <div className='text-left'>
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
        </div>
        <div className='flex gap-3'>
          <Input type="text" value={newItem || ''} onChange={(e) => setNewItem(e.target.value)} />
          <Button onClick={handleAddNewItem}>Agregar</Button>
        </div>
      </AccordionBody>
    </Accordion>
  )
}

export default HabitAccordion