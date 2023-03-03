import { Button, Container, Row, Col } from "react-bootstrap"
import { FaFacebook, FaInstagram, FaYoutube, FaRegCopyright } from "react-icons/fa"
import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <footer className="bg-dark text-white">
            <Container>
                <Row className='d-flex justify-content-between align-items-center'>
                    <Col md={6} className="py-2 d-flex gap-2 justify-content-center align-items-center justify-content-md-start"><FaRegCopyright /> 2023 - Términos y condiciones</Col>
                    <Col md={6} className='py-2 d-flex justify-content-center justify-content-md-end'>
                        <Link to='https://www.facebook.com/bright-english'>
                            <Button style={{ background: '#FA68D1', border: 'none' }} className='p-1 d-flex justify-content-center align-items-center me-2'>
                                <FaFacebook scale={2} className='m-0' />
                            </Button>
                        </Link>
                        <Link to='https://www.instagram.com/bright-english'>
                            <Button style={{ background: '#FA68D1', border: 'none' }} className='p-1 d-flex justify-content-center align-items-center me-2'>
                                <FaInstagram scale={2} className='m-0' />
                            </Button>
                        </Link>
                        <Link to='https://www.youtube.com/bright-english'>
                            <Button style={{ background: '#FA68D1', border: 'none' }} className='p-1 d-flex justify-content-center align-items-center me-2'>
                                <FaYoutube scale={2} className='m-0' />
                            </Button>
                        </Link>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}
export default Footer