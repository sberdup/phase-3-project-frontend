import React from 'react'
import FilterField from './FilterField'
import SearchForm from './SearchForm'
import { Card } from 'semantic-ui-react'
import EntityCard from './EntityCard'

function EntityContainer({allEntries, editMode}) {
    console.log(allEntries)
    return (
        <div>
            EntityContainer
            <FilterField />
            <SearchForm />
            <Card.Group>
                {allEntries.map((entry) => (
                    <EntityCard key={entry.id} entryData={entry} editMode={editMode}/>
                ))}
            </Card.Group>
        </div>
    )
}

export default EntityContainer