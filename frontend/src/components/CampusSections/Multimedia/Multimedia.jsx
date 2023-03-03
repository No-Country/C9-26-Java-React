import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import MediaCard from './MediaCard/MediaCard'
import MediaArticle from './MediaArticle/MediaArticle'
import multimedia from '../../../data/multimedia.json'

import expressions from '../../../assets/multimedia/expressions.png'
import kids from '../../../assets/multimedia/kids.png'
import postit from '../../../assets/multimedia/postit.png'
import slangs from '../../../assets/multimedia/slangs.png'
import love from '../../../assets/multimedia/love.png'

const Multimedia = () => {
    const { enlaces, material } = multimedia

    const images = [love, slangs, expressions, kids, postit]
    return (
        <Container fluid className='d-flex flex-column gap-3 flex-grow-1'>
            <Row className='bg-dark rounded-4 flex-grow-1 d-flex flex-nowrap overflow-auto'>
                {material.map((articulo, index) => (
                    <Col style={{ width: '35%', minWidth: '380px' }} className='p-3 flex-grow-1 d-flex align-items-stretch' key={index}>
                        <MediaCard data={{ ...articulo, img: images[index] }} />
                    </Col>
                ))}
            </Row>
            <Row className='bg-dark rounded-4 flex-grow-1 d-flex flex-nowrap overflow-auto justify-content-start'>
                {enlaces.map((elemento, index) => (
                    <Col style={{ width: '35%', minWidth: '380px' }} className='p-3 flex-grow-1 d-flex' key={index}>
                        <MediaArticle data={elemento} />
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default Multimedia