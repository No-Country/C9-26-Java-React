import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import { Navigate, NavLink } from 'react-router-dom';
import { FaWhatsapp, FaGoogle, FaFacebook, FaInstagram, FaYoutube, FaHome, FaUser } from 'react-icons/fa';
import { useState } from 'react';
import { Login } from '../../pages';
import logo from '../../assets/images/Logo.png'


function Header() {
    const isAuthenticated = false;
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    return (
        
        <>
            <div className='bg-dark d-flex align-items-center'>
                <Container className='d-flex gap-5 py-2' fluid>
                    <div className='py-2 d-flex'>
                        <Button variant="dark" className='p-1 d-flex justify-content-center align-items-center me-2'>
                            <FaWhatsapp scale={2} className='m-0' />
                        </Button> <span className='text-white'>+549 011 3456 7891</span>
                    </div>
                    <div className='py-2 d-flex'>
                        <Button variant="dark" className='p-1 d-flex justify-content-center align-items-center me-2'>
                            <FaGoogle scale={2} className='m-0' />
                        </Button> <span className='text-white'>greenhills@email.com.ar</span>
                    </div>                 
                    <Button                        
                        style={{ width: '180px', background: '#CB8DF1', color:'#FFFFFF', border:'none' }}

                        className='d-flex justify-content-center align-items-center ms-auto text-uppercase rounded-5 px-5 w-4'
                        onClick={handleShow}
                    >
                        {isAuthenticated ? (<><FaHome scale={2} className='m-0' /> <span className='ms-2'>Inicio</span></>) : (<span>Ingresar</span>)}
                    </Button>
                </Container>
            </div>
            <Navbar collapseOnSelect expand="lg" style={{ maxHeight:'80px', background:'#212121'}} className='sticky-top shadow-sm'>
                <Container fluid>
                    <NavLink to="/"><Navbar.Brand href="#home"><img src={logo} className='img-fluid' style={{width:'150px'}}/></Navbar.Brand></NavLink>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto ">

                            <NavLink to="/" className='nav-link text-uppercase text-white'>Inicio</NavLink>
                            <NavLink to="/class" className='nav-link text-uppercase text-white'>Clases</NavLink>
                            <NavLink to="/exams" className='nav-link text-uppercase text-white'>Examenes</NavLink>
                            <NavLink to="/services" className='nav-link text-uppercase text-white'>Servicios</NavLink>
                            <NavLink to="/consultation">
                                <Button style={{ width: '180px', background: '#CB8DF1', color:'#FFFFFF', border:'none'  }} className='text-uppercase rounded-5 text-light px-5 ms-5'>Consultas</Button>
                            </NavLink>
                            
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