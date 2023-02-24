import React from 'react'
import { Card } from 'react-bootstrap'

const MediaCard = () => {
    return (
        <Card style={{ width: '100%', minWidth: '280px', maxWidth: '380px' }} className='rounded-4 bg-dark'>
            <Card.Img variant="top" src="http://unsplash.it/300/180" className='rounded-4' />
            <Card.Body>
                <Card.Title className='text-white fs-5'>Card Title</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                <Card.Text className='text-white'>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default MediaCard