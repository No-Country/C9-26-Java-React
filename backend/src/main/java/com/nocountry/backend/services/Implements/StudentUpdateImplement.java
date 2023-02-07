package com.nocountry.backend.services.Implements;

import com.nocountry.backend.entities.Student;
import com.nocountry.backend.services.StudentService;
import org.springframework.stereotype.Component;

@Component
public class StudentUpdateImplement {
    private StudentService studentService;

    public StudentUpdateImplement(StudentService studentService) {
        this.studentService = studentService;
    }

    public Student update(Student nuevo, Integer id){
        return studentService.update(nuevo,id);
    }
}
