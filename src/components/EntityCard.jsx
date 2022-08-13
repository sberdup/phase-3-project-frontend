import React from 'react'
import { Card, Image } from 'semantic-ui-react'
import {useState} from 'react'

function capitalizeWords(string) {
    //altered this function to fix Guardian Scout Ii e.g.
    const newString = string.split(' ').map(str => {
        if (str === 'ii' || str === 'iii' || str === 'iv') {
            return str.toUpperCase()
        } 
        return str.charAt(0).toUpperCase() + str.slice(1)
    })
    return newString.join(' ')
}
//abstracted capitilization to function instead of below
// const capitalName = name.split(' ').map(str => str.charAt(0).toUpperCase() + str.slice(1)).join(' ')

function EntityCard({entryData, editMode, setSelectedEntity}) {
    
    const [cardExpanded, setCardExpanded] = useState(false)
    
    // very cool destructuring, shout out to Isaiah
    const { id, category_id, description, image, name, logged, cooking_effect, hearts_recovered, attack, defense, drops } = entryData
    
    let category
    switch (category_id) {
        case 1:
        case 2:
            category = 'Creature'
            break
            //can have multiple cases lead to one break, tremendous
        case 3:
            category = 'Monster'
            break
        case 4:
            category = 'Equipment'
            break
        case 5:
            category = 'Material'
            break
        case 6:
            category = 'Treasure'
            break
        default:
            category = 'null'
    }

    return (
        <Card onClick={() => {
            setCardExpanded(prev => !prev)
            if (editMode) {
                setSelectedEntity(entryData)
                window.scrollTo(0,0)
            }
        }}>
            <Card.Content>
                <Image src={image} />
                <Card.Header>{capitalizeWords(name)}</Card.Header>

                {cardExpanded ? <Card.Meta>#{id} / {category}</Card.Meta> : null}

                <Card.Description>{description}</Card.Description>

                {cardExpanded && cooking_effect ? <Card.Content>Cooking Effect: {capitalizeWords(cooking_effect)}</Card.Content> : null}
                {cardExpanded && hearts_recovered ? <Card.Content>Hearts Recovered: {hearts_recovered}</Card.Content> : null}
                {cardExpanded && attack ? <Card.Content>Attack: {attack}</Card.Content> : null}
                {cardExpanded && defense ? <Card.Content>Defense: {defense}</Card.Content> : null}
                {cardExpanded && drops ? <Card.Content>Drops: {typeof drops === 'string' ? capitalizeWords(drops) : drops.map(drop => capitalizeWords(drop))}</Card.Content> : null}


                {cardExpanded && editMode ? <Card.Content extra>Logged: {logged ? 'Yes' : 'No'}</Card.Content> : null}
            </Card.Content>
        </Card>
    )
}
export {capitalizeWords};
export default EntityCard