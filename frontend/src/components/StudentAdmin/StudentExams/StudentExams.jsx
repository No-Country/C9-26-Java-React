import { RiPencilFill } from 'react-icons/ri';
import { useForm } from 'react-hook-form';
import { useSelector } from "react-redux";

import styles from "./StudentExams.module.css";

const StudentExams = ({ location }) => {

    const info = useSelector(state => state.user.info);

    const { register, handleSubmit } = useForm({
        defaultValues: {
            mid_exam: location === "/private/student" ? info.exams[0].examDate : "",
            final_exam: location === "/private/student" ? info.exams[1].examDate : "",
        }
    });

    return (
        <div className={styles.myExam_container}>

            <div className={styles.myExam_title}>
                <span>
                    {
                        location === "/private/student"
                            ? "Mis exámenes"
                            : "Fechas exámenes"
                    }
                </span>
                {
                    location === "/private/add-student" && <RiPencilFill fontSize="1.25rem" color='black' />
                }
            </div>

            <form action="">
                
                <div className='d-flex flex-column'>
                    <label htmlFor="mid_exam" className='ms-3 text-black'>MID-TERM EXAM</label>
                    <input type="text" id="mid_exam" className={styles.myExam_input}
                        disabled={location === "/private/student" && "disabled"} {...register('mid_exam', { required: true })} />
                </div>

                <div className='d-flex flex-column'>
                    <label htmlFor="final_exam" className='ms-3 text-black'>FINAL EXAM</label>
                    <input type="text" id="final_exam" className={styles.myExam_input}
                        disabled={location === "/private/student" && "disabled"} {...register('final_exam', { required: true })} />
                </div>
                
            </form>

        </div>
    )
}

export default StudentExams;