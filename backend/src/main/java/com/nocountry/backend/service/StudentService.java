package com.nocountry.backend.service;

import java.util.List;
import java.util.Optional;

import com.nocountry.backend.model.Student;

public interface StudentService {

    public List<Student> getAll();

    public void delete(int id);

    public Optional<Student> getById(int id);

    public Student create(Student nuevo);

    public Student update(Student newStudent, Integer id);
}
