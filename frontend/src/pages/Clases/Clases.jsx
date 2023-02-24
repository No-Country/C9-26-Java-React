import { useEffect, createRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCities, getProvinces } from "../../store/actions/locationActions";
import { useForm } from "react-hook-form";
import imgClass1 from "../../assets/images/Clases/Clases1.png";
import imgClass2 from "../../assets/images/Clases/Clases2.png";
import imgClass3 from "../../assets/images/Clases/Clases3.png";
import imgClass4 from "../../assets/images/Clases/Clases4.png";
import Dropdown from '../../components/Dropdown/Dropdown';
import Carousel from 'react-bootstrap/Carousel';

import styles from './Clases.module.css';

const Clases = () => {
    const level = ["A1 BEGINNER", "A2 ELEMENTARY", "B1 PREINTERMEDIATE ", "B2 INTERMEDIATE", "C1 UPPER INTERMEDIATE", "C2 ADVANCED", "No sé cuál es mi nivel actual"];
    const course = ["Niños", "Adolescentes", "Adultos", "Corporativo", "Apoyo escolar", "Conversación"];
    const states = useSelector(state => state.location.states);
    const cities = useSelector(state => state.location.cities);

    const dispatch = useDispatch();

    useEffect(() => {
        if (states.length === 0) dispatch(getProvinces());
    }, [dispatch]);

    console.log('states', states);
    console.log('cities', cities);


    //Tamaño de pantalla para carrusel
    const [width, setWidth] = useState(window.innerWidth);
    const breakpoint = 900;

    //Funcionalidad del formulario
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (e) => {
        alert(JSON.stringify(e));

    }

    //Referencia del span en componente dropdown
    const ref = createRef();

    // const provincias = () => {
    //     fetch("https://apis.datos.gob.ar/georef/api/provincias")
    //         .then(res => res.ok ? res.json() : Promise.reject(res))
    //         .then(json => {
    //             let obj;
    //             json.provincias.map(elem => {
    //                 obj = {
    //                     id: elem.id,
    //                     nombre: elem.nombre
    //                 }
    //                 states.push(obj)
    //             });
    //         })
    //         .catch(() => {
    //             states.push("Error al cargar las provincias");
    //         })
    // }

    // const localidades = (provincia) => {
    //     fetch(`https://apis.datos.gob.ar/georef/api/municipios?provincia=${provincia}`)
    //         .then(res => res.ok ? res.json() : Promise.reject(res))
    //         .then(json => {
    //             cities.length = 0;
    //             json.municipios.map(elem => {
    //                 cities.push(elem.nombre);
    //             });
    //         })
    //         .catch(() => {
    //             cities.push("Error al cargar los municipios");
    //         })
    // }

    useEffect(() => {

        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.type === 'characterData') {
                    console.log('El contenido del span ha cambiado a:', mutation.target.textContent);
                    console.log('El contenido del span ha cambiado a:', typeof mutation.target.parentElement.id);
                    dispatch(getCities(mutation.target.parentElement.id));
                }
            });
        });

        observer.observe(ref.current, { characterData: true, subtree: true });

        //Manejar tamaño de pantalla
        const handleResizeWindow = () => setWidth(window.innerWidth);
        // subscribe to window resize event "onComponentDidMount"
        window.addEventListener("resize", handleResizeWindow);

        return () => {
            // provincias();
            // unsubscribe "onComponentDestroy"
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

                    <section className={styles.form_section}>

                        <div className={`${styles.form_container} mt-3`} >
                            <p className="text-center text-black fs-5">
                                Completa el formulario con tus datos
                                y nos pondremos en contacto para asesorarte y completar la inscripción
                            </p>

                            <form action="" onSubmit={handleSubmit(onSubmit)}>
                                <div className={styles.input_container}>
                                    <input type="text" placeholder="Nombre y apellido" {...register("nombre", { required: "Campo requerido" })} />
                                    <p className="fw-bold text-black">{errors.nombre?.message}</p>
                                </div>

                                <div className={styles.input_container}>
                                    <input type="text" name="" id="" placeholder="Tel. +54 9" {...register("tel", { required: "Campo requerido" })} />
                                    <p className="fw-bold text-black">{errors.tel?.message}</p>
                                </div>

                                <div className={styles.input_container}>
                                    <input type="email" name="" id="" placeholder="ingresa@tuemail.com" {...register("mail", { required: "Campo requerido" })} />
                                    <p className="fw-bold text-black">{errors.mail?.message}</p>
                                </div>

                                <div className={styles.input_container}>
                                    <input type="text" placeholder="Fecha de nacimiento" {...register("nacimiento", { required: "Campo requerido" })} onFocus={(e) => (e.target.type = "date")} />
                                    <p className="fw-bold text-black">{errors.nacimiento?.message}</p>
                                </div>

                                <div className={styles.input_container}>
                                    <Dropdown array={states} placeholder="Provincia" provincia={true} ref={ref} />
                                    <input type="text" className="d-none" {...register("provincia", { required: "Campo requerido" })} />
                                </div>

                                <div className={styles.input_container}>
                                    <Dropdown array={cities} placeholder="Localidad" localidad={true} />
                                    <input type="text" className="d-none" {...register("localidad", { required: "Campo requerido" })} />
                                </div>

                                <div className={styles.input_container}>
                                    <Dropdown array={level} placeholder="Nivel" />
                                    <input type="text" className="d-none" {...register("nivel", { required: "Campo requerido" })} />
                                </div>

                                <div className={styles.input_container}>
                                    <Dropdown array={course} placeholder="Curso de mi interés" />
                                    <input type="text" className="d-none" {...register("cursos", { required: "Campo requerido" })} />
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