package com.nocountry.backend.service;

import com.nocountry.backend.dto.TeacherDto;
import java.util.List;
import java.util.Optional;

public interface ITeacherService {

    Optional<TeacherDto> getById(Long id);

    List<TeacherDto> getAll();

    TeacherDto create(TeacherDto teacher);

    TeacherDto update(TeacherDto teacher, Long id);

    void delete(Long id);
}
