import React from 'react'
import { MenuList } from '../helpers/MenuList';
import MenuItem from '../Components/MenuItem';
import '../styles/Menu.css'

function Menu() {
    return (
        <div className='menu'>
            <h1 className='menuTitle'>Our Menu</h1>
            <div className='menuList'>
                {MenuList.map((menuItem, i) => {
                return (
                    <MenuItem key={i} name={menuItem.name} image={menuItem.image} price={menuItem.price}/>
                );
            })}


            </div>
        </div>
    )
}

export default Menu;
