import React from 'react'
import { Menu } from 'semantic-ui-react'

function FilterField({activeFilter, setActiveFilter}) {
    // const [categories, setCategories] = useState([])

    const colors = ['grey', 'green', 'blue', 'orange', 'red', 'violet', 'purple', 'yellow',]
    const categories = ['all', 'all_creatures', "food_creature", "non_food_creature","monster","equipment","material","treasure"]

    function capitalizeCategory(string) {
        const newString = string.split('_').map(str => {
            return str.charAt(0).toUpperCase() + str.slice(1)
        })
        return newString.join(' ')
    }

    function clickFilterHandler() {
        console.log(this)
        setActiveFilter(this.name)
    }
    return (
        <Menu widths={categories.length}>
            {categories.map((category, idx) => (
                <Menu.Item color={colors[idx]} key={category} name={category} onClick={clickFilterHandler} active={category === activeFilter}>
                    {capitalizeCategory(category)}
                </Menu.Item>
            ))}
        </Menu>
    )
}

export default FilterField