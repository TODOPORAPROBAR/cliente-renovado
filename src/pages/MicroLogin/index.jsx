import setUserToken from '@/helpers/setUserToken'
import { Button, Input } from '@material-tailwind/react'
import React, { useState, useContext } from 'react'
import SessionContext from '@/context/SessionContext'

const MicroLogin = () => {
  const [form, setForm] = useState({
    username: '', password: ''
  })

  const { setSession } = useContext(SessionContext)

  const handleSetForm = (e) => {
    const { value, name } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async () => {
    try {
      const server = import.meta.env.VITE_APP_SERVER_URL
      const content = {
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify(form)
      }
      const response = await fetch(`${server}/login`, content)
      const json = await response.json()
      if (response.ok) {
        const { token } = await json
        setSession(token)
        setUserToken(token)
      }
    } catch (error) {
      console.log(error)
    }
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
                    <div>
                      <Input type="text" name="username" onChange={handleSetForm} />
                      <Input type="text" name="password" onChange={handleSetForm} />
                      <Button onClick={handleSubmit}>login</Button>
                    </div>
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

export default MicroLogin