import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const MediaCard = ({ data }) => {
    const { title, imgUrl, description, link } = data
    const image = imgUrl || 'https://picsum.photos/200/300'
    return (
        <Link to={link} target='_blank' className='text-decoration-none'>
            <Card style={{ width: '100%', minWidth: '280px', maxWidth: '380px' }} className='rounded-4 bg-dark'>
                <Card.Img variant="top" src={image} className='rounded-4' />
                <Card.Body>
                    <Card.Title className='text-white fs-5'>{title}</Card.Title>
                    {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
                    <Card.Text className='text-white'>
                        {description}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Link>
    )
}

export default MediaCard