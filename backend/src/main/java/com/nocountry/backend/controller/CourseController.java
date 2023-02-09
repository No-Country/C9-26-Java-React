package com.nocountry.backend.controller;

import com.nocountry.backend.dto.CourseDto;
import com.nocountry.backend.service.ICourseService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/v1/courses")
@RequiredArgsConstructor
public class CourseController {

    private final ICourseService service;

    @GetMapping("/")
    public ResponseEntity<List<CourseDto>> getAll() {
        return ResponseEntity.ok(service.getAll());
    }

    @PostMapping("/create")
    public ResponseEntity<CourseDto> create(@RequestBody CourseDto course) {
        return new ResponseEntity<>(service.create(course), HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<CourseDto> update(@RequestBody CourseDto course, @PathVariable Long id) {
        return new ResponseEntity<>(service.update(course, id), HttpStatus.ACCEPTED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> delete(@PathVariable Long id) {
        service.delete(id);
        return new ResponseEntity<>("course deleted", HttpStatus.ACCEPTED);
    }
}
