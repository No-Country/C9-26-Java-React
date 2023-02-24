import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const MediaArticle = () => {
    return (
        <Card style={{ width: '100%', minWidth: '300px', maxWidth: '380px' }} className='rounded-4'>

            <Card.Body>
                <Card.Title className='text-center fs-5'>Card Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content. Some quick example text to build on the card title and make up the bulk of
                    the card's content. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </Card.Text>
                <Link to="/" className='btn btn-dark rounded-4 d-inline-block mx-auto'>Card Link</Link>
            </Card.Body>
        </Card>
    )
}

export default MediaArticle