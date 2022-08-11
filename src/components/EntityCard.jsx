import React from 'react'
import { Card, Image } from 'semantic-ui-react'
import {useState} from 'react'

function EntityCard({entryData}) {
    // very cool destructuring, shout out to Isaiah

    const [cardExpanded, setCardExpanded] = useState(false)

    const { id, category_id, description, image, name, logged, cooking_effect, hearts_recovered, attack, defense, drops } = entryData
    
    let category
    switch (category_id) {
        case 1||2:
            category = 'Creature'
            break
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
    function capitalizeWords(string) {
    }
    const capitalName = name.split(' ').map(str => str.charAt(0).toUpperCase() + str.slice(1)).join(' ')

    return (
        <Card onClick={() => {
            setCardExpanded(prev => !prev)
        }}>
            <Card.Content>
                <Image src={image} />
                <Card.Header>{capitalName}</Card.Header>

                {cardExpanded ? <Card.Meta>#{id} / {category}</Card.Meta> : null}

                <Card.Description>{description}</Card.Description>

                {cardExpanded && cooking_effect ? <Card.Content>Cooking Effect: {cooking_effect}</Card.Content> : null}
                {cardExpanded && hearts_recovered ? <Card.Content>Hearts Recovered: {hearts_recovered}</Card.Content> : null}
                {cardExpanded && attack ? <Card.Content>Attack: {attack}</Card.Content> : null}
                {cardExpanded && defense ? <Card.Content>Defense: {defense}</Card.Content> : null}
                {cardExpanded && drops ? <Card.Content>Drops:{drops}</Card.Content> : null}


                {cardExpanded ? <Card.Content extra>Logged: {logged ? 'Yes' : 'No'}</Card.Content> : null}
            </Card.Content>
        </Card>
    )
}

export default EntityCard