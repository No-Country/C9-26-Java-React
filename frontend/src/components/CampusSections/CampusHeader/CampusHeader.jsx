import { Col, Container, ProgressBar, Row } from "react-bootstrap"
import UserInfo from "../UserInfo/UserInfo"
import styles from "../../../pages/Campus/Campus.module.css"
import { FaBook, FaGraduationCap, FaUserPlus } from "react-icons/fa"

const CampusHeader = () => {
    return (
        <Container fluid>
            <section className={styles.header}>
                <Row>
                    <Col lg={3} >
                        <UserInfo data={{}} />
                    </Col>
                    <Col lg={9}>
                        <Row className="d-flex align-items-stretch">
                            <Col lg={4} xs={6}>
                                <div className={styles.card}>
                                    <div className={styles.card__content}>
                                        <div className={styles.card__icon}>
                                            <FaUserPlus />
                                        </div>
                                        <h5 className="fs-6">Asistencia</h5>
                                    </div>
                                    <div className={styles.percentage}>
                                        <ProgressBar now={92} variant="success" className="w-100 me-3" />
                                        <span>92%</span>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4} xs={6}>
                                <div className={styles.card}>
                                    <div className={styles.card__content}>
                                        <div className={styles.card__icon}>
                                            <FaBook />
                                        </div>
                                        <h5 className="fs-6">Tareas</h5>
                                    </div>
                                    <div className={styles.percentage}>
                                        <ProgressBar now={32} variant="success" className="w-100 me-3" />
                                        <span>32%</span>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4}>
                                <div className={styles.card}>
                                    <div className={styles.card__content}>
                                        <div className={styles.card__icon}>
                                            <FaGraduationCap />
                                        </div>
                                        <h5 className="fs-5">Examen final</h5>
                                    </div>
                                    <span style={{ fontSize: '19px' }}>Aprobado</span>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </section>
        </Container>
    )
}
export default CampusHeader