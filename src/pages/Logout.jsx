import { useNavigate } from 'react-router-dom';
import { useEffect, useContext } from 'react';
import SessionContext from '@/context/SessionContext';
import deleteUserToken from '@/helpers/deleteUserToken';

const Logout = () => {
  const { setSession } = useContext(SessionContext)
  const navigate = useNavigate()

  useEffect(()=>{
    deleteUserToken()
    setSession(null)
    navigate('/home')
  },[])
}

export default Logout