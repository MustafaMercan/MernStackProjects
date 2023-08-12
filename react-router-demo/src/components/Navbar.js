import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import { useAuth } from './auth'
export const Navbar = () => {

    const navLinkStyles = ({isActive}) => {
        return{
            fontWeight: isActive ? 'bold' : 'normal',
            textDecoration : isActive ? 'none' : 'underline'
        }
    }

    const auth = useAuth();

  return (
    <nav className='primary-nav'>
        {/*<Link to ='/'>Home</Link>
        <Link to = '/about'>About</Link>*/}
        <NavLink to='/' style={navLinkStyles}>Home</NavLink>
        <NavLink to='/about' style={navLinkStyles}>About</NavLink>
        <NavLink to='/product' style={navLinkStyles}>Products</NavLink>
        <NavLink to='/users' style={navLinkStyles}>Users</NavLink>
        <NavLink to='/profile' style={navLinkStyles}>Profile</NavLink>
        {
          !auth.user && (
          <NavLink to='/login' style={navLinkStyles}>Login</NavLink>
        )}
                
    </nav>
  )
}
