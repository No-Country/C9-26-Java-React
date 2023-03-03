import { useState } from "react";
import { RiPencilFill } from 'react-icons/ri';
import profilePhoto from "../../../assets/images/PerfilAlumno/papu.jpeg";
import profilePhotoAdmin from "../../../assets/images/PerfilAlumno/perfil.jpg";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";

import styles from "./StudentData.module.css";

const StudentData = ({ location }) => {
    const [image, setImage] = useState(null);

    const info = useSelector(state => state.user.info);
    console.log(info);

    const { register, handleSubmit } = useForm({
        defaultValues: {
            name: location === "/private/student" ? `${info.firstName} ${info.lastName}` : "",
            date: location === "/private/student" ? info.birthdate : "",
            dni: location === "/private/student" ? info.dni : "",
            address: location === "/private/student" ? info.address : "",
            phone: location === "/private/student" ? info.phone : "",
            email: location === "/private/student" ? info.email : ""
        }
    });

    /* const uploadImage = async () => {
        //if (image === null) return;

        console.log(image);

        const form = new FormData();
        form.append("file", image);

        const headers = {
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": 'multipart/form-data'
            }
        }

        const response = await apiCall.put("/students/token/update/image", headers);
        console.log(response);
    } */

    return (
        <section className={styles.profile_container}>

            <div>

                <div >
                    <picture className={styles.profile_pictureContainer}>
                        <img src={location === "/private/student" 
                                    ? profilePhoto
                                    : profilePhotoAdmin } className="d-block" alt="" />
                        {
                            location === "/private/student"
                            && <>
                                <label htmlFor="file" className={styles.profile_labelImg} /* onClick={uploadImage} */ >
                                    <RiPencilFill fontSize="1.5rem" color='black' className="bg" />
                                </label>
                                <input type="file" className={styles.profile_uploadImage} id="file" onChange={e => { setImage(e.target.files[0]); uploadImage() }} />
                            </>
                        }
                    </picture>

                </div>

                <div className={styles.profile_title}>
                    <span>
                        {
                            location === "/private/student"
                                ? "Mis datos"
                                : "Datos personales"
                        }
                    </span>
                    {
                        location === "/private/add-student" && <RiPencilFill fontSize="1.25rem" color='white' />
                    }
                </div>

                <form action="" /* onSubmit={handleSubmit(onSubmit)} */>

                    <div className='d-flex flex-column'>
                        <label htmlFor="name" className='ms-3'>Nombre y apellidos</label>
                        <input type="text" id="name" className={styles.profile_input}
                            disabled={location === "/private/student" && "disabled"}
                            {...register('name', { required: true })} />
                    </div>

                    <div className='d-flex flex-column'>
                        <label htmlFor="date" className='ms-3'>Fecha de nacimiento</label>
                        <input type="text" id="date" className={styles.profile_input}
                            disabled={location === "/private/student" && "disabled"}
                            {...register('date', { required: true })} />
                    </div>

                    <div className='d-flex flex-column'>
                        <label htmlFor="dni" className='ms-3'>DNI</label>
                        <input type="text" id="dni" className={styles.profile_input}
                            disabled={location === "/private/student" && "disabled"}
                            {...register('dni', { required: true })} />
                    </div>

                    <div className='d-flex flex-column'>
                        <label htmlFor="address" className='ms-3'>Dirección</label>
                        <input type="text" id="address" className={styles.profile_input}
                            disabled={location === "/private/student" && "disabled"}
                            {...register('address', { required: true })} />
                    </div>

                    <div className='d-flex flex-column'>
                        <label htmlFor="phone" className='ms-3'>Teléfono de contacto</label>
                        <input type="text" id="phone" className={styles.profile_input}
                            disabled={location === "/private/student" && "disabled"}
                            {...register('phone', { required: true })} />
                    </div>
                    <div className='d-flex flex-column'>
                        <label htmlFor="email" className='ms-3'>E-mail</label>
                        <input type="text" id="email" className={styles.profile_input}
                            disabled={location === "/private/student" && "disabled"}
                            {...register('email', { required: true })} />
                    </div>

                </form>

            </div>

        </section>
    )
}

export default StudentData;