package com.nocountry.backend.service;

import java.util.List;
import java.util.Optional;

import com.nocountry.backend.dto.StudentDto;

public interface IStudentService {

    Optional<StudentDto> getStudent(Long studentId);

    List<StudentDto> getAllStudents();

    StudentDto updateStudent(StudentDto studentDto, Long studentId);

    void deleteStudent(Long studentId);

    List<StudentDto> getStudentsByCourseId(Long courseId);
}
