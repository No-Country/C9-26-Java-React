import { useState, useEffect } from "react";
import Dropdown from "../../Dropdown/Dropdown.jsx";

import styles from "./ClassicForm.module.css";

const ClassicForm = ({ setInterviewOn }) => {

    //Tamaño de pantalla para carrusel
    const [width, setWidth] = useState(window.innerWidth);
    const breakpoint = 900;

    const reasons = [
        "Información sobre clases/precios",
        "Inscripciones",
        "Informar un pago",
        "Exámenes internacionales",
        "Fechas de exámenes",
        "Consultar estado de cuenta",
        "Solicitar enrtevista con coordinación",
        "Solicitar visa",
        "Consultar avances de trámite de mi visa",
        "Viajes grupales",
        "Trabajar con nosotros",
        "Otros"
    ]

    useEffect(() => {

        //Manejar tamaño de pantalla
        const handleResizeWindow = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResizeWindow);
        
        return () => {
            window.removeEventListener("resize", handleResizeWindow);
        }

    }, []);

    return (
        <section className={styles.consult_container}>
            
            {
                width < breakpoint && 
                <div className={styles.consult_interviewButton}>
                    <input type="radio" name="radio_interview" id="radio_interview" onChange={() => setInterviewOn(true)}/>
                    <span>Prefiero una entrevista online</span>
                </div>
            }

            <p className={styles.consult_subtitle}>Completa el formulario con tus datos y nos pondremos en contacto para asesorarte y
                brindarte la información que solicites a la brevedad.</p>

            <form action="">
                <div className={styles.consult_inputName}>
                    <input type="text" name="" id="" placeholder="Nombre y apellido" />
                </div>

                <div>
                    <input type="text" name="" id="" placeholder="Tel. +54 9" className={styles.consult_inputTel} />
                    <input type="email" name="" id="" placeholder="ingresa@tuemail.com" className={styles.consult_inputEmail} />
                </div>

                <div className='d-flex align-items-center gap-2 mb-3'>
                    <span className={styles.consult_checkboxText}>Quiero que me contacten a través de</span>
                    <div className={styles.consult_checkboxEmail}>
                        <input type="radio" name="radio_action" id="radio_email" />
                        <span className='fs-5'>E-mail</span>
                    </div>
                    <div className={styles.consult_checkboxTel}>
                        <input type="radio" name="radio_action" id="radio_tel" />
                        <span className='fs-5'>Teléfono</span>
                    </div>
                </div>

                <div className="mb-4 mt-4">
                    <Dropdown array={reasons} placeholder="El motivo de mi consulta es" subtitle="Elije una opción" />
                </div>

                <textarea name="" id="" cols="30" rows="10" placeholder='Escribe tus comentarios aquí'></textarea>

                <div className={styles.submit_container}>
                    <input type="submit" value="ENVIAR" />
                </div>
            </form>
        </section>
    )
}

export default ClassicForm;