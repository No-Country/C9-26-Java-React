package com.nocountry.backend.service;

import java.util.List;

import com.nocountry.backend.dto.ExamDetailsDto;

public interface IExamService {

    public List<ExamDetailsDto> getAllExams();

    public ExamDetailsDto getExamById(Long examId);

    public ExamDetailsDto createExam(ExamDetailsDto examDetailsDto);

    public ExamDetailsDto updateExam(Long examId, ExamDetailsDto examDetailsDto);

    public void deleteExam(Long examId);
}
