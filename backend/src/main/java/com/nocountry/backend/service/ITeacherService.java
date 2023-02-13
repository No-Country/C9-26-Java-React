package com.nocountry.backend.service;

import java.util.List;
import java.util.Optional;

import com.nocountry.backend.dto.TeacherDto;

public interface ITeacherService {

    Optional<TeacherDto> getById(Long id);

    List<TeacherDto> getAll();

    TeacherDto create(TeacherDto teacher);

    TeacherDto update(TeacherDto teacher, Long id);

    void delete(Long id);
}
