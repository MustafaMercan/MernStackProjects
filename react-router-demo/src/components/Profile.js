import React from 'react'
import { useAuth } from './auth'
import { useNavigate } from 'react-router';

export const Profile = () => {

    const auth = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        auth.logout();
        navigate('/')
    }
  return (
    <div>Welcome {auth.user} 
    <button onClick={handleLogout}>logout</button>
    </div>
  )
}
