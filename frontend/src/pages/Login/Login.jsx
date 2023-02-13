import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import style from './Login.module.css'
import { BsFillXCircleFill } from 'react-icons/bs'

const Login = ({ show, handleClose }) => {
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        className={style.modal}        

      >
        <Modal.Header style={{ background: '#000000', border: 'none', color: '#FFFFFF' }}>
          <h2>Por favor ingresa tus datos</h2>
          <BsFillXCircleFill onClick={handleClose} style={{ cursor: 'pointer' }} />
        </Modal.Header>
        <Modal.Body style={{ background: '#000000', border: 'none' }}>
          <div className={style.body}>
            <input type="email" placeholder='ingresa@tuemail.com' className={style.input}/>
            <input type="text" placeholder='DNI' className={style.input}/>
          </div>
        </Modal.Body>
        <Modal.Footer style={{ background: '#000000', border: 'none', display: 'flex', justifyContent: 'center' }}>
          <button className={style.button}>
            INGRESAR
          </button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
export default Login