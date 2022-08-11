import React from 'react'
import { Card, Image } from 'semantic-ui-react'
function EntityCard({entryData}) {
    // very cool destructuring, shout out to Isaiah
    const { id, category_id, description, image, name, logged } = entryData
    return (
        <Card>
            <Card.Content>
                <Image src={image} />
                <Card.Header>{name}</Card.Header>
                <Card.Meta>
                    id:{id} category:{category_id}
                </Card.Meta>
                <Card.Description>{description}</Card.Description>
                <Card.Content extra>logged:{logged}</Card.Content>
            </Card.Content>
        </Card>
    )
}

export default EntityCard