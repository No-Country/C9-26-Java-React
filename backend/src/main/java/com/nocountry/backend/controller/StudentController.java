package com.nocountry.backend.controller;

import com.nocountry.backend.dto.StudentDto;
import com.nocountry.backend.service.IStudentService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/v1/students")
@RequiredArgsConstructor
public class StudentController {

    private final IStudentService service;

    @GetMapping("/")
    public ResponseEntity<List<StudentDto>> getAll() {
        return new ResponseEntity<>(service.getAll(), HttpStatus.ACCEPTED);
    }

    @PostMapping("/create")
    public ResponseEntity<StudentDto> create(@RequestBody StudentDto student) {
        return new ResponseEntity<>(service.create(student), HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<StudentDto> update(@RequestBody StudentDto student, @PathVariable Long id) {
        return new ResponseEntity<>(service.update(student, id), HttpStatus.ACCEPTED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> delete(@PathVariable Long id) {
        service.delete(id);
        return new ResponseEntity<>("student deleted", HttpStatus.ACCEPTED);
    }
}
