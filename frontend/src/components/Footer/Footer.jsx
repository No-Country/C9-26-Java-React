import { Button, Container } from "react-bootstrap"
import { FaFacebook, FaInstagram, FaYoutube, FaRegCopyright } from "react-icons/fa"

const Footer = () => {
    return (
        <footer className="bg-dark text-white">
            <Container className="d-flex justify-content-between align-items-center">
                <span className="p-0"><FaRegCopyright /> 2023 - Términos y condiciones</span>
                <div className='py-2 d-flex justify-content-end'>
                    <Button style={{ background: '#FA68D1', border: 'none' }} className='p-1 d-flex justify-content-center align-items-center me-2'>
                        <FaFacebook scale={2} className='m-0' />
                    </Button>
                    <Button style={{ background: '#FA68D1', border: 'none' }} className='p-1 d-flex justify-content-center align-items-center me-2'>
                        <FaInstagram scale={2} className='m-0' />
                    </Button>
                    <Button style={{ background: '#FA68D1', border: 'none' }} className='p-1 d-flex justify-content-center align-items-center me-2'>
                        <FaYoutube scale={2} className='m-0' />
                    </Button>
                </div>
            </Container>
        </footer>
    )
}
export default Footer