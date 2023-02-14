package com.nocountry.backend.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.nocountry.backend.dto.StudentDto;
import com.nocountry.backend.mapper.StudentMapper;
import com.nocountry.backend.model.Student;
import com.nocountry.backend.repository.IStudentRepository;
import com.nocountry.backend.service.IStudentService;

import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class StudentServiceImpl implements IStudentService {

    private final IStudentRepository repository;

    private final StudentMapper mapper;

    public Student findStudentById(Long studentId) {
        return repository.findById(studentId)
                .orElseThrow(() -> new EntityNotFoundException("Student not found"));
    }

    @Override
    public Optional<StudentDto> getStudent(Long StudentId) {
        return Optional.ofNullable(mapper.convertToDto(this.findStudentById(StudentId)));
    }

    @Override
    public List<StudentDto> getAllStudents() {
        return mapper.convertToDtoList(repository.findAll());
    }

    @Override
    public StudentDto updateStudent(StudentDto studentDto, Long studentId) {
        Student updatedStudent = this.findStudentById(studentId);
        updatedStudent.setFirstName(studentDto.getFirstName());
        updatedStudent.setLastName(studentDto.getLastName());
        updatedStudent.setDni(studentDto.getDni());
        updatedStudent.setBirthdate(studentDto.getBirthdate());
        updatedStudent.setAddress(studentDto.getAddress());
        updatedStudent.setPhone(studentDto.getPhone());
        updatedStudent.setLevel(studentDto.getLevel());
        updatedStudent.setImageUrl(studentDto.getImageUrl());
        return mapper.convertToDto(repository.save(updatedStudent));

    }

    @Override
    public void deleteStudent(Long studentId) {
        repository.deleteById(studentId);
    }

    @Override
    public List<StudentDto> getStudentsByCourseId(Long courseId) {
        return mapper.convertToDtoList(repository.findAllByCourseId(courseId));
    }
}
