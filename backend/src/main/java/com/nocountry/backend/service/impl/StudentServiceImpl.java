package com.nocountry.backend.service.impl;

import com.nocountry.backend.model.Student;
import com.nocountry.backend.repository.StudentRepository;
import com.nocountry.backend.service.StudentService;

import lombok.RequiredArgsConstructor;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class StudentServiceImpl implements StudentService {

    private final StudentRepository repository;

    @Override
    public List<Student> getAll() {
        return repository.findAll();
    }

    @Override
    public void delete(int id) {
        repository.deleteById(id);
    }

    @Override
    public Optional<Student> getById(int id) {
        return repository.findById(id);
    }

    @Override
    public Student create(Student nuevo) {
        return repository.save(nuevo);
    }

    @Override
    public Student update(Student newStudent, Integer id) {
        return repository.findById(id)
                .map(Student -> {
                    Student.setFirstName(newStudent.getLastName());
                    Student.setLastName(newStudent.getLastName());
                    Student.setDni(newStudent.getDni());
                    Student.setBirthdate(newStudent.getBirthdate());
                    Student.setAddress(newStudent.getAddress());
                    Student.setPhone(newStudent.getPhone());
                    Student.setLevel(newStudent.getLevel());
                    return repository.save(newStudent);
                }).get();
    }
}
