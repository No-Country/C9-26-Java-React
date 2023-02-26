import { useState } from 'react';
import ClassicForm from '../../components/ConstulasForms/ClassicForm/ClassicForm.jsx';
import TurneroForm from '../../components/ConstulasForms/TurneroForm/TurneroForm.jsx';
import TurneroSchedule from '../../components/ConstulasForms/TurneroSchedule/TurneroSchedule.jsx';

import styles from "./Consultas.module.css";

const Consultas = () => {

    const [nextPage, setNextPage] = useState(false);
    const [interviewOn, setInterviewOn] = useState(false);

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

    return (

        <main className='background'>

            {
                nextPage === false

                    ? <div className='mb-4'>
                        <h2 className="text-center text-white fw-bold mt-5">Elige cómo quieres contactarte con nosotros</h2>

                        <div className={styles.consult_wrapper}>
                            {
                                interviewOn
                                    ? <TurneroForm interviewOn={interviewOn} setNextPage={setNextPage} reasons={reasons} />
                                    : <>
                                        <ClassicForm setInterviewOn={setInterviewOn} reasons={reasons}/>

                                        <TurneroForm setNextPage={setNextPage} reasons={reasons}/>
                                    </>
                            }

                        </div>
                    </div>

                    : <TurneroSchedule />
            }


        </main>
    )
}

export default Consultas;
