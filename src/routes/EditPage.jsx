import React from 'react'
import { useState } from 'react'
import EntityContainer from '../components/EntityContainer'
import {capitalizeWords} from '../components/EntityCard'
import {Card, Image} from 'semantic-ui-react'

function EditPage({ allEntries }) {
  const [selectedEntity, setSelectedEntity] = useState({})
  let { id, category_id, description, image, name, logged, cooking_effect, hearts_recovered, attack, defense, drops } = selectedEntity
  debugger
  return (
    <>
      <h1>Set whether you've recorded an entry, delete, or add a new one!</h1>
      {!selectedEntity.name ? null : 

        <Card raised centered>
          <Card.Content>
            <Image src={image} />
            <Card.Header>{capitalizeWords(name)}</Card.Header>

            <Card.Meta>id #{id} / cat-id #{category_id}</Card.Meta>
            <Card.Description>{description}</Card.Description>

            {cooking_effect ? <Card.Content>Cooking Effect: {capitalizeWords(cooking_effect)}</Card.Content> : null}
            {hearts_recovered ? <Card.Content>Hearts Recovered: {hearts_recovered}</Card.Content> : null}
            {attack ? <Card.Content>Attack: {attack}</Card.Content> : null}
            {defense ? <Card.Content>Defense: {defense}</Card.Content> : null}
            {drops ? <Card.Content>Drops: {typeof drops === 'string' ? capitalizeWords(drops) : drops.map(drop => capitalizeWords(drop))}</Card.Content> : null}


            <Card.Content extra>Logged: {logged ? 'Yes' : 'No'}</Card.Content>
          </Card.Content>
        </Card>
      }
      <EntityContainer allEntries={allEntries} editMode={true} setSelectedEntity={setSelectedEntity} />
    </>
  )
}

export default EditPage