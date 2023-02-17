import Form from 'react-bootstrap/Form';
import imgClass1 from "../../assets/images/Clases/Clases1.png";
import imgClass2 from "../../assets/images/Clases/Clases2.png";
import imgClass3 from "../../assets/images/Clases/Clases3.png";
import imgClass4 from "../../assets/images/Clases/Clases4.png";
import Dropdown from '../../components/Dropdown/Dropdown';

import styles from './Clases.module.css';

const Clases = () => {
    const level = ["A1 BEGINNER", "A2 ELEMENTARY", "B1 PREINTERMEDIATE ", "B2 INTERMEDIATE", "C1 UPPER INTERMEDIATE", "C2 ADVANCED", "No sé cuál es mi nivel actual"];
    const course = ["Niños", "Adolescentes", "Adultos", "Corporativo", "Apoyo escolar", "Conversación"];

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
                                    <Dropdown array={level} placeholder="Provincia"/>
                                </div>

                                <div className={styles.input_container}>
                                    <Dropdown array={level} placeholder="Localidad"/>
                                </div>

                                <div className={styles.input_container}>
                                    <Dropdown array={level} placeholder="Nivel"/>
                                </div>

                                <div className={styles.input_container}>
                                    <Dropdown array={course} placeholder="Fecha de nacimiento"/>
                                </div>

                                <div className={styles.input_container}>
                                    <Dropdown array={course} placeholder="Curso de mi interés"/>
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