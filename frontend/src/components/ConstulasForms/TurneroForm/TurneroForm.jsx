import { FaWhatsapp, FaFacebookSquare, FaInstagram } from 'react-icons/fa';

import styles from "./TurneroForm.module.css";

const TurneroForm = ({ interviewOn, setNextPage, reasons, name, email, description }) => {

    const handleSubmit = () => {
        setNextPage(true);
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }

    return (
        <section className={`${styles.consult_turnos} ${interviewOn && styles.consult_show}`}>
            <p className={styles.consult_turnosSub}>¿Querés hacer una <b>entrevista en vivo</b> con nosotros para evacuar todas tus dudas? <b>Elegí día y hora aquí.</b></p>

            <div className={styles.consult_turnosBox}>
                <div className="text-center p-4">

                    <span className="fw-bold">QUEREMOS ESCUCHARTE</span>

                    <p className='mt-3'>Completá con tus datos y pedí una entrevista para hacer tu <b>consulta online en vivo.</b></p>

                    <div className='d-flex flex-column justify-content-center align-items-center'>

                        <form action="" onSubmit={handleSubmit}>
                            <input type="text" name="nombre"
                                placeholder="Nombre y apellido" className={styles.consult_inputTurnero}
                                required onChange={e => name(e.target.value)} />

                            <input type="email" name="email"
                                placeholder="Email" className={styles.consult_inputTurnero}
                                required onChange={e => email(e.target.value)} />

                            <select name="motivo" defaultValue="" className={styles.consult_inputTurnero} onChange={e => description(e.target.value)} required>
                                <option value="" disabled>Motivo de la consulta</option>
                                {reasons.map(elem => <option key={elem} value={elem} className={styles.consult_optionsBg}>{elem}</option>)}
                            </select>

                            <input type="submit" value="PEDIR TURNO"
                                className={styles.consult_submitTunero} />
                        </form>

                    </div>

                </div>
            </div>

            <div className='d-flex flex-column align-items-center'>

                <p className='text-center text-black fw-bold fs-5 mt-3'>Encontranos también en las redes</p>

                <div className={styles.consult_iconContainer}>
                    <FaInstagram fontSize="1.25rem" color='black' />
                    <span className={styles.consult_turnosText}>@bright_english</span>
                </div>

                <div className={styles.consult_iconContainer}>
                    <FaWhatsapp fontSize="1.25rem" color='black' />
                    <span className={styles.consult_turnosText}>+549 3456 7891</span>
                </div>

                <div className={styles.consult_iconContainer}>
                    <FaFacebookSquare fontSize="1.25rem" color='black' />
                    <span className={styles.consult_turnosText}>Bright English</span>
                </div>
            </div>
        </section>
    )
}

export default TurneroForm;