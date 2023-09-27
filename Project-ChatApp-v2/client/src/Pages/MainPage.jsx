import React from 'react'
import { NavLink } from 'react-router-dom'

const MainPage = () => {
  return (
    <div>
        <h1>Welcome Mercan Chat Application</h1>
        <br/>
        <NavLink to="/register">Register</NavLink>
        <br/>
        <NavLink to="/login">Login</NavLink>
        <br/>        
    </div>
  )
}

export default MainPage
