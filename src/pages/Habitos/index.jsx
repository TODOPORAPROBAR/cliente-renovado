import React, { useState } from 'react'
import { Avatar, Typography, Button } from "@material-tailwind/react";
import CountsLayout from './layouts/CountsLayout';
import HabitAccordion from './components/HabitAccordion';
import { templateHabits } from './data';

const Habitos = () => {
  const [habits, setHabits] = useState(templateHabits)
  const [info, setInfo] = useState({
    complete: 0,
    incomplete: 0
  })

  const handleCheckHabitTask = (habitIndex, taskIndex) => {
    setHabits(prev => {
      const value = prev[habitIndex].tasks[taskIndex].checked
      prev[habitIndex].tasks[taskIndex].checked = !value
      return prev
    })
    // handleUpdate()
  }
  
  const handleUpdate = () => {
    let complete = 0
    let incomplete = 0
    habits.forEach(
      habit => {
        complete += habit.tasks.filter(task => task.checked).length
        incomplete += habit.tasks.length - complete
      }
    )
    setInfo({ complete, incomplete })
  }

  return (
    <>
      <section className="relative block h-[50vh]">
        <div className="bg-profile-background absolute top-0 h-full w-full bg-[url('/img/background-1.jpg')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center" />
      </section>
      <section className="relative bg-blue-gray-50/50 py-16 px-4">
        <div className="container mx-auto">
          <div className="relative mb-6 -mt-64 flex w-full min-w-0 flex-col break-words rounded-3xl bg-white shadow-xl shadow-gray-500/5">
            <div className="px-6">
              <div className="flex flex-wrap justify-center">
                <div className="flex w-full justify-center px-4 lg:order-2 lg:w-3/12">
                  <div className="relative">
                    <div className="-mt-20 w-40">
                      <Avatar
                        src="/img/team-2.jpg"
                        alt="Profile picture"
                        variant="circular"
                        className="h-full w-full shadow-xl"
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-10 flex w-full justify-center px-4 lg:order-3 lg:mt-0 lg:w-4/12 lg:justify-end lg:self-center">
                  {/* <Button className="bg-blue-400">Conntect</Button> */}
                </div>
                <div className="w-full px-4 lg:order-1 lg:w-4/12">
                  <CountsLayout complete={info.complete} incomplete={info.incomplete} days={2} />
                </div>
              </div>
              {/* Body */}
              <div className="mb-10 border-t border-blue-gray-50 py-6 text-center">
                <div className="mt-2 flex flex-wrap justify-center">
                  <div className="flex w-full flex-col items-center px-4 lg:w-9/12">
                    {/* <Typography className="mb-8 font-normal text-blue-gray-500">
                      An artist of considerable range, Jenna the name taken by
                      Melbourne-raised, Brooklyn-based Nick Murphy writes,
                      performs and records all of his own music, giving it a
                      warm, intimate feel with a solid groove structure. An
                      artist of considerable range.
                    </Typography> */}
                    {/* <Button variant="text">Show more</Button> */}

                    {
                      habits.map(
                        (habit, index) =>
                          <HabitAccordion
                            key={'habit-' + index}
                            indexHabit={index}
                            title={habit.title}
                            description={habit.description}
                            tasks={habit.tasks}
                            onClickTask={handleCheckHabitTask}
                          />
                      )
                    }

                    <Button onClick={() => console.log(habits)}>Guardar</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Habitos