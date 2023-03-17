import { useState } from "react";
import { RiPencilFill } from 'react-icons/ri';
import profilePhotoAdmin from "../../../assets/images/PerfilAlumno/perfil.jpg";
import { useForm } from "react-hook-form";
import { apiCall } from "../../../api/index";
import swal from "sweetalert";

import styles from "./StudentData.module.css";

const StudentData = ({ location, info, token, role }) => {

    const [imageUpload, setImageUpload] = useState("");
    console.log(info);
    
    const imageUrlModified = () => {
        if (info.imageResource) {
            return info.imageResource.urlSecure.replace("http", "https");
        }
        return;
    }

    
    const [profilePhoto, setProfilePhoto] = useState(
        location === "/private/student"
            ? imageUrlModified()
            : profilePhotoAdmin
    );

    const { register, handleSubmit } = useForm({
        defaultValues: {
            name: role === "STUDENT" ? `${info.firstName} ${info.lastName}` : "",
            date: role === "STUDENT" ? info.birthdate : "",
            dni: role === "STUDENT" ? info.dni : "",
            address: role === "STUDENT" ? info.address : "",
            phone: role === "STUDENT" ? info.phone : "",
            email: role === "STUDENT" ? info.email : ""
        }
    });

    const uploadImage = async () => {

        const form = new FormData();
        form.append("file", imageUpload);

        const headers = {
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": 'multipart/form-data'
            }
        }

        try {
            const response = await apiCall.patch("/students/token/update/image", form, headers);
            if (response.status === 200) {
                swal({
                    text: 'Foto cargada con éxito, recargue la página para visualizar los cambios',
                    icon: 'success',
                    buttons: 'Aceptar'
                })
            }
        } catch (error) {
            console.log(error);
        }

    }

    return (
        <section className={styles.profile_container}>

            <div>

                <div >
                    <picture className={styles.profile_pictureContainer}>
                        <img src={
                            imageUpload 
                            ? URL.createObjectURL(imageUpload)
                            : profilePhoto
                        } className="d-block" alt="" />
                        {
                            location === "/private/student"
                            && <>

                                <label htmlFor="file" className={styles.profile_labelImg} >
                                    <RiPencilFill fontSize="1.5rem" color='black' className="bg" />
                                </label>
                                <input type="file" className={styles.profile_uploadImage} id="file" onChange={e => setImageUpload(e.target.files[0])} />

                            </>
                        }
                    </picture>

                </div>

                <div className={styles.profile_confirmImg}>
                    {
                        imageUpload && <button onClick={uploadImage}>Guardar</button>
                    }
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
