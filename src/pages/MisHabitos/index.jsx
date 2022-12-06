import React, { useEffect, useState } from 'react'
import AvatarLayout from '../../layouts/AvatarLayout';
import HabitItem from './components/HabitItem';
import getHabits from '../../helpers/getHabits';

const MisHabitos = () => {
  const [habits, setHabits] = useState([])

  const handleGetHabits = async () => {
    const {habits} = await getHabits()
    setHabits(habits)
  }

  const handleUpdateTasks = (index, tasks) => {
    const newHabits = [...habits]
    newHabits[index].tasks = tasks
    // console.log(newHabits)
    setHabits(newHabits)
  }

  useEffect(()=>{
    handleGetHabits()
  },[])

  useEffect(()=>{
    console.log(habits)
  },[habits])

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
                </div>
              </div>
              <div className="mb-10 border-t border-blue-gray-50 py-6 text-center">
                <div className="mt-2 flex flex-wrap justify-center">
                  <div className="flex w-full flex-col items-center px-4 lg:w-9/12">
                    {
                      habits &&
                      habits.map(
                        (habit, index) =>
                          <HabitItem
                            key={'habit-' + index}
                            indexHabit={index}
                            data={habit}
                            onChangeTasks={handleUpdateTasks}
                          />
                      )
                    }
                    {/* <div className="mt-3">
                      <Button disabled={loading} onClick={handleUpdateDailyHabits}>
                        {
                          loading
                            ? 'Guardando...'
                            : 'Guardar'
                        }
                      </Button>
                    </div> */}

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

export default MisHabitos