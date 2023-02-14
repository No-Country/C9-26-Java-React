package com.nocountry.backend.service;

import java.util.List;
import java.util.Optional;

import com.nocountry.backend.dto.ExamDto;

public interface IExamService {

    Optional<ExamDto> getExam(Long examId);

    List<ExamDto> getAllExams();

    ExamDto createExam(ExamDto examDto);

    ExamDto updateExam(ExamDto examDto, Long examId);

    void deleteExam(Long examId);

    List<ExamDto> getExamsByStudentId(Long studentId);
}
