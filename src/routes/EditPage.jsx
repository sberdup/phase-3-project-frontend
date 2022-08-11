import React from 'react'
import EntityContainer from '../components/EntityContainer'

function EditPage({allEntries}) {
  return (
    <>
      <h1>Set whether you've recorded an entry, delete, or add a new one!</h1>
      <EntityContainer allEntries={allEntries} editMode={true}/>
    </>
  )
}

export default EditPage