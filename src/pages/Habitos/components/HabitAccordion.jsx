import React, { useState, useEffect } from 'react'
import { Accordion, AccordionBody, AccordionHeader, Checkbox } from '@material-tailwind/react'
import getRandomId from '@/helpers/getRandomId'


const HabitAccordion = ({ indexHabit, data, onClickTask }) => {
  const { title, description } = data
  const [open, setOpen] = useState(true)
  const [tasks, setTasks] = useState(data.tasks)

  const handleCheckTask = (index) => {
    const list = [...tasks]
    list[index].checked = !list[index].checked
    setTasks(list)
  }

  useEffect(() => {
    onClickTask(indexHabit, tasks)
  }, [tasks])


  return (
    <Accordion open={open}>
      <AccordionHeader onClick={() => setOpen(!open)}>
        {title}
      </AccordionHeader>
      <AccordionBody>
        <div>{description}</div>
        <div className='text-left w-max'>
          {
            tasks.map(
              (task, index) =>
                <div key={'task-check-' + getRandomId(4)}>
                  <Checkbox
                    id={"task-check-" + getRandomId(4)}
                    label={task.description}
                    checked={task.checked}
                    onChange={() => handleCheckTask(index)}
                  />
                </div>
            )
          }
        </div>
      </AccordionBody>
    </Accordion>
  )
}

export default HabitAccordion