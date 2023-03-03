import { useState, useEffect } from 'react';
import Pagination from '../Pagination/Pagination.jsx';
import guy from "../../../assets/images/Consultas/consultas_guy2.png";
import Modal from 'react-bootstrap/Modal';
import { apiCall } from '../../../api/index.js';

import styles from "./TurneroSchedule.module.css";

//Modal que se muetra al enviar el form
function ModalResponse({ fn }) {
    const handleClose = () => {
        fn(false);
    };

    return (

        <Modal className={styles.modal_container} show={true} centered="true">
            <Modal.Body className={styles.modal}>
                <p className="text-white text-center fw-bold">¡Gracias por tu consulta!
                    Verificá tu casilla de correo para ver confirmación de tu pedido y link para ingresar a
                    la entrevista en el día y hora seleccionados.
                </p>
                <button className={styles.modal_button} onClick={handleClose}>CERRAR</button>
            </Modal.Body>
        </Modal>
    )
}

const TurneroSchedule = ({ name, email, description }) => {
    const [page, setPage] = useState(1);
    const [perPage, setPerPage] = useState(9);

    const [day, setDay] = useState("");
    const [time, setTime] = useState("");
    const [nameForm, setNameForm] = useState(name);
    const [emailForm, setEmailForm] = useState(email);
    const [descriptionForm, setDescriptionForm] = useState(description);

    const [status, setStatus] = useState(false);

    const breakpoint = 620;

    const fecha = new Date();
    let fechas = [];

    //Se crean 54 fechas y se pushean al array
    for (let i = 0; i < 54; i++) {
        fechas.push(new Date(fecha.getFullYear(), fecha.getMonth(), fecha.getDate() + (i + 2)));
    }

    const fechasRender = fechas
        .slice((page - 1) * perPage, (page - 1) * perPage + perPage)
        .map((fecha) => (
            <div className={styles.turnero_radioCont}>

                <input type="radio" name="radio_turnero" key={`fecha-${fecha.getTime()}`}
                    value={fecha.toLocaleDateString('es-ES', { day: 'numeric', month: 'short', year: 'numeric' })}
                    required onChange={e => setDay(e.target.value)} />

                <span>{fecha.toLocaleDateString('es-ES', { day: 'numeric', month: 'short', year: 'numeric' })}</span>

            </div>
        ));

    const handleSubmit = async (nameForm, emailForm, descriptionForm, day, time, e) => {
        e.preventDefault();
        const data = {
            "date": day,
            "schedule": time,
            "description": descriptionForm,
            "email": emailForm,
            "fullName": nameForm
        }

        try {
            const response = await apiCall.post('/appointments/create', data)
            response.status === 201 && setStatus(true);
        } catch (error) {
            console.log(error);
        }
    }

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

                    <form action="" onSubmit={(e) => handleSubmit(nameForm, emailForm, descriptionForm, day, time, e)} >
                        <div className={styles.turnero_radio}>
                            {fechasRender}
                        </div>

                        <Pagination page={page} setPage={setPage} />

                        <span className='text-black fw-bold fs-5'>Elegí el horario para tu entrevista (hora Argentina)</span>

                        <div className={styles.turnero_radioHours}>
                            <div className={styles.hoursContainer}>
                                <div className={styles.turnero_radioCont}>
                                    <input type="radio" name="radio_turneroHora" id="date1" value="8 a.m." required onChange={e => setTime(e.target.value)} />
                                    <span>8 a.m.</span>
                                </div>
                                <div className={styles.turnero_radioCont}>
                                    <input type="radio" name="radio_turneroHora" id="date2" value="9 a.m." required onChange={e => setTime(e.target.value)} />
                                    <span>9 a.m.</span>
                                </div>
                            </div>

                            <div className={styles.hoursContainer}>
                                <div className={styles.turnero_radioCont}>
                                    <input type="radio" name="radio_turneroHora" id="date3" value="10 a.m." required onChange={e => setTime(e.target.value)} />
                                    <span>10 a.m.</span>
                                </div>
                                <div className={styles.turnero_radioCont}>
                                    <input type="radio" name="radio_turneroHora" id="date4" value="11 a.m." required onChange={e => setTime(e.target.value)} />
                                    <span>11 a.m.</span>
                                </div>
                            </div>

                            <div className={styles.hoursContainer}>
                                <div className={styles.turnero_radioCont}>
                                    <input type="radio" name="radio_turneroHora" id="date5" value="2 p.m." required onChange={e => setTime(e.target.value)} />
                                    <span>2 p.m.</span>
                                </div>
                                <div className={styles.turnero_radioCont}>
                                    <input type="radio" name="radio_turneroHora" id="date6" value="3 p.m." required onChange={e => setTime(e.target.value)} />
                                    <span>3 p.m.</span>
                                </div>
                            </div>
                        </div>

                        <div className={styles.turnero_submit}>
                            <input type="submit" value="ENVIAR" />
                        </div>
                    </form>

                </div>

            </div>

            <div className={styles.turnero_announceContainer}>
                <div className={styles.turnero_announce}>
                    <p className='text-white fw-bold text-center '>En unos minutos recibirás un recordatorio por email en la dirección indicada en
                        el paso anterior con un link para ingresar a tu entrevista. ¡Nos vemos pronto!</p>
                </div>
                <img src={guy} alt="Man with arms crossed" />
            </div>

            {
                status && <ModalResponse fn={setStatus} />
            }

        </section>
    )
}

export default TurneroSchedule;