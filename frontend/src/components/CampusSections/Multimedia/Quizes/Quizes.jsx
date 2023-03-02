import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import quizes from '../../../../data/multimedia.json'
import { Button, Col, Container, Dropdown, DropdownButton, Row } from 'react-bootstrap'
import styles from './Quizes.module.css'

function AnswerOptions({ answer }) {
    const [selected, setSelected] = useState('Select an option');

    const options = ['only', 'light', 'life', 'love', 'make', `don't know`, 'better', 'one', 'say', `can't describe`, 'without', 'mean', 'with', 'our', 'always', 'wish', `Valentine's Day`]

    const handleSelect = (eventKey, e) => {
        setSelected(e.target.innerText);
    };

    return (
        <DropdownButton id="quiz-answers" title={selected} size="sm" variant='secondary' className='d-inline' onSelect={handleSelect}>
            {options.sort().map((option, index) => (
                <Dropdown.Item as="button" key={index} eventKey={option}>
                    {option}
                </Dropdown.Item>
            ))}
        </DropdownButton>
    );
}


const Quizes = () => {
    return (
        <Container fluid className='p-4'>
            <Row className='flex-grow-1 d-flex flex-nowrap overflow-auto justify-content-start m-md-2'>
                <Col className='bg-dark rounded-4 d-none d-md-block'>
                    <h1>Quizes</h1>
                    {quizes.material.map((quiz, index) => (
                        <div key={index}>
                            <h2>{quiz.title}</h2>
                            <p>{quiz.description}</p>
                            <Link to={`/private/campus/multimedia/quiz/${quiz.id}`} className='btn btn-dark text-uppercase rounded-4 d-block mx-auto mt-auto'>Ir al sitio web</Link>
                        </div>
                    ))}
                </Col>
                <Col lg={8} className='rounded-4'>
                    <div className='bg-dark rounded-4 d-flex mb-3'>
                        <iframe className={styles.quiz_video} src="https://www.youtube.com/embed/QUFp4SCuT18" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                    </div>
                    <div className={styles.quiz_text}>
                        <h3>Watch, read and listen. Then complete this quiz.</h3>

                        <p>1. What is Valentine’s Day? When is it?</p>

                        <p>
                            2. Do you celebrate Valentine’s Day in your country? Is there a
                            similar celebration? How is it called?
                        </p>

                        <p>
                            Watch again and complete these sentences with expressions from
                            the video:
                        </p>
                        <ol className={styles.questions}>


                            <li>To my <AnswerOptions ans="one" /> and <AnswerOptions ans="one" /></li>

                            <li>To the <AnswerOptions ans="one" /> of my <AnswerOptions ans="one" /></li>

                            <li>We <AnswerOptions ans="one" /> you more than words can <AnswerOptions ans="one" /></li>

                            <li>You <AnswerOptions ans="one" /> me a <AnswerOptions ans="one" /> person.</li>

                            <li>We <AnswerOptions ans="one" /> what we’d do <AnswerOptions ans="one" /> you.</li>

                            <li>Words <AnswerOptions ans="one" /> how much you <AnswerOptions ans="one" /> to us.</li>

                            <li><AnswerOptions ans="one" /> all <AnswerOptions ans="one" /> love
                            </li>
                            <li>Love you <AnswerOptions ans="one" />!
                            </li>
                            <li>We <AnswerOptions ans="one" /> you all a Happy <AnswerOptions ans="one" />!</li>
                        </ol>
                        <p>
                            Writing: Use the expressions and phrases from the previous task
                            and create a Valentine’s card.
                        </p>
                        <div className='mt-5'>
                            <Button variant='secondary' className='d-block mx-auto' >Validar respuestas</Button>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Quizes