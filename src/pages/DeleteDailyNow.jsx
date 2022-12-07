import deleteDailyHistory from '@/helpers/deleteDailyHistory';
import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom';

const DeleteDailyNow = () => {
    const navigate = useNavigate()
    const handleDeleteDailt =  async () => {
        await deleteDailyHistory()
        navigate('/home')
    }
    useEffect(()=>{
        handleDeleteDailt()
    },[])
  return (
    <div>DeleteDailyNow</div>
  )
}

export default DeleteDailyNow