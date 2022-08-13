import React from 'react'
import { Divider, Menu } from 'semantic-ui-react'
import { useNavigate, useLocation } from 'react-router-dom'
// import { useState } from 'react'

// import loader from semantic later

function NavBar() {
    const navigate = useNavigate()
    let location = useLocation()

    return (
        <>
        <Menu widths={3} inverted fixed='top'>
            <Menu.Item color='red' name='Main' onClick={()=> navigate('/')}
                active={'/' === location.pathname}>
                    Main
            </Menu.Item>
            <Menu.Item color='green' name='Edit' onClick={() => navigate('/edit')}
                active={'/edit' === location.pathname}>
                    Log/Delete
            </Menu.Item>
            <Menu.Item color='blue' name='Map' onClick={() => navigate('/locator')}
                active={'/locator' === location.pathname}>
                    Finder
            </Menu.Item>
        </Menu>
        <Divider/>
        </>
    )
}

export default NavBar