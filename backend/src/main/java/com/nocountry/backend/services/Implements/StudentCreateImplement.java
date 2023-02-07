package com.nocountry.backend.services.Implements;

import com.nocountry.backend.entities.Student;
import com.nocountry.backend.services.StudentService;
import org.springframework.stereotype.Component;

@Component
public class StudentCreateImplement {
    private StudentService studentService;

    public StudentCreateImplement(StudentService studentService) {
        this.studentService = studentService;
    }

    public Student create(Student nuevo){
        return studentService.create(nuevo);
    }

}
