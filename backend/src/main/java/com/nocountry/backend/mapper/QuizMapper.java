package com.nocountry.backend.mapper;

import java.util.List;

import org.springframework.stereotype.Component;

import com.nocountry.backend.dto.QuizDto;
import com.nocountry.backend.model.Quiz;
import com.nocountry.backend.utils.MapperUtil;

@Component
public class QuizMapper {

    public QuizDto convertToDto(Quiz quiz) {
        return MapperUtil.map(quiz, QuizDto.class);
    }

    public Quiz convertToEntity(QuizDto quizDto) {
        return MapperUtil.map(quizDto, Quiz.class);
    }

    public List<QuizDto> convertToDtoList(List<Quiz> quizList) {
        return MapperUtil.mapList(quizList, QuizDto.class);
    }

    public List<Quiz> convertToEntityList(List<QuizDto> quizDtoList) {
        return MapperUtil.mapList(quizDtoList, Quiz.class);
    }
}
