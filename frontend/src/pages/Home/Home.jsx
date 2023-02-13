import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import pageOne from '../../assets/images/pageOne.jpg'
import pageTwo from '../../assets/images/pageTwo.jpg'
import pageThree from '../../assets/images/pageThree.jpg'

const images = [
    {
        id: 1,
        title: "Imagen One",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, earum.",
        imagen: pageOne
    },
    {
        id: 2,
        title: "Imagen Two",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, earum.",
        imagen: pageTwo
    },
    {
        id: 3,
        title: "Imagen Two",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, earum.",
        imagen: pageThree
    }
]

const Home = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        < Carousel
            activeIndex={index}
            onSelect={handleSelect}
            interval={2000}
        >
            {images.map((image) => (
                <Carousel.Item key={image.id}>
                    <img                        
                        className="d-block img-fluid w-100"
                        src={image.imagen}
                        alt={image.title}
                    />                  
                </Carousel.Item>
            ))}
        </Carousel >
    );
}

export default Home