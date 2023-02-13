package com.nocountry.backend.service;

import java.util.List;
import java.util.Optional;
import com.nocountry.backend.dto.StudentDto;

public interface IStudentService {

    Optional<StudentDto> getById(Long id);

    List<StudentDto> getAll();

    StudentDto update(StudentDto student, Long id);

    void delete(Long id);
}
