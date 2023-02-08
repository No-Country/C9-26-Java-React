package com.nocountry.backend.controller;

import com.nocountry.backend.model.Student;
import com.nocountry.backend.service.impl.StudentCreateImplement;
import com.nocountry.backend.service.impl.StudentDeleteImplement;
import com.nocountry.backend.service.impl.StudentFindImplement;
import com.nocountry.backend.service.impl.StudentUpdateImplement;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/students")
public class StudentController {
    private StudentCreateImplement studentCreateImplement;
    private StudentFindImplement studentFindImplement;
    private StudentDeleteImplement studentDeleteImplement;
    private StudentUpdateImplement studentUpdateImplement;

    public StudentController(StudentCreateImplement studentCreateImplement, StudentFindImplement studentFindImplement,
            StudentDeleteImplement studentDeleteImplement, StudentUpdateImplement studentUpdateImplement) {
        this.studentCreateImplement = studentCreateImplement;
        this.studentFindImplement = studentFindImplement;
        this.studentDeleteImplement = studentDeleteImplement;
        this.studentUpdateImplement = studentUpdateImplement;
    }

    @GetMapping("/")
    List<Student> getAll() {
        return studentFindImplement.getAll();
    }

    @PutMapping("/{id}")
    Student update(@RequestBody Student nuevo, @PathVariable Integer id) {
        return studentUpdateImplement.update(nuevo, id);
    }

    @PostMapping("/create")
    Student create(@RequestBody Student nuevo) {
        return studentCreateImplement.create(nuevo);
    }

    @DeleteMapping("/{id}")
    void delete(@PathVariable Integer id) {
        studentDeleteImplement.delete(id);
    }
}
