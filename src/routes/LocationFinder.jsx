import React from 'react'
import { Grid, Divider, Card, Header, Container } from 'semantic-ui-react'
import EntityContainer from '../components/EntityContainer'
import EntityCard from '../components/EntityCard'
import { useEffect, useState } from 'react'

function LocationFinder({ allEntries }) {
    const [entryList, setEntryList] = useState([])
    const [sharedLocations, setSharedLocations] = useState('none')
    // let entriesToMap = allEntries.filter(entry => !!entryList.find(listId => listId === entry.id))
    // using list of IDs from clicking on cards below to pick which cards to render above

    function trackClickHandler(entryId) {
        debugger
        setEntryList([...entryList].filter(entry => entry.id !== entryId))
    }

    // async function getLocations(id) {
    //     debugger
    //     const entryData = await fetch(apiURL + `entry/${id}`)
    //     const response = await entryData.json()
    //     const locations = response.locations.map(loc => loc.name)
    //     console.log(locations)
    //     return locations
    // }

    useEffect(() => {
        // async function waitForArray() {
        //     let location
        //     if (entryList.length !== 0) {
        //         location = await getLocations(entryList[entryList.length - 1])
        //     }
        //     console.log(location)
        //     setEntityLocations([location])
        // }
        // waitForArray()
        function uniqueLocations(locationsArray) {
            console.log(locationsArray)
            let i = locationsArray.length
            const allLocations = locationsArray.flat()
            if (i < entryList.length) {
                return 'No Common Locations'
            }
            let commonLocations = []
            const tally = {}
            allLocations.forEach(location => {
                console.log('location in for each: ', location)
                if (tally[location] === i - 1) {
                    tally[location]++
                } else if (location === undefined) {
                    console.log('undefined value')
                } else if (!tally[location]) {
                    tally[location] = 1
                    commonLocations.push(location)
                } else {
                    tally[location]++
                }
            })
            console.log(tally)
            console.log(commonLocations)
            const filterLocations = commonLocations.filter(location => tally[location] === locationsArray.length)
            console.log(filterLocations)
            return filterLocations
        }
        const locationArray = entryList.map(entry => entry.locations)
        setSharedLocations(uniqueLocations(locationArray))
    }, [entryList])
    // const listItems = uniqueLocations(entityLocations)
    return (
        <>
            <Divider />
            {(entryList.length === 0) ? <h1>Select entries you wish to track.</h1> :
                <>
                    <Grid>
                        <Grid.Row centered>
                            <Card.Group>
                                {entryList.map((entry, idx) => (
                                    <EntityCard key={idx} entryData={entry} trackClickHandler={trackClickHandler} />
                                    // Was handing this specific entity card locateMode which caused an error due to two conflicting click events
                                    // Don't hand components props they don't need
                                ))}
                            </Card.Group>
                        </Grid.Row>
                    </Grid>
                    <Container>
                        <Header size='medium'> Locations for the above:</Header>
                        {(sharedLocations.length > 0) ? sharedLocations.map(location => (<Card key={location} header={location} />)) : <h3>nothin</h3>}
                    </Container>

                    <Divider />
                </>
            }
            <EntityContainer allEntries={allEntries} setEntryList={setEntryList} locateMode={true} />
        </>
    )
}

export default LocationFinder