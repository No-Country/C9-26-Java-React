package com.nocountry.backend.service;

import java.util.List;

import com.nocountry.backend.dto.QuizDto;

public interface IQuizService {

    public List<QuizDto> getAllQuizzes();

    public QuizDto getQuizById(Long quizId);

    public QuizDto createQuiz(QuizDto quizDto);

    public QuizDto updateQuiz(Long quizId, QuizDto quizDto);

    public void deleteQuiz(Long quizId);
}
