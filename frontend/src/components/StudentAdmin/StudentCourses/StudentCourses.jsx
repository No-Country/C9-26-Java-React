import { NavLink } from "react-router-dom";
import { RiPencilFill } from 'react-icons/ri';
import { CAMPUS } from "../../../config/routes/paths";

import styles from "./StudentCourses.module.css";

const StudentCourses = ({ location }) => {

    const scrollToTop = () => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }

    return (
        <section className={styles.courses_bg}>

            <div className={styles.courses_title}>
                <span>
                    {
                        location === "/private/student"
                            ? "Mis cursos"
                            : "Cursos"
                    }
                </span>
                {
                    location === "/private/add-student" && <RiPencilFill fontSize="1.25rem" color='black' />
                }
            </div>


            <div className='d-flex flex-column'>
                <label htmlFor="course" className='ms-3 text-black'>CURSO</label>
                <input type="text" id="course" className={styles.courses_input} disabled={location === "/private/student" && "disabled"} />
            </div>

            <div className='d-flex flex-column'>
                <label htmlFor="professor" className='ms-3 text-black'>PROFESOR</label>
                <input type="text" id="professor" className={styles.courses_input} disabled={location === "/private/student" && "disabled"} />
            </div>

            <div className='d-flex flex-column'>
                <label htmlFor="day" className='ms-3 text-black'>DIAS DE CURSADO</label>
                <input type="text" id="day" className={styles.courses_input} disabled={location === "/private/student" && "disabled"} />
            </div>

            <div className='d-flex flex-column'>
                <label htmlFor="hour" className='ms-3 text-black'>HORARIO</label>
                <input type="text" id="hour" className={styles.courses_input} disabled={location === "/private/student" && "disabled"} />
            </div>

            <div className='d-flex flex-column'>
                <label htmlFor="modality" className='ms-3 text-black'>MODALIDAD</label>
                <input type="text" id="modality" className={styles.courses_input} disabled={location === "/private/student" && "disabled"} />
            </div>

            <div className='d-flex flex-column'>
                <label htmlFor="level" className='ms-3 text-black'>Nivel</label>
                <input type="text" id="level" className={styles.courses_input} disabled={location === "/private/student" && "disabled"} />
            </div>

            {
                location === "/private/student" &&
                <NavLink to={CAMPUS} onClick={() => scrollToTop()}>
                    <button className={styles.courses_button}>IR AL CAMPUS</button>
                </NavLink>
            }

        </section>
    )
}

export default StudentCourses;