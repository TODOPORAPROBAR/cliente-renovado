import React, { useEffect, useState } from 'react'
import { Button } from "@material-tailwind/react";
import CountsLayout from './layouts/CountsLayout';
import HabitAccordion from './components/HabitAccordion';
import { templateHabits } from './data';
import AvatarLayout from './layouts/AvatarLayout';
import verifyCompleted from './helpers/verifyCompleted';
import getDailyHabits from './helpers/getDailyHabits';

const Habitos = () => {
  const [habits, setHabits] = useState(null)
  const [info, setInfo] = useState({ complete: 0, incomplete: 0 })
  const [isNew, setIsNew] = useState(false)

  const handleGetDailyHabits = async () => {
    const { history, isNew } = await getDailyHabits()
    setHabits(history.habits)
    setIsNew(isNew)
  }

  const handleUpdateHabits = (index, tasks) => {
    const listHabits = [...habits]
    listHabits[index].tasks = tasks
    setHabits(listHabits)
  }

  // const handleCheckHabitTask = (habitIndex, taskIndex) => {
  //   setHabits(prev => {
  //     const value = prev[habitIndex].tasks[taskIndex].checked
  //     prev[habitIndex].tasks[taskIndex].checked = !value
  //     return prev
  //   })
  // }

  // const saveTasks = async(e) => {
  //   e.preventDefault()
  //   // console.log(habits);
  //   const tasks = await fetch("http://localhost:4000/tasks",{
  //     body: JSON.stringify(habits),
  //     method: "POST",
  //     mode: 'cors',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //   })
  //   .then(response => {
  //     return response.json()
  //   })
  // console.log(tasks)
  // }

  const handleUpdate = () => setInfo(verifyCompleted(habits))

  useEffect(() => {
    habits && handleUpdate()
  }, [habits])

  useEffect(() => {
    handleGetDailyHabits()
  }, [])

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
                  <AvatarLayout />
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
                    <div className='text-xl'>
                      {
                        isNew
                          ? 'Bienvenido, completa tus tareas diarias'
                          : 'Hola otra vez, marca como completado tus tareas diarias'
                      }
                    </div>
                    {
                      habits &&
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
                    <div className="mt-3">
                      <Button onClick={() => console.log(habits)}>Guardar</Button>
                    </div>

                    {/* <Button onClick={(e) => saveTasks(e)}>Guardar</Button> */}
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