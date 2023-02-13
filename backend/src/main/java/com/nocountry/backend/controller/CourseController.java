package com.nocountry.backend.controller;

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

import com.nocountry.backend.dto.CourseDto;
import com.nocountry.backend.dto.StudentDto;
import com.nocountry.backend.service.ICourseService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("api/v1")
@RequiredArgsConstructor
public class CourseController {

    private final ICourseService service;

    @GetMapping("/courses/{id}")
    public ResponseEntity<Optional<CourseDto>> getCourseById(@PathVariable Long courseId) {
        return new ResponseEntity<>(service.getCourseById(courseId), HttpStatus.OK);
    }

    @GetMapping("/admin/courses/all")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<List<CourseDto>> getAllCourses() {
        return new ResponseEntity<>(service.getAllCourses(), HttpStatus.OK);
    }

    @PostMapping("/admin/courses/create")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<CourseDto> createCourse(@RequestBody CourseDto courseDto) {
        return new ResponseEntity<>(service.createCourse(courseDto), HttpStatus.CREATED);
    }

    @PutMapping("/admin/courses/update/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<CourseDto> updateCourse(@RequestBody CourseDto courseDto, @PathVariable Long courseId) {
        return new ResponseEntity<>(service.updateCourse(courseDto, courseId), HttpStatus.ACCEPTED);
    }

    @DeleteMapping("/admin/courses/delete/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<String> deleteCourse(@PathVariable Long courseId) {
        service.deleteCourse(courseId);
        return new ResponseEntity<>("Course successfully deleted", HttpStatus.ACCEPTED);
    }

    @GetMapping("/admin/courses/{id}/students/all")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<List<StudentDto>> getStudentsByCourseId(@PathVariable Long courseId) {
        return new ResponseEntity<>(service.getStudentsByCourseId(courseId), HttpStatus.OK);

    }

    @PostMapping("/admin/courses/{id}/students/add")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<String> addStudentToCourse(@PathVariable Long courseId, @RequestBody StudentDto student) {
        service.addStudentToCourse(courseId, student);
        return new ResponseEntity<>("Student successfully added to course", HttpStatus.CREATED);
    }
}
