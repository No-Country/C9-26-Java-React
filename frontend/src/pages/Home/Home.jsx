<<<<<<< HEAD
import PropTypes from 'prop-types'
const Home = () => {
    return (
        <div>Home</div>
    )
=======
import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import homeOne from '../../assets/images/Home1.jpg'
import homeTwo from '../../assets/images/Home2.jpg'

const images = [
    {
        title: "Imagen One",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, earum.",
        imagen: homeOne
    },
    {
        title: "Imagen Two",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, earum.",
        imagen: homeTwo
    }
]

const Home = () => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (

        <Carousel activeIndex={index} onSelect={handleSelect}>
            {
                images.map((image) => (                    
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={image.imagen}
                        alt="Home ONE"
                        style={{ height: '90vh' }}
                    />
                    {/* <Carousel.Caption>
                        <h3 style={{color:'black'}}>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
                ))
            }
        </Carousel>


    );
>>>>>>> 73092d8 (Home)
}

export default Home