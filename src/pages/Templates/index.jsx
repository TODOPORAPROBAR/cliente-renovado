import getRandomId from '@/helpers/getRandomId'
import React from 'react'
import CardHabit from './components/CardHabit'
import AvatarLayout from '../Habitos/layouts/AvatarLayout'

const Templates = () => {
  const initTemplates = [
    {
      title: 'prueba piloto',
      description: '...',
      tasks: [
        { description: 'tarea de prueba' },
        { description: 'tarea de prueba' }
      ]
    },
    {
      title: 'prueba piloto',
      description: '...',
      tasks: [
        { description: 'tarea de prueba' },
        { description: 'tarea de prueba' }
      ]
    },
  ]

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
              {/* Body */}
              <div className="mb-10 border-t border-blue-gray-50 py-6 text-center">
                <div className="mt-2 flex flex-wrap justify-center">
                  <div className="flex flex-col gap-4 w-full px-4">
                    {
                      initTemplates.map(
                        habit => <CardHabit key={'card-habit-' + getRandomId(4)} data={habit} />
                      )
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div >
      </section >
    </>
  )
}

export default Templates