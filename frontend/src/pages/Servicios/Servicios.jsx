import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import ServiceCard from '../../components/ServiceCard/ServiceCard';

import styles from './Servicios.module.css';

const servicios = [
    {
        title: "Examenes Internacionales",
        description: "Elegir bien entre la oferta de exámenes internacionales de inglés es clave para conseguir tus objetivos. Por eso, hemos reunido información esencial para ayudarte en este proceso.",
        image: "https://www.englishinaction.com/wp-content/uploads/2019/10/IELTS-Exam-1.jpg",
    },
    {
        title: "Viajes de Estudio",
        description: "Para estudiar inglés en el exterior existen diferentes propuestas de cursos. Vos elegís el tipo de curso de inglés en el extranjero que te gustaría tomar, según tu necesidad, el país y la ciudad que siempre quisiste conocer!",
        image: "https://www.englishinaction.com/wp-content/uploads/2019/10/Study-Abroad-1.jpg",
    },
    {
        title: "Traducciones",
        description: "Ofrecemos los servicios de  traducción e interpretación de calidad y excelenciapara clientes particulares, instituciones o empresas.",
        image: "https://www.englishinaction.com/wp-content/uploads/2019/10/English-Courses-1.jpg",
    },
    {
        title: "Visas",
        description: "Te ayudamos a tramitar tu visa de working and holiday son un tipo de visa que te permite viajar a un destino con el fin de trabajar y recorrer el país durante 1 año. Vas a poder ahorrar dinero, conocer gente de todo el mundo, viajar mucho.",
        image: "https://www.englishinaction.com/wp-content/uploads/2019/10/Exam-Preparation-1.jpg",
    },
]

function Servicios() {
    return (
        <main className={styles.main}>
            <Container className='w-full'>
                <Row>
                    <Col className='d-flex flex-column justify-content-center'>
                        <h1 className="text-center text-light mb-5">Nuestros Servicios</h1>
                        <Stack direction="horizontal" gap={3} className='d-flex justify-content-center align-items-stretch flex-wrap'>
                            {servicios.map((servicio, index) => (
                                <ServiceCard key={index} data={servicio} />
                            ))}
                        </Stack>
                    </Col>
                </Row>
            </Container>
        </main>
    );
}

export default Servicios;