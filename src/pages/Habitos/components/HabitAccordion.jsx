import React, { useState } from 'react'
import { Accordion, AccordionBody, AccordionHeader, Checkbox } from '@material-tailwind/react'
import getRandomId from '@/helpers/getRandomId'


const HabitAccordion = ({ indexHabit, title, description, tasks: listTasks, onClickTask }) => {
  const [open, setOpen] = useState(true)
  const [tasks, setTasks] = useState(listTasks)

  const handleCheckTask = (index) => {
    onClickTask(indexHabit, index)
  }

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
                    label={task.description} value={task.checked} 
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