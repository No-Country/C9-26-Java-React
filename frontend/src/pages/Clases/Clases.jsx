import { useEffect, createRef } from "react";
import imgClass1 from "../../assets/images/Clases/Clases1.png";
import imgClass2 from "../../assets/images/Clases/Clases2.png";
import imgClass3 from "../../assets/images/Clases/Clases3.png";
import imgClass4 from "../../assets/images/Clases/Clases4.png";
import Dropdown from '../../components/Dropdown/Dropdown';

import styles from './Clases.module.css';

const Clases = () => {
    const level = ["A1 BEGINNER", "A2 ELEMENTARY", "B1 PREINTERMEDIATE ", "B2 INTERMEDIATE", "C1 UPPER INTERMEDIATE", "C2 ADVANCED", "No sé cuál es mi nivel actual"];
    const course = ["Niños", "Adolescentes", "Adultos", "Corporativo", "Apoyo escolar", "Conversación"];
    const states = [];
    const cities = [];
    
    const ref = createRef();

    let idProvincia;

    const provincias = () => {
        fetch("https://apis.datos.gob.ar/georef/api/provincias")
            .then(res => res.ok ? res.json() : Promise.reject(res))
            .then(json => {
                json.provincias.map(elem => states.push(elem.nombre));
            })
            .catch(() => {
                states.push("Error al cargar las provincias");
            })
    }

    const localidades = (provincia) => {
        fetch(`https://apis.datos.gob.ar/georef/api/municipios?provincia=${provincia}`)
            .then(res => res.ok ? res.json() : Promise.reject(res))
            .then(json => {
                cities.length = 0;
                json.municipios.map(elem => {
                    cities.push(elem.nombre)
                    console.log(cities);
                });
            })
            .catch(() => {
                cities.push("Error al cargar las provincias");
            })
    }

    useEffect(() => {
        //provincias();

        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.type === 'characterData') {
                    console.log('El contenido del span ha cambiado a:', mutation.target.textContent);
                    localidades(mutation.target.textContent);
                }
            });
        });

        observer.observe(ref.current, { characterData: true, subtree: true });

        /* ref.current.addEventListener("DOMCharacterDataModified", () => {
            setValue(ref.current.textContent);
            console.log(value);
            localidades(value);
        })  */

        return () => {
            provincias();
        }
    }, []);

    return (
        <>
            <main className="background">
                <div className={`${styles.clases_margin} container`}>

                    <section>
                        <h2 className='text-center text-white fw-bold'>Cursos para cada necesidad</h2>

                        <div className={`${styles.clases_container} mt-3`}>
                            <img src={imgClass1} alt="Teacher with students" />
                            <img src={imgClass2} alt="Classmates" />
                            <img src={imgClass3} alt="Professor with students" />
                            <img src={imgClass4} alt="Exam" />
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
                                    <Dropdown array={states} placeholder="Provincia" /* ref={ref} */ ref={ref} />
                                </div>

                                <div className={styles.input_container}>
                                    <Dropdown array={cities} placeholder="Localidad" />
                                </div>

                                <div className={styles.input_container}>
                                    <Dropdown array={level} placeholder="Nivel" />
                                </div>

                                <div className={styles.input_container}>
                                    <Dropdown array={course} placeholder="Fecha de nacimiento" />
                                </div>

                                <div className={styles.input_container}>
                                    <Dropdown array={course} placeholder="Curso de mi interés" />
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