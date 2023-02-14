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
import com.nocountry.backend.service.ICourseService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class CourseController {

    private final ICourseService service;

    @GetMapping("/courses/{courseId}")
    public ResponseEntity<Optional<CourseDto>> getCourse(@PathVariable Long courseId) {
        Optional<CourseDto> courseDto = service.getCourse(courseId);
        if (courseDto.isPresent()) {
            return new ResponseEntity<>(courseDto, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
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

    @PutMapping("/admin/courses/update/{courseId}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<CourseDto> updateCourse(@RequestBody CourseDto courseDto, @PathVariable Long courseId) {
        return new ResponseEntity<>(service.updateCourse(courseDto, courseId), HttpStatus.ACCEPTED);
    }

    @DeleteMapping("/admin/courses/delete/{courseId}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<String> deleteCourse(@PathVariable Long courseId) {
        if (service.getCourse(courseId).isPresent()) {
            service.deleteCourse(courseId);
            return new ResponseEntity<>("Course successfully deleted", HttpStatus.ACCEPTED);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("/admin/courses/{courseId}/students/add/{studentId}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<String> addStudentToCourse(@PathVariable Long courseId, @PathVariable Long studentId) {
        service.addStudentToCourse(courseId, studentId);
        return new ResponseEntity<>("Student successfully added to course", HttpStatus.OK);
    }

    @PutMapping("/admin/courses/{courseId}/teachers/add/{teacherId}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<String> setTeacherToCourse(@PathVariable Long courseId, @PathVariable Long teacherId) {
        service.setTeacherToCourse(courseId, teacherId);
        return new ResponseEntity<>("Teacher successfully added to course", HttpStatus.OK);
    }
}
