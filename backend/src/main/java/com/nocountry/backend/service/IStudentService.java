package com.nocountry.backend.service;

import java.util.List;
import com.nocountry.backend.model.Student;

public interface IStudentService {

    public List<Student> getAll();

    public Student getById(Long id);

    public Student update(Student student, Long id);

    public void delete(Long id);
}
