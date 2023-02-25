import React, { useState } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { CampusHeader } from "../"
import styles from "./CampusLayout.module.css"
import { NavLink } from "react-router-dom"

import program from "../../assets/program.svg"
import multimedia from "../../assets/multimedia.svg"
import chat from "../../assets/chat.svg"
import events from "../../assets/events.svg"
import tasks from "../../assets/tasks.svg"

import { MULTIMEDIA, PROGRAM, CHAT, EVENTS, TASKS } from "../../config/routes/paths"


const CampusLayout = ({ children }) => {
    const [show, setShow] = useState(true)

    // const handleClick = () => {
    //     setShow(!show)
    // }

    let activeStyle = {
        // textDecoration: "underline",
        backgroundColor: '#D9D9D999',
        borderRadius: '5px',
        padding: '10px',
        marginLeft: '0',
        fontSize: '85%',
        height: '40px',
        fontWeight: 'bold'
    };

    return (
        <main className="background pb-3 d-flex flex-column flex-grow-1">
            {/* Encabezado del campus */}
            <CampusHeader />

            {/* Contenedor principal */}
            <Container fluid className="d-flex flex-column flex-grow-1">
                <Row className="d-flex flex-grow-1">
                    {/* Menu del campus */}
                    <Col lg={3} className="d-flex position-relative flex-drow-1">
                        <div className={`${styles.menu}`} >
                            <div className={styles.menu__container}>
                                <NavLink to={PROGRAM} className={styles.menu__item} style={({ isActive }) =>
                                    isActive ? activeStyle : undefined
                                }>
                                    <img src={program} alt="" />
                                    {show && <span className={styles.program}>Programa de estudio</span>}
                                </NavLink>
                                <NavLink to={MULTIMEDIA} className={styles.menu__item} style={({ isActive }) =>
                                    isActive ? activeStyle : undefined
                                }>
                                    <img src={multimedia} alt="" />
                                    {show && <span className={styles.multimedia}>Material multimedia</span>}
                                </NavLink>
                                <NavLink to={CHAT} className={styles.menu__item} style={({ isActive }) =>
                                    isActive ? activeStyle : undefined
                                }>
                                    <img src={chat} alt="" />
                                    {show && <span className={styles.chat}>Chat</span>}
                                </NavLink>
                                <NavLink to={EVENTS} className={styles.menu__item} style={({ isActive }) =>
                                    isActive ? activeStyle : undefined
                                }>
                                    <img src={events} alt="" />
                                    {show && <span className={styles.events}>Eventos y actividades</span>}
                                </NavLink>
                                <NavLink to={TASKS} className={styles.menu__item} style={({ isActive }) =>
                                    isActive ? activeStyle : undefined
                                }>
                                    <img src={tasks} alt="" />
                                    {show && <span className={styles.tasks}>tareas asignadas</span>}
                                </NavLink>
                            </div>
                        </div>
                    </Col>

                    {/* Contenido del campus */}
                    <Col lg={9} className="d-flex">
                        {children}
                    </Col>
                </Row>
            </Container>

        </main>
    )
}
export default CampusLayout