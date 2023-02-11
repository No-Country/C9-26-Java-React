package com.nocountry.backend.service;

import java.util.List;
import java.util.Optional;
import com.nocountry.backend.dto.StudentDto;

public interface IStudentService {

    List<StudentDto> getAll();

    Optional<StudentDto> getById(Long id);

    StudentDto create(StudentDto student);

    StudentDto update(StudentDto student, Long id);

    void delete(Long id);
}
