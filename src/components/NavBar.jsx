import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {
    return (
        <div>
            <NavLink to='/'>
                Main
            </NavLink>
            <NavLink to='/edit'>
                Edit Page
            </NavLink>
        </div>
    )
}

export default NavBar