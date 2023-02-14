import { NavLink } from "react-router-dom";
import { RiPencilFill } from 'react-icons/ri';

import styles from "./StudentCourses.module.css";

const StudentCourses = ({ location }) => {

    return (
        <section className={styles.courses_bg}>

            <div className={styles.courses_title}>
                <span>
                    {
                        location === "/student"
                            ? "Mis cursos"
                            : "Cursos"
                    }
                </span>
                {
                    location === "/add-student" && <RiPencilFill fontSize="1.25rem" color='black' />
                }
            </div>


            <div className='d-flex flex-column'>
                <label htmlFor="course" className='ms-3 text-black'>CURSO</label>
                <input type="text" id="course" className={styles.courses_input} disabled={location === "/student" && "disabled"} />
            </div>

            <div className='d-flex flex-column'>
                <label htmlFor="professor" className='ms-3 text-black'>PROFESOR</label>
                <input type="text" id="professor" className={styles.courses_input} disabled={location === "/student" && "disabled"} />
            </div>

            <div className='d-flex flex-column'>
                <label htmlFor="day" className='ms-3 text-black'>DIAS DE CURSADO</label>
                <input type="text" id="day" className={styles.courses_input} disabled={location === "/student" && "disabled"} />
            </div>

            <div className='d-flex flex-column'>
                <label htmlFor="hour" className='ms-3 text-black'>HORARIO</label>
                <input type="text" id="hour" className={styles.courses_input} disabled={location === "/student" && "disabled"} />
            </div>

            <div className='d-flex flex-column'>
                <label htmlFor="modality" className='ms-3 text-black'>MODALIDAD</label>
                <input type="text" id="modality" className={styles.courses_input} disabled={location === "/student" && "disabled"} />
            </div>

            <div className='d-flex flex-column'>
                <label htmlFor="level" className='ms-3 text-black'>Nivel</label>
                <input type="text" id="level" className={styles.courses_input} disabled={location === "/student" && "disabled"} />
            </div>

            {
                location === "/student" &&
                <NavLink to="#">
                    <button className={styles.courses_button}>IR AL CAMPUS</button>
                </NavLink>
            }

        </section>
    )
}

export default StudentCourses;