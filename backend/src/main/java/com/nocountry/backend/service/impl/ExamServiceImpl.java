package com.nocountry.backend.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.nocountry.backend.dto.ExamDto;
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
    public List<ExamDto> getAllExams() {
        return examMapper.convertToDtoList(examRepository.findAll());
    }

    @Override
    public ExamDto getExamById(Long examId) {
        return examMapper.convertToDto(examRepository.findById(examId).orElseThrow());
    }

    @Override
    public ExamDto createExam(ExamDto examDto) {
        var exam = examMapper.convertToEntity(examDto);
        return examMapper.convertToDto(examRepository.save(exam));
    }

    @Override
    public ExamDto updateExam(Long examId, ExamDto examDto) {
        return null;
    }

    @Override
    public void deleteExam(Long examId) {
        examRepository.deleteById(examId);
    }
}
