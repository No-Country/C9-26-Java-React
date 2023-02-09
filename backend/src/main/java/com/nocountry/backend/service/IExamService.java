package com.nocountry.backend.service;

import java.util.List;
import java.util.Optional;
import com.nocountry.backend.dto.ExamDto;

public interface IExamService {

    public List<ExamDto> getAll();

    public Optional<ExamDto> getById(Long id);

    public ExamDto create(ExamDto exam);

    public ExamDto update(ExamDto exam, Long id);

    public void delete(Long id);
}
