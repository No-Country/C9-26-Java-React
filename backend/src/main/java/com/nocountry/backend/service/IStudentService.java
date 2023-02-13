package com.nocountry.backend.service;

import java.util.List;
import com.nocountry.backend.model.Student;

public interface IStudentService {

    public Student getById(Long id);

    public List<Student> getAll();

    public Student update(Student student, Long id);

    public void delete(Long id);
}
