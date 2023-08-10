import React from 'react'
import { useParams } from 'react-router'
export const UserDetails = () => {
    const params = useParams();
    const userId = params.userId;
  return (
    <div>Details About User {userId} </div>
  )
}
