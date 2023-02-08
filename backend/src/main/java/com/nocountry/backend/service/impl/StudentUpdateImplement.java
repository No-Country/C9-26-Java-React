package com.nocountry.backend.service.impl;

import com.nocountry.backend.model.Student;
import com.nocountry.backend.service.StudentService;

import org.springframework.stereotype.Component;

@Component
public class StudentUpdateImplement {
    private StudentService studentService;

    public StudentUpdateImplement(StudentService studentService) {
        this.studentService = studentService;
    }

    public Student update(Student nuevo, Integer id) {
        return studentService.update(nuevo, id);
    }
}
