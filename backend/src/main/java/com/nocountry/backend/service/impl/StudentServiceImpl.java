package com.nocountry.backend.service.impl;

import com.nocountry.backend.dto.StudentDto;
import com.nocountry.backend.mapper.StudentMapper;
import com.nocountry.backend.model.Student;
import com.nocountry.backend.repository.IStudentRepository;
import com.nocountry.backend.service.IStudentService;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class StudentServiceImpl implements IStudentService {

    private final IStudentRepository repository;

    private final StudentMapper mapper;

    @Override
    public List<StudentDto> getAll() { return mapper.convertToDtoList(repository.findAll()); }

    @Override
    public Optional<StudentDto> getById(Long id) {
        return Optional.ofNullable(mapper.convertToDto(repository.getReferenceById(id)));
    }

    @Override
    public StudentDto create(StudentDto student) {
        return mapper.convertToDto(repository.save(mapper.convertDtoToEntity(student)));
    }

    @Override
    public StudentDto update(StudentDto student, Long id) {
        Student updatedStudent= repository.findById(id).orElseThrow(EntityNotFoundException::new);
        updatedStudent.setFirstName(student.getFirstName());
        updatedStudent.setLastName(student.getLastName());
        updatedStudent.setDni(student.getDni());
        updatedStudent.setBirthdate(student.getBirthdate());
        updatedStudent.setAddress(student.getAddress());
        updatedStudent.setPhone(student.getPhone());
        updatedStudent.setLevel(student.getLevel());
        updatedStudent.setImageUrl(student.getImageUrl());
        return  mapper.convertToDto(repository.save(updatedStudent));


    }

    @Override
    public void delete(Long id) {   repository.deleteById(id);  }
}
