package com.nocountry.backend.service.impl;

import com.nocountry.backend.model.Student;
import com.nocountry.backend.service.StudentService;

import org.springframework.stereotype.Component;

@Component
public class StudentCreateImplement {
    private StudentService studentService;

    public StudentCreateImplement(StudentService studentService) {
        this.studentService = studentService;
    }

    public Student create(Student nuevo) {
        return studentService.create(nuevo);
    }

}
