package com.nocountry.backend.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.nocountry.backend.dto.QuizDto;
import com.nocountry.backend.mapper.QuizMapper;
import com.nocountry.backend.repository.IQuizRepository;
import com.nocountry.backend.service.IQuizService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class QuizServiceImpl implements IQuizService {

    private final IQuizRepository quizRepository;

    private final QuizMapper quizMapper;

    @Override
    public List<QuizDto> getAllQuizzes() {
        return quizMapper.convertToDtoList(quizRepository.findAll());
    }

    @Override
    public QuizDto getQuizById(Long quizId) {
        return quizMapper.convertToDto(quizRepository.findById(quizId).orElseThrow());
    }

    @Override
    public QuizDto createQuiz(QuizDto quizDto) {
        var quiz = quizMapper.convertToEntity(quizDto);
        return quizMapper.convertToDto(quizRepository.save(quiz));
    }

    @Override
    public QuizDto updateQuiz(Long quizId, QuizDto quizDto) {
        var quiz = quizRepository.findById(quizId).orElseThrow();

        return quizMapper.convertToDto(quizRepository.save(quiz));
    }

    @Override
    public void deleteQuiz(Long quizId) {
        quizRepository.deleteById(quizId);
    }
}
