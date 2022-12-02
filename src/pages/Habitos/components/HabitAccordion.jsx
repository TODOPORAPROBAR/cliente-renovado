import React, { useState } from 'react'
import { Accordion, AccordionBody, AccordionHeader, Checkbox } from '@material-tailwind/react'

const templateTasks = [
  { description: 'Tomar awita', checked: false },
  { description: 'Comer verduras yqs', checked: false },
  { description: 'Comer verduras yqs', checked: false },
  { description: 'Comer verduras yqs', checked: false },
]

const HabitAccordion = ({ header, description, tasks = templateTasks }) => {
  const [open, setOpen] = useState(false)

  const handleCheckTask = (index) => {
    setOpen(prev => {
      prev[index].checked = !prev[index].checked
      return prev
    })
  }

  return (
    <Accordion open={open}>
      <AccordionHeader onClick={() => setOpen(!open)}>
        {header}
      </AccordionHeader>
      <AccordionBody>
        <div>{description}</div>
        <div className='text-left w-max'>
          {
            tasks.map(
              (task, index) => <div key={'task-check-' + index}><Checkbox label={task.description} checked={task.checked} onChange={() => handleCheckTask(index)} /></div>
            )
          }
        </div>
      </AccordionBody>
    </Accordion>
  )
}

export default HabitAccordion