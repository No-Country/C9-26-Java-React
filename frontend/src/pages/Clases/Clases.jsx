import Form from 'react-bootstrap/Form';
import imgClass1 from "../../assets/images/Clases/Clases1.png";
import imgClass2 from "../../assets/images/Clases/Clases2.png";
import imgClass3 from "../../assets/images/Clases/Clases3.png";
import imgClass4 from "../../assets/images/Clases/Clases4.png";

import styles from './Clases.module.css';

const Clases = () => {
    return (
        <>
            <main className="background">
                <div className={`${styles.clases_margin} container`}>
                    
                    <section>
                        <h2 className='text-center text-white fw-bold'>Cursos para cada necesidad</h2>

                        <div className={`${styles.clases_container} mt-3`}>
                            <img src={imgClass1} alt="" />
                            <img src={imgClass2} alt="" />
                            <img src={imgClass3} alt="" />
                            <img src={imgClass4} alt="" />
                        </div>
                        <p className={styles.clases_text}>
                            Nuestros cursos están destinados a quienes quieran comunicarse efectivamente
                            en inglés ofreciendo distintas modalidades para cada necesidad. Brindamos clases individuales,
                            grupales en grupos reducidos, también contamos con apoyo escolar y preparación de exámenes internacionales
                            para niños, jóvenes y adultos.<br />Nuestra metodología permite desarrollar la habilidad oral y escrita,
                            el estudio de la gramática, la pronunciación y el uso correcto del idioma, en un ambiente amable y dinámico.
                        </p>
                    </section>

                    <section className={styles.form_section}>

                        <div className={`${styles.form_container} mt-3`} >
                            <p className="text-center text-black fs-5">
                                Completa el formulario con tus datos
                                y nos pondremos en contacto para asesorarte y completar la inscripción
                            </p>

                            <form action="">
                                <div className={styles.input_container}>
                                    <input type="text" name="" id="" placeholder="Nombre y apellido" />
                                </div>
                                <div className={styles.input_container}>
                                    <input type="text" name="" id="" placeholder="Tel. +54 9" />
                                </div>
                                <div className={styles.input_container}>
                                    <input type="text" name="" id="" placeholder="ingresa@tuemail.com" />
                                </div>
                                <div className={styles.input_container}>
                                    <Form.Select>
                                        <option>Provincia</option>
                                    </Form.Select>
                                </div>
                                <div className={styles.input_container}>
                                    <Form.Select >
                                        <option>Localidad</option>
                                    </Form.Select>
                                </div>
                                <div className={styles.input_container}>
                                    <Form.Select >
                                        <option>Nivel</option>
                                        <option>A1 BEGINNER</option>
                                        <option>A2 ELEMENTARY</option>
                                        <option>B1 PRE INTERMEDIATE</option>
                                        <option>B2 INTERMEDIATE</option>
                                        <option>C1 UPPER INTERMEDIATE</option>
                                        <option>C2 ADVANCED</option>
                                        <option>No sé cuál es mi nivel actual</option>
                                    </Form.Select>
                                </div>
                                <div className={styles.input_container}>
                                    <Form.Select>
                                        <option>Fecha de nacimiento</option>
                                    </Form.Select>
                                </div>
                                <div className={styles.input_container}>
                                    <Form.Select>
                                        <option>Curso de mi interés</option>
                                    </Form.Select>
                                </div>
                                <div className={styles.submit_container}>
                                    <input type="submit" value="ENVIAR" />
                                </div>
                            </form>
                        </div>
                    </section>
                </div>

            </main>
        </>
    )
}

export default Clases;