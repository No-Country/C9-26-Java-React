import { RiPencilFill } from 'react-icons/ri';

import styles from "./StudentPayment.module.css";

const StudentPayment = ({ location }) => {
    
    return (
        <div className={styles.payment_container}>

            <div className={styles.payment_title}>
                <span>
                    {
                        location === "/private/student"
                            ? "Mis pagos"
                            : "Pagos"
                    }
                </span>
                {
                    location === "/private/add-student" && <RiPencilFill fontSize="1.25rem" color='black' />
                }
            </div>

            <div className='d-flex flex-column justify-content-center align-items-center'>
                <div className={styles.payment_status}>
                    <span className={styles.payment_subtitle}>CUOTA</span>
                    <span className={styles.payment_subtitle}>ESTADO</span>
                </div>

                <div className={styles.payment_inputContainer}>
                    <label htmlFor="level" className={styles.payment_label}>INSCRIPCION</label>
                    <input type="text" id="level" className={styles.payment_input} disabled={location === "/private/student" && "disabled"} />
                </div>
                <div className={styles.payment_inputContainer}>
                    <label htmlFor="level" className={styles.payment_label}>CUOTA 1</label>
                    <input type="text" id="level" className={styles.payment_input} disabled={location === "/private/student" && "disabled"} />
                </div>
                <div className={styles.payment_inputContainer}>
                    <label htmlFor="level" className={styles.payment_label}>CUOTA 2</label>
                    <input type="text" id="level" className={styles.payment_input} disabled={location === "/private/student" && "disabled"} />
                </div>
                <div className={styles.payment_inputContainer}>
                    <label htmlFor="level" className={styles.payment_label}>CUOTA 3</label>
                    <input type="text" id="level" className={styles.payment_input} disabled={location === "/private/student" && "disabled"} />
                </div>
                <div className={styles.payment_inputContainer}>
                    <label htmlFor="level" className={styles.payment_label}>CUOTA 4</label>
                    <input type="text" id="level" className={styles.payment_input} disabled={location === "/private/student" && "disabled"} />
                </div>
                <div className={styles.payment_inputContainer}>
                    <label htmlFor="level" className={styles.payment_label}>CUOTA 5</label>
                    <input type="text" id="level" className={styles.payment_input} disabled={location === "/private/student" && "disabled"} />
                </div>
                <div className={styles.payment_inputContainer}>
                    <label htmlFor="level" className={styles.payment_label}>CUOTA 6</label>
                    <input type="text" id="level" className={styles.payment_input} disabled={location === "/private/student" && "disabled"} />
                </div>
                <div className={styles.payment_inputContainer}>
                    <label htmlFor="level" className={styles.payment_label}>CUOTA 7</label>
                    <input type="text" id="level" className={styles.payment_input} disabled={location === "/private/student" && "disabled"} />
                </div>
                <div className={styles.payment_inputContainer}>
                    <label htmlFor="level" className={styles.payment_label}>CUOTA 8</label>
                    <input type="text" id="level" className={styles.payment_input} disabled={location === "/private/student" && "disabled"} />
                </div>
                <div className={styles.payment_inputContainer}>
                    <label htmlFor="level" className={styles.payment_label}>CUOTA 9</label>
                    <input type="text" id="level" className={styles.payment_input} disabled={location === "/private/student" && "disabled"} />
                </div>
                <div className={styles.payment_inputContainer}>
                    <label htmlFor="level" className={styles.payment_label}>CUOTA 10</label>
                    <input type="text" id="level" className={styles.payment_input} disabled={location === "/private/student" && "disabled"} />
                </div>
                <div className={styles.payment_inputContainer}>
                    <label htmlFor="level" className={styles.payment_label}>EXAMENES</label>
                    <input type="text" id="level" className={styles.payment_input} disabled={location === "/private/student" && "disabled"} />
                </div>
            </div>
        </div>
    )
}

export default StudentPayment;