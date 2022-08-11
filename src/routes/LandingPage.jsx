import React from 'react'
import EntityContainer from '../components/EntityContainer'

function LandingPage({allEntries}) {
  console.log(allEntries)
  return (
    <>
      <h1>Welcome to the Hyrule Compendium!</h1>
      <EntityContainer allEntries={allEntries} editMode={false}/>
    </>
  )
}

export default LandingPage