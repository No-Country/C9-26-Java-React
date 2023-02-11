package com.nocountry.backend.service.impl;

import com.nocountry.backend.dto.ExamDto;
import com.nocountry.backend.mapper.ExamMapper;
import com.nocountry.backend.model.Exam;
import com.nocountry.backend.model.Teacher;
import com.nocountry.backend.repository.IExamRepository;
import com.nocountry.backend.service.IExamService;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ExamServiceImpl implements IExamService {

    private final IExamRepository repository;

    private final ExamMapper mapper;

    @Override
    public List<ExamDto> getAll() {
        return mapper.convertToDtoList(repository.findAll());
    }

    @Override
    public Optional<ExamDto> getById(Long id) {
        return Optional.ofNullable(mapper.convertToDto(repository.getReferenceById(id)));
    }

    @Override
    public ExamDto create(ExamDto exam) {
        return mapper.convertToDto(repository.save(mapper.convertDtoToEntity(exam)));
    }

    @Override
    public ExamDto update(ExamDto exam, Long id) {
        Exam updatedExam= repository.findById(id).orElseThrow(EntityNotFoundException::new);
        updatedExam.setName(exam.getName());
        updatedExam.setExamDate(updatedExam.getExamDate());
        updatedExam.setExamFee(updatedExam.getExamFee());
        updatedExam.setStatus(updatedExam.getStatus());
        updatedExam.setGrammarNote(updatedExam.getGrammarNote());
        updatedExam.setListeningNote(updatedExam.getListeningNote());
        updatedExam.setSpeakingNote(updatedExam.getSpeakingNote());
        updatedExam.setWritingNote(updatedExam.getWritingNote());
        return  mapper.convertToDto(repository.save(updatedExam));

    }

    @Override
    public void delete(Long id) {
        repository.deleteById(id);
    }
}
