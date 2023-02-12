package com.nocountry.backend.service.impl;

import com.nocountry.backend.dto.ExamDto;
import com.nocountry.backend.repository.IExamRepository;
import com.nocountry.backend.service.IExamService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ExamServiceImpl implements IExamService {

    private final IExamRepository repository;

    @Override
    public List<ExamDto> getAll() {
        return null;
    }

    @Override
    public Optional<ExamDto> getById(Long id) {
        return null;
    }

    @Override
    public ExamDto create(ExamDto exam) {
        return null;
    }

    @Override
    public ExamDto update(ExamDto exam, Long id) {
        return null;
    }

    @Override
    public void delete(Long id) {
        repository.deleteById(id);
    }
}
