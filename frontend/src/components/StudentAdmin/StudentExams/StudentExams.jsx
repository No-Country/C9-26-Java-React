import styles from "./StudentExams.module.css";

const StudentExams = () => {
    return (
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
    )
}

export default StudentExams;