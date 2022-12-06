import deleteDailyHistory from '@/helpers/deleteDailyHistory'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const DeleteDaily = () => {
  const navigate = useNavigate()
  const handleDeleteDaily = async () => {
    try {
      const { ok } = await deleteDailyHistory()
      ok && navigate('/home')
    } catch (error) {
      console.log(error)
    }

  }
  useEffect(()=>{
    handleDeleteDaily()
  },[])
  return (
    <div>DeleteDaily</div>
  )
}

export default DeleteDaily