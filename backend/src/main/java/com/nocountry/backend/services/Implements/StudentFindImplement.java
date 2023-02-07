package com.nocountry.backend.services.Implements;

import com.nocountry.backend.entities.Student;
import com.nocountry.backend.services.StudentService;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;

@Component
public class StudentFindImplement {
    private StudentService studentService;

    public StudentFindImplement(StudentService studentService) {
        this.studentService = studentService;
    }

    public List<Student> getAll(){
        return studentService.getAll();
    }

    public Optional<Student> findById(int id){
        return studentService.getForId(id);
    }

}
