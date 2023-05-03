package com.nocountry.backend.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nocountry.backend.dto.CourseDetailsDto;
import com.nocountry.backend.service.ICourseService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("api/courses")
@PreAuthorize("hasRole('ADMIN')")
@RequiredArgsConstructor
public class CourseController {

    private final ICourseService courseService;

    @GetMapping("/all")
    public ResponseEntity<List<CourseDetailsDto>> getAllCourses() {
        return new ResponseEntity<>(courseService.getAllCourses(), HttpStatus.OK);
    }

    @GetMapping("/{courseId}")
    public ResponseEntity<CourseDetailsDto> getCourseById(@PathVariable Long courseId) {
        return new ResponseEntity<>(courseService.getCourseById(courseId), HttpStatus.OK);
    }

    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping("/create")
    public ResponseEntity<CourseDetailsDto> createCourse(@RequestBody CourseDetailsDto courseDto) {
        return new ResponseEntity<>(courseService.createCourse(courseDto), HttpStatus.CREATED);
    }

    @PatchMapping("/{courseId}/update")
    public ResponseEntity<CourseDetailsDto> updateCourse(@PathVariable Long courseId,
            @RequestBody CourseDetailsDto courseDto) {
        return new ResponseEntity<>(courseService.updateCourse(courseId, courseDto), HttpStatus.ACCEPTED);
    }

    @PatchMapping("/{courseId}/add/students/{studentId}")
    public ResponseEntity<String> addStudentToCourse(@PathVariable Long courseId, @PathVariable Long studentId) {
        courseService.addStudentToCourse(courseId, studentId);
        return new ResponseEntity<>("Student successfully added to course", HttpStatus.OK);
    }

    @PatchMapping("/{courseId}/add/teachers/{teacherId}")
    public ResponseEntity<String> addTeacherToCourse(@PathVariable Long courseId, @PathVariable Long teacherId) {
        courseService.addTeacherToCourse(courseId, teacherId);
        return new ResponseEntity<>("Teacher successfully added to course", HttpStatus.OK);
    }

    @DeleteMapping("/{courseId}/delete")
    public ResponseEntity<String> deleteCourse(@PathVariable Long courseId) {
        courseService.deleteCourse(courseId);
        return new ResponseEntity<>("Course successfully deleted", HttpStatus.OK);
    }
}
