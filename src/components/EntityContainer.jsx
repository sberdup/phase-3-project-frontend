import React from 'react'
import FilterField from './FilterField'
import SearchForm from './SearchForm'
import { Card } from 'semantic-ui-react'
import EntityCard from './EntityCard'

function EntityContainer() {
    return (
        <div>
            EntityContainer
            <FilterField />
            <SearchForm />
            <Card.Group>
                <div>buncha cards</div>
                <EntityCard />
            </Card.Group>
        </div>
    )
}

export default EntityContainer