import { useState, useEffect } from "react";
import Modal from 'react-bootstrap/Modal';

import styles from "./ClassicForm.module.css";

const ClassicForm = ({ setInterviewOn, reasons }) => {

    const [width, setWidth] = useState(window.innerWidth);
    const [send, setSend] = useState(false)
    const breakpoint = 900;

    const handleSubmit = (e) => {
        e.preventDefault();
        setSend(true);
    }

    const handleClose = () => {
        setSend(false);
    };

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
                    <button onClick={() => setInterviewOn(true)}>Prefiero una entrevista online</button>
                </div>
            }

            <p className={styles.consult_subtitle}>Completa el formulario con tus datos y nos pondremos en contacto para asesorarte y
                brindarte la información que solicites a la brevedad.</p>

            <form onSubmit={(e) => handleSubmit(e)}>
                <div className={styles.consult_inputName}>
                    <input type="text" name="" id="" placeholder="Nombre y apellido" required />
                </div>

                <div>
                    <input type="number" name="" id="" placeholder="Tel. +54 9" className={styles.consult_inputTel} required />
                    <input type="email" name="" id="" placeholder="ingresa@tuemail.com" className={styles.consult_inputEmail} required />
                </div>

                <div className={styles.consult_checkboxContainer}>

                    <span className={styles.consult_checkboxText}>Quiero que me contacten a través de</span>

                    <div className={styles.consult_checkboxEmail}>
                        <input type="radio" name="radio_action" id="radio_email" required />
                        <span className={styles.checkEmail_text}>E-mail</span>
                    </div>

                    <div className={styles.consult_checkboxTel}>
                        <input type="radio" name="radio_action" id="radio_tel" required />
                        <span className={styles.checkTel_text}>Teléfono</span>
                    </div>

                </div>

                <div className="mb-4 mt-4">
                    <select name="" id="" defaultValue="" className={styles.consult_select} required>
                        <option value="" disabled>El motivo de mi consulta es</option>
                        {reasons.map(elem => <option key={elem} value={elem} className={styles.consult_optionsBg}>{elem}</option>)}
                    </select>
                </div>

                <textarea name="" id="" cols="30" rows="10" placeholder='Escribe tus comentarios aquí' required></textarea>

                <div className={styles.submit_container}>
                    <input type="submit" value="ENVIAR" />
                </div>
            </form>

            {
                send &&
                <Modal className={styles.modal_container} show={true} centered="true">
                    <Modal.Body className={styles.modal}>
                        <p className="text-white text-center fw-bold">¡Muchas gracias!
                            Tu mensaje ya ha llegado a nuestra casilla de correo, pronto nos estaremos comunicando
                            contigo.
                        </p>
                        <button className={styles.modal_button} onClick={handleClose}>CERRAR</button>
                    </Modal.Body>
                </Modal>
            }

        </section>
    )
}

export default ClassicForm;