import React, { useEffect, useState } from 'react'
import { fetchUsers } from '../redux'
import { useSelector, useDispatch } from 'react-redux'
const UserContainer = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchUsers())

    },[])

    const data = useSelector(state => state.user)
    console.log(data.users)
    return (
    <div>
    </div>
  )
}

export default UserContainer
