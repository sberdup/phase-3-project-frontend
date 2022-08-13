import React from 'react'
import { Menu } from 'semantic-ui-react'
import { useNavigate, useLocation } from 'react-router-dom'
// import { useState } from 'react'

// import loader from semantic later

function NavBar() {
    const navigate = useNavigate()
    let location = useLocation()
    // function clickNavLinkHandler(e) {
    //     console.log(e.target)
    //     setActiveItem(e.target.childNodes[0].textContent)
    // }
    return (
        <Menu widths={2} inverted>
            <Menu.Item color='red' name='Main' onClick={
                (e) => {
                    navigate('/')
                }
            }
                active={'/' === location.pathname}>
                    Main
            </Menu.Item>
            <Menu.Item color='green' name='Edit' onClick={
                (e) => {
                    navigate('/edit')
                }
            }
                active={'/edit' === location.pathname}>
                    Edit Page
            </Menu.Item>
        </Menu>
    )
}

export default NavBar