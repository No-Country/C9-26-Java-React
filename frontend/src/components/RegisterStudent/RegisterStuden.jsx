import { Button, Modal } from "react-bootstrap"
import { BsFillXCircleFill } from "react-icons/bs"
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import style from './Register.module.css';
import { useState } from "react";
import { useForm } from "react-hook-form";
import { apiCall } from "../../api";
import swal from "sweetalert";



const Register = ({ show, handleClose }) => {
    
    const [visible, setVisible] = useState(false);
    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        username: '',
        password: '',
        firstName: '',
        lastName: '',
        dni: '',
        address: '',
        phone: '',
        birthdate: '',
        level: ''
    });
    const onSubmit = data => {
        apiCall.post('/auth/register', data)
            .then(res => {
                if (res){
                    handleClose()
                    swal({                       
                        text: 'Estudiante registrado con éxito',
                        icon:'success',
                        buttons: 'Aceptar'
                        })
                    reset()
                }
            })
            .catch(error => {
               if (error.response.status != 201){
                swal({
                    title:'Error',
                    text: 'Estudiante registrado',
                    icon:'error',
                    buttons: 'Aceptar'
                    })
                reset()
               }
            })            
    };

    return (
        <>
            <Modal
                show={show}
                onHide={handleClose}
                centered
                className={style.modal}
            >
                <Modal.Header
                    style={{
                        background: '#000000',
                        border: 'none',
                        color: '#ffff'
                    }}
                >
                    <Modal.Title>Registrar Estudiante</Modal.Title>
                    <BsFillXCircleFill onClick={handleClose} style={{ cursor: 'pointer' }} />
                </Modal.Header>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Modal.Body
                        style={{
                            background: '#000000',
                            border: 'none',
                            color: '#ffff'

                        }}
                    >
                        <div className={style.body}>
                            <div className={style.input}>
                                <input
                                    {...register('username', { required: true })}
                                    type="email"
                                    placeholder="Usuario: user@brightenglish.com"
                                />
                            </div>
                            {errors.username && (
                                <span className={style.errors}>Se requiere un correo de usuario</span>
                            )}
                            <div className={style.input}>
                                <input
                                    {...register('password', { required: true })}
                                    type={visible ? 'text' : 'password'}
                                    placeholder="Password: Pass1234"
                                />
                                {visible ? (
                                    <AiFillEye onClick={() => setVisible(!visible)} style={{ color: 'black' }} />
                                ) : (
                                    <AiFillEyeInvisible onClick={() => setVisible(!visible)} style={{ color: 'black' }} />
                                )}
                            </div>
                            {errors.password && (
                                <span className={style.errors}>Se requiere un password</span>
                            )}
                            <div className={style.input}>
                                <input
                                    {...register('firstName', { required: true })}
                                    type="text"
                                    placeholder="Nombre: Pedro"
                                />
                            </div>
                            {errors.firstName && (
                                <span className={style.errors}>Se requiere un nombre</span>
                            )}
                            <div className={style.input}>
                                <input
                                    {...register('lastName', { required: true })}
                                    type="text"
                                    placeholder="Apellido: Pérez"
                                />
                            </div>
                            {errors.lastName && (
                                <span className={style.errors}>Se requiere un apellido</span>
                            )}
                            <div className={style.input}>
                                <input
                                    {...register('dni', { required: true })}
                                    type="number"
                                    placeholder="dni: 44112233"
                                />
                            </div>
                            {errors.dni && (
                                <span className={style.errors}>Se requiere DNI</span>
                            )}
                            <div className={style.input}>
                                <input
                                    {...register('address', { required: true })}
                                    type="text"
                                    placeholder="Dirección: Tigre 123, Buenos Aires"
                                />
                            </div>
                            {errors.address && (
                                <span className={style.errors}>Se requiere dirección</span>
                            )}
                            <div className={style.input}>
                                <input
                                    {...register('phone', { required: true })}
                                    type="number"
                                    placeholder="Telefono: +86 992 157 0668"
                                />
                            </div>
                            {errors.phone && (
                                <span className={style.errors}>Se requiere numero de contacto</span>
                            )}
                            <div className={style.input}>
                                <input
                                    {...register('birthdate', { required: true })}
                                    type="date"
                                />
                            </div>
                            {errors.birthdate && (
                                <span className={style.errors}>Se requiere fecha de nacimiento</span>
                            )}
                            <div className={style.input}>
                                <input
                                    {...register('level', { required: true })}
                                    type="text"
                                    placeholder="Nivel: C1"
                                />
                            </div>
                            {errors.level && (
                                <span className={style.errors}>Se requiere nivel de curso</span>
                            )}
                        </div>
                    </Modal.Body>
                    <Modal.Footer
                        style={{
                            border: 'none',
                            justifyContent: 'space-around',
                            background: '#000000',                            
                        }}
                    >

                        <Button
                            variant="danger"
                            onClick={handleClose}
                            className={style.button}
                            style={{ borderRadius: '20px' }}
                        >
                            CANCELAR
                        </Button>
                        <button
                            className={style.button}
                        >
                            REGISTRAR
                        </button>

                    </Modal.Footer>
                </form>
            </Modal>
        </>
    )

}

export default Register