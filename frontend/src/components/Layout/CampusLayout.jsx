import { Col, Container, Row } from "react-bootstrap"
import { CampusHeader } from "../"
import styles from "./CampusLayout.module.css"
import { NavLink } from "react-router-dom"

import program from "../../assets/program.svg"
import multimedia from "../../assets/multimedia.svg"
import chat from "../../assets/chat.svg"
import events from "../../assets/events.svg"
import tasks from "../../assets/tasks.svg"


const CampusLayout = ({ children }) => {
    return (
        <main className="background pb-3">
            <CampusHeader />

            <Container fluid>
                <Row className="d-flex flex-grow">
                    <Col lg={3} className="align-self-stretch">
                        <div className={styles.menu}>
                            <NavLink to='' className={styles.menu__item}>
                                <img src={program} alt="" />
                                <span className={styles.program}>Programa de estudio</span>
                            </NavLink>
                            <NavLink to='' className={styles.menu__item}>
                                <img src={multimedia} alt="" />
                                <span className={styles.multimedia}>Material multimedia</span>
                            </NavLink>
                            <NavLink to='' className={styles.menu__item}>
                                <img src={chat} alt="" />
                                <span className={styles.chat}>Chat</span>
                            </NavLink>
                            <NavLink to='' className={styles.menu__item}>
                                <img src={events} alt="" />
                                <span className={styles.events}>Eventos y actividades</span>
                            </NavLink>
                            <NavLink to='' className={styles.menu__item}>
                                <img src={tasks} alt="" />
                                <span className={styles.tasks}>tareas asignadas</span>
                            </NavLink>
                        </div>
                    </Col>
                    <Col lg={9}>
                        {children}
                    </Col>
                </Row>
            </Container>

        </main>
    )
}
export default CampusLayout