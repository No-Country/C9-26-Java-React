package com.nocountry.backend.service;

import java.util.List;
import java.util.Optional;
import com.nocountry.backend.dto.ExamDto;

public interface IExamService {

    List<ExamDto> getAll();

    Optional<ExamDto> getById(Long id);

    List<ExamDto> getExamsByStudent_id(Long studentId);

    ExamDto create(ExamDto exam);

    ExamDto update(ExamDto exam, Long id);

    void delete(Long id);
}
