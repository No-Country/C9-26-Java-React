import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import style from './Login.module.css'
import { BsFillXCircleFill } from 'react-icons/bs'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../store/actions/userActions';
import { useEffect } from 'react';
import { useAuth, useLoading, useUserInfo } from '../../hooks/userHooks';
import { useNavigate } from 'react-router-dom';
import { studentInfo } from '../../store/actions/userActions';

const Login = ({ show, handleClose }) => {
  const { isAuthenticated, token } = useAuth();
  const userInfo = useUserInfo();
  const isLoading = useLoading();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm({
    username: '',
    password: '',
  })

  // useEffect(() => {
  //   if (isAuthenticated && userInfo === null) {
  //     dispatch(studentInfo(token))
  //   }
  // }, [isAuthenticated, token])

  // useEffect(() => {
  //   if (userInfo) {
  //     handleClose()
  //   }
  // }, [userInfo])


  const onSubmit = data => {
    dispatch(login(data))
  };


  return (
    <div>
      <Modal
        show={show}
        onHide={handleClose}
        className={style.modal}
        centered='true'
      >
        <Modal.Header style={{ background: '#000000', border: 'none', color: '#FFFFFF' }}>
          <h2>Por favor ingresa tus datos</h2>
          <BsFillXCircleFill onClick={handleClose} style={{ cursor: 'pointer' }} />
        </Modal.Header>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Modal.Body style={{ background: '#000000', border: 'none' }}>
            <div className={style.body}>
              <input type="email" placeholder='Username' className={style.input} {...register('username', { required: true })} />
              {errors.username && <span className={style.errors}>Se requiere un nombre de usuario</span>}
              <input type="text" placeholder='Password' className={style.input} {...register('password', { required: true })} />
              {errors.password && <span className={style.errors}>Se requiere la contraseña</span>}

            </div>
          </Modal.Body>
          <Modal.Footer style={{ background: '#000000', border: 'none', display: 'flex', justifyContent: 'center' }}>
            <button className={style.button}>
              {isLoading ? 'VERIFICANDO...' : 'INGRESAR'}
            </button>
          </Modal.Footer>
        </form>
      </Modal>
    </div >
  )
}

export default Login