import React, { useState } from 'react';
import { Carousel, Button, Row, Col } from 'react-bootstrap';
import discount from '../../assets/images/slider/discount.svg'

import pageOne from '../../assets/images/slider/pageOne.png'
import pageTwo from '../../assets/images/slider/pageTwo.png'
import pageThree from '../../assets/images/slider/pageThree.png'
import { Link } from 'react-router-dom';


const images = [
    {
        id: 1,
        title: "Cursos de Inglés",
        description: "Para alumnos de todos los niveles y edades.",
        imagen: pageOne
    },
    {
        id: 2,
        title: `Clases in-company`,
        description: "Llevamos las clases a tu empresa.",
        imagen: pageTwo,
    },
    {
        id: 3,
        title: "Clases personalizadas",
        description: "Clases de conversación con fines específicos, presenciales y online.",
        imagen: pageThree,
    }
]

const Home = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <main className='background d-flex grow'>
            < Carousel
                activeIndex={index}
                onSelect={handleSelect}
                interval={2000}
                className='d-flex grow overflow-hidden w-100'
            >
                {images.map((image) => (
                    <Carousel.Item key={image.id} className='relative'>

                        <Row className='d-flex flex-md-row-reverse relative h-100'>

                            <Col xs={12} md={6} className='d-none d-md-flex justify-content-center align-items-center'>
                                <div className='discount'>
                                    <img src={discount} alt={image.title} />
                                </div>
                            </Col>
                            <Col xs={12} md={6} className='d-flex justify-content-center align-items-end px-2 position-relative'>
                                <img className='w-xl-100 position-absolute bottom-0 ' src={image.imagen} alt={image.title} />
                            </Col>

                        </Row>
                        <Carousel.Caption className='relative' style={{ bottom: '0px' }}>

                            <h3 className='text-uppercase fs-1 text-center mx-auto' style={{ fontWeight: 'bolder', textShadow: '0px 0px 10px black', maxWidth: '350px' }}>{image.title}</h3>
                            <p style={{ textShadow: '0px 0px 15px black' }}>{image.description}</p>
                            <Link to='/consultation' className='mb-4 fs-md-3 button_home rounded-4'>Inscripción Abierta <br /> 2023</Link>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}


            </Carousel >
        </main >
    );
}

export default Home