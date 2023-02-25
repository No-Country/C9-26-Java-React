import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const MediaArticle = ({ data }) => {
    const { title, description, link } = data
    return (
        <Card style={{ width: '100%', minWidth: '300px', maxWidth: '380px' }} className='rounded-4'>

            <Card.Body className='d-flex flex-column justify-content-start p-4'>
                <Card.Title className='text-center fs-4 text-uppercase'>{title}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
                <Link to={link} target='_blank' className='btn btn-dark text-uppercase rounded-4 d-block mx-auto mt-auto'>Ir al sitio web</Link>
            </Card.Body>
        </Card>
    )
}

export default MediaArticle