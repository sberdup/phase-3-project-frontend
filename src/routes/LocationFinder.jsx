import React from 'react'
import { Grid, Divider, Card, Header, Container } from 'semantic-ui-react'
import EntityContainer from '../components/EntityContainer'
import EntityCard from '../components/EntityCard'
import { useEffect, useState } from 'react'

function LocationFinder({ allEntries }) {
    const [entryList, setEntryList] = useState([])
    const [sharedLocations, setSharedLocations] = useState([])
    // let entriesToMap = allEntries.filter(entry => !!entryList.find(listId => listId === entry.id))
    // using list of IDs from clicking on cards below to pick which cards to render above

    function trackClickHandler(entryId) {
        debugger
        setEntryList([...entryList].filter(entry => entry.id !== entryId))
    }

    useEffect(() => {
        function uniqueLocations(locationsArray) {
            debugger
            let i = locationsArray.length
            const allLocations = locationsArray.flat()
            if (i < entryList.length) {
                return 'No Common Locations'
            }
            let commonLocations = []
            const tally = {}
            allLocations.forEach(location => {
                if (tally[location] === i - 1) {
                    tally[location]++
                } else if (location === undefined) {
                } else if (!tally[location]) {
                    tally[location] = 1
                } else {
                    tally[location]++
                }
            })
            const filterLocations = commonLocations.filter(location => tally[location] === locationsArray.length)
            return filterLocations
        }

        if (entryList.length !== 0) {
            const locationArray = entryList.map(entry => {
                const retArr = []
                for (const i of entry.locations) {
                    retArr.push(i.name)
                }
                return retArr
            })
            const uniqLoc = uniqueLocations(locationArray)
            setSharedLocations(uniqLoc)
        }

    }, [entryList])
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
                        <Divider />
                        <Header size='medium'><u>Locations Shared by the Above</u></Header>
                        <Card.Group centered>
                            {(sharedLocations.length > 0) ? sharedLocations.map(location => (<Card key={location} header={location} />)) : <h3>None</h3>}
                        </Card.Group>
                    </Container>

                    <Divider />
                </>
            }
            <EntityContainer allEntries={allEntries} setEntryList={setEntryList} locateMode={true} />
        </>
    )
}

export default LocationFinder