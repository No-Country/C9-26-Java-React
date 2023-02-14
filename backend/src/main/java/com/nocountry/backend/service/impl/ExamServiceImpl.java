package com.nocountry.backend.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.nocountry.backend.dto.ExamDto;
import com.nocountry.backend.mapper.ExamMapper;
import com.nocountry.backend.model.Exam;
import com.nocountry.backend.repository.IExamRepository;
import com.nocountry.backend.service.IExamService;

import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ExamServiceImpl implements IExamService {

    private final IExamRepository repository;

    private final ExamMapper mapper;

    private Exam findExamById(Long examId) {
        return repository.findById(examId)
                .orElseThrow(() -> new EntityNotFoundException("Exam not found"));
    }

    @Override
    public Optional<ExamDto> getExam(Long examId) {
        return Optional.ofNullable(mapper.convertToDto(this.findExamById(examId)));
    }

    @Override
    public List<ExamDto> getAllExams() {
        return mapper.convertToDtoList(repository.findAll());
    }

    @Override
    public ExamDto createExam(ExamDto examDto) {
        return mapper.convertToDto(repository.save(mapper.convertToEntity(examDto)));
    }

    @Override
    public ExamDto updateExam(ExamDto examDto, Long examId) {
        Exam updatedExam = this.findExamById(examId);
        updatedExam.setName(examDto.getName());
        updatedExam.setExamDate(examDto.getExamDate());
        updatedExam.setGrammar(examDto.getGrammar());
        updatedExam.setListening(examDto.getListening());
        updatedExam.setSpeaking(examDto.getSpeaking());
        updatedExam.setWriting(examDto.getWriting());
        return mapper.convertToDto(repository.save(updatedExam));

    }

    @Override
    public void deleteExam(Long id) {
        repository.deleteById(id);
    }

    @Override
    public List<ExamDto> getExamsByStudentId(Long studentId) {
        return mapper.convertToDtoList(repository.findAllByStudentId(studentId));
    }
}
