import { useState, useEffect } from 'react';
import Pagination from '../Pagination/Pagination.jsx';
import guy from "../../../assets/images/Consultas/consultas_guy2.png";

import styles from "./TurneroSchedule.module.css";

const TurneroSchedule = () => {
    const [page, setPage] = useState(1);
    const [perPage, setPerPage] = useState(9);
    const breakpoint = 620;

    const fecha = new Date();
    let fechas = [];

    //Se crean 54 fechas y se pushean al array
    for (let i = 0; i < 54; i++) {
        fechas.push(new Date(fecha.getFullYear(), fecha.getMonth(), fecha.getDate() + (i + 2)));
    }

    const fechasRender = fechas
        .slice((page - 1) * perPage, (page - 1) * perPage + perPage)
        .map((fecha, index) => (
            <div className={styles.turnero_radioCont}>
                <input type="radio" name="radio_turnero" id={`date${index}`} />
                <span>{fecha.toLocaleDateString('es-ES', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
            </div>
        ));

    useEffect(() => {

        //Manejar tamaño de pantalla
        const handleResizeWindow = () => {
            if (window.innerWidth < breakpoint) {
                setPerPage(3);
            }
        };

        window.addEventListener("resize", handleResizeWindow);
        handleResizeWindow();

        return () => {
            window.removeEventListener("resize", handleResizeWindow);
        }
    }, []);

    return (
        <section className={styles.turnero_wrapper}>
            <div className='mb-4 d-flex flex-column'>
                <h2 className={styles.turnero_title}>Elige fecha y hora para tu entrevista</h2>

                <div className={styles.turnero_container}>

                    <span className='text-black fw-bold fs-5 ms-4 sm-text-center'>Elegí una fecha</span>

                    <div className={styles.turnero_radio}>
                        {fechasRender}
                    </div>

                    <Pagination page={page} setPage={setPage} />

                    <span className='text-black fw-bold fs-5'>Elegí el horario para tu entrevista (hora Argentina)</span>

                    <div className={styles.turnero_radio}>
                        <div>
                            <div className={styles.turnero_radioCont}>
                                <input type="radio" name="radio_turneroHora" id="date1" />
                                <span>8 a.m.</span>
                            </div>
                            <div className={styles.turnero_radioCont}>
                                <input type="radio" name="radio_turneroHora" id="date2" />
                                <span>9 a.m.</span>
                            </div>
                        </div>

                        <div>
                            <div className={styles.turnero_radioCont}>
                                <input type="radio" name="radio_turneroHora" id="date1" />
                                <span>10 a.m.</span>
                            </div>
                            <div className={styles.turnero_radioCont}>
                                <input type="radio" name="radio_turneroHora" id="date2" />
                                <span>11 a.m.</span>
                            </div>
                        </div>

                        <div>
                            <div className={styles.turnero_radioCont}>
                                <input type="radio" name="radio_turneroHora" id="date1" />
                                <span>2 p.m.</span>
                            </div>
                            <div className={styles.turnero_radioCont}>
                                <input type="radio" name="radio_turneroHora" id="date2" />
                                <span>3 p.m.</span>
                            </div>
                        </div>
                    </div>

                    <div className={styles.turnero_submit}>
                        <input type="submit" value="ENVIAR" />
                    </div>

                </div>

            </div>

            <div className={styles.turnero_announceContainer}>
                <div className={styles.turnero_announce}>
                    <p className='text-white fw-bold text-center '>En unos minutos recibirás un recordatorio por email en la dirección indicada en
                        el paso anterior con un link para ingresar a tu entrevista. ¡Nos vemos pronto!</p>
                </div>
                <img src={guy} alt="Man with arms crossed" />
            </div>

        </section>
    )
}

export default TurneroSchedule;