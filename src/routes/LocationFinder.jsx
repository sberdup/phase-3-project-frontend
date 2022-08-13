import React from 'react'
import { useState } from 'react'
import { Grid, Divider } from 'semantic-ui-react'
import EntityContainer from '../components/EntityContainer'

function LocationFinder({allEntries}) {
    const [entryList, setEntryList] = useState([])

    return (
        <>
            <Divider />
            {(entryList) ? <h1>Select entries you wish to track.</h1> : 
                <Grid>
                    <Grid.Row>
                        <div>sup</div>
                    </Grid.Row>
                </Grid>
    }
            <EntityContainer allEntries={allEntries} setEntryList={setEntryList} locateMode={true}/>
        </>
    )
}

export default LocationFinder