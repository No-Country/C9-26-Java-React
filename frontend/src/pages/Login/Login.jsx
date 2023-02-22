import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import style from './Login.module.css'
import { BsFillXCircleFill } from 'react-icons/bs'
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { login } from '../../store/actions/userActions';
import { selectStatus } from '../../store/slices/userSlice';
import { useNavigate } from 'react-router-dom';

const Login = ({ show, handleClose }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const isAuthenticated = selectStatus === 'success';
  const { register, handleSubmit, formState: { errors } } = useForm({
    username: '',
    password: '',
  })

  const onSubmit = data => {
    dispatch(login(data))
    if (isAuthenticated) {
      navigate('/student')
    }
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
              INGRESAR
            </button>
          </Modal.Footer>
        </form>
      </Modal>
    </div >
  )
}
export default Login