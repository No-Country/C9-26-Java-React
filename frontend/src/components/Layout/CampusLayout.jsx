
import { Col, Container, Row } from "react-bootstrap"
import { CampusHeader, CampusMenu } from "../"
import { useLocation } from "react-router-dom"
import Quizes from "../CampusSections/Multimedia/Quizes/Quizes"


const CampusLayout = ({ children }) => {
    const location = useLocation()
    const path = location.pathname

    const pathSection = path.split("/")

    return (
        <main className="background pb-3 d-flex flex-column flex-grow-1">
            {/* Encabezado del campus */}
            <CampusHeader />
            {pathSection[4] === "quiz" ? (<>
                {/* Contenedor de quizes */}
                <Quizes />
            </>) : (<>

                {/* Contenedor principal */}
                <Container fluid className="d-flex flex-column flex-grow-1">
                    <Row className="d-flex flex-grow-1">
                        {/* Menu del campus */}
                        <Col lg={3} className="d-flex position-relative flex-drow-1">
                            <CampusMenu />
                        </Col>

                        {/* Contenido del campus */}
                        <Col lg={9} className="d-flex">
                            {children}
                        </Col>
                    </Row>
                </Container></>)
            }

        </main>
    )
}
export default CampusLayout