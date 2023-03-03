import { RiPencilFill } from 'react-icons/ri';
import { useForm } from 'react-hook-form';

import styles from "./StudentPayment.module.css";

const StudentPayment = ({ location }) => {

    const { register, handleSubmit } = useForm({
        defaultValues: {
            inscription: location === "/private/student" ? "PAGADA" : "",
            cuota1: location === "/private/student" ? "PAGADA" : "",
            cuota2: location === "/private/student" ? "PENDIENTE" : "",
            cuota3: location === "/private/student" ? "PENDIENTE" : "",
            cuota4: location === "/private/student" ? "PENDIENTE" : "",
            cuota5: location === "/private/student" ? "PENDIENTE" : "",
            cuota6: location === "/private/student" ? "PENDIENTE" : "",
            cuota7: location === "/private/student" ? "PENDIENTE" : "",
            cuota8: location === "/private/student" ? "PENDIENTE" : "",
            cuota9: location === "/private/student" ? "PENDIENTE" : "",
            cuota10: location === "/private/student" ? "PENDIENTE" : "",
            exam: location === "/private/student" ? "PENDIENTE" : "",
        }
    });
    
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
                    <label htmlFor="inscription" className={styles.payment_label}>INSCRIPCION</label>
                    <input type="text" id="inscription" className={styles.payment_input} 
                    disabled={location === "/private/student" && "disabled"} {...register('inscription', { required: true })} />
                </div>

                <div className={styles.payment_inputContainer}>
                    <label htmlFor="cuota1" className={styles.payment_label}>CUOTA 1</label>
                    <input type="text" id="cuota1" className={styles.payment_input} 
                    disabled={location === "/private/student" && "disabled"} {...register("cuota1", { required: true })} />
                </div>

                <div className={styles.payment_inputContainer}>
                    <label htmlFor="cuota2" className={styles.payment_label}>CUOTA 2</label>
                    <input type="text" id="cuota2" className={styles.payment_input} 
                    disabled={location === "/private/student" && "disabled"} {...register('cuota2', { required: true })} />
                </div>

                <div className={styles.payment_inputContainer}>
                    <label htmlFor="cuota3" className={styles.payment_label}>CUOTA 3</label>
                    <input type="text" id="cuota3" className={styles.payment_input} 
                    disabled={location === "/private/student" && "disabled"} {...register('cuota3', { required: true })} />
                </div>

                <div className={styles.payment_inputContainer}>
                    <label htmlFor="cuota4" className={styles.payment_label}>CUOTA 4</label>
                    <input type="text" id="cuota4" className={styles.payment_input} 
                    disabled={location === "/private/student" && "disabled"} {...register('cuota4', { required: true })} />
                </div>

                <div className={styles.payment_inputContainer}>
                    <label htmlFor="cuota5" className={styles.payment_label}>CUOTA 5</label>
                    <input type="text" id="cuota5" className={styles.payment_input} 
                    disabled={location === "/private/student" && "disabled"} {...register('cuota5', { required: true })} />
                </div>

                <div className={styles.payment_inputContainer}>
                    <label htmlFor="cuota6" className={styles.payment_label}>CUOTA 6</label>
                    <input type="text" id="cuota6" className={styles.payment_input} 
                    disabled={location === "/private/student" && "disabled"} {...register('cuota6', { required: true })} />
                </div>

                <div className={styles.payment_inputContainer}>
                    <label htmlFor="cuota7" className={styles.payment_label}>CUOTA 7</label>
                    <input type="text" id="cuota7" className={styles.payment_input} 
                    disabled={location === "/private/student" && "disabled"} {...register('cuota7', { required: true })} />
                </div>

                <div className={styles.payment_inputContainer}>
                    <label htmlFor="cuota7" className={styles.payment_label}>CUOTA 8</label>
                    <input type="text" id="cuota7" className={styles.payment_input} 
                    disabled={location === "/private/student" && "disabled"} {...register('cuota7', { required: true })} />
                </div>

                <div className={styles.payment_inputContainer}>
                    <label htmlFor="cuota8" className={styles.payment_label}>CUOTA 9</label>
                    <input type="text" id="cuota8" className={styles.payment_input} 
                    disabled={location === "/private/student" && "disabled"} {...register('cuota8', { required: true })} />
                </div>

                <div className={styles.payment_inputContainer}>
                    <label htmlFor="cuota9" className={styles.payment_label}>CUOTA 10</label>
                    <input type="text" id="cuota9" className={styles.payment_input} 
                    disabled={location === "/private/student" && "disabled"} {...register('cuota9', { required: true })} />
                </div>

                <div className={styles.payment_inputContainer}>
                    <label htmlFor="exam" className={styles.payment_label}>EXAMENES</label>
                    <input type="text" id="exam" className={styles.payment_input} 
                    disabled={location === "/private/student" && "disabled"} {...register('exam', { required: true })} />
                </div>
            </div>
        </div>
    )
}

export default StudentPayment;