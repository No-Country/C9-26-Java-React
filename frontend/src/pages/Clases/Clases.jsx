import Form from 'react-bootstrap/Form';

import styles from './Clases.module.css';

const Clases = () => {
    return (
        <>
            <main className="container d-flex">
                <section>
                    <h2 className='text-center'>Cursos para cada necesidad</h2>

                    <div className={`${styles.clases_container} mt-3`}>
                        <img src="https://via.placeholder.com/242x232" alt="" />
                        <img src="https://via.placeholder.com/242x232" alt="" />
                        <img src="https://via.placeholder.com/242x232" alt="" />
                        <img src="https://via.placeholder.com/242x232" alt="" />
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
                    <h2 className='text-center'>¡Empezá hoy mismo!</h2>

                    <div className= {`${styles.form_container} mt-3`} >
                        <p className="text-center">
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
                                <input type="email" name="" id="" placeholder="ingresa@tuemail.com" />
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
            </main>
        </>
    )
}

export default Clases;