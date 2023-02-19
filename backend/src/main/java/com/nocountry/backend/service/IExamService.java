package com.nocountry.backend.service;

import java.util.List;

import com.nocountry.backend.dto.ExamDetailsDto;

public interface IExamService {

    List<ExamDetailsDto> getAllExams();

    ExamDetailsDto getExamById(Long examId);

    ExamDetailsDto createExam(ExamDetailsDto examDetailsDto);

    ExamDetailsDto updateExam(Long examId, ExamDetailsDto examDetailsDto);

    void deleteExam(Long examId);
}
