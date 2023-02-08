package com.nocountry.backend.service.impl;

import org.springframework.stereotype.Component;

import com.nocountry.backend.service.StudentService;

@Component
public class StudentDeleteImplement {
    private StudentService studentService;

    public StudentDeleteImplement(StudentService studentService) {
        this.studentService = studentService;
    }

    public void delete(int id) {
        studentService.delete(id);
    }
}
