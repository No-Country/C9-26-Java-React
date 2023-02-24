package com.nocountry.backend.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.nocountry.backend.dto.ExamDetailsDto;
import com.nocountry.backend.mapper.ExamMapper;
import com.nocountry.backend.repository.IExamRepository;
import com.nocountry.backend.service.IExamService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ExamServiceImpl implements IExamService {

    private final IExamRepository examRepository;

    private final ExamMapper examMapper;

    @Override
    public List<ExamDetailsDto> getAllExams() {
        return examMapper.convertToDetailsDtoList(examRepository.findAll());
    }

    @Override
    public ExamDetailsDto getExamById(Long examId) {
        return examMapper.convertToDetailsDto(examRepository.findById(examId).orElseThrow());
    }

    @Override
    public ExamDetailsDto createExam(ExamDetailsDto examDetailsDto) {
        var exam = examMapper.convertToEntity(examDetailsDto);
        return examMapper.convertToDetailsDto(examRepository.save(exam));
    }

    @Override
    public ExamDetailsDto updateExam(Long examId, ExamDetailsDto examDetailsDto) {
        return null;
    }

    @Override
    public void deleteExam(Long examId) {
        examRepository.deleteById(examId);
    }
}
