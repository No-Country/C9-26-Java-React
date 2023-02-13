import { RiPencilFill } from 'react-icons/ri';

import styles from "./StudentAdmin.module.css";

const StudentAdmin = () => {
    return (
        <main className="background">
            <div className={styles.panel_container}>
                {/* Primer columna */}
                <section>
                    <div>
                        <picture>
                            <img src="../src/assets/images/PerfilAlumno/profile.png" alt="" />
                        </picture>
                    </div>

                    <div className={styles.profile_picture}>
                        <span className='text-white'>Mis datos</span>
                        <RiPencilFill fontSize="1.25rem" color='white' className='' />
                    </div>
                    <div className='d-flex flex-column'>
                        <label htmlFor="name" className='ms-3'>Nombre y apellidos</label>
                        <input type="text" id="name" className={styles.profile_input} />
                    </div>
                    <div className='d-flex flex-column'>
                        <label htmlFor="date" className='ms-3'>Fecha de nacimiento</label>
                        <input type="text" id="date" className={styles.profile_input} />
                    </div>
                    <div className='d-flex flex-column'>
                        <label htmlFor="dni" className='ms-3'>DNI</label>
                        <input type="text" id="dni" className={styles.profile_input} />
                    </div>
                    <div className='d-flex flex-column'>
                        <label htmlFor="adress" className='ms-3'>Dirección</label>
                        <input type="text" id="adress" className={styles.profile_input} />
                    </div>
                    <div className='d-flex flex-column'>
                        <label htmlFor="phone" className='ms-3'>Teléfono de contacto</label>
                        <input type="text" id="phone" className={styles.profile_input} />
                    </div>
                    <div className='d-flex flex-column'>
                        <label htmlFor="email" className='ms-3'>E-mail</label>
                        <input type="text" id="email" className={styles.profile_input} />
                    </div>

                </section>

                {/* Segunda columna */}
                <section className={styles.courses_bg}>

                    <span className={styles.courses_title}>Mis cursos</span>

                    <div className='d-flex flex-column'>
                        <label htmlFor="course" className='ms-3 text-black'>CURSO</label>
                        <input type="text" id="course" className={styles.profile_input} />
                    </div>
                    <div className='d-flex flex-column'>
                        <label htmlFor="professor" className='ms-3 text-black'>PROFESOR</label>
                        <input type="text" id="professor" className={styles.profile_input} />
                    </div>
                    <div className='d-flex flex-column'>
                        <label htmlFor="day" className='ms-3 text-black'>DIAS DE CURSADO</label>
                        <input type="text" id="day" className={styles.profile_input} />
                    </div>
                    <div className='d-flex flex-column'>
                        <label htmlFor="hour" className='ms-3 text-black'>HORARIO</label>
                        <input type="text" id="hour" className={styles.profile_input} />
                    </div>
                    <div className='d-flex flex-column'>
                        <label htmlFor="modality" className='ms-3 text-black'>MODALIDAD</label>
                        <input type="text" id="modality" className={styles.profile_input} />
                    </div>
                    <div className='d-flex flex-column'>
                        <label htmlFor="level" className='ms-3 text-black'>Nivel</label>
                        <input type="text" id="level" className={styles.profile_input} />
                    </div>

                    <input type="submit" value="IR AL CAMPUS" className={styles.courses_submit} />
                </section>

                {/* Tercer columna */}
                <section className={styles.courses_bg}>
                    <span className={styles.grades_title}>Mis calificaciones</span>

                    <span className={styles.grades_subtitle}>MID-TERM EXAM</span>
                    <div className='d-flex flex-column'>
                        <label htmlFor="mid_oral" className='ms-3 text-black'>COMUNICACION ORAL</label>
                        <input type="text" id="mid_oral" className={styles.grades_input} />
                    </div>
                    <div className='d-flex flex-column'>
                        <label htmlFor="mid_grammar" className='ms-3 text-black'>GRAMATICA</label>
                        <input type="text" id="mid_grammar" className={styles.grades_input} />
                    </div>
                    <div className='d-flex flex-column'>
                        <label htmlFor="mid_reading" className='ms-3 text-black'>COMPRENSION LECTORA</label>
                        <input type="text" id="mid_reading" className={styles.grades_input} />
                    </div>
                    <div className='d-flex flex-column'>
                        <label htmlFor="mid_listen" className='ms-3 text-black'>COMPRENSION AUDITIVA</label>
                        <input type="text" id="mid_listen" className={styles.grades_input} />
                    </div>

                    <span className={styles.grades_subtitle}>FINAL EXAM</span>
                    <div className='d-flex flex-column'>
                        <label htmlFor="final_oral" className='ms-3 text-black'>COMUNICACION ORAL</label>
                        <input type="text" id="final_oral" className={styles.grades_input} />
                    </div>
                    <div className='d-flex flex-column'>
                        <label htmlFor="final_grammar" className='ms-3 text-black'>GRAMATICA</label>
                        <input type="text" id="final_grammar" className={styles.grades_input} />
                    </div>
                    <div className='d-flex flex-column'>
                        <label htmlFor="final_reading" className='ms-3 text-black'>COMPRENSION LECTORA</label>
                        <input type="text" id="final_reading" className={styles.grades_input} />
                    </div>
                    <div className='d-flex flex-column'>
                        <label htmlFor="final_listen" className='ms-3 text-black'>COMPRENSION AUDITIVA</label>
                        <input type="text" id="final_listen" className={styles.grades_input} />
                    </div>

                </section>

                {/* Cuarta columna */}
                <section>
                    {/* Examenes */}
                    <div className={styles.myExam_container}>
                        <span className={styles.myExam_title}>Mis Exámenes</span>

                        <div className='d-flex flex-column'>
                            <label htmlFor="level" className='ms-3 text-black'>MID-TERM EXAM</label>
                            <input type="text" id="level" className={styles.myExam_input} />
                        </div>

                        <div className='d-flex flex-column'>
                            <label htmlFor="level" className='ms-3 text-black'>FINAL EXAM</label>
                            <input type="text" id="level" className={styles.myExam_input} />
                        </div>
                    </div>

                    {/* Pagos */}
                    <div className={styles.payment_container}>

                        <span className={styles.myExam_title}>Mis Pagos</span>

                        <div>
                            <div className='d-flex'>
                                <span className={styles.grades_subtitle}>CUOTA</span>
                                <span className={styles.grades_subtitle}>ESTADO</span>
                            </div>

                            <div className='d-flex justify-content-center'>
                                <label htmlFor="level" className='ms-3 text-black'>INSCRIPCION</label>
                                <input type="text" id="level" className={styles.payment_input} />
                            </div>
                            <div className='d-flex'>
                                <label htmlFor="level" className='ms-3 text-black'>CUOTA 1</label>
                                <input type="text" id="level" className={styles.payment_input} />
                            </div>
                            <div className='d-flex'>
                                <label htmlFor="level" className='ms-3 text-black'>CUOTA 2</label>
                                <input type="text" id="level" className={styles.payment_input} />
                            </div>
                            <div className='d-flex'>
                                <label htmlFor="level" className='ms-3 text-black'>CUOTA 3</label>
                                <input type="text" id="level" className={styles.payment_input} />
                            </div>
                            <div className='d-flex'>
                                <label htmlFor="level" className='ms-3 text-black'>CUOTA 4</label>
                                <input type="text" id="level" className={styles.payment_input} />
                            </div>
                            <div className='d-flex'>
                                <label htmlFor="level" className='ms-3 text-black'>CUOTA 5</label>
                                <input type="text" id="level" className={styles.payment_input} />
                            </div>
                            <div className='d-flex'>
                                <label htmlFor="level" className='ms-3 text-black'>CUOTA 6</label>
                                <input type="text" id="level" className={styles.payment_input} />
                            </div>
                            <div className='d-flex'>
                                <label htmlFor="level" className='ms-3 text-black'>CUOTA 7</label>
                                <input type="text" id="level" className={styles.payment_input} />
                            </div>
                            <div className='d-flex'>
                                <label htmlFor="level" className='ms-3 text-black'>CUOTA 8</label>
                                <input type="text" id="level" className={styles.payment_input} />
                            </div>
                            <div className='d-flex'>
                                <label htmlFor="level" className='ms-3 text-black'>CUOTA 9</label>
                                <input type="text" id="level" className={styles.payment_input} />
                            </div>
                            <div className='d-flex'>
                                <label htmlFor="level" className='ms-3 text-black'>CUOTA 10</label>
                                <input type="text" id="level" className={styles.payment_input} />
                            </div>
                            <div className='d-flex'>
                                <label htmlFor="level" className='ms-3 text-black'>EXAMENES</label>
                                <input type="text" id="level" className={styles.payment_input} />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}

export default StudentAdmin;