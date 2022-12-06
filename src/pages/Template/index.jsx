import getHabits from '@/helpers/getHabits'
import { Button } from '@material-tailwind/react'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import requestHabitUser from './helpers/requestHabitUser'

const Template = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [userHabits, setUserHabits] = useState(null)
  const [aggregated, setAggregated] = useState(false)
  const { title, description, _id, tasks } = location.state

  const handleGetUserHabits = async () => {
    try {
      const { habits } = await getHabits()
      setUserHabits(habits)
      // console.log(habits)
    } catch (error) {
      console.log(error)
    }
  }

  const handleAddHabit = async () => {
    try {
      setLoading(true)
      const { habits } = await requestHabitUser('PUT', { habit: location.state })
      setUserHabits(habits)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  const handleRemoveHabit = async () => {
    try {
      setLoading(true)
      const { habits } = await requestHabitUser('DELETE', { idHabit: _id })
      setUserHabits(habits)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    handleGetUserHabits()
    !_id && navigate('/templates')
  }, [])

  useEffect(() => {
    console.log(userHabits)
    if (userHabits) {
      const aggregated = userHabits.find(habit => habit._id === _id) !== undefined
      console.log(aggregated)
      setAggregated(aggregated)
    }
  }, [userHabits])

  return (
    <>
      <section className="relative block h-[50vh]">
        <div className="bg-profile-background absolute top-0 h-full w-full bg-[url('/img/background-1.jpg')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center" />
      </section>
      {
        userHabits &&

        <section className="relative bg-blue-gray-50/50 py-16 px-4">
          <div className="container mx-auto">
            <div className="relative mb-6 -mt-64 flex w-full min-w-0 flex-col break-words rounded-3xl bg-white shadow-xl shadow-gray-500/5">
              <div className="px-6">
                <div className="flex flex-wrap justify-center">
                  <div className="flex w-full justify-center px-4 lg:order-2 lg:w-3/12">
                    {/* <AvatarLayout /> */}
                    <div className='text-2xl my-2'>{title || ''}</div>
                  </div>
                  <div className="mt-10 flex w-full justify-center px-4 lg:order-3 lg:mt-0 lg:w-4/12 lg:justify-end lg:self-center">
                  </div>
                  <div className="w-full px-4 lg:order-1 lg:w-4/12">
                  </div>
                </div>
                {/* Body */}
                <div className="mb-10 border-t border-blue-gray-50 py-6 text-center">
                  <div className="mt-2 flex flex-wrap justify-center">
                    <div className="flex flex-col gap-4 w-full px-4 mb-4 italic text-gray-600">
                      {description || ''}
                    </div>
                    <div className='w-3/4 text-start w-full px-5 flex flex-col space-y-2'>
                      {
                        tasks.map(
                          (task, index) =>
                            <div key={'task-item-' + index} className='flex flex-row gap-4'>
                              <i className='fa fa-heart self-center'></i>
                              {task.description}
                            </div>
                        )
                      }
                    </div>
                  </div>
                  <div className='mt-3 flex flex-row gap-3 justify-center'>
                    <Button onClick={() => navigate('/templates')}>Volver</Button>
                    <Button color={aggregated ? 'red' : 'blue'} onClick={aggregated ? handleRemoveHabit : handleAddHabit} disabled={loading}>
                      {
                        loading
                          ? aggregated ? 'Quitando...' : 'Agregando...'
                          : aggregated ? 'Quitar' : 'Agregar'
                      }
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div >
        </section >
      }
    </>
  )
}

export default Template