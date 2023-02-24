import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import MediaCard from './MediaCard/MediaCard'
import MediaArticle from './MediaArticle/MediaArticle'

const Multimedia = () => {
    const cajas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    return (
        <Container fluid className='d-flex flex-column gap-3 flex-grow-1'>
            <Row className='bg-dark rounded-4 flex-grow-1 d-flex flex-nowrap overflow-auto'>
                {cajas.map((caja) => (
                    <Col style={{ width: '35%', minWidth: '380px' }} className='p-3 flex-grow-1 d-flex align-items-stretch' key={caja}>
                        <MediaCard />
                    </Col>
                ))}
            </Row>
            <Row className='bg-dark rounded-4 flex-grow-1 d-flex flex-nowrap overflow-auto justify-content-start'>
                {cajas.map((caja) => (
                    <Col style={{ width: '35%', minWidth: '380px' }} className='p-3 flex-grow-1 d-flex align-items-stretch' key={caja}>
                        <MediaArticle />
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default Multimedia