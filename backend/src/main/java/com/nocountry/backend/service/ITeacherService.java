package com.nocountry.backend.service;

import java.util.List;
import java.util.Optional;
import com.nocountry.backend.dto.TeacherDto;

public interface ITeacherService {

    public List<TeacherDto> getAll();

    public Optional<TeacherDto> getById(Long id);

    public TeacherDto create(TeacherDto teacher);

    public TeacherDto update(TeacherDto teacher, Long id);

    public void delete(Long id);
}
