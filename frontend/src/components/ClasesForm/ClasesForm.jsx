import { useForm } from '@formspree/react';
import { useNavigate } from 'react-router-dom';
import { HOME } from "../../config/routes/paths";
import Modal from 'react-bootstrap/Modal';

import styles from "./ClasesForm.module.css";

const ClasesForm = () => {
    const level = ["A1 BEGINNER", "A2 ELEMENTARY", "B1 PREINTERMEDIATE ", "B2 INTERMEDIATE", "C1 UPPER INTERMEDIATE", "C2 ADVANCED", "No sé cuál es mi nivel actual"];
    const course = ["Niños", "Adolescentes", "Adultos", "Corporativo", "Apoyo escolar", "Conversación"];
    const states = ["Buenos Aires", "Catamarca", "Chaco", "Chubut", "Ciudad Autónoma de Buenos Aires",
        "Córdoba", "Corrientes", "Entre Ríos", "Formosa", "Jujuy", "La Pampa", "La Rioja", "Mendoza", "Misiones", "Neuquén", "Río Negro",
        "Salta", "San Juan", "San Luis", "Santa Cruz", "Santa Fe", "Santiago del Estero", "Tierra del Fuego", "Tucumán"];

    //Funcionalidad del formulario
    const [state, handleSubmit] = useForm("mvonrkld");
    const navigate = useNavigate();

    const handleClose = () => {
        navigate(HOME);
    };

    return (
        <section className={styles.form_section}>

            <div className={`${styles.form_container} mt-3`} >
                <p className="text-center text-black fs-5">
                    Completa el formulario con tus datos
                    y nos pondremos en contacto para asesorarte y completar la inscripción
                </p>

                <form onSubmit={(e) => handleSubmit(e)}>
                    <div className={styles.input_container}>
                        <input type="text" name="nombre" placeholder="Nombre y apellido" required />
                    </div>

                    <div className={styles.input_container}>
                        <input type="number" name="tel" id="" placeholder="Tel. +54 9" required />
                    </div>

                    <div className={styles.input_container}>
                        <input type="email" name="email" id="" placeholder="ingresa@tuemail.com" required />
                    </div>

                    <div className={styles.input_container}>
                        <input type="text" name="fecha" placeholder="Fecha de nacimiento" max="2018-12-25" onFocus={(e) => (e.target.type = "date")} required />
                    </div>

                    <div className={styles.form_select}>
                        <select name="select" id="" defaultValue="" required >
                            <option value="" disabled>Provincia</option>
                            {states.map(elem => <option key={elem} value={elem} className={styles.options_bg}>{elem}</option>)}
                        </select>
                    </div>

                    <div className={styles.form_select}>
                        <select name="nivel" id="" defaultValue="" required >
                            <option value="" disabled>Nivel</option>
                            {level.map(elem => <option key={elem} value={elem} className={styles.options_bg}>{elem}</option>)}
                        </select>
                    </div>

                    <div className={styles.form_select}>
                        <select name="curso" id="" defaultValue="" required >
                            <option value="" disabled>Curso de mi interés</option>
                            {course.map(elem => <option key={elem} value={elem} className={styles.options_bg}>{elem}</option>)}
                        </select>
                    </div>

                    <div className={styles.submit_container}>
                        <input type="submit" value="ENVIAR" />
                    </div>

                </form>

                {
                    state.succeeded &&
                    <Modal className={styles.modal_container} show={true} centered="true">
                        <Modal.Body className={styles.modal}>
                            <p className="text-white text-center fw-bold">¡Gracias por tu consulta!
                                Tu mensaje ya ha llegado a nuestra casilla de correo, pronto nos estaremos comunicando
                                contigo.
                            </p>
                            <button className={styles.modal_button} onClick={handleClose}>CERRAR</button>
                        </Modal.Body>
                    </Modal>
                }
            </div>
        </section>
    )
}

export default ClasesForm;