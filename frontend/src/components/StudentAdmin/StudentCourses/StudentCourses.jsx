import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { RiPencilFill } from 'react-icons/ri';

import styles from "./StudentCourses.module.css";

const StudentCourses = () => {
    const location = useLocation();
    const path = location.pathname;

    return (
        <section className={styles.courses_bg}>

            <span className={styles.courses_title}>
                {
                    path === "/student"
                    ? "Mis cursos"
                    : "Cursos"
                }
            </span>

            <div className='d-flex flex-column'>
                <label htmlFor="course" className='ms-3 text-black'>CURSO</label>
                <input type="text" id="course" className={styles.courses_input} />
            </div>

            <div className='d-flex flex-column'>
                <label htmlFor="professor" className='ms-3 text-black'>PROFESOR</label>
                <input type="text" id="professor" className={styles.courses_input} />
            </div>

            <div className='d-flex flex-column'>
                <label htmlFor="day" className='ms-3 text-black'>DIAS DE CURSADO</label>
                <input type="text" id="day" className={styles.courses_input} />
            </div>

            <div className='d-flex flex-column'>
                <label htmlFor="hour" className='ms-3 text-black'>HORARIO</label>
                <input type="text" id="hour" className={styles.courses_input} />
            </div>

            <div className='d-flex flex-column'>
                <label htmlFor="modality" className='ms-3 text-black'>MODALIDAD</label>
                <input type="text" id="modality" className={styles.courses_input} />
            </div>
            
            <div className='d-flex flex-column'>
                <label htmlFor="level" className='ms-3 text-black'>Nivel</label>
                <input type="text" id="level" className={styles.courses_input} />
            </div>

            {
                path === "/student" &&
                <NavLink to="#">
                    <button className={styles.courses_button}>IR AL CAMPUS</button>
                </NavLink>
            }
            
        </section>
    )
}

export default StudentCourses;