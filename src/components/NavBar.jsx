import React from 'react'
import { Menu } from 'semantic-ui-react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useState } from 'react'

function NavBar() {
    const [activeItem, setActiveItem] = useState('Main')
    const navigate = useNavigate()
    function clickNavLinkHandler(e) {
        console.log(e.target)
        setActiveItem(e.target.childNodes[0].textContent)
        // setActiveItem(e.target.textContent)
    }
    return (
        <Menu widths={2} inverted>
            <Menu.Item color='red' name='Main' onClick={
                (e) => {
                    clickNavLinkHandler(e)
                    navigate('/')
                }
            }
                active={'Main' === activeItem}>
                    Main
            </Menu.Item>
            <Menu.Item color='green' name='Edit' onClick={
                (e) => {
                    clickNavLinkHandler(e)
                    navigate('/edit')
                }
            }
                active={'Edit Page' === activeItem}>
                    Edit Page
            </Menu.Item>
        </Menu>
    )
}

export default NavBar