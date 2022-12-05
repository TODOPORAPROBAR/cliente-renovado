import React, { useEffect, useState } from 'react'
import { Avatar, Button } from "@material-tailwind/react";
import CountsLayout from './layouts/CountsLayout';
import HabitAccordion from './components/HabitAccordion';
import { templateHabits } from './data';

const Habitos = () => {
  const [habits, setHabits] = useState(templateHabits)
  const [info, setInfo] = useState({ complete: 0, incomplete: 0 })

  const handleUpdateHabits = (index, tasks) => {
    const listHabits = [...habits]
    listHabits[index].tasks = tasks
    setHabits(listHabits)
  }

  const handleUpdate = () => {
    let complete = 0
    let incomplete = 0
    habits.forEach(
      ({ tasks }) => {
        const checkeds = tasks.filter(task => task.checked).length
        complete += checkeds
        incomplete = incomplete + (tasks.length - checkeds)
      }
    )
    setInfo({ complete, incomplete })
  }

  useEffect(() => {
    handleUpdate()
  }, [habits])

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
                </div>
                <div className="w-full px-4 lg:order-1 lg:w-4/12">
                  <CountsLayout complete={info.complete} incomplete={info.incomplete} days={2} />
                </div>
              </div>
              {/* Body */}
              <div className="mb-10 border-t border-blue-gray-50 py-6 text-center">
                <div className="mt-2 flex flex-wrap justify-center">
                  <div className="flex w-full flex-col items-center px-4 lg:w-9/12">
                    {
                      habits.map(
                        (habit, index) =>
                          <HabitAccordion
                            key={'habit-' + index}
                            indexHabit={index}
                            data={habit}
                            onClickTask={handleUpdateHabits}
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