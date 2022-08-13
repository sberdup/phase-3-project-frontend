import React from 'react'
import { useState, useEffect } from 'react'

import FilterField from './FilterField'
import SearchForm from './SearchForm'
import EntityCard from './EntityCard'
import { apiURL } from '../App'

import { Card } from 'semantic-ui-react'

function EntityContainer({ allEntries, editMode, setSelectedEntity }) {
    console.log(allEntries)
    const [activeFilter, setActiveFilter] = useState('all')
    const [searchParams, setSearchParams] = useState('')
    const [subset, setSubset] = useState([])

    useEffect(() => {
        async function getFetch() {
            let resp = await fetch(apiURL + `category/${activeFilter}`)
            resp = await resp.json()
            setSubset(resp)
        }
        if (activeFilter !== 'all') {
            getFetch()
        }
    }, [activeFilter, allEntries])

    let currentData = (activeFilter === 'all' ? allEntries : subset)
    let searchedData

    if (searchParams === '') {
        searchedData = currentData
    } else {
        const reg = new RegExp(`${searchParams}`, 'i')
        searchedData = currentData.filter(entry => entry.name.search(reg) >= 0)
    }

    return (
        <div>
            <FilterField activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
            <SearchForm searchParams={searchParams} setSearchParams={setSearchParams} />
            <Card.Group centered>
                {searchedData.map((entry) => (
                    <EntityCard key={entry.id} entryData={entry} editMode={editMode} setSelectedEntity={setSelectedEntity}/>
                ))}
            </Card.Group>
        </div>
    )
}

export default EntityContainer