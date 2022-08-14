import React from 'react'
import { useState } from 'react'
import { Grid, Divider, Card, Header, Container } from 'semantic-ui-react'
import EntityContainer from '../components/EntityContainer'
import EntityCard from '../components/EntityCard'
import { useEffect, useRef } from 'react'
import { apiURL } from '../App'

function LocationFinder({ allEntries }) {
    const [entryList, setEntryList] = useState([])
    let entriesToMap = allEntries.filter(entry => !!entryList.find(listId => listId === entry.id))

    function trackClickHandler(entryId) {
        debugger
        setEntryList([...entryList].filter(entry => entry !== entryId))
    }
    
    const entityLocations = useRef([])
    useEffect(() => {
        async function getLocations(id) {
            let entryData = await fetch(apiURL + `entry/${id}`)
            entryData = await entryData.json()
            const locations = await entryData.locations.map(loc => loc.name)
            console.log(locations)
            return locations
        }
        const locationsArray = entryList.map(entryId => getLocations(entryId))
        async function uniqueLocations(locationsArray) {
            console.log(locationsArray)
            let i = locationsArray.length
            const allLocations = locationsArray.flat()
            if (i < entryList.length) {
                return 'No Common Locations'
            }
            const commonLocations = []
            const tally = {}
            allLocations.forEach(location => {
                if (tally[location] === i - 1) {
                    tally[location]++
                    commonLocations.push(location)
                } else if (!tally[location]) {
                    tally[location] = 1
                } else {
                    tally[location]++
                }
            })
            return commonLocations
        }
        async function runLocations() {
            console.log(locationsArray)
            const interM = await uniqueLocations(locationsArray)
            entityLocations.current = await interM
        }
        runLocations()
        // const allLocations = entryList.map(entryId => getLocations(entryId))
        // debugger
        // entityLocations.current = uniqueLocations(allLocations)
        // debugger
    }, [entryList])
    return (
        <>
            <Divider />
            {(entryList.length === 0) ? <h1>Select entries you wish to track.</h1> :
                <>
                    <Grid>
                        <Grid.Row centered>
                            <Card.Group>
                                {entriesToMap.map((entry) => (
                                    <EntityCard key={entry.id} entryData={entry} trackClickHandler={trackClickHandler} />
                                    // Was handing this specific entity card locateMode which caused an error due to two conflicting click events
                                    // Don't hand components props they don't need
                                ))}
                            </Card.Group>
                        </Grid.Row>
                    </Grid>
                    <Container>
                        <Header size='medium'> Locations for the above:</Header>
                        <p>{entityLocations.current.join(', ')}</p>
                    </Container>

                    <Divider />
                </>
            }
            <EntityContainer allEntries={allEntries} setEntryList={setEntryList} locateMode={true} />
        </>
    )
}

export default LocationFinder