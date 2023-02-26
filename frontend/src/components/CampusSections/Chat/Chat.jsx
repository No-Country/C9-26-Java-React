import React from 'react'
import style from './Chat.module.css'
import { BsSearch } from "react-icons/bs";
import { AiOutlineSend } from "react-icons/ai";


const Chat = () => {

    const handleSubmit = (e)=>{
        e.preventDefault()
        alert('haz hecho un click')
    }

    return (
        <div className={style.main}>
            <div className={style.divBuscar}>
                <BsSearch />
                <input
                    type="text"
                    placeholder='Buscar Contacto'
                    className={style.inputBuscar}
                />
            </div>
            <div className={style.divBody}>
                <div className={style.dicContacto}>
                    <h5 style={{ borderBottom: '1px solid #FFFFFF', padding: '10px' }}>CONTACTOS</h5>
                </div>
                <div className={style.divSms}>
                    <h5 style={{ borderBottom: '1px solid #FFFFFF', padding: '10px' }}>MENSAJES</h5>
                    <div>

                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className={style.divForm}></div>
                        <div className={style.divSmsInput}>
                            <textarea className={style.inputSms}></textarea>
                            <button className={style.btnSms}>
                                <AiOutlineSend />
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div >
    )
}

export default Chat