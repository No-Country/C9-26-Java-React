import { FaWhatsapp, FaFacebookSquare, FaInstagram } from 'react-icons/fa';

import styles from "./TurneroForm.module.css";

const TurneroForm = ({ interviewOn, setNextPage }) => {

    const handleSubmit = () => {
        setNextPage(true);
    }

    return (
        <section className={`${styles.consult_turnos} ${interviewOn && styles.consult_show}`}>
            <p className={styles.consult_turnosSub}>¿Querés hacer una <b>entrevista en vivo</b> con nosotros para evacuar todas tus dudas? <b>Elegí día y hora aquí.</b></p>

            <div className={styles.consult_turnosBox}>
                <div className="text-center p-4">

                    <span className="fw-bold">QUEREMOS ESCUCHARTE</span>

                    <p className='mt-3'>Completá con tus datos y pedí una entrevista para hacer tu <b>consulta online en vivo.</b></p>

                    <div className='d-flex flex-column justify-content-center align-items-center'>
                        <input type="text" name="" id="" placeholder="Nombre y apellido" className={styles.consult_inputTurnero} />
                        <input type="email" name="" id="" placeholder="Email" className={styles.consult_inputTurnero} />
                        <select name="" id="" className={styles.consult_inputTurnero}>
                            <option value="Motivo de consulta">Motivo de consulta</option>
                            <option value="Opcion1">Opcion1</option>
                            <option value="Opcion2">Opcion2</option>
                        </select>
                        <input type="submit" value="PEDIR TURNO" 
                            className={styles.consult_submitTunero} onClick={handleSubmit} />
                    </div>

                </div>
            </div>

            <div className='d-flex flex-column align-items-center'>
                <p className='text-center text-black fw-bold fs-5 mt-3'>Encontranos también en las redes</p>
                <div className='d-flex gap-3 align-items-center justify-content-center mb-2'>
                    <FaInstagram fontSize="1.25rem" color='black' />
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
    )
}

export default TurneroForm;