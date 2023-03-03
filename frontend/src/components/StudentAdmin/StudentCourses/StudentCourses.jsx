import { NavLink } from "react-router-dom";
import { RiPencilFill } from 'react-icons/ri';
import { CAMPUS } from "../../../config/routes/paths";
import { useForm } from 'react-hook-form';

import styles from "./StudentCourses.module.css";

const StudentCourses = ({ location }) => {

    const { register, handleSubmit } = useForm({
        defaultValues: {
            course: "Business English",
            professor: "Manuel Pérez",
            day: "Martes y Jueves",
            hour: "14:30 a 16:30",
            modality: "Grupo presencial",
            level: "B1",
        }
    });

    const scrollToTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
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

            <form >
                
                <div className='d-flex flex-column'>
                    <label htmlFor="course" className='ms-3 text-black'>CURSO</label>
                    <input type="text" id="course" className={styles.courses_input}
                        disabled={location === "/private/student" && "disabled"} {...register('course', { required: true })} />
                </div>

                <div className='d-flex flex-column'>
                    <label htmlFor="professor" className='ms-3 text-black'>PROFESOR</label>
                    <input type="text" id="professor" className={styles.courses_input}
                        disabled={location === "/private/student" && "disabled"} {...register('professor', { required: true })} />
                </div>

                <div className='d-flex flex-column'>
                    <label htmlFor="day" className='ms-3 text-black'>DIAS DE CURSADO</label>
                    <input type="text" id="day" className={styles.courses_input}
                        disabled={location === "/private/student" && "disabled"} {...register('day', { required: true })} />
                </div>

                <div className='d-flex flex-column'>
                    <label htmlFor="hour" className='ms-3 text-black'>HORARIO</label>
                    <input type="text" id="hour" className={styles.courses_input}
                        disabled={location === "/private/student" && "disabled"} {...register('hour', { required: true })} />
                </div>

                <div className='d-flex flex-column'>
                    <label htmlFor="modality" className='ms-3 text-black'>MODALIDAD</label>
                    <input type="text" id="modality" className={styles.courses_input}
                        disabled={location === "/private/student" && "disabled"} {...register('modality', { required: true })} />
                </div>

                <div className='d-flex flex-column'>
                    <label htmlFor="level" className='ms-3 text-black'>Nivel</label>
                    <input type="text" id="level" className={styles.courses_input}
                        disabled={location === "/private/student" && "disabled"} {...register('level', { required: true })} />
                </div>

                {
                    location === "/private/student" &&
                    <NavLink to={CAMPUS} onClick={() => scrollToTop()} className="text-decoration-none" >
                        <div className="d-flex justify-content-center">
                            <button className={styles.courses_button}>IR AL CAMPUS</button>
                        </div>
                    </NavLink>
                }

            </form>

        </section>
    )
}

export default StudentCourses;