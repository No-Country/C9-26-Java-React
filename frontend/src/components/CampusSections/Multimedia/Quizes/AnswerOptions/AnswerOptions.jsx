import React, { useState, useEffect, useContext } from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import { QuizContext } from '../../../../../context/QuizContext';

function AnswerOptions({ ans }) {
    const { validateAnswers, setValidateAnswers } = useContext(QuizContext);
    const [selected, setSelected] = useState('Select an option');
    const [variant, setVariant] = useState('secondary');

    const options = ['only', 'light', 'life', 'love', 'make', `don't know`, 'better', 'one', 'say', `can't describe`, 'without', 'mean', 'with', 'our', 'always', 'wish', `Valentine's Day`]

    const handleSelect = (eventKey, e) => {
        setSelected(e.target.innerText);
    };

    useEffect(() => {
        if (validateAnswers) {
            if (ans === selected) {
                setVariant('success');
            } else {
                setVariant('danger');
            }
        } else {
            setVariant('secondary')
        }
    }, [validateAnswers]);


    return (
        <DropdownButton id="quiz-answers" title={selected} size="sm" variant={variant} className='d-inline' onSelect={handleSelect}>
            {options.sort().map((option, index) => (
                <Dropdown.Item as="button" key={index} eventKey={option}>
                    {option}
                </Dropdown.Item>
            ))}
        </DropdownButton>
    );
}

export default AnswerOptions;