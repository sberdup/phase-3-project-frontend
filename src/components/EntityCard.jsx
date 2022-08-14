import React from 'react'
import { Card, Image, Button } from 'semantic-ui-react'
import { useState } from 'react'
import { apiURL } from '../App'

function capitalizeWords(string) {
    // console.log('entering capitalize with string: ', string)
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

function EntityCard({ entryData, editMode, setSelectedEntity, locateMode, setEntryList, trackClickHandler }) {
    // very cool destructuring, shout out to Isaiah
    const { id, category_id, description, image, name, logged, cooking_effect, hearts_recovered, attack, defense, drops, locations } = entryData

    const [cardExpanded, setCardExpanded] = useState(false)
    let cardExpandedMode = editMode || cardExpanded

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

    async function getLocations(id) {
        const data = await fetch(apiURL + `entry/${id}`)
        const response = await data.json()
        const locations = await response.locations
        debugger
        console.log(entryData, locations)
        setEntryList(prev => [...prev, {...entryData, locations: locations}])
        return locations
    }

     function joinLocations(locations) {
        //making this function async totally destroyed React's flow and causes improper rendering in the return
        const joinedLocations =  locations.map(location => location.name).join(', ')
        console.log(joinedLocations)
        return joinedLocations
    }

    return (
        <Card onClick={() => {
            if (editMode) {
                setSelectedEntity(entryData)
                window.scrollTo(0, 0)
            } else {
                setCardExpanded(prev => !prev)
            }
            if (locateMode) {
                getLocations(id)
                // setEntryList(prev => {
                //     debugger
                //     console.log('entering setEntryList', prev)
                //     if (!prev.find(entry => entry.id === id)) {
                //         return [...prev, {entryData, locations: getLocations(id)}]
                //     }
                //     console.log('exit after here, id was:', id)
                //     return prev
                // })
            }
        }}>
            <Card.Content>
                <Image src={image} />
                <Card.Header>{name ? capitalizeWords(name) : 'n/a'}</Card.Header>

                {cardExpandedMode ? <Card.Meta>#{id} / {category}</Card.Meta> : null}

                <Card.Description>{description}</Card.Description>

                {cardExpandedMode && cooking_effect ? <Card.Content>Cooking Effect: {capitalizeWords(cooking_effect)}</Card.Content> : null}
                {cardExpandedMode && hearts_recovered ? <Card.Content>Hearts Recovered: {hearts_recovered}</Card.Content> : null}
                {cardExpandedMode && attack ? <Card.Content>Attack: {attack}</Card.Content> : null}
                {cardExpandedMode && defense ? <Card.Content>Defense: {defense}</Card.Content> : null}
                {cardExpandedMode && drops ? <Card.Content>Drops: {typeof drops === 'string' ? capitalizeWords(drops) : drops.map(drop => capitalizeWords(drop))}</Card.Content> : null}

                {cardExpandedMode && editMode ? <Card.Content extra>Logged: {logged ? 'Yes' : 'No'}</Card.Content> : null}
            </Card.Content>
                {locations ? <Card.Content attached='bottom'>Locations: {joinLocations(locations) || 'n/a'}</Card.Content> : null}
                {!!trackClickHandler ? <Button attached='bottom' color='orange' onClick={() => trackClickHandler(id)}>Stop Tracking</Button> : null}
        </Card>
    )
}
export { capitalizeWords };
export default EntityCard