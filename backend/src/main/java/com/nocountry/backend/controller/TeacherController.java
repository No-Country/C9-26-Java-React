package com.nocountry.backend.controller;

import com.nocountry.backend.dto.TeacherDto;
import com.nocountry.backend.service.ITeacherService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/teachers")
@RequiredArgsConstructor
public class TeacherController {
    private final ITeacherService service;

    @GetMapping("/")
    public ResponseEntity<List<TeacherDto>> getAll() {
        return new ResponseEntity<>(service.getAll(), HttpStatus.ACCEPTED);
    }

    @PostMapping("/create")
    public ResponseEntity<TeacherDto> create(@RequestBody TeacherDto teacher) {
        return new ResponseEntity<>(service.create(teacher), HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<TeacherDto> update(@RequestBody TeacherDto teacher, @PathVariable Long id) {
        return new ResponseEntity<>(service.update(teacher, id), HttpStatus.ACCEPTED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> delete(@PathVariable Long id) {
        service.delete(id);
        return new ResponseEntity<>("teacher deleted", HttpStatus.ACCEPTED);
    }
}
