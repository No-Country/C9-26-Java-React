import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import styles from './ExamsCard.module.css';

const ExamsCard = (props) => {
    return (
        <CardGroup className="mb-4">
            <Card className={styles.exam_card}>
                <Row className="align-items-center">
                    <Col xs="4" className='p-5'>
                        <Card.Img src={props.img} className={styles.exam_cardImage}/>
                    </Col>
                    <Col xs="8" className='p-4'>
                        <Card.Body>
                            <Card.Text className={styles.exam_cardText}>{props.text}</Card.Text>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>
        </CardGroup>
    )
}

export default ExamsCard;