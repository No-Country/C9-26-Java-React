package com.nocountry.backend.service;

import java.util.List;

import com.nocountry.backend.dto.ExamDto;

public interface IExamService {

    ExamDto getExam(Long examId);

    List<ExamDto> getAllExams();

    ExamDto createExam(ExamDto examDto);

    ExamDto updateExam(ExamDto examDto, Long examId);

    void deleteExam(Long examId);
}
