import React from 'react'
import FilterField from './FilterField'
import SearchForm from './SearchForm'
import { Card } from 'semantic-ui-react'
import EntityCard from './EntityCard'
import { useState, useEffect } from 'react'
import { apiURL } from '../App'

function EntityContainer({allEntries, editMode}) {
    console.log(allEntries)
    const [activeFilter, setActiveFilter] = useState('all')
    const [subset, setSubset] = useState([])

    useEffect(() => {
        async function getFetch() {
            let resp = await fetch(apiURL+`category/${activeFilter}`)
            resp = await resp.json()
            setSubset(resp)
        }
        if (activeFilter !== 'all') {
            getFetch()
        }
    }, [activeFilter])
    
    let currentData = (activeFilter === 'all' ? allEntries : subset) 
    debugger
    return (
        <div>
            <FilterField activeFilter={activeFilter} setActiveFilter={setActiveFilter}/>
            <SearchForm />
            <Card.Group centered>
                {currentData.map((entry) => (
                    <EntityCard key={entry.id} entryData={entry} editMode={editMode}/>
                ))}
            </Card.Group>
        </div>
    )
}

export default EntityContainer