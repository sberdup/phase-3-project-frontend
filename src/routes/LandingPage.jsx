import React from 'react'
import EntityContainer from '../components/EntityContainer'

function LandingPage({allEntries}) {
  console.log(allEntries)
  return (
    <>
      <h1>Main Page!</h1>
      <EntityContainer allEntries={allEntries}/>
    </>
  )
}

export default LandingPage