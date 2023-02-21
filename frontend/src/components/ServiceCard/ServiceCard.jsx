import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const ServiceCard = ({ data }) => {
    const { title, description, image } = data
    return (
        <Card style={{ width: 'clamp(220px, 80%, 260px)' }} className='rounded-4' >
            <Card.Body className='d-flex flex-column align-items-center'>
                <Card.Title className='text-center text-uppercase fs-4 my-4'>
                    {title}
                </Card.Title>
                <Card.Text className='text-center'>
                    {description}
                </Card.Text>
                <Button variant="dark" className='mt-auto rounded-5'>
                    Consulte aquí
                </Button>
            </Card.Body>
        </Card>
    )
}
export default ServiceCard