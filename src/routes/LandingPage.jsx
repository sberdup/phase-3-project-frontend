import React from 'react'
import { Divider } from 'semantic-ui-react'
import EntityContainer from '../components/EntityContainer'

function LandingPage({allEntries}) {
  console.log(allEntries)
  return (
    <>
      <Divider/>
      <h1>Welcome to the Hyrule Compendium!</h1>
      <EntityContainer allEntries={allEntries} editMode={false}/>
    </>
  )
}

export default LandingPage