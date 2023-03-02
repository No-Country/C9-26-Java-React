import { useEffect, useState } from "react";
import imgClass1 from "../../assets/images/Clases/Clases1.png";
import imgClass2 from "../../assets/images/Clases/Clases2.png";
import imgClass3 from "../../assets/images/Clases/Clases3.png";
import imgClass4 from "../../assets/images/Clases/Clases4.png";
import Carousel from 'react-bootstrap/Carousel';
import ClasesForm from '../../components/ClasesForm/ClasesForm.jsx';

import styles from './Clases.module.css';

const Clases = () => {
    
    //Tamaño de pantalla para carrusel
    const [width, setWidth] = useState(window.innerWidth);
    const breakpoint = 900;

    useEffect(() => {

        //Manejar tamaño de pantalla
        const handleResizeWindow = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResizeWindow);

        return () => {
            window.removeEventListener("resize", handleResizeWindow);
        }

    }, []);

    return (
        <>
            <main className={`${styles.clases_padding} background`}>
                <div className={`${styles.clases_margin} container`}>

                    <section>
                        <h2 className='text-center text-white fw-bold'>Cursos para cada necesidad</h2>

                        {width >= breakpoint
                            ? <div className={`${styles.clases_container} mt-3`}>
                                <img src={imgClass1} alt="Teacher with students" />
                                <img src={imgClass2} alt="Classmates" />
                                <img src={imgClass3} alt="Professor with students" />
                                <img src={imgClass4} alt="Exam" />
                            </div>

                            : <Carousel>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={imgClass1}
                                        alt="First slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={imgClass2}
                                        alt="Second slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={imgClass3}
                                        alt="Third slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={imgClass4}
                                        alt="Third slide"
                                    />
                                </Carousel.Item>
                            </Carousel>
                        }

                        <p className={styles.clases_text}>
                            Nuestros cursos están destinados a quienes quieran comunicarse efectivamente
                            en inglés ofreciendo distintas modalidades para cada necesidad. Brindamos clases individuales,
                            grupales en grupos reducidos, también contamos con apoyo escolar y preparación de exámenes internacionales
                            para niños, jóvenes y adultos.<br />Nuestra metodología permite desarrollar la habilidad oral y escrita,
                            el estudio de la gramática, la pronunciación y el uso correcto del idioma, en un ambiente amable y dinámico.
                        </p>
                    </section>

                    <ClasesForm />

                </div>

            </main>
        </>
    )
}

export default Clases;