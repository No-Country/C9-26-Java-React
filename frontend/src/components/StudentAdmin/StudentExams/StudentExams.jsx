import { RiPencilFill } from 'react-icons/ri';

import styles from "./StudentExams.module.css";

const StudentExams = ({ location }) => {
    
    return (
        <div className={styles.myExam_container}>

            <div className={styles.myExam_title}>
                <span>
                    {
                        location === "/student"
                            ? "Mis exámenes"
                            : "Fechas exámenes"
                    }
                </span>
                {
                    location === "/add-student" && <RiPencilFill fontSize="1.25rem" color='black' />
                }
            </div>

            <div className='d-flex flex-column'>
                <label htmlFor="level" className='ms-3 text-black'>MID-TERM EXAM</label>
                <input type="text" id="level" className={styles.myExam_input} disabled={location === "/student" && "disabled"} />
            </div>

            <div className='d-flex flex-column'>
                <label htmlFor="level" className='ms-3 text-black'>FINAL EXAM</label>
                <input type="text" id="level" className={styles.myExam_input} disabled={location === "/student" && "disabled"} />
            </div>
        </div>
    )
}

export default StudentExams;