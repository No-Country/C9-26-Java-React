import { RiPencilFill } from 'react-icons/ri';

import styles from "./StudentData.module.css";

const StudentData = () => {
    return (
        <section className={styles.profile_container}>

            <div className={styles.profile_container}>
                <div>
                    <picture>
                        <img src="../src/assets/images/PerfilAlumno/profile.png" alt="" />
                    </picture>
                </div>

                <div className={styles.profile_picture}>
                    <span className='text-white'>Mis datos</span>
                    <RiPencilFill fontSize="1.25rem" color='white' className='' />
                </div>

                <div className='d-flex flex-column'>
                    <label htmlFor="name" className='ms-3'>Nombre y apellidos</label>
                    <input type="text" id="name" className={styles.profile_input} />
                </div>
                <div className='d-flex flex-column'>
                    <label htmlFor="date" className='ms-3'>Fecha de nacimiento</label>
                    <input type="text" id="date" className={styles.profile_input} />
                </div>
                <div className='d-flex flex-column'>
                    <label htmlFor="dni" className='ms-3'>DNI</label>
                    <input type="text" id="dni" className={styles.profile_input} />
                </div>
                <div className='d-flex flex-column'>
                    <label htmlFor="adress" className='ms-3'>Dirección</label>
                    <input type="text" id="adress" className={styles.profile_input} />
                </div>
                <div className='d-flex flex-column'>
                    <label htmlFor="phone" className='ms-3'>Teléfono de contacto</label>
                    <input type="text" id="phone" className={styles.profile_input} />
                </div>
                <div className='d-flex flex-column'>
                    <label htmlFor="email" className='ms-3'>E-mail</label>
                    <input type="text" id="email" className={styles.profile_input} />
                </div>
            </div>

        </section>
    )
}

export default StudentData;