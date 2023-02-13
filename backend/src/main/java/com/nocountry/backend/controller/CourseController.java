package com.nocountry.backend.controller;

import com.nocountry.backend.dto.CourseDto;
import com.nocountry.backend.service.ICourseService;
import lombok.RequiredArgsConstructor;
import java.util.List;
import java.util.Optional;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api")
@RequiredArgsConstructor
public class CourseController {

    private final ICourseService service;

    @GetMapping("/courses/{id}")
    public ResponseEntity<Optional<CourseDto>> getById(@PathVariable Long id) {
        return new ResponseEntity<>(service.getById(id), HttpStatus.OK);
    }

    @GetMapping("/admin/courses/all")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<List<CourseDto>> getAll() {
        return new ResponseEntity<>(service.getAll(), HttpStatus.OK);
    }

    @PostMapping("/admin/courses/create")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<CourseDto> create(@RequestBody CourseDto course) {
        return new ResponseEntity<>(service.create(course), HttpStatus.CREATED);
    }

    @PutMapping("/admin/courses/update/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<CourseDto> update(@RequestBody CourseDto course, @PathVariable Long id) {
        return new ResponseEntity<>(service.update(course, id), HttpStatus.ACCEPTED);
    }

    @DeleteMapping("/admin/courses/delete/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<String> delete(@PathVariable Long id) {
        service.delete(id);
        return new ResponseEntity<>("course deleted", HttpStatus.ACCEPTED);
    }
}
