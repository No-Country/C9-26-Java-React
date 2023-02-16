import { RiPencilFill } from 'react-icons/ri';

import styles from "./StudentPayment.module.css";

const StudentPayment = ({ location }) => {
    
    return (
        <div className={styles.payment_container}>

            <div className={styles.payment_title}>
                <span>
                    {
                        location === "/student"
                            ? "Mis pagos"
                            : "Pagos"
                    }
                </span>
                {
                    location === "/add-student" && <RiPencilFill fontSize="1.25rem" color='black' />
                }
            </div>

            <div className='d-flex flex-column justify-content-center align-items-center'>
                <div className={styles.payment_status}>
                    <span className={styles.payment_subtitle}>CUOTA</span>
                    <span className={styles.payment_subtitle}>ESTADO</span>
                </div>

                <div className={styles.payment_inputContainer}>
                    <label htmlFor="level" className='ms-3 text-black'>INSCRIPCION</label>
                    <input type="text" id="level" className={styles.payment_input} disabled={location === "/student" && "disabled"} />
                </div>
                <div className={styles.payment_inputContainer}>
                    <label htmlFor="level" className='ms-3 text-black'>CUOTA 1</label>
                    <input type="text" id="level" className={styles.payment_input} disabled={location === "/student" && "disabled"} />
                </div>
                <div className={styles.payment_inputContainer}>
                    <label htmlFor="level" className='ms-3 text-black'>CUOTA 2</label>
                    <input type="text" id="level" className={styles.payment_input} disabled={location === "/student" && "disabled"} />
                </div>
                <div className={styles.payment_inputContainer}>
                    <label htmlFor="level" className='ms-3 text-black'>CUOTA 3</label>
                    <input type="text" id="level" className={styles.payment_input} disabled={location === "/student" && "disabled"} />
                </div>
                <div className={styles.payment_inputContainer}>
                    <label htmlFor="level" className='ms-3 text-black'>CUOTA 4</label>
                    <input type="text" id="level" className={styles.payment_input} disabled={location === "/student" && "disabled"} />
                </div>
                <div className={styles.payment_inputContainer}>
                    <label htmlFor="level" className='ms-3 text-black'>CUOTA 5</label>
                    <input type="text" id="level" className={styles.payment_input} disabled={location === "/student" && "disabled"} />
                </div>
                <div className={styles.payment_inputContainer}>
                    <label htmlFor="level" className='ms-3 text-black'>CUOTA 6</label>
                    <input type="text" id="level" className={styles.payment_input} disabled={location === "/student" && "disabled"} />
                </div>
                <div className={styles.payment_inputContainer}>
                    <label htmlFor="level" className='ms-3 text-black'>CUOTA 7</label>
                    <input type="text" id="level" className={styles.payment_input} disabled={location === "/student" && "disabled"} />
                </div>
                <div className={styles.payment_inputContainer}>
                    <label htmlFor="level" className='ms-3 text-black'>CUOTA 8</label>
                    <input type="text" id="level" className={styles.payment_input} disabled={location === "/student" && "disabled"} />
                </div>
                <div className={styles.payment_inputContainer}>
                    <label htmlFor="level" className='ms-3 text-black'>CUOTA 9</label>
                    <input type="text" id="level" className={styles.payment_input} disabled={location === "/student" && "disabled"} />
                </div>
                <div className={styles.payment_inputContainer}>
                    <label htmlFor="level" className='ms-3 text-black'>CUOTA 10</label>
                    <input type="text" id="level" className={styles.payment_input} disabled={location === "/student" && "disabled"} />
                </div>
                <div className={styles.payment_inputContainer}>
                    <label htmlFor="level" className='ms-3 text-black'>EXAMENES</label>
                    <input type="text" id="level" className={styles.payment_input} disabled={location === "/student" && "disabled"} />
                </div>
            </div>
        </div>
    )
}

export default StudentPayment;