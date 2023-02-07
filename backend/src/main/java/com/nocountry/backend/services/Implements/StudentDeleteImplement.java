package com.nocountry.backend.services.Implements;

import com.nocountry.backend.services.StudentService;
import org.springframework.stereotype.Component;

@Component
public class StudentDeleteImplement {
    private StudentService studentService;

    public StudentDeleteImplement(StudentService studentService) {
        this.studentService = studentService;
    }

    public void delete(int id){
        studentService.delete(id);
    }
}
