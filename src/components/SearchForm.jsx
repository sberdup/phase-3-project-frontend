import React from 'react'
import { Search, Grid } from 'semantic-ui-react'

function SearchForm({ setSearchParams, searchParams }) {

  function searchHandler(e){
    setSearchParams(e.target.value)
  }
  return (
    <Grid>
      <Grid.Column>
        <Search
          fluid
          onSearchChange={searchHandler}
          value={searchParams}
          showNoResults={false}
        />
      </Grid.Column>
    </Grid>
  )
}

export default SearchForm