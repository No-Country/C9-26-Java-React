import { useForm } from "react-hook-form";
import { useState } from "react";
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
    const { register, formState: { errors } } = useForm();
    const [sentForm, setSendForm] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        /* const data =  */await fetch(e.target.action, {
            method: e.target.method,
            mode: 'no-cors',
            body: form,
            header: {
                "Accept": "application/json",
            }
        })
            .then(() => {
                console.log("enviado");
                setSendForm(true);
            })
            .catch(() => console.log("no pudo enviarse"));
    }

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

                <form action="https://formspree.io/f/mvonrkld" method="POST" onSubmit={handleSubmit}>
                    <div className={styles.input_container}>
                        <input type="text" placeholder="Nombre y apellido" {...register("nombre", { required: "Campo requerido" })} />
                        <p className="fw-bold text-black">{errors.nombre?.message}</p>
                    </div>

                    <div className={styles.input_container}>
                        <input type="number" name="tel" id="" placeholder="Tel. +54 9" {...register("tel", { required: "Campo requerido" })} />
                        <p className="fw-bold text-black">{errors.tel?.message}</p>
                    </div>

                    <div className={styles.input_container}>
                        <input type="email" name="" id="" placeholder="ingresa@tuemail.com" {...register("mail", { required: "Campo requerido" })} />
                        <p className="fw-bold text-black">{errors.mail?.message}</p>
                    </div>

                    <div className={styles.input_container}>
                        <input type="text" placeholder="Fecha de nacimiento" max="2018-12-25" {...register("nacimiento", { required: "Campo requerido" })} onFocus={(e) => (e.target.type = "date")} />
                        <p className="fw-bold text-black">{errors.nacimiento?.message}</p>
                    </div>

                    <div className={styles.form_select}>
                        <select name="select" id="" defaultValue="" {...register("provincia", { required: "Campo requerido" })}>
                            <option value="" disabled>Provincia</option>
                            {states.map(elem => <option key={elem} value={elem} className={styles.options_bg}>{elem}</option>)}
                        </select>
                        <p className="fw-bold text-black">{errors.provincia?.message}</p>
                    </div>

                    <div className={styles.form_select}>
                        <select name="nivel" id="" defaultValue="" {...register("nivel", { required: "Campo requerido" })}>
                            <option value="" disabled>Nivel</option>
                            {level.map(elem => <option key={elem} value={elem} className={styles.options_bg}>{elem}</option>)}
                        </select>
                        <p className="fw-bold text-black">{errors.nivel?.message}</p>
                    </div>

                    <div className={styles.form_select}>
                        <select name="curso" id="" defaultValue="" {...register("curso", { required: "Campo requerido" })}>
                            <option value="" disabled>Curso de mi interés</option>
                            {course.map(elem => <option key={elem} value={elem} className={styles.options_bg}>{elem}</option>)}
                        </select>
                        <p className="fw-bold text-black">{errors.curso?.message}</p>
                    </div>

                    <div className={styles.submit_container}>
                        <input type="submit" value="ENVIAR" />
                    </div>

                </form>

                {
                    sentForm &&
                    <Modal className={styles.modal_container} show={true} centered="true">
                            <Modal.Body className={styles.modal}>
                                <p className="text-white text-center fw-bold">¡Gracias por tu consulta!
                                    Verificá tu casilla de correo para ver confirmación de tu pedido. En breve nos 
                                    comunicaremos para completar la solicitud de inscripción.
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