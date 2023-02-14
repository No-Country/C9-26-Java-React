import styles from "./StudentGrades.module.css";

const StudentGrades = () => {
    return (
        <section className={styles.grades_bg}>
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
    )
}

export default StudentGrades;