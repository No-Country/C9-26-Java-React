import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import style from './Login.module.css'
import { BsFillXCircleFill } from 'react-icons/bs'
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
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

  const [ visible, setVisible ] = useState(false)

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/private/student')
      handleClose()
    }
  }, [])


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
              <div className={style.input}><input type={visible ? "text": "password"} placeholder='Password' {...register('password', { required: true })} /> {visible ? <AiFillEye onClick={() => setVisible(!visible)} /> : <AiFillEyeInvisible onClick={() => setVisible(!visible)} />}</div>
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