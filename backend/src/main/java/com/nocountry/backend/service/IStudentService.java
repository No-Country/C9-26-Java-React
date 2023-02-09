package com.nocountry.backend.service;

import java.util.List;
import java.util.Optional;
import com.nocountry.backend.dto.StudentDto;

public interface IStudentService {

    public List<StudentDto> getAll();

    public Optional<StudentDto> getById(Long id);

    public StudentDto create(StudentDto student);

    public StudentDto update(StudentDto student, Long id);

    public void delete(Long id);
}
