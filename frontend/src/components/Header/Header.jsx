import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
import { FaWhatsapp, FaGoogle, FaFacebook, FaInstagram, FaYoutube, FaHome, FaUser } from 'react-icons/fa';
import { useState } from 'react';
import { Login } from '../../pages';

function Header() {
    const isAuthenticated = false;
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div className='bg-light d-flex align-items-center'>
                <Container className='d-flex gap-5 py-2'>
                    <div className='py-2 d-flex'>
                        <Button variant="dark" className='p-1 d-flex justify-content-center align-items-center me-2'>
                            <FaWhatsapp scale={2} className='m-0' />
                        </Button> <span>+549 011 3456 7891</span>
                    </div>
                    <div className='py-2 d-flex'>
                        <Button variant="dark" className='p-1 d-flex justify-content-center align-items-center me-2'>
                            <FaGoogle scale={2} className='m-0' />
                        </Button> <span>greenhills@email.com.ar</span>
                    </div>
                    <div className='py-2 d-flex'>
                        <Button variant="dark" className='p-1 d-flex justify-content-center align-items-center me-2'>
                            <FaFacebook scale={2} className='m-0' />
                        </Button>
                        <Button variant="dark" className='p-1 d-flex justify-content-center align-items-center me-2'>
                            <FaInstagram scale={2} className='m-0' />
                        </Button>
                        <Button variant="dark" className='p-1 d-flex justify-content-center align-items-center me-2'>
                            <FaYoutube scale={2} className='m-0' />
                        </Button>
                    </div>
                    <Button
                        variant="dark"
                        style={{ width: '180px' }}
                        className='d-flex justify-content-center align-items-center ms-auto text-uppercase rounded-5 px-5 w-4'
                        onClick={handleShow}
                    >
                        {isAuthenticated ? (<><FaHome scale={2} className='m-0' /> <span className='ms-2'>Inicio</span></>) : (<span>Ingresar</span>)}
                    </Button>
                </Container>
            </div>
            <Navbar collapseOnSelect expand="lg" style={{ height: '90px' }} className='sticky-top bg-white shadow-sm'>
                <Container>
                    <Navbar.Brand href="#home">Logo</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">


                            <NavLink to="/" className='nav-link text-uppercase'>Inicio</NavLink>
                            <NavLink to="/class" className='nav-link text-uppercase'>Clases</NavLink>
                            <NavLink to="/exams" className='nav-link text-uppercase'>Examenes</NavLink>
                            <NavLink to="/services" className='nav-link text-uppercase'>Servicios</NavLink>
                            <Button variant="dark" style={{ width: '180px' }} className='text-uppercase rounded-5 text-light px-5 ms-5'>Consultas</Button>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Login 
                show = { show }
                handleClose = { handleClose }
            />
        </>
    );
}
export default Header