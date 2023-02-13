import Form from 'react-bootstrap/Form';
import { FaWhatsapp, FaFacebookSquare, FaInstagram } from 'react-icons/fa';

import styles from "./Consultas.module.css";

const Consultas = () => {
    return (
        <main className='background'>
            
            <div className='mb-4'> 
                <h2 className="text-center text-white fw-bold mt-5">Elige cómo quieres contactarte con nosotros</h2>

                <div className='d-flex justify-content-center gap-4'>
                    <section className={styles.consult_container}>
                        <p className='text-center text-black mb-5'>Completa el formulario con tus datos y nos pondremos en contacto para asesorarte y
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
                                    <input type="checkbox" name="" id="" />
                                    <span className='fs-5'>E-mail</span>
                                </div>
                                <div className={styles.consult_checkboxTel}>
                                    <input type="checkbox" name="" id="" />
                                    <span className='fs-5'>Teléfono</span>
                                </div>
                            </div>
                            <Form.Select>
                                <option>El motivo de mi consulta es</option>
                            </Form.Select>
                            <textarea name="" id="" cols="30" rows="10" placeholder='Escribe tus comentarios aquí'></textarea>
                        </form>
                    </section>

                    <section className={styles.consult_turnos}>
                        <p className="text-center text-black mb-5">¿Querés hacer una entrevista en vivo con nosotros para evacuar todas tus dudas? Elegí día y hora aquí.</p>

                        <div className={styles.consult_turnosBox}>
                            <div className="text-center">
                                <span className="d-inline-block mt-5">TURNERO PARA LIVE STREAMING</span>
                            </div>
                        </div>

                        <div className='d-flex flex-column align-items-center'>
                            <p className='text-center text-black fw-bold fs-5 mt-5'>Encontranos también en las redes</p>
                            <div className='d-flex gap-3 align-items-center justify-content-center mb-2'>
                                <FaInstagram fontSize="1.25rem" color='black'/>
                                <span className={styles.consult_turnosText}>@nombredelinstituto</span>
                            </div>
                            <div className='d-flex gap-3 align-items-center mb-2'>
                                <FaWhatsapp fontSize="1.25rem" color='black' />
                                <span className={styles.consult_turnosText}>+54 9 11 2345 6789</span>
                            </div>
                            <div className='d-flex gap-3 align-items-center'>
                                <FaFacebookSquare fontSize="1.25rem" color='black' />
                                <span className={styles.consult_turnosText}>nombre del instituto</span>
                            </div>
                        </div>
                    </section>
                </div>
            </div>

        </main>
    )
}

export default Consultas;
