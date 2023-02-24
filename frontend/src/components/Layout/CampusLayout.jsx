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

import { MULTIMEDIA } from "../../config/routes/paths"


const CampusLayout = ({ children }) => {
    const [show, setShow] = useState(true)

    // const handleClick = () => {
    //     setShow(!show)
    // }


    return (
        <main className="background pb-3 d-flex flex-column flex-grow-1">
            {/* Encabezado del campus */}
            <CampusHeader />

            {/* Contenedor principal */}
            <Container fluid className="d-flex flex-column flex-grow-1">
                <Row className="d-flex flex-grow-1">
                    {/* Menu del campus */}
                    <Col lg={3} className="d-flex">
                        <div className={`${styles.menu} flex-drow-1`} >
                            <NavLink to='' className={styles.menu__item}>
                                <img src={program} alt="" />
                                {show && <span className={styles.program}>Programa de estudio</span>}
                            </NavLink>
                            <NavLink to={MULTIMEDIA} className={styles.menu__item}>
                                <img src={multimedia} alt="" />
                                {show && <span className={styles.multimedia}>Material multimedia</span>}
                            </NavLink>
                            <NavLink to='' className={styles.menu__item}>
                                <img src={chat} alt="" />
                                {show && <span className={styles.chat}>Chat</span>}
                            </NavLink>
                            <NavLink to='' className={styles.menu__item}>
                                <img src={events} alt="" />
                                {show && <span className={styles.events}>Eventos y actividades</span>}
                            </NavLink>
                            <NavLink to='' className={styles.menu__item}>
                                <img src={tasks} alt="" />
                                {show && <span className={styles.tasks}>tareas asignadas</span>}
                            </NavLink>
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