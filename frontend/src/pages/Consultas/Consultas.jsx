import { useState } from 'react';
import ClassicForm from '../../components/ConstulasForms/ClassicForm/ClassicForm.jsx';
import TurneroForm from '../../components/ConstulasForms/TurneroForm/TurneroForm.jsx';
import TurneroSchedule from '../../components/ConstulasForms/TurneroSchedule/TurneroSchedule.jsx';

import styles from "./Consultas.module.css";

const Consultas = () => {

    const [nextPage, setNextPage] = useState(false);
    const [interviewOn, setInterviewOn] = useState(false);

    return (

        <main className='background'>

            {
                nextPage === false

                    ? <div className='mb-4'>
                        <h2 className="text-center text-white fw-bold mt-5">Elige cómo quieres contactarte con nosotros</h2>

                        <div className={styles.consult_wrapper}>
                            {
                                interviewOn
                                    ? <TurneroForm interviewOn={interviewOn} setNextPage={setNextPage} />
                                    : <>
                                        <ClassicForm setInterviewOn={setInterviewOn} />

                                        <TurneroForm setNextPage={setNextPage} />
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
