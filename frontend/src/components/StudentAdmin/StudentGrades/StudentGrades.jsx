import { RiPencilFill } from 'react-icons/ri';
import { useForm } from 'react-hook-form';

import styles from "./StudentGrades.module.css";

const StudentGrades = ({ location }) => {

    const { register, handleSubmit } = useForm({
        defaultValues: {
            mid_oral: location === "/private/student" ? "-" : "",
            mid_grammar: location === "/private/student" ? "-" : "",
            mid_reading: location === "/private/student" ? "-" : "",
            mid_listen: location === "/private/student" ? "-" : "",
            final_oral: location === "/private/student" ? "-" : "",
            final_grammar: location === "/private/student" ? "-" : "",
            final_reading: location === "/private/student" ? "-" : "",
            final_listen: location === "/private/student" ? "-" : "",
        }
    });
    
    return (
        
        <section className={styles.grades_bg}>

            <div className={styles.grades_title}>
                <span>
                    {
                        location === "/private/student"
                            ? "Mis calificaciones"
                            : "Calificaciones"
                    }
                </span>
                {
                    location === "/private/add-student" && <RiPencilFill fontSize="1.25rem" color='black' />
                }
            </div>

            <span className={styles.grades_subtitle}>MID-TERM EXAM</span>
            
            <div className='d-flex flex-column'>
                <label htmlFor="mid_oral" className='ms-3 text-black'>COMUNICACION ORAL</label>
                <input type="text" id="mid_oral" className={styles.grades_input} 
                disabled={location === "/private/student" && "disabled"} {...register('mid_oral', { required: true })} />
            </div>
            
            <div className='d-flex flex-column'>
                <label htmlFor="mid_grammar" className='ms-3 text-black'>GRAMATICA</label>
                <input type="text" id="mid_grammar" className={styles.grades_input} 
                disabled={location === "/private/student" && "disabled"} {...register('mid_grammar', { required: true })} />
            </div>
            
            <div className='d-flex flex-column'>
                <label htmlFor="mid_reading" className='ms-3 text-black'>COMPRENSION LECTORA</label>
                <input type="text" id="mid_reading" className={styles.grades_input} 
                disabled={location === "/private/student" && "disabled"} {...register('mid_reading', { required: true })} />
            </div>
            
            <div className='d-flex flex-column'>
                <label htmlFor="mid_listen" className='ms-3 text-black'>COMPRENSION AUDITIVA</label>
                <input type="text" id="mid_listen" className={styles.grades_input} 
                disabled={location === "/private/student" && "disabled"} {...register('mid_listen', { required: true })} />
            </div>

            <span className={styles.grades_subtitle}>FINAL EXAM</span>
            
            <div className='d-flex flex-column'>
                <label htmlFor="final_oral" className='ms-3 text-black'>COMUNICACION ORAL</label>
                <input type="text" id="final_oral" className={styles.grades_input} 
                disabled={location === "/private/student" && "disabled"} {...register('final_oral', { required: true })} />
            </div>
            
            <div className='d-flex flex-column'>
                <label htmlFor="final_grammar" className='ms-3 text-black'>GRAMATICA</label>
                <input type="text" id="final_grammar" className={styles.grades_input} 
                disabled={location === "/private/student" && "disabled"} {...register('final_grammar', { required: true })} />
            </div>
            
            <div className='d-flex flex-column'>
                <label htmlFor="final_reading" className='ms-3 text-black'>COMPRENSION LECTORA</label>
                <input type="text" id="final_reading" className={styles.grades_input} 
                disabled={location === "/private/student" && "disabled"} {...register('final_reading', { required: true })} />
            </div>
            
            <div className='d-flex flex-column'>
                <label htmlFor="final_listen" className='ms-3 text-black'>COMPRENSION AUDITIVA</label>
                <input type="text" id="final_listen" className={styles.grades_input} 
                disabled={location === "/private/student" && "disabled"} {...register('final_listen', { required: true })} />
            </div>

        </section>
    )
}

export default StudentGrades;