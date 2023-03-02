import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import { Tooltip, OverlayTrigger } from "react-bootstrap";
import { FaWhatsapp, FaUser, FaEnvelope, FaBook } from "react-icons/fa";
import { MdOutlineExitToApp } from "react-icons/md";
import { logout } from "../../store/slices/userSlice.js";
import logo from "../../assets/images/Logo.png";
import SearchBar from "../SearchBar/SearchBar";
import { useAuth } from "../../hooks/userHooks";
import {
    HOME,
    CLASS,
    EXAMS,
    SERVICES,
    CONSULTATION,
    CAMPUS,
    LOGIN,
    ADD_STUDENT
} from '../../config/routes/paths';
import Register from '../RegisterStudent/RegisterStuden.jsx';
import { useState } from 'react';


function Header() {
    const { isAuthenticated, role } = useAuth();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();
    const path = location.pathname;
    //Modal de Registro
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const pathSection = path.split("/");

    // top navbar button
    const handleClick = isAuthenticated => {
        if (isAuthenticated) {
            navigate(CAMPUS);
        } else {
            navigate(LOGIN);
        }
    };

    return (
        <>
            <div className='bg-dark d-flex align-items-center'>
                <Container className='d-flex gap-5 py-2 align-items-center' fluid>
                    <div className='py-2 d-flex'>
                        <Button
                            variant='dark'
                            className='p-1 d-flex justify-content-center align-items-center me-md-2'>
                            <FaWhatsapp scale={2} className='m-0' />
                        </Button>{" "}
                        <span className='text-white d-none d-md-block'>
                            +549 011 3456 7891
                        </span>
                    </div>
                    <div className='py-2 d-flex'>
                        <Button
                            variant='dark'
                            className='p-1 d-flex justify-content-center align-items-center me-md-2'>
                            <FaEnvelope scale={4} className='m-0' />
                        </Button>{" "}
                        <span className='text-white d-none d-md-block'>
                            bright.english@email.com.ar
                        </span>
                    </div>
                    <div className='py-2 d-flex gap-2 ms-auto'>
                        {role !== "ADMIN" && (
                            <Button
                                style={{
                                    maxWidth: "180px",
                                    background: "#CB8DF1",
                                    color: "#000",
                                    border: "none",
                                }}
                                className='d-flex justify-content-center align-items-center text-uppercase rounded-5 px-4 w-4'
                                onClick={() => handleClick(isAuthenticated)}>
                                {isAuthenticated ? (
                                    <>
                                        <FaBook scale={2} className='m-0' />{" "}
                                        <span className='ms-2'>Campus</span>
                                    </>
                                ) : (
                                    <>
                                        <FaUser scale={2} className='m-0 me-md-2' />
                                        <span className='d-none d-md-block'>Ingresar</span>
                                    </>
                                )}
                            </Button>
                        )}
                        {isAuthenticated && (
                            <OverlayTrigger
                                placement={"bottom"}
                                overlay={
                                    <Tooltip id={`tooltip-salir`}>
                                        <strong>Salir</strong>
                                    </Tooltip>
                                }>
                                <Button
                                    variant='danger'
                                    className='d-flex justify-content-center align-items-center rounded-5'
                                    onClick={() => dispatch(logout())}>
                                    <MdOutlineExitToApp className='m-0' />
                                </Button>
                            </OverlayTrigger>
                        )}
                    </div>
                </Container>
            </div>
            <Navbar
                collapseOnSelect
                expand='lg'
                style={{ background: "#3F3D3D" }}
                className='sticky-top shadow-sm'>
                <Container fluid className='d-flex'>
                    <NavLink to={HOME}>
                        <img
                            src={logo}
                            className='p-0'
                            style={{ maxWidth: "150px", height: "70px" }}
                        />
                    </NavLink>

                    {path === ADD_STUDENT ? (
                        <>
                            <SearchBar />
                            <Button
                                style={{ width: '256px', background: '#CB8DF1', color: '#FFF', border: 'none' }}
                                className="text-black fw-bolder rounded-5"
                                onClick={ handleShow }>
                                REGISTRAR ESTUDIANTE
                            </Button>
                            <Button
                                style={{ width: '256px', background: '#CB8DF1', color: '#FFF', border: 'none' }}
                                className="text-black fw-bolder rounded-5">

                                GUARDAR CAMBIOS
                            </Button>
                        </>
                    ) : (
                        <>
                            <Navbar.Toggle
                                aria-controls='responsive-navbar-nav'
                                style={{ background: "#CB8DF1" }}
                            />
                            <Navbar.Collapse id='responsive-navbar-nav'>
                                <Nav className='ms-auto'>
                                    {pathSection[2] !== "campus" ? (
                                        <>
                                            <NavLink
                                                to={HOME}
                                                className='nav-link text-center text-uppercase text-white'>
                                                Inicio
                                            </NavLink>
                                            <NavLink
                                                to={CLASS}
                                                className='nav-link text-center text-uppercase text-white'>
                                                Clases
                                            </NavLink>
                                            <NavLink
                                                to={EXAMS}
                                                className='nav-link text-center text-uppercase text-white'>
                                                Examenes
                                            </NavLink>
                                            <NavLink
                                                to={SERVICES}
                                                className='nav-link text-center text-uppercase text-white'>
                                                Servicios
                                            </NavLink>
                                        </>
                                    ) : null}

                                    <NavLink to={CONSULTATION} className='text-center'>
                                        <Button
                                            style={{
                                                maxWidth: "180px",
                                                background: "#CB8DF1",
                                                border: "none",
                                            }}
                                            className='text-uppercase rounded-5 text-black px-5 my-5 mx-0 my-lg-0 ms-lg-5'>
                                            Consultas
                                        </Button>
                                    </NavLink>
                                </Nav>
                            </Navbar.Collapse>
                        </>
                    )}
                </Container>
            </Navbar>
            <Register 
                show = { show }
                handleClose = { handleClose }
            />
        </>
    );
}
export default Header;
