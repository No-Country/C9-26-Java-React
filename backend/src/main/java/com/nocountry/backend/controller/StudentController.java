package com.nocountry.backend.controller;

import com.nocountry.backend.model.Student;
import com.nocountry.backend.service.StudentService;

import lombok.RequiredArgsConstructor;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/students")
@RequiredArgsConstructor
public class StudentController {

    private final StudentService service;

    @GetMapping("/")
    List<Student> getAll() {
        return service.getAll();
    }

    @PutMapping("/{id}")
    Student update(@RequestBody Student nuevo, @PathVariable Integer id) {
        return service.update(nuevo, id);
    }

    @PostMapping("/create")
    Student create(@RequestBody Student nuevo) {
        return service.create(nuevo);
    }

    @DeleteMapping("/{id}")
    void delete(@PathVariable Integer id) {
        service.delete(id);
    }
}
