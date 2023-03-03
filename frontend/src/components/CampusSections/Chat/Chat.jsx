import React, { useState } from 'react'
import style from './Chat.module.css'
import { BsSearch } from "react-icons/bs";
import { AiOutlineSend } from "react-icons/ai";
import contactos from './Contactos.json'
import { Col, Container, Row } from 'react-bootstrap';

const Chat = () => {

    const [sms, setSms] = useState('')
    const [msj, setMsj] = useState([])
    const [posicion, setPosicion] = useState(0)
    const [bolean, setBolean] = useState(false)

    const mensajes = []

    const handleSubmit = (e) => {
        e.preventDefault()
        mensajes.push(sms)
        setMsj(mensajes)
        setSms('')
        setBolean(true)
    }

    const handleClick = (index) => {
        setPosicion(index)
        setBolean(false)
        setMsj('')
    }

    return (
        <div className={style.main}>
            <Container>
                <Row className='pb-3'>
                    <Col sm={6} lg={4} className='position-relative'>
                        <div className={style.divBuscar}>
                            <BsSearch />
                            <input
                                type="text"
                                placeholder='Buscar Contacto'
                                className={style.inputBuscar}
                            />
                        </div>
                    </Col>
                </Row>
                <Row className={style.divBody}>
                    <Col lg={3} className={`d-none d-lg-block`}>
                        <div className={style.divContacto}>
                            <h5 style={{ borderBottom: '1px solid #FFFFFF', padding: '10px' }}>CONTACTOS</h5>
                            <ul className={style.liConatct}>
                                {contactos.map((contacto, index) => (
                                    <div className={style.divLiConatct} key={index}>
                                        <img
                                            style={{ width: '30px', borderRadius: '50%' }}
                                            src={contacto.image}
                                        />
                                        <li
                                            onClick={() => handleClick(contactos.indexOf(contacto))}
                                            className={posicion == contactos.indexOf(contacto) ? style.activo : null}>{contacto.name}</li>
                                    </div>
                                ))}
                            </ul>
                        </div>
                    </Col>
                    <Col lg={9} className={style.divSms}>
                        <h5 style={{ borderBottom: '1px solid #FFFFFF', padding: '10px' }}>MENSAJES</h5>
                        <div>

                        </div>
                        <form onSubmit={handleSubmit} className='d-flex flex-column'>
                            <div className={style.divForm}>
                                <span className={bolean && style.divFormSpan}>{msj}</span>
                            </div>
                            <div className={style.divSmsInput}>
                                <input
                                    className={style.inputSms}
                                    onChange={e => setSms(e.target.value)}
                                    value={sms}
                                />
                                <button className={style.btnSms}>
                                    <AiOutlineSend />
                                </button>
                            </div>
                        </form>
                    </Col>
                </Row>
            </Container>
        </div >
    )
}

export default Chat