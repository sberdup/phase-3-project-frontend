import React from 'react'
import { useState } from 'react'
import { Grid, Divider, Card } from 'semantic-ui-react'
import EntityContainer from '../components/EntityContainer'
import EntityCard from '../components/EntityCard'

function LocationFinder({ allEntries }) {
    const [entryList, setEntryList] = useState([])
    let entriesToMap = allEntries.filter(entry => !!entryList.find(listId => listId === entry.id))

    function trackClickHandler(entryId) {
        debugger
        setEntryList([...entryList].filter(entry => entry !== entryId))
    }
    return (
        <>
            <Divider />
            {(entryList.length === 0) ? <h1>Select entries you wish to track.</h1> :
                <>
                    <Grid>
                        <Grid.Row centered>
                            <Card.Group>
                                {entriesToMap.map((entry) => (
                                    <EntityCard key={entry.id} entryData={entry} trackClickHandler={trackClickHandler}/>
                                    // Was handing this specific entity card locateMode which caused an error due to two conflicting click events
                                    // Don't hand components props they don't need
                                ))}
                            </Card.Group>
                        </Grid.Row>
                    </Grid>
                    <Divider />
                </>
            }
            <EntityContainer allEntries={allEntries} setEntryList={setEntryList} locateMode={true} />
        </>
    )
}

export default LocationFinder