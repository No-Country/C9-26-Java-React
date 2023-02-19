package com.nocountry.backend.service;

import java.util.List;

import com.nocountry.backend.dto.ExamDto;

public interface IExamService {

    List<ExamDto> getAllExams();

    ExamDto getExamById(Long examId);

    ExamDto createExam(ExamDto examDto);

    ExamDto updateExam(Long examId, ExamDto examDto);

    void deleteExam(Long examId);
}
