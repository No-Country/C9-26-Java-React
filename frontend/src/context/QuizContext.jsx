import { useState, createContext } from 'react';

export const QuizContext = createContext();

const QuizContextProvider = ({ children }) => {
    const [validateAnswers, setValidateAnswers] = useState(false);

    return (
        <QuizContext.Provider value={{ validateAnswers, setValidateAnswers }}>
            {children}
        </QuizContext.Provider>
    );
}

export default QuizContextProvider;