import React, { useEffect, useState } from 'react'
import { Button } from "@material-tailwind/react";
import CountsLayout from './layouts/CountsLayout';
import HabitAccordion from './components/HabitAccordion';
import AvatarLayout from '../../layouts/AvatarLayout';
import verifyCompleted from './helpers/verifyCompleted';
import getDailyHabits from './helpers/getDailyHabits';
import updateDailyHabits from './helpers/updateDailyHabits';
import disableTasks from './helpers/disableTasks';
import { AlertCompleted, AlertGood } from './helpers/SwalAlerts';
import { useNavigate } from 'react-router-dom';
import okKid from '@/images/ok-kid.gif'

const Habitos = () => {
  const [habits, setHabits] = useState(null)
  const [completed, setCompleted] = useState(false)
  const [sended, setSended] = useState(false)
  const [info, setInfo] = useState({ complete: 0, incomplete: 0, days: 0 })
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleGetDailyHabits = async () => {
    const { history, days } = await getDailyHabits()
    setSended(true)
    setHabits(disableTasks(history.habits))
    setInfo(prev => ({ ...prev, days }))
  }

  const handleUpdateDailyHabits = async () => {
    setLoading(true)
    const { history } = await updateDailyHabits(habits)
    setLoading(false)
    setHabits(disableTasks(history.habits))
    setSended(true)
    const { incomplete } = info
    incomplete === 0
      ? AlertCompleted.fire().then(() => navigate('/home'))
      : AlertGood.fire().then(() => navigate('/home'))
  }

  const handleUpdateHabits = (index, tasks) => {
    const listHabits = [...habits]
    listHabits[index].tasks = tasks
    setHabits(listHabits)
  }

  const handleUpdate = () => {
    const { complete, incomplete } = verifyCompleted(habits)
    if(sended){
      incomplete === 0
      ? setCompleted(true)
      : setSended(false)
    }
    setInfo(prev => ({ ...prev, complete, incomplete }))
  }

  useEffect(() => {
    habits && handleUpdate()
  }, [habits])

  useEffect(() => {
    !habits && handleGetDailyHabits()
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
                  <CountsLayout complete={info.complete} incomplete={info.incomplete} days={info.days} />
                </div>
              </div>
              {/* Body */}
              <div className="mb-10 border-t border-blue-gray-50 py-6 text-center">
                <div className="mt-2 flex flex-wrap justify-center">
                  {
                    !completed
                      ?
                      <div className="flex w-full flex-col items-center px-4 lg:w-9/12">
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
                          <Button disabled={loading} onClick={handleUpdateDailyHabits}>
                            {
                              loading
                                ? 'Guardando...'
                                : 'Guardar'
                            }
                          </Button>
                        </div>

                        {/* <Button onClick={(e) => saveTasks(e)}>Guardar</Button> */}
                      </div>
                    : <div className='flex flex-col items-center'>
                        <div className='text-2xl'>Ya completaste todas tus tareas diarias puedes irte, eres libre</div>
                        <img src={okKid} style={{width: 400}} />
                        <Button className='mt-3' onClick={() => navigate('/home')}>Volver</Button>
                      </div>
                  }

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