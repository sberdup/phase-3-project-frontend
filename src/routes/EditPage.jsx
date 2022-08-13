import React from 'react'
import { useState } from 'react'
import EntityContainer from '../components/EntityContainer'
import { capitalizeWords } from '../components/EntityCard'
import { Card, Image, Grid, Segment, Divider, Header, Button } from 'semantic-ui-react'
import { apiURL } from '../App'

function EditPage({ allEntries, setAllEntries }) {
  const [selectedEntity, setSelectedEntity] = useState({})
  const [loadingEdit, setLoadingEdit] = useState(false)
  let { id, category_id, description, image, name, logged, cooking_effect, hearts_recovered, attack, defense, drops } = selectedEntity

  async function handleLogClick() {
    setLoadingEdit(true)
    console.log(id)

    let resp = await fetch(apiURL + `entry/${id}`, {
      method: 'PATCH', headers: { 'Content-type': 'application/json' }
    })
    resp = await resp.json()

    if (!resp.ok) {
      setAllEntries([...allEntries].map(entry => {
        if (entry.id === id) {
          entry.logged = (!entry.logged)
        }
        return entry
      }))
      setSelectedEntity({ ...selectedEntity, logged: !logged })
    }
    setLoadingEdit(false)
  }
  async function handleDeleteClick() {
    setLoadingEdit(true)
    console.log(id)

    let resp = await fetch(apiURL + `entry/${id}`, { method: 'DELETE' })
    resp = await resp.json()

    if (!resp.ok) {
      setAllEntries([...allEntries].filter(entry => entry.id !== id))
      setSelectedEntity({ name: 'Entry Deleted Successfully' })
    }
    setLoadingEdit(false)
  }
  return (
    <>
      <Divider />
      {(!selectedEntity.name) ? <h1>Select an entry to log/delete!</h1> :
        <Grid columns={2}>

          <Grid.Column stretched>

            <Grid.Row stretched>
              <Segment placeholder loading={loadingEdit}>
                <Header size='large'>{(logged) ? 'Remove Record from your Compendium?' : 'Record to your Compendium?'}</Header>
                {(selectedEntity.id) ? <Button primary onClick={handleLogClick}>{(logged) ? 'Un-Log this Entry' : 'Log this Entry'}</Button> :
                  <h2>Select an Entry</h2>}
              </Segment>
            </Grid.Row>

            <Divider horizontal>or</Divider>

            <Grid.Row stretched>
              <Segment placeholder loading={loadingEdit}>
                <Header size='large'>Remove this entry from the Compendium?</Header>
                {(selectedEntity.id) ? <Button color='red' onClick={handleDeleteClick}>Delete this Entry</Button> : <h2>Select an Entry</h2>}
              </Segment>
            </Grid.Row>

          </Grid.Column>

          <Grid.Column>
            <Card centered fluid>
              <Card.Content centered textAlign='center'>
                <Image src={image} size='large' />
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
            <Divider />
          </Grid.Column>

        </Grid>
      }
      <EntityContainer allEntries={allEntries} editMode={true} setSelectedEntity={setSelectedEntity} />
    </>
  )
}

export default EditPage