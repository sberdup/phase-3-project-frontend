import React from 'react'
import {Menu} from 'semantic-ui-react'
import {NavLink} from 'react-router-dom'

function NavBar() {
  return (
    <Menu>
        <Menu.Item>
            <NavLink to='/'>
                Main
            </NavLink>
        </Menu.Item>
        <Menu.Item>
            <NavLink to='/edit'>
                Edit Page
            </NavLink>
        </Menu.Item>
    </Menu>
  )
}

export default NavBar