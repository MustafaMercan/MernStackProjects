import React from 'react'
import {Link, NavLink} from 'react-router-dom'
export const Navbar = () => {

    const navLinkStyles = ({isActive}) => {
        return{
            fontWeight: isActive ? 'bold' : 'normal',
            textDecoration : isActive ? 'none' : 'underline'
        }
    }
  return (
    <nav className='primary-nav'>
        {/*<Link to ='/'>Home</Link>
        <Link to = '/about'>About</Link>*/}
        <NavLink to='/' style={navLinkStyles}>Home</NavLink>
        <NavLink to='/about' style={navLinkStyles}>About</NavLink>
        <NavLink to='/product' style={navLinkStyles}>Products</NavLink>
        <NavLink to='/users' style={navLinkStyles}>Users</NavLink>

    </nav>
  )
}
