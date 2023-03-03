import React, { useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import quizes from '../../../../data/multimedia.json'
import { Button, Col, Container, Row } from 'react-bootstrap'
import styles from './Quizes.module.css'
import { QuizContext } from '../../../../context/QuizContext'
import AnswerOptions from './AnswerOptions/AnswerOptions.jsx'
import CampusMenu from '../../CampusMenu/CampusMenu.jsx'

import expressions from '../../../../assets/multimedia/expressions.png'
import kids from '../../../../assets/multimedia/kids.png'
import postit from '../../../../assets/multimedia/postit.png'
import slangs from '../../../../assets/multimedia/slangs.png'
import love from '../../../../assets/multimedia/love.png'

const Quizes = () => {
    const { validateAnswers, setValidateAnswers } = useContext(QuizContext);
    const location = useLocation()
    const path = location.pathname
    const images = [love, slangs, expressions, kids, postit]
    const pathSection = path.split('/')[4]
    return (
        <Container fluid className='p-4'>
            <Row className={`flex-grow-1 d-flex m-md-2 ${pathSection !== 'quiz' ? 'flex-md-nowrap overflow-auto justify-content-start' : ''}`}>
                <Col md={12} lg={4} className='d-md-block text-white'>
                    <CampusMenu />
                    <div className='d-none d-lg-block bg-dark rounded-4 p-2'>
                        <h2 className='text-center'>Mas Quizes</h2>
                        {quizes.material.map((quiz, index) => (
                            <div key={index} className='d-flex mt-4'>
                                <div className='d-flex p-2 me-3 '>
                                    <img src={images[index]} alt={quiz.title} className='rounded-4' width={100} height={100} />
                                </div>
                                <div>
                                    <h5>{quiz.title}</h5>
                                    <p>{quiz.description}</p>
                                    <Link to={`/private/campus/multimedia/quiz/${quiz.id}`} className='btn btn-dark text-uppercase rounded-4 d-block mx-auto mt-auto'>Ver actividad</Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </Col>
                <Col md={12} lg={8} className='rounded-4'>
                    <div className='bg-dark rounded-4 d-flex mb-3'>
                        <iframe className={styles.quiz_video} src="https://www.youtube.com/embed/QUFp4SCuT18" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
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


                            <li>To my <AnswerOptions ans="one" /> and <AnswerOptions ans="only" /></li>

                            <li>To the <AnswerOptions ans="light" /> of my <AnswerOptions ans="life" /></li>

                            <li>We <AnswerOptions ans="love" /> you more than words can <AnswerOptions ans="say" /></li>

                            <li>You <AnswerOptions ans="make" /> me a <AnswerOptions ans="better" /> person.</li>

                            <li>We <AnswerOptions ans="don't know" /> what we’d do <AnswerOptions ans="without" /> you.</li>

                            <li>Words <AnswerOptions ans="can't describe" /> how much you <AnswerOptions ans="mean" /> to us.</li>

                            <li><AnswerOptions ans="with" /> all <AnswerOptions ans="our" /> love
                            </li>
                            <li>Love you <AnswerOptions ans="always" />!
                            </li>
                            <li>We <AnswerOptions ans="wish" /> you all a Happy <AnswerOptions ans="Valantine's Day" />!</li>
                        </ol>
                        <p>
                            Writing: Use the expressions and phrases from the previous task
                            and create a Valentine’s card.
                        </p>
                        <div className='mt-5'>
                            <Button variant='secondary' className='d-block mx-auto' onClick={() => setValidateAnswers(true)} >Validar respuestas</Button>
                            {validateAnswers && <Button variant='bright' className='d-block mx-auto' onClick={() => setValidateAnswers(false)} >Reintentar</Button>}
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Quizes